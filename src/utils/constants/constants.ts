export type UserRoles = "GUARDIAN" | "STUDENT";
export const TOKEN_KEY = "SC_auth_token";
export const USER_ROLE_KEY = "user_role";
export const QUIZ_STORAGE_KEY = "quiz-data";
export const swrOptions = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export interface PricingsType {
  solution: string;
  starter: string;
  pro: string;
  enterprise: string;
}

export const pricings: { [key: string]: PricingsType[] } = {
  monthly: [
    {
      solution: "Edu Videos",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "Edu Games",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "Online Exams",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "Online Tests",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "Online Quiz",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "CBT Exams",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
  ],
  annually: [
    {
      solution: "Edu Videos",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "Edu Games",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "Online Exams",
      starter: "N300",
      pro: "N300",
      enterprise: "N100",
    },
    {
      solution: "Online Tests",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "Online Quiz",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
    {
      solution: "CBT Exams",
      starter: "N100",
      pro: "N100",
      enterprise: "N100",
    },
  ],
};

export const QUIZ_PIE_COLORS = ["#0088FE", "#FF8042", "#CCCCCC"];
