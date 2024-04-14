import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLogged = request.cookies.get("token");

  if (request.nextUrl.pathname.startsWith("/dashboard") && !isLogged) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }

  if (request.nextUrl.pathname === "/auth/login" && isLogged) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  return NextResponse.next();
}
