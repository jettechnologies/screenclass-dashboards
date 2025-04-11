import { redirect } from "next/navigation";

interface PaymentPageProps {
  searchParams: Promise<{
    trxref?: string;
    reference?: string;
  }>;
}

const Page = async ({ searchParams }: PaymentPageProps) => {
  const { trxref, reference } = await searchParams;

  if (!trxref || !reference) {
    redirect("/student/dashboard?status=error");
  }
  redirect(`/student/dashboard?status=success&reference=${reference}`);
};

export default Page;
