// src/app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { bread, cakes, cookies, EntryType, pies } from "@/lib/mockData";
import { IProduct, Product } from "@/models/Product";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string; slug: string }> }
) {
  const { id, slug } = await params;

  // const data: IProduct = await new Promise((res, rej) =>
  //   setTimeout(() => {
  //     let item;
  //     if (slug === "bread") item = bread;
  //     else if (slug === "cake") item = cakes;
  //     else if (slug === "cookie") item = cookies;
  //     else if (slug === "pie") item = pies;
  //     else rej(new Error("Invalid slug"));

  //     const result = item!.find((entry) => entry._id === id);
  //     res(result!);
  //   }, 0)
  // );

  // return NextResponse.json({
  //   success: true,
  //   status: 200,
  //   data: data,
  // });

  try {
    await connectDB();

    const products = await Product.findOne({ _id: id });

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
