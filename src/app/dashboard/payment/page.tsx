import { redirect } from "next/navigation";

interface PaymentPageProps {
  searchParams: Promise<{
    trxref?: string;
    reference?: string;
  }>;
}
export default async function page({ searchParams }: PaymentPageProps) {
  const { trxref, reference } = await searchParams;

  if (!trxref || !reference) {
    redirect("/dashboard/student?status=error");
  }
  redirect(`/dashboard/student?status=success`);
}
