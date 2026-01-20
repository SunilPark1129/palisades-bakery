import { verifyToken } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await connectDB();

    const products = await Product.find({}).sort({ order: 1 });

    if (products.length === 0) {
      return NextResponse.json(
        { success: false, error: "Error code: 404. Cannot find data." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error code: 500. View request failed." },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Require to login before you continue." },
      { status: 401 },
    );
  }
  try {
    await connectDB();

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: "Error code: 401. Unauthorized token." },
        { status: 401 },
      );
    }

    const userExists = await User.findById(decoded.userId);
    if (!userExists) {
      return NextResponse.json(
        { error: "Error code: 401. User no longer exists." },
        { status: 401 },
      );
    }

    const body = await req.json();
    const { payload } = body;

    const newOrder =
      typeof payload.order === "number" && payload.order >= 0
        ? payload.order
        : 0;

    await Product.updateMany(
      {
        category: payload.category,
        order: { $gte: newOrder },
      },
      { $inc: { order: 1 } },
    );

    const createdProduct = await Product.create({
      ...payload,
      order: newOrder,
    });

    revalidateTag("products-list", "max");

    return NextResponse.json({
      success: true,
      data: createdProduct,
    });
  } catch (error) {
    console.error("Bulk Insert Error:", error);
    return NextResponse.json(
      {
        error: "Error code: 500. Error has found while uploading new product.",
      },
      { status: 500 },
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
        { status: 401 },
      );

    const decoded = await verifyToken(token);
    if (!decoded)
      return NextResponse.json(
        { error: "Failed to Verify your authrization." },
        { status: 401 },
      );

    const { id } = await req.json();

    await connectDB();

    const target = await Product.findById(id);
    if (!target) {
      return NextResponse.json(
        { error: "Could not find the product id" },
        { status: 404 },
      );
    }

    await Product.findByIdAndDelete(id);

    await Product.updateMany(
      {
        category: target.category,
        order: { $gt: target.order },
      },
      { $inc: { order: -1 } },
    );

    revalidateTag(`product-${id}`, "max");
    revalidateTag("products-list", "max");

    return NextResponse.json({
      success: true,
      data: target,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "error has found while delecting a product" },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token)
      return NextResponse.json(
        { error: "Require to login before you continue." },
        { status: 401 },
      );

    const decoded = await verifyToken(token);
    if (!decoded)
      return NextResponse.json({ error: "Failed Verify" }, { status: 401 });

    const { payload } = await req.json();
    const {
      _id,
      product,
      category,
      title,
      description,
      price,
      size,
      url,
      fileId,
      order: newOrder,
    } = payload;

    if (!payload?._id) {
      return NextResponse.json(
        { error: "Product id is required" },
        { status: 400 },
      );
    }

    await connectDB();

    const target = await Product.findById(_id);
    if (!target) {
      return NextResponse.json(
        { error: "Could not find the product id" },
        { status: 404 },
      );
    }

    const oldOrder = target.order;

    if (typeof newOrder === "number" && newOrder !== oldOrder) {
      if (newOrder < oldOrder) {
        await Product.updateMany(
          {
            order: { $gte: newOrder, $lt: oldOrder },
            _id: { $ne: target._id },
          },
          { $inc: { order: 1 } },
        );
      } else {
        await Product.updateMany(
          {
            order: { $gt: oldOrder, $lte: newOrder },
            _id: { $ne: target._id },
          },
          { $inc: { order: -1 } },
        );
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      {
        product,
        category,
        title,
        description,
        price,
        size,
        url,
        fileId,
        order: typeof newOrder === "number" ? newOrder : target.order,
      },
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { error: "Could not find the product id" },
        { status: 404 },
      );
    }

    revalidateTag(`product-${_id}`, "max");
    revalidateTag("products-list", "max");

    return NextResponse.json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "error has found while updating a product" },
      { status: 500 },
    );
  }
}
