import classNames from "classnames";
import React from "react";

export default function IconButton({ text, children, extraStyle, callback }) {
  return (
    <button
      type="button"
      title={text}
      className={classNames(
        "shrink-0 flex justify-center items-center w-8 h-8 text-[20px] rounded-full transition-colors",
        "hover:bg-slate-200",
        "dark:hover:bg-slate-600",
        extraStyle
      )}
      onClick={callback}
    >
      {children}
    </button>
  );
}
