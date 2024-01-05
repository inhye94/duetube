import React from "react";
import { Link } from "react-router-dom";
import { IoHeart, IoRocketSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";
import { formatAgo } from "../../util/date";

export default function VideoCard({ video }) {
  const { title, channelTitle, publishedAt, thumbnails, channelId } =
    video.snippet;

  return (
    <article className="group w-full h-full px-[8px] py-[16px] rounded-xl">
      <Link
        className="flex flex-col-reverse h-full"
        to={`/video/${video.id}`}
        title={title}
        state={{ channelId }}
      >
        <div className="flex flex-col basis-full mt-[12px]">
          <h3 className="mb-[4px] text-[16px] font-bold line-clamp-2">
            {title}
          </h3>
          <strong className="mb-[12px] text-[14px] font-normal">
            {channelTitle}
          </strong>
          <p className="mt-auto text-[12px]">{formatAgo(publishedAt, "ko")}</p>

          {video.statistics && (
            <dl className="flex items-center gap-x-[6px] mt-[12px] text-[12px] opacity-70">
              <dt>
                <IoHeart aria-label="좋아요" />
              </dt>
              <dd>{setStatsFormat(video.statistics.likeCount)}</dd>
              <dt>
                <IoRocketSharp aria-label="조회수" />
              </dt>
              <dd>{setStatsFormat(video.statistics.viewCount)}</dd>
              <dt>
                <FaCommentDots aria-label="댓글수" />
              </dt>
              <dd>{setStatsFormat(video.statistics.commentCount)}</dd>
            </dl>
          )}
        </div>

        <div className="shrink-0 rounded-xl overflow-hidden group-hover:translate-x-[8px] group-hover:-translate-y-[8px] group-hover:border-solid group-hover:border-l-8 group-hover:border-b-8  border-purple-600 transition-all duration-300">
          <img
            className="aspect-video object-cover"
            src={thumbnails.medium.url}
            alt={`${title} 영상 썸네일`}
            loading="lazy"
          />
        </div>
      </Link>
    </article>
  );
}

const setStatsFormat = (value) => {
  if (!value) return 0;

  if (value.length < 3) {
    return value;
  } else if (value.length < 7) {
    return `${(value / 1000).toFixed(1)}천`;
  } else if (value.length < 11) {
    return `${(value / 1000000).toFixed(1)}만`;
  } else if (value.length < 15) {
    return `${(value / 1000000).toFixed(1)}억`;
  }
};
