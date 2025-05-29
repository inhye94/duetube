import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../component/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => youtube.search(keyword),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 1,
  });

  return (
    <section>
      <header className="inline-block my-[16px] px-[16px] py-[4px] rounded-md bg-gray-200 dark:bg-gray-700">
        <h2 className="text-[14px] font-bold">
          {keyword ? `${keyword} 검색결과` : "요즘 인기있는 비디오🔥"}
        </h2>
      </header>

      <ul className="flex flex-wrap items-stretch w-full">
        {isLoading && (
          <p className="loading" data-testid="videos-loading">
            Loading!!!
          </p>
        )}
        {error && (
          <p className="loading" data-testid="videos-error">
            에러났서요!!!
          </p>
        )}
        {videos &&
          videos.map((video) => (
            <li key={video.id} className="basis-full sm:basis-1/2 md:basis-1/3">
              <VideoCard video={video} />
            </li>
          ))}
      </ul>
    </section>
  );
}
