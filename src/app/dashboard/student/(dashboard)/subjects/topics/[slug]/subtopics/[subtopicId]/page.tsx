import { Subtopics } from "@/features/student/subtopic";

const Page = async ({
  params,
}: {
  params: Promise<{ subtopicId: string }>;
}) => {
  const { subtopicId } = await params;
  return (
    <>
      <Subtopics subtopicId={subtopicId} />
    </>
  );
};

export default Page;
