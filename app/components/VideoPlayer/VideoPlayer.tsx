"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videosrc = "https://www.youtube.com/watch?v=Llour2YvsiI";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <ReactPlayer
        height={"100%"}
        width={"100%"}
        url={videosrc}
        playing={true}
        controls={false}
        pip={false}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
