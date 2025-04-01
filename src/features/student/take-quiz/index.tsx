// "use client";

// import { useState } from "react";
// import { Select, Option } from "@mui/joy";
// import { CBTTopicCard } from "@/components/student";
// import { useAllSubjects, useAllSubtopics, useAllTopics } from "@/hook/swr";
// import { Spinner } from "@/components/shared";
// import { QUIZ_STORAGE_KEY } from "@/utils";

// export const Quiz = () => {
//   const [selectedSubject, setSelectedSubject] = useState<{
//     name: string;
//     id: string;
//   } | null>(null);
//   const [selectedTopic, setSelectedTopic] = useState<{
//     name: string;
//     id: string;
//   } | null>(null);

//   const { data: subjects, isLoading: subjectLoading } = useAllSubjects();
//   const { data: topics, isLoading: topicsLoading } = useAllTopics(
//     selectedSubject?.id ?? undefined,
//   );
//   const { data: subtopics, isLoading: subtopicsLoading } = useAllSubtopics(
//     selectedTopic?.id ?? undefined,
//   );

//   console.log(subtopics, "subtopivs");
//   console.log(selectedSubject, "selectedSubject");
//   console.log(selectedTopic, "selectedTopic");
//   const handleSubjectChange = (value: string | null) => {
//     if (value !== null) {
//       const subject = subjects?.find((subject) => subject._id === value);
//       setSelectedSubject({
//         name: subject?.name ?? "",
//         id: subject?._id ?? "",
//       });
//       setSelectedTopic(null);
//     } else {
//       setSelectedSubject(null);
//     }
//   };

//   const saveDataToSessionStorage = (subtopic: string) => {
//     if (typeof window !== "undefined") {
//       window.sessionStorage.setItem(
//         QUIZ_STORAGE_KEY,
//         JSON.stringify({
//           subject: selectedSubject?.name ?? "",
//           topic: selectedTopic?.name ?? "",
//           subtopic,
//         }),
//       );
//     }
//   };

//   const handleTopicChange = (value: string | null) => {
//     if (value !== null) {
//       const topic = topics?.find((topic) => topic._id === value);
//       setSelectedTopic({
//         name: topic?.name ?? "",
//         id: topic?._id ?? "",
//       });
//     } else {
//       setSelectedTopic(null);
//     }
//   };

//   const renderSubjectOptions = () => {
//     if (subjectLoading) return <Spinner />;
//     return [
//       <Option key="default-subject" value="">
//         Please select a subject
//       </Option>,
//       ...(subjects && subjects.length > 0
//         ? subjects.map((subject) => (
//             <Option key={subject._id} value={subject._id}>
//               {subject.name}
//             </Option>
//           ))
//         : [
//             <Option key="no-subjects" value={null} disabled>
//               No subjects available
//             </Option>,
//           ]),
//     ];
//   };

//   const renderTopicOptions = () => {
//     if (topicsLoading) return <Spinner />;
//     return [
//       <Option key="default-topic" value="">
//         Please select a topic
//       </Option>,
//       ...(topics && topics.length > 0
//         ? topics.map((topic) => (
//             <Option key={topic._id} value={topic._id}>
//               {topic.name}
//             </Option>
//           ))
//         : [
//             <Option key="no-topics" value={null} disabled>
//               No topics available
//             </Option>,
//           ]),
//     ];
//   };

//   return (
//     <section className="h-full w-full border-2 border-black font-poppins">
//       <h3 className="text-base font-semibold uppercase text-black lg:text-[20px]">
//         take quiz
//       </h3>
//       <div className="mt-[1rem] h-full min-h-[600px] w-full rounded-[4px] border-2 border-black bg-white px-[28px] py-10">
//         <div className="flex w-full flex-col justify-between border-2 border-red-400 md:flex-row">
//           <div className="flex w-fit flex-row gap-x-[45px] md:flex-col">
//             <div className="flex-1 border-2 border-black">
//               <p className="mb-1 text-[14px] font-normal text-black">Subject</p>
//               <Select
//                 value={selectedSubject?.id ?? ""}
//                 onChange={(_, value) => handleSubjectChange(value)}
//                 sx={{
//                   width: "250px",
//                   height: "32px",
//                 }}
//               >
//                 {renderSubjectOptions()}
//               </Select>
//             </div>
//             <div className="flex-1 border-2 border-black">
//               <p className="mb-1 text-[14px] font-normal text-black">Topic</p>
//               <Select
//                 value={selectedTopic?.id ?? ""}
//                 onChange={(_, value) => handleTopicChange(value)}
//                 sx={{
//                   width: "250px",
//                   height: "32px",
//                 }}
//               >
//                 {renderTopicOptions()}
//               </Select>
//             </div>
//           </div>
//           <button className="h-[30px] w-[110px]"></button>
//         </div>

//         {/* the cards */}
// <div className="mt-[4rem] flex w-full flex-wrap gap-4">
//   {subtopicsLoading && <Spinner />}
//   {subtopics &&
//     subtopics.map((subtopic, index) => (
//       <CBTTopicCard
//         key={index}
//         subject={selectedSubject?.name ?? ""}
//         topic={selectedTopic?.name ?? ""}
//         subtopic={subtopic.name}
//         subtopicId={subtopic._id}
//         onClick={() => saveDataToSessionStorage(subtopic.name)}
//       />
//     ))}
// </div>
//       </div>
//     </section>
//   );
// };

