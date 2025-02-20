import ActivityCard from "@/components/guardian/student-activities/activity-card";
import StudentModuleLayout from "@/components/shared/student-module-layout";
import React from "react";

export const StudentActivities = () => {
  return (
    <>
      <StudentModuleLayout title="Activities">
        <div>
          <h2 className="segoe my-6 text-lg text-[#1B1B1B] md:text-xl">
            Temilola’s Activities
          </h2>
          <div className="space-y-2">
            {Array.from({ length: 7 }, (_, i) => (
              <ActivityCard
                key={i}
                title="Activity Title"
                desc="Lorem ipsum dolor sit amet consectetur. Enim id lectus felis gravida malesuada quam aliquam diam."
                date="06-06-2023 10:00:34am"
                last_seen="4 min ago"
                status
              />
            ))}
          </div>
        </div>
      </StudentModuleLayout>
    </>
  );
};
