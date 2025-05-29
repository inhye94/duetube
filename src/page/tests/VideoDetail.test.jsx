import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";
import { withAllContexts, withRouter } from "../../tests/utils";
import { mockChannel, mockDetail } from "../../tests/videos";
import VideoDetail from "../VideoDetail";

// mocking
const mockVideoViewer = jest.fn();
jest.mock("../../component/VideoDetail/VideoViewer", () => {
  return ({ videoId }) => {
    mockVideoViewer(videoId);
    return <p data-testid="video-viewer" />;
  };
});

const mockVideoSummary = jest.fn();
jest.mock("../../component/VideoDetail/VideoSummary", () => {
  return ({ detail, channelThumb }) => {
    mockVideoSummary({ detail, channelThumb });
    return <div data-testid="video-summary" />;
  };
});

const mockVideoDescription = jest.fn();
jest.mock("../../component/VideoDetail/VideoDescription", () => {
  return ({ detail }) => {
    mockVideoDescription(detail);
    return <p data-testid="video-description" />;
  };
});

const mockChannelFunc = jest.fn();
jest.mock("../../component/Channel", () => {
  return ({ channel }) => {
    mockChannelFunc(channel);
    return <p data-testid="channel-detail" />;
  };
});

// test
describe("VideoDetail 컴포넌트", () => {
  // API instance를 모킹
  const fakeYoutube = { detailAndChannel: jest.fn() };
  const videoId = "12345";

  afterEach(() => {
    fakeYoutube.detailAndChannel.mockReset();
  });

  it("정상적으로 렌더링합니다", async () => {
    fakeYoutube.detailAndChannel.mockImplementation(() => ({
      detail: mockDetail,
      channel: mockChannel,
    }));
    const { asFragment } = renderVideoDetail(videoId);

    await waitForElementToBeRemoved(screen.queryByTestId("detail-loading"));

    expect(asFragment()).toMatchSnapshot();
  });

  it("정상적으로 데이터를 렌더링합니다", async () => {
    fakeYoutube.detailAndChannel.mockResolvedValue({
      detail: mockDetail,
      channel: mockChannel,
    });
    renderVideoDetail(videoId);

    await waitFor(() => screen.getByTestId("detail-container"));

    expect(fakeYoutube.detailAndChannel).toHaveBeenCalledWith(videoId);
    expect(screen.queryByTestId("detail-loading")).toBeNull();
    expect(screen.queryByTestId("detail-error")).toBeNull();
    expect(mockVideoViewer).toHaveBeenCalledWith(videoId);
    expect(mockVideoSummary).toHaveBeenCalledWith({
      detail: mockDetail,
      channelThumb: mockChannel.snippet.thumbnails,
    });
    expect(mockVideoDescription).toHaveBeenCalledWith(mockDetail);
    expect(mockChannelFunc).toHaveBeenCalledWith(mockChannel);
  });

  it("로딩 상태를 보여줍니다", () => {
    fakeYoutube.detailAndChannel.mockImplementation(() => mockDetail);
    renderVideoDetail(videoId);

    expect(screen.queryByTestId("detail-loading")).toBeInTheDocument();
  });

  it("에러 메시지를 보여줍니다", async () => {
    fakeYoutube.detailAndChannel.mockRejectedValue(new Error("에러 났서요!"));
    renderVideoDetail(videoId);

    await screen.findByTestId("detail-error");
    expect(screen.getByTestId("detail-error")).toHaveTextContent(
      "에러 났서요!"
    );
  });

  function renderVideoDetail(videoId) {
    return render(
      withAllContexts(
        withRouter(
          <Route path="/watch/:videoId" element={<VideoDetail />} />,
          `/watch/${videoId}`
        ),
        fakeYoutube
      )
    );
  }
});
