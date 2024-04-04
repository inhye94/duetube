import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar({ blurEvnet }) {
  const _prevText = useRef(null);
  const $input = useRef(null);
  const { keyword } = useParams();
  const [_text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // NOTE: 빈 값인 경우
    if (_text.trim() === "") return;

    // NOTE: 똑같은 검색어를 입력한 경우
    if (_prevText.current === _text) return;

    _prevText.current = _text;
    navigate(`/search/${_text.trim()}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-nowrap items-center w-full h-[40px] *:h-full *: *:font-medium *:dark:text-slate-100 *:transition-colors *:duration-300"
    >
      <input
        type="text"
        ref={$input}
        value={_text}
        onChange={() => setText($input.current.value)}
        onBlur={() => blurEvnet()}
        className="grow w-[50px] px-[16px] rounded-l-md text-[16px] text-purple-600 bg-slate-100 caret-purple-600 placeholder:text-slate-400 dark:bg-slate-600"
        placeholder="검색"
        autoComplete="off"
      />
      <button
        type="submit"
        className="shrink-0 px-8 rounded-r-md text-[24px] bg-slate-200 hover:bg-slate-300 dark:bg-slate-500 dark:hover:bg-slate-400"
        title="검색"
      >
        <IoSearch aria-label="검색" />
      </button>
    </form>
  );
}
