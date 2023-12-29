import React from "react";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import { RiMore2Fill } from "react-icons/ri";
import IconButton from "../IconButton";

export default function Gnb() {
  return (
    <header className="w-full h-[64px] flex flex-nowrap gap-x-[8px] justify-between items-center">
      <div className="left-box w-[160px]">
        <Logo />
      </div>

      <div className="center-box ">
        <SearchForm />
      </div>

      <div className="right-box flex justify-end gap-x-[8px] w-[160px]">
        <div className="toggle-box">
          <IconButton text="설정">
            <RiMore2Fill aria-label="설정" />
          </IconButton>

          {/* <ul>
            <li>
              <div>
                <label>
                  다크모드
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="visually-hidden peer"
                  />
                  <div className="toggle-wrapper w-4 h-4 peer-checked:bg-red-400">
                    <span className="toggle-switch"></span>
                  </div>
                </label>
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
}
