"use client";

import React, { useRef } from "react";
import VideoJS from "./video";
import type { OnPlayerReady } from "@/utils/validators";
import videojs from "video.js";
import Player from "video.js/dist/types/player";

// import { Play } from "lucide-react";
import { LuPlay } from "react-icons/lu";

export const VideoPlayer: React.FC = () => {
  const playerRef = useRef<Player | null>(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "https://storage.googleapis.com/scclass/videos/AnimePahe_Ore_dake_Level_Up_na_Ken_-_23_720p_SubsPlease/index.m3u8",
        type: "application/x-mpegURL", // Correct MIME type for HLS streams
      },
    ],
    html5: {
      hls: {
        overrideNative: true, // Use Video.js HLS playback
        withCredentials: false, // Adjust based on your CORS requirements
      },
    },
  };

  const handlePlayerReady: OnPlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("Player is waiting...");
    });

    player.on("dispose", () => {
      console.log("Player will be disposed...");
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        {/* <div className="text-center">
          <h1 className="mb-2 flex items-center justify-center gap-2 text-3xl font-bold text-white">
            <LuPlay className="h-8 w-8 text-red-500" />
            Custom Video Player
          </h1>
          <p className="text-gray-400">Built with Video.js and React</p>
        </div> */}

        <div className="overflow-hidden rounded-lg shadow-2xl">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </div>
  );
};
