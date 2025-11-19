import ProductDetail from "@/app/_components/shared/ProductDetail";

export default async function CakeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug);

  return <ProductDetail slug={decodedSlug} category="breads" />;
}
