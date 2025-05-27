import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import IconButton from "../modules/IconButton";
import SearchForm from "./SearchForm";

export default function SearchBox() {
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
    <>
      {_isMobile && (
        <IconButton text="검색" callback={() => setSearchToggle(true)}>
          <IoSearch aria-label="검색" />
        </IconButton>
      )}

      <div
        className={`flex items-center fixed left-0 z-10 w-full px-[8px] ${
          _searchToggle ? "translate-y-[0]" : "translate-y-[-64px]"
        }  transition-transform duration-300 bg-white md:static md:min-w-[480px] md:px-0 md:bg-transparent dark:bg-slate-800`}
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

        <SearchForm blurEvent={() => _isMobile && setSearchToggle(false)} />
      </div>
    </>
  );
}

const checkMobile = () => {
  return window.innerWidth < 768 ? true : false;
};
