"use server";
import {
  ENDPOINTS,
  UserRoles,
  USER_ROLE_KEY,
  TOKEN_KEY,
} from "@/utils/constants";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { Response } from "@/utils/validators";

interface SignupProps {
  firstName: string;
  lastName: string;
  username: string;
  mobile: string;
  email: string;
  password: string;
  role: UserRoles;
}

interface SigninProps {
  identifier: string;
  password: string;
}

export const signup = async (data: SignupProps) => {
  try {
    const { auth } = ENDPOINTS;

    const res = await fetch(auth.signup, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const response = await res.json();
      return response;
    }

    const response = await res.json();
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const studentSignin = async (data: SigninProps) => {
  try {
    const { auth } = ENDPOINTS;
    const { identifier, password } = data;
    const isPhone = /^\d{11}$/.test(identifier);

    const res = await fetch(auth.studentLogin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        isPhone
          ? { mobile: identifier, password }
          : { scid: identifier, password },
      ),
    });

    if (!res.ok) {
      const response = await res.json();
      return response;
    }

    const response = await res.json();
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const guardianSignin = async (data: SigninProps) => {
  try {
    const { auth } = ENDPOINTS;
    const { identifier, password } = data;
    const isPhone = /^\d{11}$/.test(identifier);

    const res = await fetch(auth.guardianLogin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        isPhone
          ? { mobile: identifier, password }
          : { scid: identifier, password },
      ),
    });

    if (!res.ok) {
      const response = await res.json();
      return response;
    }

    const response = await res.json();
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const forgetPassword = async (data: { resetField: string }) => {
  try {
    const { auth } = ENDPOINTS;
    const role = await getCookie(USER_ROLE_KEY, { cookies });

    if (!role) return { success: false, mesaage: "User role isnt availabe" };

    const isPhone = /^\d{11}$/.test(data.resetField);
    const isScid = /^SC\d{4}$/.test(data.resetField);

    if (!isPhone && !isScid) {
      return {
        success: false,
        message: "Enter a valid 10-digit phone number or a valid SSC ID",
      };
    }

    const dataToSend = isPhone
      ? { mobile: data.resetField }
      : { scid: data.resetField };

    const res = await fetch(auth.forgotPassword, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...dataToSend, role }),
    });

    if (!res.ok) {
      const response = await res.json();
      return response;
    }

    const response = await res.json();
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

interface ResetPasswordProps {
  otp: string;
  userIdentity: string;
  newPassword: string;
}

export const resetPassword = async ({
  otp,
  userIdentity,
  newPassword,
}: ResetPasswordProps) => {
  try {
    const { auth } = ENDPOINTS;

    const role = await getCookie(USER_ROLE_KEY, { cookies });

    if (!role) return { success: false, mesaage: "User role isnt availabe" };

    const isPhone = /^\d{11}$/.test(userIdentity);
    const isScid = /^SC\d{4}$/.test(userIdentity);

    if (!isPhone && !isScid) {
      return {
        success: false,
        message: "Enter a valid 10-digit phone number or a valid SSC ID",
      };
    }

    const userId = isPhone ? { mobile: userIdentity } : { scid: userIdentity };

    const data = {
      ...userId,
      role,
      otp,
      newPassword,
    };

    const res = await fetch(auth.resetPassword, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const response = await res.json();
      return response;
    }

    const response = await res.json();
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const studentLogout = async () => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      return null;
    }
    const { auth } = ENDPOINTS;
    const { studentLogout } = auth;

    const res = await fetch(studentLogout, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const response = await res.json();
      return response;
    }

    const response: Response<null> = await res.json();
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};

export const guardianLogout = async () => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { auth } = ENDPOINTS;
    const { guardianLogout } = auth;

    const res = await fetch(guardianLogout, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const response = await res.json();
      return response;
    }

    const response: Response<null> = await res.json();
    return response;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
};
