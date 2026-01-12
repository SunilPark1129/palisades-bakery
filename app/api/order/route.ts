import connectDB from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();

    const products = await Product.find({}).sort({ createdAt: 1 });

    const ops = products.map((p, index) => ({
      updateOne: {
        filter: { _id: p._id },
        update: { $set: { order: index } },
      },
    }));

    await Product.bulkWrite(ops);

    console.log("All products updated with order!");
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error code: 500. Order request fail." },
      { status: 500 }
    );
  }
}
