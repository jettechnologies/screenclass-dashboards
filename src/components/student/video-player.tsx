"use client";

import React, { useRef } from "react";
import VideoJS from "./video";
import type { OnPlayerReady } from "@/utils/validators";
import Player from "video.js/dist/types/player";
// import { MarkCourseCompleted } from "@/mutation";
// import { useStudentProfile } from "@/hook/swr";
import { Toaster } from "sonner";

export const VideoPlayer = () => {
  const playerRef = useRef<Player | null>(null);
  // const { data: studentProfile, isLoading } = useStudentProfile();

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "https://storage.googleapis.com/scclass/videos/AnimePahe_Ore_dake_Level_Up_na_Ken_-_23_720p_SubsPlease/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
    html5: {
      hls: {
        overrideNative: true,
        withCredentials: false,
      },
    },
  };

  // const handleCourseCompletion = async (subtopicId: string) => {
  //   // Prevent execution while loading or if no data
  //   if (isLoading || !studentProfile?._id) {
  //     console.error(
  //       isLoading
  //         ? "Profile data still loading..."
  //         : "No student profile ID available",
  //     );
  //     return;
  //   }

  //   try {
  //     const response = await MarkCourseCompleted({
  //       userId: studentProfile._id,
  //       subtopicId: subtopicId,
  //     });

  //     if (!response?.success) {
  //       toast.error(response?.message);
  //     }

  //     toast.success(response?.message);
  //   } catch (error) {
  //     console.error("Error marking course as completed:", error);
  //   }
  // };

  const handlePlayerReady: OnPlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("Player is waiting...");
    });

    player.on("dispose", () => {
      console.log("Player will be disposed...");
    });

    player.on("ended", function () {
      // setTimeout(() => {
      //   handleCourseCompletion(subtopicId);
      // }, 600);
      // toast.success("Video completed!, please do take the quiz for this video");
      // would look at this
      // toast.success("Video completed! Please take the quiz for this lesson.");
      // setTimeout(() => {
      //   handleCourseCompletion(subtopicId).catch((error) => {
      //     console.error("Failed to mark course as completed:", error);
      //     toast.error("Failed to record completion. Please try again.");
      //   });
      // }, 600);
    });
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
        <div className="w-full p-0 lg:w-full">
          <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
            <div className="h-full w-full">
              <section className="mt-24 w-full px-4 sm:mt-9 sm:px-7 sm:py-2">
                <h1 className="text-xl font-bold text-[#082038]">
                  Watch Video
                </h1>
              </section>
              <section className="mt-5 flex w-full flex-col items-center px-4 sm:px-7 md:flex-col md:items-center lg:flex-row lg:items-start">
                <div className="relative w-full overflow-hidden rounded-lg border-2 border-black md:w-full lg:w-[700px]">
                  <div className="video-container w-full">
                    <VideoJS
                      options={videoJsOptions}
                      onReady={handlePlayerReady}
                    />
                    {/* Play button overlay can be added for thumbnail view */}
                    {/* <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 border-2 border-white">
                    <div className="flex items-center justify-center rounded-full bg-blue-400 p-4">
                      <LuPlay className="h-8 w-8 text-white" />
                    </div>
                  </div> */}
                  </div>
                </div>
                <div className="mt-4 flex w-full flex-row justify-between sm:mt-0 md:mt-4 md:flex-row md:justify-between lg:ml-10 lg:flex-col lg:justify-normal lg:space-y-6">
                  <button className="sm:text-md w-28 rounded-md bg-[#4097D7] px-4 py-2 text-sm text-white sm:w-40">
                    Take Quiz
                  </button>
                </div>
              </section>
              <section className="mt-4 w-full px-4 text-center sm:px-7 md:text-center lg:text-left">
                <h2 className="font-semibold uppercase tracking-wide">
                  INTRODUCTION TO COMMON FRACTIONS
                </h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
