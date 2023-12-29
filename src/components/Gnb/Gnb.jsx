import React from "react";
import Logo from "./Logo";
import { RiMore2Fill } from "react-icons/ri";
import IconButton from "../IconButton";
import ToggleButton from "../ToggleButton";
import SearchBox from "./SearchBox";

export default function Gnb() {
  return (
    <header className="w-full h-[64px] flex flex-nowrap gap-x-[8px] md:justify-between items-center">
      <div className="left-box w-[160px] mr-auto md:mr-0">
        <Logo />
      </div>

      <div className="center-box flex flex-nowrap items-center">
        <SearchBox />
      </div>

      <div className="right-box flex justify-end gap-x-[8px] md:w-[160px]">
        <div className="toggle-box relative">
          <IconButton text="설정">
            <RiMore2Fill aria-label="설정" />
          </IconButton>

          {/* <div className="fixed z-10 right-0 bottom-0 w-full h-full bg-[#00000030] md:absolute md:-bottom-[16px] md:translate-y-full md:w-[300px] md:h-auto md:bg-transparent">
            <ul className="absolute bottom-0 w-full h-4/5 px-[8px] py-[16px] border border-solid border-slate-200 rounded-t-2xl bg-white shadow-md md:relative md:rounded-md">
              {[0, 0, 0].map((item) => (
                <li>
                  <ToggleButton text="다크모드" />
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
}
