import React from "react";
import { Link } from "react-router-dom";
import { IoHeart, IoRocketSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";

export default function VideoCard({ video }) {
  return (
    <article className="group w-full h-full px-[8px] py-[16px] rounded-xl">
      <Link
        className="flex flex-col-reverse h-full"
        to={`/video/${video.id}`}
        title={video.snippet.title}
      >
        <div className="flex flex-col basis-full mt-[12px]">
          <h3 className="mb-[4px] text-[16px] font-bold line-clamp-2">
            {video.snippet.title}
          </h3>
          <strong className="mb-[12px] text-[14px] font-normal">
            {video.snippet.channelTitle}
          </strong>
          <p className="mt-auto text-[12px]">
            {calcDate(video.snippet.publishedAt)} 전
          </p>

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
            src={video.snippet.thumbnails.medium.url}
            alt={`${video.snippet.title} 영상 썸네일`}
            loading="lazy"
          />
        </div>
      </Link>
    </article>
  );
}

const calcDate = (date) => {
  const _pubDate = new Date(date);
  const _today = new Date();

  const _diff = _today - _pubDate;

  const _sec = Math.floor(_diff / 1000);
  const _min = Math.floor(_sec / 60);
  const _hour = Math.floor(_min / 60);
  const _day = Math.floor(_hour / 24);
  const _month = Math.floor(_day / 30);
  const _year = Math.floor(_month / 12);

  switch (true) {
    case _sec < 60:
      return `${_sec}초`;
    case _min < 60:
      return `${_min}분`;
    case _hour < 24:
      return `${_hour}시간`;
    case _day < 30:
      return `${_day}일`;
    case _month < 12:
      return `${_month}달`;
    default:
      return `${_year}년`;
  }
};

const setStatsFormat = (value) => {
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
