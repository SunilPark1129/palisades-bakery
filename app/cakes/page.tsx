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
  try {
    const res = await fetch(`${baseUrl}/api/categories/cake`, {
      next: {
        tags: ["products-list"],
      },
    });

    if (!res.ok) {
      console.error("API Response Error");
      return (
        <ProductList
          category="cakes"
          data={[]}
          asideCategories={cakeCategory}
        />
      );
    }

    const { data }: { data: IProduct[] } = await res.json();

    return (
      <ProductList
        category="cakes"
        data={data}
        asideCategories={cakeCategory}
      />
    );
  } catch (error) {
    console.error("Network or Server Error:", error);
    return (
      <ProductList category="cakes" data={[]} asideCategories={cakeCategory} />
    );
  }
}

export default page;
