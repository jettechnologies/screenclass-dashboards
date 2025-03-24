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
  subTopics: string[];
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
