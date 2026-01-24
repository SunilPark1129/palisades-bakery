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
    const res = await fetch(`${baseUrl}/api/categories/pie`, {
      next: {
        tags: ["products-list"],
      },
    });

    if (!res.ok) {
      console.error("API Response Error");
      return (
        <ProductList category="pies" data={[]} asideCategories={pieCategory} />
      );
    }

    const { data }: { data: IProduct[] } = await res.json();

    return (
      <ProductList category="pies" data={data} asideCategories={pieCategory} />
    );
  } catch (error) {
    console.error("Network or Server Error:", error);
    return (
      <ProductList category="pies" data={[]} asideCategories={pieCategory} />
    );
  }
}
export default page;
