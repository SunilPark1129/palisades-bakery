import { verifyToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const user = await verifyToken(token);

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
