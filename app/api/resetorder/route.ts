import connectDB from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET(req: Request) {
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
  return Response.json({
    message: "done",
  });
}
