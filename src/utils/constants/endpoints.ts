const SC_LIVE_URL = `${process.env.NEXT_PUBLIC_SC_LIVE_URL}/api`;

const authEndpoints = {
  signup: `${SC_LIVE_URL}/users/signup`,
  studentLogin: `${SC_LIVE_URL}/users/login`,
  guardianLogin: `${SC_LIVE_URL}/guardians/login`,
  forgotPassword: `${SC_LIVE_URL}/auth/forgot-password`,
  resetPassword: `${SC_LIVE_URL}/auth/reset-password`,
  studentLogout: `${SC_LIVE_URL}/users/logoutUser`,
  guardianLogout: `${SC_LIVE_URL}/guardians/logoutGuardian`,
};

const studentEndpoints = {
  getStudentProfile: `${SC_LIVE_URL}/users/profile`,
  getClasses: `${SC_LIVE_URL}/users/classes`,
  getSubjects: `${SC_LIVE_URL}/users/subjects`,
  getTopics: `${SC_LIVE_URL}/users/topics`,
  getSubtopics: `${SC_LIVE_URL}/users/subtopics`,
  editProfile: `${SC_LIVE_URL}/users/edit-profile`,
  markCourseCompleted: `${SC_LIVE_URL}/users/mark-as-completed`,
  getDashboardStatitics: `${SC_LIVE_URL}/users/dashboard`,
  getSubscriptionHistory: `${SC_LIVE_URL}/users/subscriptions`,
};

const guardianEndpoints = {
  getGuardianProfile: `${SC_LIVE_URL}/guardians/profile`,
  getAllStudents: `${SC_LIVE_URL}/guardians/students`,
  getSingleStudent: `${SC_LIVE_URL}/guardians/student`,
  getGuardianActivites: `${SC_LIVE_URL}/guardians/activities`,
  updateGuardianProfile: `${SC_LIVE_URL}/guardians/update`,
  removeStudent: `${SC_LIVE_URL}/guardians/remove-student`,
  attachStudent: `${SC_LIVE_URL}/guardians/add-student`,
  registerStudent: `${SC_LIVE_URL}/guardians/register-student`,
};

const quizEndpoints = {
  getQuizSummary: `${SC_LIVE_URL}/quizzes/get-quiz-summary`,
  getQuiz: `${SC_LIVE_URL}/quizzes/attempt-quiz`,
  submitQuizAttempt: `${SC_LIVE_URL}/quizzes/submit-quiz`,
};

export const ENDPOINTS = {
  auth: authEndpoints,
  student: studentEndpoints,
  guardian: guardianEndpoints,
  quiz: quizEndpoints,
};
