import { bread, cakes, cookies, pies, EntryType } from "@/lib/mockData";
import { mockProduct } from "@/lib/mockProduct";
import connectDB from "@/lib/mongodb";
import { IProduct, Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  console.log("are you here?");

  const data: IProduct[] = await new Promise((res, rej) =>
    setTimeout(() => {
      if (slug === "bread") res(bread);
      else if (slug === "cake") res(cakes);
      else if (slug === "cookie") res(cookies);
      else if (slug === "pie") res(pies);
      else rej(new Error("Invalid slug"));
    }, 0)
  );

  return NextResponse.json({
    success: true,
    status: 200,
    data: data,
  });

  // try {
  //   await connectDB();

  //   const products = await Product.find({ product: slug });

  //   if (products.length === 0) {
  //     return NextResponse.json(
  //       { success: false, error: "cannot find page" },
  //       { status: 404 }
  //     );
  //   }

  //   return NextResponse.json({ success: true, data: products });
  // } catch (error) {
  //   return NextResponse.json(
  //     { success: false, error: "view request failed" },
  //     { status: 500 }
  //   );
  // }
}
