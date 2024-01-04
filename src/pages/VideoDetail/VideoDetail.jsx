import React from "react";
import { useQueries } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { useYoutubeApi } from "../../context/YoutubeApiContext";

import Video from "../../components/VideoDetail/Video";
import Channel from "../../components/VideoDetail/Channel";

export default function VideoDetail() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();
  const { state } = useLocation();

  const [detail, channel] = useQueries({
    queries: [
      {
        queryKey: ["detail"],
        queryFn: async () => youtube.detail(videoId),
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["channel"],
        queryFn: async () => youtube.channel(state.channelId),
        refetchOnWindowFocus: false,
      },
    ],
  });

  return (
    <div className="md:flex">
      <div className="w-full md:w-3/4 md:mr-[24px]">
        {detail.isLoading && <p className="loading">Loading!!!</p>}
        {detail.error && <p>에러 났서요!</p>}
        {detail.data && channel.data && (
          <Video detail={detail.data} channel={channel.data} />
        )}
      </div>

      <div className="w-full md:w-1/4">
        {channel.isLoading && <p className="loading">Loading!!!</p>}
        {channel.error && <p>에러 났서요!</p>}
        {channel.data && <Channel channel={channel.data} />}
      </div>
    </div>
  );
}
