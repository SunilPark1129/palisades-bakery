import ProductDetail from "@/app/_components/ProductDetail";

export default async function CakeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug); // strawberry%20cream%20cake
  const decodedSlug = decodeURIComponent(slug);
  console.log(decodedSlug); // strawberry cream cake

  return <ProductDetail slug={decodedSlug} category="cakes" />;
}
