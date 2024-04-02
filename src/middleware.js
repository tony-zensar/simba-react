import { NextResponse } from "next/server";

export async function middleware(request, context) {
  if (["/"].indexOf(request.nextUrl.pathname) > -1) {
    const response = NextResponse.redirect(new URL(`/editor`, request.url));
    return response;
  }
}

export const config = {
  matcher: [
    "/"
  ],
};
