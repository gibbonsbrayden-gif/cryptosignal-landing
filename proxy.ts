import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/whale(.*)",
  "/holdings(.*)",
  "/discover(.*)",
  "/narratives(.*)",
  "/scanner(.*)",
  "/sentiment(.*)",
  "/coin(.*)",
  "/gainers(.*)",
]);

const withClerk = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export default function proxy(req: NextRequest) {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
  // Skip Clerk when keys are placeholders so the page works before setup
  if (!key || key.includes("replace_me") || key.includes("your_key_here")) {
    return NextResponse.next();
  }
  return withClerk(req);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
