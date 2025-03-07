export type UserRoles = "GUARDIAN" | "STUDENT";
export const TOKEN_KEY = "auth_token";
export const USER_ROLE_KEY = "user_role";

export const englishComprehensionQuestions = [
  {
    question: "What is the synonym of 'happy'?",
    options: ["Joyful", "Sad", "Angry", "Confused"],
    answer: "Joyful",
  },
  {
    question: "What is the antonym of 'fast'?",
    options: ["Slow", "Quick", "Swift", "Speedy"],
    answer: "Slow",
  },
  {
    question: "What does 'benevolent' mean?",
    options: ["Kind", "Cruel", "Hostile", "Indifferent"],
    answer: "Kind",
  },
  {
    question: "What is the meaning of 'omnipresent'?",
    options: [
      "Present everywhere",
      "Present nowhere",
      "Present sometimes",
      "Absent",
    ],
    answer: "Present everywhere",
  },
  {
    question: "Choose the correct spelling:",
    options: ["Accommodate", "Acomodate", "Acommodate", "Accomodate"],
    answer: "Accommodate",
  },
  {
    question: "What is the synonym of 'abundant'?",
    options: ["Plentiful", "Scarce", "Minimal", "Few"],
    answer: "Plentiful",
  },
  {
    question: "What is the antonym of 'strong'?",
    options: ["Weak", "Powerful", "Sturdy", "Robust"],
    answer: "Weak",
  },
  {
    question: "What does 'euphoria' mean?",
    options: ["Intense happiness", "Sadness", "Fear", "Anger"],
    answer: "Intense happiness",
  },
  {
    question: "What is the synonym of 'brave'?",
    options: ["Courageous", "Fearful", "Cowardly", "Shy"],
    answer: "Courageous",
  },
  {
    question: "What is the antonym of 'victory'?",
    options: ["Defeat", "Win", "Triumph", "Success"],
    answer: "Defeat",
  },
  {
    question: "What does 'melancholy' mean?",
    options: ["Sadness", "Happiness", "Excitement", "Anger"],
    answer: "Sadness",
  },
  {
    question: "What is the synonym of 'honest'?",
    options: ["Truthful", "Deceptive", "Dishonest", "Cunning"],
    answer: "Truthful",
  },
  {
    question: "What is the antonym of 'visible'?",
    options: ["Invisible", "Clear", "Evident", "Apparent"],
    answer: "Invisible",
  },
  {
    question: "What does 'serene' mean?",
    options: ["Calm", "Chaotic", "Loud", "Turbulent"],
    answer: "Calm",
  },
  {
    question: "What is the synonym of 'confident'?",
    options: ["Self-assured", "Anxious", "Doubtful", "Nervous"],
    answer: "Self-assured",
  },
  {
    question: "What is the antonym of 'bright'?",
    options: ["Dull", "Shiny", "Radiant", "Glowing"],
    answer: "Dull",
  },
  {
    question: "What does 'optimistic' mean?",
    options: ["Hopeful", "Pessimistic", "Skeptical", "Doubtful"],
    answer: "Hopeful",
  },
  {
    question: "What is the synonym of 'angry'?",
    options: ["Furious", "Happy", "Calm", "Content"],
    answer: "Furious",
  },
  {
    question: "What is the antonym of 'success'?",
    options: ["Failure", "Achievement", "Victory", "Accomplishment"],
    answer: "Failure",
  },
  {
    question: "What does 'vulnerable' mean?",
    options: ["Exposed to harm", "Protected", "Invincible", "Shielded"],
    answer: "Exposed to harm",
  },
];

export type Questions = typeof englishComprehensionQuestions;

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
