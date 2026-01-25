import { Metadata } from "next";
import { pieCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["pies"];
}

async function page() {
  let data: IProduct[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/categories/pie`, {
      next: { tags: ["products-list"] },
    });

    if (res.ok) {
      const json = await res.json();
      data = json.data || [];
    } else {
      console.error("API Response Error");
    }
  } catch (error) {
    console.error("Network or Server Error:", error);
  }

  return (
    <ProductList category="pies" data={data} asideCategories={pieCategory} />
  );
}
export default page;
