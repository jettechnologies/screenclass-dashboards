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
    if (subjectLoading) return <Spinner />;
    return [
      <Option key="default-subject" value="">
        Please select a subject
      </Option>,
      ...(subjects && subjects.length > 0
        ? subjects.map((subject) => (
            <Option key={subject._id} value={subject._id}>
              {subject.name}
            </Option>
          ))
        : [
            <Option key="no-subjects" value={null} disabled>
              No subjects available
            </Option>,
          ]),
    ];
  };

  const renderTopicOptions = () => {
    if (topicsLoading) return <Spinner />;
    return [
      <Option key="default-topic" value="">
        Please select a topic
      </Option>,
      ...(topics && topics.length > 0
        ? topics.map((topic) => (
            <Option key={topic._id} value={topic._id}>
              {topic.name}
            </Option>
          ))
        : [
            <Option key="no-topics" value={null} disabled>
              No topics available
            </Option>,
          ]),
    ];
  };

  return (
    <section className="h-full w-full font-poppins">
      <h3 className="text-base font-semibold uppercase text-black lg:text-[20px]">
        take quiz
      </h3>
      <div className="mt-[1rem] min-h-[600px] w-full rounded-[4px] bg-white px-[28px] py-10">
        <div className="flex w-full justify-between">
          <div className="flex w-fit gap-x-[45px]">
            <div className="">
              <p className="mb-1 text-[14px] font-normal text-black">Subject</p>
              <Select
                value={selectedSubject?.id ?? ""}
                onChange={(_, value) => handleSubjectChange(value)}
                sx={{
                  width: "250px",
                  height: "32px",
                }}
              >
                {renderSubjectOptions()}
              </Select>
            </div>
            <div className="">
              <p className="mb-1 text-[14px] font-normal text-black">Topic</p>
              <Select
                value={selectedTopic?.id ?? ""}
                onChange={(_, value) => handleTopicChange(value)}
                sx={{
                  width: "250px",
                  height: "32px",
                }}
              >
                {renderTopicOptions()}
              </Select>
            </div>
          </div>
          <button className="h-[30px] w-[110px]"></button>
        </div>

        {/* the cards */}
        <div className="mt-[4rem] flex w-full flex-wrap gap-4">
          {subtopicsLoading && <Spinner />}
          {subtopics &&
            subtopics.map((subtopic, index) => (
              <CBTTopicCard
                key={index}
                subject={selectedSubject?.name ?? ""}
                topic={selectedTopic?.name ?? ""}
                subtopic={subtopic.name}
                subtopicId={subtopic._id}
                onClick={() => saveDataToSessionStorage(subtopic.name)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
