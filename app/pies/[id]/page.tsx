import ProductDetail from "@/app/_components/shared/ProductDetail";
import { baseUrl } from "@/lib/config";
import { IProduct } from "@/models/Product";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

async function getProduct(id: string): Promise<IProduct | null> {
  const res = await fetch(`${baseUrl}/api/category/${id}`, {
    next: {
      tags: [`product-${id}`],
    },
  });
  if (!res.ok) return null;
  const { data } = await res.json();
  return data;
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

export default async function CakeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: IProduct | null = await getProduct(id);

  if (!data) return notFound();

  return <ProductDetail data={data} category="pies" />;
}
