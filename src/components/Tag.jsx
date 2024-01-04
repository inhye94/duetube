import React from "react";

export default function Tag({ children, colorType }) {
  let _light = "bg-slate-100";
  let _dark = "bg-slate-700";

  switch (colorType) {
    case "dark-grey":
      _light = "bg-slate-300";
      _dark = "bg-slate-700";
      break;
    case "white":
      _light = "bg-white";
      _dark = "bg-slate-800";
      break;
    case "transparent":
      _light = "bg-transparent";
      _dark = "bg-transparent";
      break;
    default:
      _light = "bg-slate-100";
      _dark = "bg-slate-700";
      break;
  }

  return (
    <span
      className={`px-[12px] py-[4px] rounded-full text-[12px] ${_light} dark:${_dark}`}
    >
      {children}
    </span>
  );
}
