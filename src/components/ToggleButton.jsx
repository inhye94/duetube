import React from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

export default function ToggleButton({ text, isChecked, callback }) {
  return (
    <div className={`${_button_basic} ${_button_hover} ${_button_dark}`}>
      <p className="grow text-[16px] font-medium text-slate-500 whitespace-nowrap dark:text-slate-300">
        {text}
      </p>

      <label
        title={text}
        className="shrink-0 relative block w-[64px] h-[28px] border border-solid border-slate-200 rounded-full cursor-pointer"
      >
        <input
          type="checkbox"
          className="visually-hidden peer"
          onChange={callback}
          checked={isChecked ? true : false}
        />
        <ToggleSwitch />
      </label>
    </div>
  );
}

function ToggleSwitch({ children }) {
  return (
    <div className={`${_switch_basic} ${_switch_checked}`}>
      {children || <BsFillRocketTakeoffFill />}
    </div>
  );
}

// ToggleButton 스타일 시작
const _button_basic =
  "flex justify-between gap-x-[4px] items-center w-full py-[6px] px-[8px] rounded-md transition-colors duration-300";

const _button_hover = "hover:bg-slate-100";

const _button_dark = "dark:hover:bg-slate-600";
// ToggleButton 스타일 끝

// ToggleSwitch 스타일 시작
const _switch_basic =
  "absolute top-1/2 left-0 flex justify-center items-center w-[22px] h-[22px] border border-solid border-slate-200 rounded-full translate-x-[36px] -translate-y-1/2 bg-slate-300 text-slate-800 text-[12px] transition-all duration-500";

const _switch_checked =
  "peer-checked:bg-purple-600 peer-checked:translate-x-[3px] peer-checked:text-slate-100 peer-checked:-rotate-[360deg]";

// ToggleSwitch 스타일 끝
