import { Metadata } from "next";
import ProductList from "../_components/shared/ProductList";
import { cookieCategory } from "@/lib/categoryData";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["cookies"];
}

async function page({}: Props) {
  try {
    const res = await fetch(`${baseUrl}/api/categories/cookie`, {
      next: { tags: ["products-list"] },
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to fetch products");
    }

    const { data }: { data: IProduct[] } = result;

    return (
      <ProductList
        category="cookies"
        data={data}
        asideCategories={cookieCategory}
      />
    );
  } catch (error: any) {
    console.error("Error fetching bread products:", error);
    throw error;
  }
}

export default page;
