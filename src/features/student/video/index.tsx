"use client";

import { LinkedVideo } from "@/utils/validators";
import VideoPlayerClient from "@/components/student/video-player";
import { useRouter } from "next/navigation";

interface VideoPlayerProps {
  videoData: LinkedVideo;
  subtopicId: string;
}

export const VideoPlayer = ({ videoData, subtopicId }: VideoPlayerProps) => {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-col bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
      <div className="w-full p-0 lg:w-full">
        <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
          <div className="h-full w-full">
            <section className="mt-24 w-full px-4 sm:mt-9 sm:px-7 sm:py-2">
              <h1 className="text-xl font-bold text-[#082038]">
                {videoData.name}
              </h1>
            </section>
            <section className="mt-5 flex w-full flex-col items-center px-4 sm:px-7 md:flex-col md:items-center lg:flex-row lg:items-start">
              <div className="relative w-full overflow-hidden rounded-lg md:w-full lg:w-[700px]">
                <VideoPlayerClient
                  videoUrl={videoData.videoUrl}
                  subtopicId={subtopicId}
                />
              </div>
              <div className="mt-4 flex w-full flex-row justify-between sm:mt-0 md:mt-4 md:flex-row md:justify-between lg:ml-10 lg:flex-col lg:justify-normal lg:space-y-6">
                <button
                  className={`sm:text-md w-28 rounded-md bg-[#4097D7] px-4 py-2 text-sm text-white sm:w-40`}
                  onClick={() => {
                    const searchParams = new URLSearchParams();
                    searchParams.set("subtopic", subtopicId);
                    router.push(`/cbt?${searchParams.toString()}`);
                  }}
                >
                  Take Quiz
                </button>
              </div>
            </section>
            <section className="mt-4 w-full px-4 text-center sm:px-7 md:text-center lg:text-left">
              {videoData.description && (
                <p className="mb-6 text-gray-600">{videoData.description}</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
