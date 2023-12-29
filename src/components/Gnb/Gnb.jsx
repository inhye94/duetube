import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Logo from "./Logo";
import { RiMore2Fill } from "react-icons/ri";
import IconButton from "../IconButton";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { debounce } from "lodash";

export default function Gnb() {
  const [_isMobile, setMobile] = useState(checkMobile());
  const [_searchToggle, setSearchToggle] = useState(!checkMobile());

  const handleResize = debounce(() => {
    setMobile(window.innerWidth < 768 ? true : false);
  }, 500);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setSearchToggle(_isMobile ? false : true);
  }, [_isMobile]);

  return (
    <header className="w-full h-[64px] flex flex-nowrap gap-x-[8px] md:justify-between items-center">
      <div className="left-box w-[160px] mr-auto md:mr-0">
        <Logo />
      </div>

      <div className="center-box flex flex-nowrap items-center">
        {_isMobile && (
          <IconButton text="검색" callback={() => setSearchToggle(true)}>
            <IoSearch aria-label="검색" />
          </IconButton>
        )}

        <div
          className={`flex items-center fixed left-0 w-full px-[8px] ${
            _searchToggle ? "translate-y-[0]" : "translate-y-[-64px]"
          }  transition-transform duration-300 bg-white md:static md:min-w-[480px] md:px-0 md:bg-transparent`}
        >
          {_isMobile && (
            <IconButton
              text="검색창 닫기"
              extraStyle={"mr-[4px]"}
              callback={() => setSearchToggle(false)}
            >
              <IoMdClose aria-label="검색창 닫기" />
            </IconButton>
          )}

          <SearchForm blurEvnet={() => _isMobile && setSearchToggle(false)} />
        </div>
      </div>

      <div className="right-box flex justify-end gap-x-[8px] md:w-[160px]">
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

const checkMobile = () => {
  return window.innerWidth < 768 ? true : false;
};
