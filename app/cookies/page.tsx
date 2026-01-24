import { Metadata } from "next";
import ProductList from "../_components/shared/ProductList";
import { cookieCategory } from "@/lib/categoryData";
import { IProduct, Product } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import connectDB from "@/lib/mongodb";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["cookies"];
}

async function page({}: Props) {
  try {
    await connectDB();

    const products = await Product.find({ product: "cookie" })
      .sort({ order: 1 })
      .lean();

    const data = JSON.parse(JSON.stringify(products)) as IProduct[];

    return (
      <ProductList
        category="cookies"
        data={data}
        asideCategories={cookieCategory}
      />
    );
  } catch (error: any) {
    console.error("Error loading products:", error);
    return (
      <ProductList
        category="cookies"
        data={[]}
        asideCategories={cookieCategory}
      />
    );
  }
}
export default page;
