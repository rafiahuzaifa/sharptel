import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth";
import { getPageVisibility, ALL_PAGES } from "@/lib/content";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Admin area auth guard
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    const session = token ? await verifySessionToken(token) : null;
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    return NextResponse.next();
  }

  // Page on/off guard for admin-managed public pages (homepage is always on)
  if (pathname !== "/" && ALL_PAGES.some((p) => p.path === pathname)) {
    try {
      const visibility = await getPageVisibility();
      if (visibility[pathname] === false) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch {
      // Fail open: never block a real visitor because the visibility check errored
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/About-us",
    "/Contact-us",
    "/career",
    "/events",
    "/connectivity-solutions",
    "/connectivity-solutions/:path*",
    "/software-solutions",
    "/software-solutions/:path*",
    "/technology-solutions",
    "/technology-solutions/:path*",
    "/manage-technology",
    "/manage-technology/:path*",
    "/pages/:path*",
  ],
};
