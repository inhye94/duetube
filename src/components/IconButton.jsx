import React from "react";

export default function IconButton({ text, children, extraStyle, callback }) {
  return (
    <button
      type="button"
      title={text}
      className={`shrink-0 flex justify-center items-center w-8 h-8 text-[20px] rounded-full hover:bg-slate-200 transition-colors ${extraStyle}`}
      onClick={callback}
    >
      {children}
    </button>
  );
}
