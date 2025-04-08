// import { Subtopics } from "@/features/student/subtopic";
import { Topic } from "@/features/student/topic";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <Topic topicId={slug} />
    </>
  );
};

export default Page;
