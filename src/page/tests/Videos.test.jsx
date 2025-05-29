import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";
import { withAllContexts, withRouter } from "../../tests/utils";
import { mockVideos } from "../../tests/videos";
import Videos from "../Videos";

describe("Videos", () => {
  // API instance를 모킹
  const fakeYoutube = {
    search: jest.fn(),
  };

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

  it("검색 결과 리스트 출력", async () => {
    fakeYoutube.search.mockResolvedValue(mockVideos);
    renderVideos();

    await waitFor(() =>
      expect(screen.getAllByRole("listitem")).toHaveLength(mockVideos.length)
    );
  });

  it('검색어가 있을 때, "키워드 검색결과" 문구 출력', () => {
    const keyword = "실리카겔";
    fakeYoutube.search.mockResolvedValue(mockVideos);
    renderVideos(`/search/${keyword}`);

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
