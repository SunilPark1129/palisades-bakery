import ProductDetail from "@/app/_components/shared/ProductDetail";
import { IProduct } from "@/models/Product";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import connectDB from "@/lib/mongodb";
import { Product } from "@/models/Product";

type Props = {
  params: Promise<{ id: string }>;
};

async function getProduct(id: string): Promise<IProduct | null> {
  try {
    await connectDB();
    const product = await Product.findById(id).lean();
    if (!product) return null;

    return JSON.parse(JSON.stringify(product)) as IProduct;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const data = await getProduct(id);

  if (!data) {
    return { title: "Palisades Park Bakery" };
  }

  return {
    title: `${data.title} | Palisades Park Bakery`,
    description: data.description ?? `Order ${data.title} today.`,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.url],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.url],
    },
  };
}

export default async function CakeDetail({ params }: Props) {
  const { id } = await params;
  const data: IProduct | null = await getProduct(id);

  if (!data) return notFound();

  return <ProductDetail data={data} category="cakes" />;
}
