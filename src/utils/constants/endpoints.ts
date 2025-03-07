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

export const ENDPOINTS = {
  auth: authEndpoints,
};
