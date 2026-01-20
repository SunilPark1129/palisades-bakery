import { Metadata } from "next";
import { pieCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["pies"];
}

async function page({}: Props) {
  const res = await fetch(`http://localhost:3000/api/categories/pie`, {
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
    <ProductList category="pies" data={data} asideCategories={pieCategory} />
  );
}

export default page;
