import { fetchVideoUrl } from "@/queries";
import { VideoPlayer } from "@/features/student/video";
import { notFound } from "next/navigation";

export default async function VideoPage({
  searchParams,
}: {
  searchParams: Promise<{ subtopic?: string }>;
}) {
  const { subtopic } = await searchParams;

  // Check if subtopicId is provided
  if (!subtopic) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-red-500">Error: Missing subtopic ID</p>
      </div>
    );
  }

  try {
    const videoData = await fetchVideoUrl(subtopic);

    return <VideoPlayer videoData={videoData} subtopicId={subtopic} />;
  } catch (error) {
    console.error("Error fetching video data:", error);
    notFound();
  }
}
