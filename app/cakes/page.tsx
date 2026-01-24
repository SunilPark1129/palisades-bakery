import { Metadata } from "next";
import { cakeCategory } from "@/lib/categoryData";
import ProductList from "../_components/shared/ProductList";
import { IProduct, Product } from "@/models/Product";
import { CATEGORY_METADATA } from "@/lib/metadata/metadata";
import { baseUrl } from "@/lib/config";
import connectDB from "@/lib/mongodb";

type Props = {};

export async function generateMetadata(): Promise<Metadata> {
  return CATEGORY_METADATA["cakes"];
}

async function page({}: Props) {
  try {
    const res = await fetch(`${baseUrl}/api/categories/cake`, {
      next: { tags: ["products-list"] },
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to fetch products");
    }

    const { data }: { data: IProduct[] } = result;

    return (
      <ProductList
        category="cakes"
        data={data}
        asideCategories={cakeCategory}
      />
    );
  } catch (error: any) {
    console.error("Error fetching cake products:", error);
    // 페이지 렌더링 중 에러 → Next.js error boundary 호출 가능
    throw error;
  }
}

// async function page({}: Props) {
//   try {
//     await connectDB();

//     const products = await Product.find({ product: "cake" })
//       .sort({ order: 1 })
//       .lean();

//     const data = JSON.parse(JSON.stringify(products)) as IProduct[];

//     return (
//       <ProductList
//         category="cakes"
//         data={data}
//         asideCategories={cakeCategory}
//       />
//     );
//   } catch (error) {
//     return (
//       <ProductList category="cakes" data={[]} asideCategories={cakeCategory} />
//     );
//   }
// }

// async function page({}: Props) {
//   const res = await fetch(`${baseUrl}/api/categories/cake`, {
//     next: {
//       tags: ["products-list"],
//     },
//   });
//   if (!res.ok) {
//     const data = await res.json();
//     throw new Error(data.error);
//   }
//   const { data }: { data: IProduct[] } = await res.json();

//   return (
//     <ProductList category="cakes" data={data} asideCategories={cakeCategory} />
//   );
// }

export default page;
