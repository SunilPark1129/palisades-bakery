import { Metadata } from "next";
import { breadCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct, Product } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import connectDB from "@/lib/mongodb";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["breads"];
}

async function page({}: Props) {
  try {
    await connectDB();

    const products = await Product.find({ product: "bread" })
      .sort({ order: 1 })
      .lean();

    const data = JSON.parse(JSON.stringify(products)) as IProduct[];

    return (
      <ProductList
        category="breads"
        data={data}
        asideCategories={breadCategory}
      />
    );
  } catch (error: any) {
    console.error("Error loading products:", error);
    return (
      <ProductList
        category="breads"
        data={[]}
        asideCategories={breadCategory}
      />
    );
  }
}

export default page;
