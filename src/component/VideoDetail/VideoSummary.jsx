import React from "react";

export default function VideoSummary({ detail, channelThumb }) {
  const { title, channelTitle } = detail.snippet;

  return (
    <>
      <h3 className="text-[20px] font-semibold mb-[12px]">{title}</h3>

      <div className="flex items-center gap-x-[14px] mb-[24px]">
        <img
          className="w-[48px] h-[48px] bg-slate-500 rounded-full object-cover border border-solid border-slate-200"
          src={channelThumb.default.url}
          alt={channelTitle}
        />
        <strong className="text-[16px] font-semibold">{channelTitle}</strong>
      </div>
    </>
  );
}
