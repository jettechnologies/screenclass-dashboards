export type UserRoles = "GUARDIAN" | "STUDENT";
export const TOKEN_KEY = "SC_auth_token";
export const USER_ROLE_KEY = "user_role";
export const QUIZ_STORAGE_KEY = "quiz-data";
export const swrOptions = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export const QUIZ_PIE_COLORS = ["#0088FE", "#FF8042", "#CCCCCC"];

export const faqs = [
  {
    title: "What is Screenclass® LMS?",
    description:
      "Screenclass® is an advanced EdTech platform delivering secure, tailored eLearning through animated explainer videos. It supports flexible, self-paced learning for basic, secondary, and post-secondary education, combining multimedia resources (videos, audio, text) to cater to diverse learning styles.",
  },
  {
    title:
      "What are the advantages of Screenclass® over traditional learning?",
    description:
      "● Flexibility: Learn anytime, anywhere at your own pace.\n● Higher Retention: Multimedia content boosts engagement and understanding.\n● Cost-Effective: Saves transportation/facility costs.\n● Eco-Friendly: Fully digital, eliminating paper waste.\n● Immediate Feedback: CBT tests provide instant results.\n● Easy Updates: Course materials are auto-updated and downloadable.",
  },
  {
    title: "How do learners access courses?",
    description:
      "After logging in, users see assigned courses on their dashboard. Click any subject to start learning. Progress reports and test results are displayed in real-time.",
  },
  {
    title: "Is support available?",
    description:
      "Yes! Contact us via live chat, phone (+234 901-293-3330), or email (support@screenclass.com). Our team assists with any issues.",
  },
  {
    title: "Can we test Screenclass® before subscribing?",
    description:
      "Absolutely! Screenclass® offers a Freemium model. Try the free version to explore features, access sample courses, and experience the platform before subscribing.",
  },
];
