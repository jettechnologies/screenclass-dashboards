// "use client";

// import React from "react";
// import { SubtopicCard } from "@/components/student";
// import { SubjectCardSkeleton } from "@/components/skeleton/student";
// import { useAllSubtopics } from "@/hook/swr";
// import { EmptyState } from "@/components/shared";

// interface SubtopicProps {
//   subtopicId: string;
// }

// export const Subtopics = ({ subtopicId }: SubtopicProps) => {
//   const { topicName, subTopics, isLoading } = useAllSubtopics(subtopicId);

//   return (
//     <div className="flex h-full min-h-screen w-full flex-col border-2 border-red-500 bg-[#F1F1F1] tracking-wide text-slate-900 sm:flex-row">
//       <div className="h-full w-full p-0 lg:w-full">
//         <div className="flex h-full w-full flex-col items-center bg-[#ffffff]">
//           <div className="h-full w-full">
//             <div className="lg:px-8">
//               <h4 className="mt-3 font-poppins text-lg font-semibold text-[#0B67B0]">
//                 {topicName}
//               </h4>
//             </div>
//             <section className="mb-16 mt-4 flex h-full w-full flex-col flex-wrap items-center gap-8 md:mb-16 lg:mb-0 lg:flex-row lg:px-8">
//               {isLoading ? (
//                 Array.from({ length: 3 }).map((_, index) => (
//                   <SubjectCardSkeleton key={index} />
//                 ))
//               ) : subTopics && subTopics.length > 0 ? (
//                 subTopics.map((subtopic, index) => (
//                   <SubtopicCard subtopic={subtopic} key={index} />
//                 ))
//               ) : (
//                 <div className="grid h-full w-full place-content-center">
//                   <EmptyState title="No Topics Available" imageSize="lg" />
//                 </div>
//               )}
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import React from "react";
import { SubtopicCard } from "@/components/student";
import { SubjectCardSkeleton } from "@/components/skeleton/student";
import { useAllSubtopics } from "@/hook/swr";
import { EmptyState } from "@/components/shared";

interface SubtopicProps {
  subtopicId: string;
}

export const Subtopics = ({ subtopicId }: SubtopicProps) => {
  const { topicName, subTopics, isLoading } = useAllSubtopics(subtopicId);

  return (
    <div className="min-h-screen bg-white py-6">
      <div className="lg:px-8">
        <h4 className="mt-3 font-poppins text-lg font-semibold text-[#0B67B0]">
          {topicName}
        </h4>
      </div>
      <section className="mb-16 mt-4 flex flex-wrap gap-8 lg:px-8">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <SubjectCardSkeleton key={index} />
          ))
        ) : subTopics && subTopics.length > 0 ? (
          subTopics.map((subtopic, index) => (
            <SubtopicCard subtopic={subtopic} key={index} />
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <EmptyState title="No Topics Available" imageSize="lg" />
          </div>
        )}
      </section>
    </div>
  );
};
