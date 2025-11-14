import { CakeType } from "@/lib/mockData";

export default async function ProductDetail({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const data: CakeType = await fetch(
    `http://localhost:3000/api/${category}/${slug}`
  )
    .then((res) => res.json())
    .then((data) => data.data);
  return (
    <main>
      <h1>
        {category}: {slug}
      </h1>
      <div>{data.title}</div>
      <div>{data.description}</div>
    </main>
  );
}
