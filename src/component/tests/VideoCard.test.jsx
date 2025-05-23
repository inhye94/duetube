import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { formatAgo } from "../../util/date";
import VideoCard from "../VideoCard";

describe("VideoCard", () => {
  const mockVideo = {
    id: "12345",
    snippet: {
      title: "Test Video",
      channelTitle: "Test Channel",
      publishedAt: "2023-10-01T00:00:00Z",
      thumbnails: {
        medium: {
          url: "https://example.com/thumbnail.jpg",
        },
      },
    },
    statistics: {
      likeCount: "1000",
      viewCount: "5000",
      commentCount: "200",
    },
  };

  const { title, channelTitle, publishedAt, thumbnails } = mockVideo.snippet;

  it("renders video items", () => {
    render(
      <MemoryRouter>
        <VideoCard video={mockVideo} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img");
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title + " 영상 썸네일");
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt, "ko"))).toBeInTheDocument();
  });

  it("navigates to detailed video page with video state when clicked", () => {
    // 테스트용 컴포넌트
    function LocationStateDisplay() {
      const location = useLocation();
      // VideoCard의 단위 테스트라 검증하는 컴포넌트를 mocking
      // 기능: VideoCard를 클릭하여 해당 '경로에 접근'하는지 + '정보를 전달'하는지 검증(이 컴포넌트는 정보 전달을 하지 않아서 pathname만 확인, state 전달은 useLocation으로 확인)
      return <pre>{location.pathname}</pre>;
    }

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<VideoCard video={mockVideo} />} />
          <Route
            path={`/watch/${mockVideo.id}`}
            element={<LocationStateDisplay />}
          />
        </Routes>
      </MemoryRouter>
    );

    const card = screen.getByRole("link");
    userEvent.click(card);
    expect(screen.getByText(`/watch/${mockVideo.id}`)).toBeInTheDocument();
  });
});
