import { verifyToken } from "@/lib/auth";
import { mockProduct } from "@/lib/mockProduct";
import connectDB from "@/lib/mongodb";
import { IProduct, Product } from "@/models/Product";
import { User } from "@/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Require to login before you continue." },
      { status: 401 }
    );
  }
  try {
    await connectDB();

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: "Unauthorized token." },
        { status: 401 }
      );
    }

    const userExists = await User.findById(decoded.userId);
    if (!userExists) {
      return NextResponse.json(
        { error: "User no longer exists" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { payload } = body;

    await Product.create(payload);

    return NextResponse.json({
      success: true,
      message: "uploaded successfully.",
    });
  } catch (error) {
    console.error("Bulk Insert Error:", error);
    return NextResponse.json(
      { error: "error has found while uploading new product." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token)
      return NextResponse.json(
        { error: "Require to login before you continue." },
        { status: 401 }
      );

    const decoded = await verifyToken(token);
    if (!decoded)
      return NextResponse.json({ error: "Failed Verify" }, { status: 401 });

    const { id } = await req.json();

    await connectDB();

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { error: "Could not find the product id" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "delected successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "error has found while delecting a product" },
      { status: 500 }
    );
  }
}
