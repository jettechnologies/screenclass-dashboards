import { Subtopic } from "@/features/student/subtopic";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <>{/* <Comprehension slug={slug} /> */}</>;
};

export default Page;
