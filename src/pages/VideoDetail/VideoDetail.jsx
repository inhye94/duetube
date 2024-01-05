import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

import Video from "../../components/VideoDetail/Video";
import Channel from "../../components/VideoDetail/Channel";

export default function VideoDetail() {
  const { youtube } = useYoutubeApi();
  const {
    state: { video },
  } = useLocation();

  const {
    isLoading,
    error,
    data: channel,
  } = useQuery({
    queryKey: ["channel", video],
    queryFn: async () => youtube.channel(video.snippet.channelId),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="md:flex">
      <div className="w-full md:w-3/4 md:mr-[24px]">
        {isLoading && <p className="loading">Loading!!!</p>}
        {error && <p>에러 났서요!</p>}
        {channel && <Video detail={video} channel={channel} />}
      </div>

      <div className="w-full md:w-1/4">
        {isLoading && <p className="loading">Loading!!!</p>}
        {error && <p>에러 났서요!</p>}
        {channel && <Channel channel={channel} />}
      </div>
    </div>
  );
}
