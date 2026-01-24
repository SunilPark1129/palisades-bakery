import { Metadata } from "next";
import { pieCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct, Product } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";
import connectDB from "@/lib/mongodb";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["pies"];
}

async function page({}: Props) {
  try {
    await connectDB();

    const products = await Product.find({ product: "pie" })
      .sort({ order: 1 })
      .lean();

    const data = JSON.parse(JSON.stringify(products)) as IProduct[];

    return (
      <ProductList category="pies" data={data} asideCategories={pieCategory} />
    );
  } catch (error: any) {
    console.error("Error loading products:", error);
    return (
      <ProductList category="pies" data={[]} asideCategories={pieCategory} />
    );
  }
}
export default page;
