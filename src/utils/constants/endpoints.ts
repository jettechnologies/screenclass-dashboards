const SC_LIVE_URL = `${process.env.NEXT_PUBLIC_SC_LIVE_URL}/api`;

const authEndpoints = {
  signup: `${SC_LIVE_URL}/users/signup`,
  studentLogin: `${SC_LIVE_URL}/users/login`,
  guardianLogin: `${SC_LIVE_URL}/guardians/login`,
  getStudentProfile: `${SC_LIVE_URL}/users/profile`,
  getGuardianProfile: `${SC_LIVE_URL}/guardians/profile`,
  forgotPassword: `${SC_LIVE_URL}/auth/forgot-password`,
  resetPassword: `${SC_LIVE_URL}/auth/reset-password`,
};

const studentEndpoints = {
  getSubjects: `${SC_LIVE_URL}/users/subjects`,
  getTopics: `${SC_LIVE_URL}/users/topics`,
  getSubtopics: `${SC_LIVE_URL}/users/subtopics`,
};

const quizEndpoints = {
  getQuizSummary: `${SC_LIVE_URL}/quizzes/get-quiz-summary`,
  getQuiz: `${SC_LIVE_URL}/quizzes/attempt-quiz`,
  submitQuizAttempt: `${SC_LIVE_URL}/quizzes/submit-quiz`,
};

export const ENDPOINTS = {
  auth: authEndpoints,
  student: studentEndpoints,
  quiz: quizEndpoints,
};
