import Link from "next/link";
import { Topics } from "@/utils/validators";

interface TopicCardProps {
  topic: Topics;
  baseRoute: string;
  color?: string;
}

export const TopicCard = ({
  topic,
  baseRoute,
  color = "#ffffff",
}: TopicCardProps) => {
  return (
    <Link href={`${baseRoute}/subtopics/${topic._id}`}>
      <div
        className="flex min-h-[130px] w-full items-center justify-between rounded-md border px-4 py-6 drop-shadow-md sm:px-8"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col items-start">
          <p className="font-semibold">{topic.name}</p>
          <p className="text-md mt-1 text-gray-500">
            {topic.subtopics.map((subtopic) => subtopic.name).join(", ")}
          </p>
          <p className="text-md mt-3 text-gray-500">
            {topic.subtopicCount} sub-topics
          </p>
        </div>
      </div>
    </Link>
  );
};
