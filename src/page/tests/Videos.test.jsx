import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";
import { withAllContexts, withRouter } from "../../tests/utils";
import { mockVideo, mockVideos } from "../../tests/videos";
import Videos from "../Videos";

describe("Videos", () => {
  // API instance를 모킹
  const fakeYoutube = {
    search: jest.fn(),
  };

  beforeEach(() => {
    fakeYoutube.search.mockImplementation((keyword) => {
      return keyword ? [mockVideo] : mockVideos;
    });
  });

  afterEach(() => fakeYoutube.search.mockClear());

  it("로딩 출력", async () => {
    fakeYoutube.search.mockImplementation(() => {
      return new Promise(() => {});
    });
    renderVideos();

    await screen.findByTestId("videos-loading");
  });

  it("에러 출력", async () => {
    fakeYoutube.search.mockRejectedValue(new Error("에러났서요!!!"));
    renderVideos();

    await screen.findByTestId("videos-error");
  });

  it("검색어가 없을 때, 인기 영상 출력", async () => {
    renderVideos();

    await waitFor(() =>
      expect(screen.getAllByRole("listitem")).toHaveLength(mockVideos.length)
    );
    expect(fakeYoutube.search).toHaveBeenCalledWith(undefined);
    expect(screen.getByText("요즘 인기있는 비디오🔥")).toBeInTheDocument();
  });

  it("검색어가 있을 때, 검색 결과 출력", async () => {
    const keyword = "실리카겔";
    renderVideos(`/search/${keyword}`);

    await waitFor(() =>
      expect(screen.getAllByRole("listitem")).toHaveLength(1)
    );
    expect(fakeYoutube.search).toHaveBeenCalledWith(keyword);
    expect(screen.getByText(`${keyword} 검색결과`)).toBeInTheDocument();
  });

  function renderVideos(url = "/") {
    return render(
      withAllContexts(
        withRouter(
          <>
            <Route path="/" element={<Videos />} />
            <Route path="/search/:keyword" element={<Videos />} />
          </>,
          url
        ),
        fakeYoutube
      )
    );
  }
});
