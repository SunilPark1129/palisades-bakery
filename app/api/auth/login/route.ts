import { createToken } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const email = `${username}@test.local`;

  await connectDB();

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await createToken({ userId: user._id.toString() });

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7일
  });

  return response;
}
