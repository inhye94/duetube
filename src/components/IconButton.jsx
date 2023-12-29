import React from "react";

export default function IconButton({ text, children, extraStyle }) {
  return (
    <button
      type="button"
      title={text}
      className={`flex justify-center items-center w-8 h-8 text-[20px] rounded-full hover:bg-slate-200 transition-colors ${extraStyle}`}
    >
      {children}
    </button>
  );
}
