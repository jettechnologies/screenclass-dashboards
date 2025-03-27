import Link from "next/link";

interface TopicCardProps {
  subject?: string;
  topic?: string;
  subtopic?: string;
  subtopicId?: string;
  borderColor?: string;
  spanColor?: string;
  onClick?: () => void;
}

export const CBTTopicCard = ({
  subject,
  topic,
  subtopic,
  subtopicId,
  borderColor,
  spanColor,
  onClick,
}: TopicCardProps) => {
  return (
    <div
      className="relative flex min-h-[200px] w-[233px] flex-col rounded-[10px] border-2 border-black p-[14px] font-poppins"
      style={borderColor ? { border: `1px solid ${borderColor}` } : {}}
    >
      {/* Subject tag at top */}
      <span
        className="w-fit rounded-[4px] p-[3px]"
        style={spanColor ? { background: spanColor } : {}}
      >
        {subject || "English"}
      </span>

      {/* Content area with flex-grow to push link to bottom */}
      <div className="mt-4 flex flex-grow flex-col justify-between">
        <div>
          <p className="text-[14px] font-semibold uppercase text-black lg:text-[16px]">
            {topic || "COMPREHENSIVE"}
          </p>
          <p className="text-[12px] font-normal text-black lg:text-[14px]">
            {subtopic || "importance of essay"}
          </p>
        </div>

        {/* Link fixed to bottom */}
        <div className="mt-auto flex justify-center pt-4">
          <Link
            href={{
              pathname: "/cbt",
              query: { subtopic: subtopicId },
            }}
            className="flex h-[33px] w-[115px] items-center justify-center rounded-[6px] bg-SC-Nav-Blue text-center font-poppins text-[12px] font-normal capitalize text-white transition-colors duration-200 hover:bg-blue-600"
            onClick={onClick}
          >
            Take Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};
