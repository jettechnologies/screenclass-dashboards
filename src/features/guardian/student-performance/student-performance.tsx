import PerformanceCard from "@/components/guardian/student-performance/performance-card";
import StudentModuleLayout from "@/components/shared/student-module-layout";

export const StudentPerformance = () => {
  return (
    <>
      <StudentModuleLayout title="My Students">
        <div className="">
          <h2 className="segoe my-6 text-lg text-[#1B1B1B] md:text-xl">
            Temilola Ann”s Performance
          </h2>
          <div className="space-y-2">
            <PerformanceCard status="passed" />
            <PerformanceCard status="failed" />
            <PerformanceCard status="passed" />
            <PerformanceCard status="failed" />
            <PerformanceCard status="passed" />
            <PerformanceCard status="failed" />
            <PerformanceCard status="passed" />
            <PerformanceCard status="failed" />
          </div>
        </div>
      </StudentModuleLayout>
    </>
  );
};
