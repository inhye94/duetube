import React, { useState } from "react";
import Logo from "./Logo";
import { RiMore2Fill } from "react-icons/ri";
import IconButton from "../IconButton";
import ToggleButton from "../ToggleButton";
import SearchBox from "./SearchBox";
import { useDarkModeContext } from "../../context/DarkModeContext";

export default function Gnb() {
  const { _darkMode, toggleDarkMode } = useDarkModeContext();
  const [_menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev);
  };

  const handleDarkMode = () => {
    toggleDarkMode();
  };

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
          <IconButton text="설정" callback={handleMenuToggle}>
            <RiMore2Fill aria-label="설정" />
          </IconButton>

          <div
            className={`fixed z-10 right-0 bottom-0 w-full h-full bg-[#00000030] md:absolute md:-bottom-[16px] md:translate-y-full md:w-[300px] md:h-auto md:bg-transparent dark:bg-[#ffffff40] dark:md:bg-transparent ${
              _menuToggle ? "" : " visually-hidden"
            }`}
            id="menu-wrapper"
            onClick={(e) => {
              if (e.target.id !== "menu-wrapper") return;
              setMenuToggle(false);
            }}
          >
            <ul className="absolute bottom-0 w-full min-h-[360px] max-h-4/5 px-[8px] py-[16px] border border-solid border-slate-200 rounded-t-2xl bg-white shadow-md md:relative md:rounded-md md:min-h-[unset] dark:bg-slate-700 dark:border-slate-500">
              <li>
                <ToggleButton
                  text="다크모드"
                  isChecked={_darkMode}
                  callback={handleDarkMode}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
