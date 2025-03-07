import PersonalDetailsForm from "@/components/guardian/settings/personal-details-form";
import QuizPerformanceCard from "@/components/guardian/student-profile/quiz-performance-card";
import StudentDetailsCard from "@/components/guardian/student-profile/student-details-card";
import StudentModuleLayout from "@/components/shared/student-module-layout";

export const StudentProfile = () => {
  return (
    <>
      <StudentModuleLayout>
        <div>
          <h2 className="segoe my-6 text-lg font-bold text-[#1b1b1b] md:text-xl">
            Temilola Ann’s Profile
          </h2>
          <p className="segoe mt-4 text-[#1b1b1b]">Student’s Details</p>
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:gap-7">
            <StudentDetailsCard />
            <QuizPerformanceCard />
          </div>
          <PersonalDetailsForm action="read" />
        </div>
      </StudentModuleLayout>
    </>
  );
};
