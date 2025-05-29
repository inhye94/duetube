import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Channel from "../component/Channel";
import VideoDescription from "../component/VideoDetail/VideoDescription";
import VideoSummary from "../component/VideoDetail/VideoSummary";
import VideoViewer from "../component/VideoDetail/VideoViewer";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideoDetail() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();

  const { isLoading, error, data } = useQuery({
    queryKey: ["detail", videoId],
    queryFn: async () => await youtube.detailAndChannel(videoId),
  });

  if (isLoading)
    return (
      <p className="loading" data-testid="detail-loading">
        Loading!!!
      </p>
    );
  if (error)
    return (
      <p className="loading" data-testid="detail-error">
        에러 났서요!
      </p>
    );

  return (
    <div className="md:flex">
      <div className="w-full md:w-3/4 md:mr-[24px]">
        {data.detail && (
          <section data-testid="detail-container">
            <header>
              <div className="relative w-full aspect-video object-contain mb-[16px]">
                <VideoViewer videoId={videoId} />
              </div>

              <div className="my-[24px]">
                <VideoSummary
                  detail={data.detail}
                  channelThumb={data.channel.snippet.thumbnails}
                />
              </div>
            </header>

            <div className="p-[16px] mb-[24px] rounded-xl bg-slate-100 dark:bg-slate-600">
              <VideoDescription detail={data.detail} />
            </div>
          </section>
        )}
      </div>

      <div className="w-full md:w-1/4">
        {data.channel && <Channel channel={data.channel} />}
      </div>
    </div>
  );
}
