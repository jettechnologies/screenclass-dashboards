"use client";

import { useRef, useEffect } from "react";
import { VideoJS } from "./video";
import type Player from "video.js/dist/types/player";
import { useStudentProfile } from "@/hook/swr";
import { Toaster, toast } from "sonner";
import { MarkCourseCompleted } from "@/mutation";

interface VideoPlayerClientProps {
  videoUrl: string;
  subtopicId: string;
}

export default function VideoPlayerClient({
  videoUrl,
  subtopicId,
}: VideoPlayerClientProps) {
  const playerRef = useRef<Player | null>(null);
  const { data: studentProfile, isLoading } = useStudentProfile();

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoUrl,
        type: "application/x-mpegURL",
      },
    ],
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  };

  const handleCourseCompletion = async (subtopicId: string) => {
    // Prevent execution while loading or if no data
    if (isLoading || !studentProfile?._id) {
      console.error(
        isLoading
          ? "Profile data still loading..."
          : "No student profile ID available",
      );
      return;
    }

    try {
      const response = await MarkCourseCompleted({
        userId: studentProfile._id,
        subtopicId: subtopicId,
      });

      if (!response?.success) {
        toast.error(response?.message || "Failed to mark course as completed");
        return;
      }

      toast.success(response?.message || "Course marked as completed");
    } catch (error) {
      console.error("Error marking course as completed:", error);
      toast.error("An error occurred while marking course as completed");
    }
  };

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    player.on("ended", function () {
      setTimeout(() => {
        if (subtopicId) {
          handleCourseCompletion(subtopicId);
        } else {
          console.error("subtopicId is undefined");
        }
      }, 600);
      toast.success("Video completed! Please take the quiz for this video");
    });
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      const player = playerRef.current;
      if (player) {
        console.log("player will dispose");
        player.dispose();
      }
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="video-container">
        <VideoJS
          options={videoJsOptions}
          onReady={handlePlayerReady}
          className="aspect-video w-full overflow-hidden rounded shadow-lg"
        />
      </div>
    </>
  );
}
