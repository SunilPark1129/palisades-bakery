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
      next: {
        tags: ["products-list"],
      },
    });

    if (!res.ok) {
      console.error("API Response Error");
      return (
        <ProductList
          category="breads"
          data={[]}
          asideCategories={breadCategory}
        />
      );
    }

    const { data }: { data: IProduct[] } = await res.json();

    return (
      <ProductList
        category="breads"
        data={data}
        asideCategories={breadCategory}
      />
    );
  } catch (error) {
    console.error("Network or Server Error:", error);
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
