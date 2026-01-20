import { IProduct } from "@/models/Product";

// 예시 카테고리 URL
const categories = ["breads", "cakes", "pies", "cookies"];

async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/categories");
  if (!res.ok) return [];
  const { data }: { data: IProduct[] } = await res.json();
  return data;
}

export default async function sitemap() {
  const products = await fetchProducts();

  const baseUrl = "https://www.palisadesparkbakery.com";

  const urls = [
    baseUrl, // 홈
    ...categories.map((cat) => `${baseUrl}/${cat}`), // 카테고리 페이지
    ...products.map((p) => `${baseUrl}/${p.product}s/${p._id}`), // 상세페이지
    `${baseUrl}/dine-in`,
    `${baseUrl}/catering`,
    `${baseUrl}/custom-cakes`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`,
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
