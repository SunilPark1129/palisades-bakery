import { Metadata } from "next";
import ProductList from "../_components/shared/ProductList";
import { cookieCategory } from "@/lib/categoryData";
import { IProduct, Product } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import connectDB from "@/lib/mongodb";
import { baseUrl } from "@/lib/config";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["cookies"];
}

async function page({}: Props) {
  try {
    const res = await fetch(`${baseUrl}/api/categories/cookie`, {
      next: {
        tags: ["products-list"],
      },
    });

    if (!res.ok) {
      console.error("API Response Error");
      return (
        <ProductList
          category="cookies"
          data={[]}
          asideCategories={cookieCategory}
        />
      );
    }

    const { data }: { data: IProduct[] } = await res.json();

    return (
      <ProductList
        category="cookies"
        data={data}
        asideCategories={cookieCategory}
      />
    );
  } catch (error) {
    console.error("Network or Server Error:", error);
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
