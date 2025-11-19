import ProductDetail from "@/app/_components/shared/ProductDetail";

export default async function CakeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetail id={id} category="breads" />;
}
