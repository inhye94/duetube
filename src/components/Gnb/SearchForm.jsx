import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ blurEvnet }) {
  const $saerch = useRef(null);
  const { keyword } = useParams();
  const [_text, setText] = useState("");
  const navigate = useNavigate();

  const handleText = (e) => setText(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (_text.trim() === "") return;

    $saerch.current.blur();
    navigate("/search/" + _text.trim());
  };

  const handleBlur = () => {
    blurEvnet();
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-nowrap items-center w-full h-[40px] *:h-full *: *:font-medium *:dark:text-slate-100"
    >
      <input
        ref={$saerch}
        type="text"
        className="grow w-[50px] px-[16px] rounded-l-md text-[16px] text-violet-700 bg-slate-100 caret-violet-700 placeholder:text-slate-400 dark:bg-slate-600"
        placeholder="검색"
        autoComplete="off"
        onChange={handleText}
        value={_text}
        onBlur={handleBlur}
      />
      <button
        type="submit"
        className="shrink-0 px-8 rounded-r-md text-[24px] bg-slate-200 hover:bg-slate-300 transition-colors duration-300 dark:bg-slate-500 dark:hover:bg-slate-400"
        title="검색"
      >
        <IoSearch aria-label="검색" />
      </button>
    </form>
  );
}
