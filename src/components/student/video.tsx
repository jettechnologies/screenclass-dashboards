"use client";

import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";

interface VideoJSProps {
  options: unknown;
  onReady?: (player: Player) => void;
}

const VideoJS = ({ options, onReady }: VideoJSProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const player = (playerRef.current = videojs(
        videoRef.current,
        options,
        () => {
          videojs.log("Player is ready");
          onReady?.(player);
        },
      ));

      player.addClass("vjs-custom-theme");
    }
  }, [options, onReady]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className="relative">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered vjs-matrix"
      />
    </div>
  );
};

export default VideoJS;
