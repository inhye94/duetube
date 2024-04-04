import React from "react";
import YouTube from "react-youtube";

export default function VideoViewer({ videoId }) {
  return (
    <YouTube
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: "16px",
        overflow: "hidden",
      }}
      videoId={videoId}
      opts={{
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 0,
        },
      }}
      onEnd={(e) => {
        e.target.stopVideo(0);
      }}
    />
  );
}
