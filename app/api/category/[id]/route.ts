import connectDB from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectDB();

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { error: "Cannot find the product id." },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error code: 500. View request failed." },
      { status: 500 }
    );
  }
}
