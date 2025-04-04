// import type { Player } from "video.js";
import Player from "video.js/dist/types/player";
//
export type OnPlayerReady = (player: Player) => void;

export type Guardian = {
  _id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  username: string;
  status: "enabled" | "disabled";
  scid: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

// export type Student = Omit<Guardian, "status"> & {
//   type: string;
//   subscriptionStatus: boolean;
// };

export type Student = Guardian & {
  type: string;
  subscriptionStatus: boolean;
};

export type Response<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type SignupResponse = {
  role: "STUDENT" | "GUARDIAN";
  token: string;
};

export type Status = "active" | "inactive";

export type Subjects = {
  _id: string;
  name: string;
  status: Status;
  class: string;
  topicCount: number;
  subtopicCount: number;
};

export type Topics = {
  _id: string;
  name: string;
  subject: string;
  subtopics: { _id: string; name: string; status: Status }[];
  subtopicCount: number;
  createdAt: string;
  updatedAt: string;
};

export type Subtopics = {
  _id: string;
  name: string;
  status: Status;
  topic: string;
  quizId: string | null;
  notes: string | null;
  videoLink: string | null;
  thumbnailImage: string | null;
  createdAt: string;
  updatedAt: string;
};

export type SubtopicsType = {
  topicName: string;
  subTopics: Subtopics[];
};

export type QuizSummaryType = {
  quizId: string;
  quizName: string;
  totalQuestions: number;
  duration: number;
};

export type Option = {
  text: string;
  isCorrect: boolean;
  _id: string;
};

export type Question = {
  questionId: string;
  question: string;
  options: Option[];
};

export type QuizData = {
  attemptId: string;
  quizTitle: string;
  duration: number;
  questions: Question[];
};

export type QuizResult = {
  attemptId: string;
  totalQuestions: number;
  answeredCount: number;
  missedCount: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  scorePercentage: string;
  timeSpent: number;
  submittedAt: string;
};

export type UserAnswer = {
  questionId: string;
  selectedOptionId: string;
};

export type CourseProgress = {
  subjectId: string;
  subjectName: string;
  completionRate: string;
};

export type ClassType = {
  _id: string;
  name: string;
  status: Status;
  level: string;
  subjects: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Level = {
  _id: string;
  name: string;
};

export type StudentType = {
  _id: string;
  firstName: string;
  lastName: string;
  scid: string;
  level: Level;
};

export type GuardianActivityLog = {
  _id: string;
  action: string;
  metadata: {
    time: string;
    date: string;
  };
  createdAt: string;
};

type PercentageString = `${number}%`;
type ProgressDataType = {
  subjectId: string;
  subjectName: string;
  completionRate: PercentageString;
};

export type QuizHistoryType = {
  id: string;
  quizTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  submittedAt: string;
};

// type Activity = {
//   _id: string;
//   userId: string;
//   userType: "USER" | "ADMIN" | "STUDENT" | "GUARDIAN";
//   action: string;
//   metadata: {
//     time: string;
//     date: string;
//   };
//   timestamp: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

// export type Activities = Activity[];

export type Activity = {
  _id: string;
  user: string;
  message: string;
  createdAt: string;
};

export type ProgressData = {
  courseProgress: ProgressDataType[];
  quizHistory: QuizHistoryType[];
  completedCourseCount: number;
};

type SubscriptionStatus = "active" | "expired";

export type Subscription = {
  _id: string;
  user: string;
  plan: string;
  startDate: string;
  expiryDate: string;
  status: SubscriptionStatus;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface ProfileFormData {
  lastName: string;
  firstName: string;
  email: string;
  contact: string;
}

export type PerformanceCounts = {
  passed: number;
  failed: number;
  fairPerformance: number;
};

type User = {
  _id: string;
  firstName: string;
  lastName: string;
};

export type StudentActivityLog = {
  _id: string;
  user: User;
  message: string;
  createdAt: string;
  __v: number;
};

export type LinkedVideo = {
  _id: string;
  name: string;
  description: string;
  videoUrl: string;
  isLinked: boolean;
  duration: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  __v: number;
};

export type SubscriptionResponse = {
  authorization_url: string;
  access_code: string;
  reference: string;
};