"use client";

import { useState } from "react";
import { Select, Option } from "@mui/joy";
import { CBTTopicCard } from "@/components/student";
import { useAllSubjects, useAllSubtopics, useAllTopics } from "@/hook/swr";
import { Spinner } from "@/components/shared";
import { QUIZ_STORAGE_KEY } from "@/utils";

export const Quiz = () => {
  const [selectedSubject, setSelectedSubject] = useState<{
    name: string;
    id: string;
  } | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<{
    name: string;
    id: string;
  } | null>(null);

  const { data: subjects, isLoading: subjectLoading } = useAllSubjects();
  const { data: topics, isLoading: topicsLoading } = useAllTopics(
    selectedSubject?.id ?? undefined,
  );
  const { data: subtopics, isLoading: subtopicsLoading } = useAllSubtopics(
    selectedTopic?.id ?? undefined,
  );

  const handleSubjectChange = (value: string | null) => {
    if (value !== null) {
      const subject = subjects?.find((subject) => subject._id === value);
      setSelectedSubject({
        name: subject?.name ?? "",
        id: subject?._id ?? "",
      });
      setSelectedTopic(null);
    } else {
      setSelectedSubject(null);
    }
  };

  const saveDataToSessionStorage = (subtopic: string) => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(
        QUIZ_STORAGE_KEY,
        JSON.stringify({
          subject: selectedSubject?.name ?? "",
          topic: selectedTopic?.name ?? "",
          subtopic,
        }),
      );
    }
  };

  const handleTopicChange = (value: string | null) => {
    if (value !== null) {
      const topic = topics?.find((topic) => topic._id === value);
      setSelectedTopic({
        name: topic?.name ?? "",
        id: topic?._id ?? "",
      });
    } else {
      setSelectedTopic(null);
    }
  };

  const renderSubjectOptions = () => {
    if (subjectLoading) return <Option value="">Loading...</Option>;
    return [
      <Option key="default-subject" value="">
        Select a subject
      </Option>,
      ...(subjects?.length
        ? subjects.map((subject) => (
            <Option key={subject._id} value={subject._id}>
              {subject.name}
            </Option>
          ))
        : [
            <Option key="no-subjects" value="" disabled>
              No subjects available
            </Option>,
          ]),
    ];
  };

  const renderTopicOptions = () => {
    if (topicsLoading) return <Option value="">Loading...</Option>;
    return [
      <Option key="default-topic" value="">
        Select a topic
      </Option>,
      ...(topics?.length
        ? topics.map((topic) => (
            <Option key={topic._id} value={topic._id}>
              {topic.name}
            </Option>
          ))
        : [
            <Option key="no-topics" value="" disabled>
              {selectedSubject
                ? "No topics available"
                : "Select a subject first"}
            </Option>,
          ]),
    ];
  };

  return (
    <section className="container mx-auto max-w-7xl px-4 py-8 font-poppins">
      <h3 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
        Take Quiz
      </h3>

      <div className="min-h-[80dvh] rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {/* Filter Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:flex-1 md:grid-cols-2">
            <div className="w-full">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Subject
              </label>
              <Select
                value={selectedSubject?.id ?? ""}
                onChange={(_, value) => handleSubjectChange(value)}
                sx={{
                  width: "100%",
                  minWidth: "200px",
                  "& .MuiSelect-select": {
                    padding: "10px 14px",
                    fontSize: "14px",
                  },
                }}
              >
                {renderSubjectOptions()}
              </Select>
            </div>

            <div className="w-full">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Topic
              </label>
              <Select
                value={selectedTopic?.id ?? ""}
                onChange={(_, value) => handleTopicChange(value)}
                disabled={!selectedSubject}
                sx={{
                  width: "100%",
                  minWidth: "200px",
                  "& .MuiSelect-select": {
                    padding: "10px 14px",
                    fontSize: "14px",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#f3f4f6",
                    borderColor: "#e5e7eb",
                  },
                }}
              >
                {renderTopicOptions()}
              </Select>
            </div>
          </div>
        </div>

        {/* Subtopic Cards */}
        <div className="mt-12">
          {subtopicsLoading ? (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          ) : subtopics?.length ? (
            <div className="mt-[4rem] flex w-full flex-wrap gap-4 max-sm:justify-center">
              {subtopics.map((subtopic) => (
                <CBTTopicCard
                  key={subtopic._id}
                  subject={selectedSubject?.name ?? ""}
                  topic={selectedTopic?.name ?? ""}
                  subtopic={subtopic.name}
                  subtopicId={subtopic._id}
                  onClick={() => saveDataToSessionStorage(subtopic.name)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-gray-500">
                {selectedTopic
                  ? "No subtopics available for the selected topic"
                  : selectedSubject
                    ? "Select a topic to view subtopics"
                    : "Select a subject and topic to begin"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
