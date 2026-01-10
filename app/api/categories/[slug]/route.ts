import { bread, cakes, cookies, pies, EntryType } from "@/lib/mockData";
import { mockProduct } from "@/lib/mockProduct";
import connectDB from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    await connectDB();

    const products = await Product.find({ product: slug });

    if (products.length === 0) {
      return NextResponse.json(
        { success: false, error: "cannot find page" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "view request failed" },
      { status: 500 }
    );
  }
}
