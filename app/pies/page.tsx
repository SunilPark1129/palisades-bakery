import { Metadata } from "next";
import { pieCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["pies"];
}

async function page({}: Props) {
  try {
    const res = await fetch(`${baseUrl}/api/categories/pie`, {
      next: { tags: ["products-list"] },
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to fetch products");
    }

    const { data }: { data: IProduct[] } = result;

    return (
      <ProductList category="pies" data={data} asideCategories={pieCategory} />
    );
  } catch (error: any) {
    console.error("Error fetching pie products:", error);
    // 페이지 렌더링 중 에러 → Next.js error boundary 호출 가능
    throw error;
  }
}

export default page;
