import { Metadata } from "next";
import { breadCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["breads"];
}

async function page({}: Props) {
  try {
    const res = await fetch(`${baseUrl}/api/categories/bread`, {
      next: { tags: ["products-list"] },
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to fetch products");
    }

    const { data }: { data: IProduct[] } = result;

    return (
      <ProductList
        category="breads"
        data={data}
        asideCategories={breadCategory}
      />
    );
  } catch (error: any) {
    console.error("Error fetching bread products:", error);
    throw error;
  }
}

export default page;
