import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import Tag from "../Tag";
import { formatDate } from "../../util/date";

export default function Video({ detail, channel }) {
  const { videoId } = useParams();

  const { title, description, publishedAt, channelTitle, tags } =
    detail.snippet;
  const { viewCount } = detail.statistics;

  const { thumbnails } = channel.snippet;

  const _stat = [
    { text: "게시일", value: formatDate(publishedAt) },
    { text: "조회수", value: (+viewCount).toLocaleString() },
  ];

  return (
    <section>
      <header>
        <div className="relative w-full aspect-video object-contain mb-[16px]">
          <YouTube
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              borderRadius: "16px",
              overflow: "hidden",
            }}
            videoId={videoId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 0,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0); // 추천 영상 썸네일 방지 & 영상의 썸네일 노출
            }}
          />
        </div>

        <div className="my-[24px]">
          <h3 className="text-[20px] font-semibold mb-[12px]">{title}</h3>

          <div className="flex items-center gap-x-[14px] mb-[24px]">
            <img
              className="w-[48px] h-[48px] bg-slate-500 rounded-full object-cover border border-solid border-slate-200"
              src={thumbnails.default.url}
              alt={channelTitle}
            />
            <strong className="text-[16px] font-semibold">
              {channelTitle}
            </strong>
          </div>
        </div>
      </header>

      <div className="p-[16px] mb-[24px] rounded-xl bg-slate-100 dark:bg-slate-600">
        <dl className="flex items-center gap-x-[6px] mb-[32px] text-[14px] font-semibold">
          {_stat &&
            _stat.map(({ text, value }, i) => (
              <div className="flex items-center gap-x-[6px]" key={i}>
                <dt>{text}</dt>
                <dd>{value}</dd>
              </div>
            ))}
        </dl>

        <p className="text-[13px] whitespace-pre-line mb-[24px]">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-x-[4px] gap-y-[8px]">
          {tags &&
            tags.map((tag, i) => (
              <Tag key={i} colorType="white">
                #{tag}
              </Tag>
            ))}
        </div>
      </div>
    </section>
  );
}
