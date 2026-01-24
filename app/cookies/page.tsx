import { Metadata } from "next";
import ProductList from "../_components/shared/ProductList";
import { cookieCategory } from "@/lib/categoryData";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "../layout";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["cookies"];
}

async function page({}: Props) {
  const res = await fetch(`${baseUrl}/api/categories/cookie`, {
    next: {
      tags: ["products-list"],
    },
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error);
  }
  const { data }: { data: IProduct[] } = await res.json();
  return (
    <ProductList
      category="cookies"
      data={data}
      asideCategories={cookieCategory}
    />
  );
}

export default page;
