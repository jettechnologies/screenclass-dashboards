"use client";

import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  /*eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  options: any;
  onReady: (player: Player) => void;
  className?: string;
}

export const VideoJS: React.FC<VideoPlayerProps> = ({
  options,
  onReady,
  className,
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current && videoRef.current) {
      // The Video.js player needs to be *inside* the component el for React 18 Strict Mode
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady(player);
      }));
      player.addClass("vjs-custom-theme");
    } else if (playerRef.current) {
      // Update existing player with new options
      const player = playerRef.current;
      player.autoplay(options?.autoplay);
      player.src(options?.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className={className || "relative w-full max-w-4xl"}>
      <div
        ref={videoRef}
        className="video-js vjs-big-play-centered vjs-matrix h-full w-full"
      />
    </div>
  );
};

// export default VideoPlayer;
