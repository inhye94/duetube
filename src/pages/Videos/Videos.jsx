import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();

  return (
    <>
      <p>{keyword ? `${keyword} 검색결과` : "요즘 인기있는 비디오🔥"}</p>
      <section>비디오 카드 주르륵</section>
    </>
  );
}
