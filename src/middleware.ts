import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { fetchStudentProfileMiddleware } from "./queries";
import { TOKEN_KEY, USER_ROLE_KEY } from "./utils";

export async function middleware(req: NextRequest) {
  const protectRoutes = ["/guardian", "/student"];
  const publicRoutes = ["/signin/student", "/signin/guardian", "/signup"];
  const { pathname } = req.nextUrl;

  // Retrieve the cookie value using Next.js cookies API
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
    console.log("No auth cookie found, redirecting to sign-in page");
    const signInRoute = pathname.startsWith("/guardian")
      ? "/signin/guardian"
      : "/signin/student";
    return NextResponse.redirect(new URL(signInRoute, req.url));
  }

  try {
    // Only fetch student profile if the role is student
    // const userProfile =
    //   role === "student" ? await fetchStudentProfileMiddleware(token) : null;

    // Protected Routes Logic
    if (isProtectedRoute) {
      // Student accessing guardian routes
      if (role === "student" && pathname.startsWith("/guardian")) {
        return NextResponse.redirect(new URL("/student", req.url));
      }

      // Student without subscription
      // if (
      //   role === "student" &&
      //   !userProfile?.data?.subscriptionStatus &&
      //   pathname !== "/student/subscribe" // Prevent redirect loop
      // ) {
      //   return NextResponse.redirect(new URL("/student/subscribe", req.url));
      // }

      // Guardian accessing student routes
      if (role === "guardian" && pathname.startsWith("/student")) {
        return NextResponse.redirect(new URL("/guardian", req.url));
      }
    }

    // Public Routes Logic (signin/signup)
    if (publicRoutes.some((route) => pathname.startsWith(route)) && token) {
      if (role === "guardian") {
        return NextResponse.redirect(new URL("/guardian", req.url));
      }

      if (role === "student") {
        return NextResponse.redirect(new URL("/student", req.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error with authentication or token validation:", error);
    // return NextResponse.redirect(new URL("/signin/student", req.url));
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/guardian/:path*",
    "/student/:path*",
    "/signin/:path*",
    "/signup/:path*",
  ],
};
