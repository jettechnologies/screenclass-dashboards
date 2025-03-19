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

export type Student = Omit<Guardian, "status"> & {
  type: string;
  subscriptionStatus: boolean;
};

export type Response<T> = {
  success: boolean;
  message: string;
  data: T | null;
};

export type Subjects = {
  _id: string;
  name: string;
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
  status: "active" | "inactive";
  topic: string;
  quizId: string | null;
  notes: string | null;
  videoLink: string | null;
  thumbnailImage: string | null;
  createdAt: string;
  updatedAt: string;
};
