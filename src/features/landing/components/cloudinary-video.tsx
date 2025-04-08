"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@mui/joy";
import { useTimer } from "react-timer-hook";

export const CloudinaryVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/dnj2mxcuj/video/upload/v1744023332/screenclass/dyrzps7ujobzjn9fsain.mp4";

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1.5);

  const { restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setIsLoading(false);
      console.log("Loading complete");
    },
    autoStart: true,
  });

  console.log(restart);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative row-start-1 row-end-2 h-[60dvh] w-full">
      {isLoading ? (
        // Loading skeleton overlay
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#1A1A1A]/80">
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ bgcolor: "#eaeaea" }}
          />
        </div>
      ) : null}

      {!isPlaying ? (
        // Thumbnail image shown before video plays
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/video_thumbnail.png"
            alt="video banner"
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={handlePlay}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 p-4 backdrop-blur-sm transition-all hover:bg-white/30"
            aria-label="Play video"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          </button>
        </div>
      ) : null}

      {/* Video element */}
      <video
        className={`absolute inset-0 h-full w-full object-cover ${isPlaying ? "z-20" : "z-0"}`}
        src={videoUrl}
        controls={isPlaying}
        playsInline
        autoPlay={isPlaying}
        // onPlay={() => setIsPlaying(true)}
        // onPause={() => setIsPlaying(false)}
        // onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};
