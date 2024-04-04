import React from "react";
import { formatDate } from "../../util/date";
import Tag from "../../modules/Tag";

export default function VideoDescription({ detail }) {
  const { description, tags, publishedAt } = detail.snippet;
  const { viewCount } = detail.statistics;

  const _stat = [
    { text: "게시일", value: formatDate(publishedAt) },
    { text: "조회수", value: (+viewCount).toLocaleString() },
  ];

  return (
    <>
      <dl className="flex items-center gap-x-[6px] mb-[32px] text-[14px] font-semibold">
        {_stat &&
          _stat.map(({ text, value }, i) => (
            <div className="flex items-center gap-x-[6px]" key={i}>
              <dt>{text}</dt>
              <dd>{value}</dd>
            </div>
          ))}
      </dl>

      <p className="text-[13px] whitespace-pre-line mb-[24px]">{description}</p>

      <div className="flex flex-wrap items-center gap-x-[4px] gap-y-[8px]">
        {tags &&
          tags.map((tag, i) => (
            <Tag key={i} colorType="white">
              #{tag}
            </Tag>
          ))}
      </div>
    </>
  );
}
