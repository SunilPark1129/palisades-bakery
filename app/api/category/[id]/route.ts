import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = await Product.findById(id);
  return NextResponse.json({ success: true, data: product });
}
