import Link from "next/link";

interface TopicCardProps {
  subject?: string;
  topic?: string;
  subtopic?: string;
  subtopicId?: string;
  borderColor?: string;
  spanColor?: string;
}

export const CBTTopicCard = ({
  subject,
  topic,
  subtopic,
  subtopicId,
  borderColor,
  spanColor,
}: TopicCardProps) => {
  return (
    <div
      className="min-h-[200px] w-[233px] rounded-[10px] border-2 border-black p-[14px] font-poppins"
      style={borderColor ? { border: `1px solid ${borderColor}` } : {}}
    >
      <span
        className="rounded-[4px] p-[3px]"
        style={spanColor ? { background: spanColor } : {}}
      >
        {subject || "English"}
      </span>
      <div className="mt-[2rem] flex h-fit w-full flex-col items-center justify-between gap-y-[2rem]">
        <div>
          <p className="text-[14px] font-semibold uppercase text-black lg:text-[16px]">
            {topic || "COMPREHENSIVE"}
          </p>
          <p className="text-[12px] font-normal text-black lg:text-[14px]">
            {subtopic || "importance of essay"}
          </p>
        </div>
        <Link
          href={{
            pathname: "/cbt",
            query: { subtopic: subtopicId },
          }}
          className="my-auto flex h-[33px] w-[115px] items-center justify-center rounded-[6px] bg-SC-Nav-Blue text-center font-poppins text-[12px] font-normal capitalize text-white"
        >
          Take Quiz
        </Link>
      </div>
    </div>
  );
};
