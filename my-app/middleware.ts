import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  // This will apply Clerk middleware to ALL routes except static files and API routes you want public
  matcher: [
    // match everything except static files (_next, favicon, etc.)
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
