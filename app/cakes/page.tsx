import { Metadata } from "next";
import { cakeCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["cakes"];
}

async function page({}: Props) {
  const res = await fetch(`${baseUrl}/api/categories/cake`, {
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
    <ProductList category="cakes" data={data} asideCategories={cakeCategory} />
  );
}

export default page;
