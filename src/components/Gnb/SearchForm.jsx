import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const { keyword } = useParams();
  const [_text, setText] = useState("");
  const navigate = useNavigate();

  const handleText = (e) => setText(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (_text.trim() === "") return;
    navigate("/search/" + _text.trim());
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-nowrap items-center min-w-[480px] h-[40px] *:h-full *: *:font-medium *:dark:text-slate-100"
    >
      {/* <button type="button" id="btn-search">
        <IoSearch aria-label="검색" />
      </button> */}
      <input
        type="text"
        className="grow shrink-0 px-[16px] rounded-l-md text-[16px]caret-violet-700 text-violet-700 bg-slate-100 placeholder:text-slate-400 dark:bg-slate-600"
        placeholder="검색"
        autoComplete="off"
        onChange={handleText}
        value={_text}
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
