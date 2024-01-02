import React from "react";

export default function VideoCard({ video }) {
  return (
    <article>
      <h3>{video.snippet.title}</h3>
    </article>
  );
}
