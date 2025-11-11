// src/app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Cake from "@/models/Cake";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const cake = await Cake.findById(params.id);

    if (!cake) {
      return NextResponse.json(
        { success: false, error: "cannot find page" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: cake });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "view request failed" },
      { status: 500 }
    );
  }
}
