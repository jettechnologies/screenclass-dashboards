import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { fetchStudentProfileMiddleware } from "./queries"; // Uncomment this
import { TOKEN_KEY, USER_ROLE_KEY } from "./utils";

export async function middleware(req: NextRequest) {
  const protectRoutes = ["/dashboard/guardian", "/dashboard/student"];
  const publicRoutes = ["/signin/student", "/signin/guardian", "/signup"];
  const { pathname } = req.nextUrl;

  const token = req.cookies.get(TOKEN_KEY)?.value;
  const role = req.cookies.get(USER_ROLE_KEY)?.value?.toLowerCase();
  const isProtectedRoute = protectRoutes.some((route) =>
    pathname.startsWith(route),
  );

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  if (isProtectedRoute && (!token || !role)) {
    const signInRoute = pathname.startsWith("/dashboard/guardian")
      ? "/signin/guardian"
      : "/signin/student";
    return NextResponse.redirect(new URL(signInRoute, req.url));
  }

  try {
    if (token === undefined || role === undefined) {
      throw new Error("Token or Role is missing");
    }
    // Fetch student profile if the role is student
    const userProfile =
      role === "student" ? await fetchStudentProfileMiddleware(token) : null;

    // Protected Routes Logic
    if (isProtectedRoute) {
      // Student accessing guardian routes
      if (role === "student" && pathname.startsWith("/dashboard/guardian")) {
        return NextResponse.redirect(new URL("/dashboard/student", req.url));
      }

      // Student without subscription trying to access video content
      if (
        role === "student" &&
        pathname.startsWith("/dashboard/student/video") &&
        !userProfile?.data?.subscriptionStatus
      ) {
        return NextResponse.redirect(
          new URL("/dashboard/student?status=unpaid", req.url),
        );
      }

      // Guardian accessing student routes
      if (role === "guardian" && pathname.startsWith("/dashboard/student")) {
        return NextResponse.redirect(new URL("/dashboard/guardian", req.url));
      }
    }

    // Public Routes Logic (signin/signup)
    if (isPublicRoute && token) {
      const dashboardRoute =
        role === "guardian" ? "/dashboard/guardian" : "/dashboard/student";
      return NextResponse.redirect(new URL(dashboardRoute, req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    // Clear invalid auth cookies
    const response = NextResponse.redirect(new URL("/signin/student", req.url));
    response.cookies.delete(TOKEN_KEY);
    response.cookies.delete(USER_ROLE_KEY);
    return response;
  }
}

export const config = {
  matcher: [
    "/dashboard/guardian/:path*",
    "/dashboard/student/:path*",
    "/signin/:path*",
    "/signup/:path*",
  ],
};
