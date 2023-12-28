import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className=""
        placeholder="검색"
        autoComplete="off"
        onChange={handleText}
        value={_text}
      />

      <button type="submit">검색</button>
    </form>
  );
}
