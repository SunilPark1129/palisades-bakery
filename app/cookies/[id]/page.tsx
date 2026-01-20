import ProductDetail from "@/app/_components/shared/ProductDetail";
import { IProduct } from "@/models/Product";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

async function getProduct(id: string): Promise<IProduct | null> {
  const res = await fetch(`http://localhost:3000/api/category/${id}`, {
    next: {
      tags: [`product-${id}`], // 이 데이터에 고유 태그를 부여
      // revalidate를 설정하지 않으면 기본적으로 계속 캐시가 적용됨.
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

  return <ProductDetail data={data} category="cookies" />;
}
