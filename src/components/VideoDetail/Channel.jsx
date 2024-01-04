import React from "react";
import Tag from "../Tag";
import { formatDate } from "../../util/date";

export default function Channel({ channel }) {
  const { title, description, publishedAt, thumbnails } = channel.snippet;
  const { subscriberCount, videoCount } = channel.statistics;

  const _stat = [
    { text: "가입일", value: formatDate(publishedAt) },
    { text: "구독자 수", value: (+subscriberCount).toLocaleString() },
    { text: "동영상 수", value: (+videoCount).toLocaleString() },
  ];

  return (
    <section className="px-[16px] py-[64px] mt-[64px] rounded-xl bg-slate-100 dark:bg-slate-600 md:py-[32px] md:mt-0">
      <header className="flex flex-col-reverse items-center gap-y-[16px] mb-[32px]">
        <h3 className="text-[24px] font-bold break-keep">{title}</h3>
        <img
          className="w-full max-w-[200px] rounded-full object-cover"
          src={thumbnails.medium.url}
          alt={title}
        />
      </header>

      <div>
        <dl className="mb-[24px] text-[14px] divide-y divide-slate-200 *:flex *:items-center *:gap-x-[4px] *:py-[4px] dark:divide-slate-600 ">
          {_stat.map(({ text, value }, i) => (
            <div key={i}>
              <dt className="min-w-[80px]">{text}</dt>
              <dd className="font-semibold">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mb-[36px] text-[14px] whitespace-pre-line">
          {description}
        </p>

        <div className="flex flex-wrap break-keep items-center gap-x-[4px] gap-y-[8px]">
          {channel.brandingSettings.channel.keywords
            .split(" ")
            .map((keywords, i) => (
              <Tag key={i} colorType="white">
                #{keywords}
              </Tag>
            ))}
        </div>
      </div>
    </section>
  );
}
