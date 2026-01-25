import { Metadata } from "next";
import { cakeCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["cakes"];
}

async function page() {
  let data: IProduct[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/categories/cake`, {
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
    <ProductList category="cakes" data={data} asideCategories={cakeCategory} />
  );
}

export default page;
