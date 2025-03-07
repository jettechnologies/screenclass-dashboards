import { getCookie, OptionsType } from "cookies-next";
import { TOKEN_KEY, USER_ROLE_KEY } from "./constants";
import { NextApiRequest, NextApiResponse } from "next";

export const getAuthCookie = (
  req?: NextApiRequest,
  res?: NextApiResponse,
): { role: string; accessToken: string } | null => {
  const accessToken = getCookie(TOKEN_KEY, { req, res });
  const role = getCookie(USER_ROLE_KEY, { req, res });

  console.log("Access Token:", accessToken, "Role:", role);

  if (!accessToken || !role) {
    return null;
  }

  return { accessToken: String(accessToken), role: String(role) };
};

export const COOKIES_CONFIG = {
  path: "/",
  maxAge: 7 * 24 * 60 * 60,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
} as Partial<OptionsType>;
