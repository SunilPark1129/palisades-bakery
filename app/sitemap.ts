import { MetadataRoute } from "next";

interface IProduct {
  _id: string;
  product: string;
}

const categories = ["breads", "cakes", "pies", "cookies"];
const baseUrl = "https://palisadesparkbakerynj.com";

async function fetchProducts() {
  try {
    const res = await fetch(baseUrl + "/api/categories");
    if (!res.ok) return [];
    const { data }: { data: IProduct[] } = await res.json();
    return data;
  } catch (error) {
    console.error("Sitemap fetch error:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await fetchProducts();

  // 1. 기본 페이지들
  const staticUrls = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/dine-in`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/catering`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/custom-cakes`, lastModified: new Date(), priority: 0.8 },
  ];

  // 2. 카테고리 페이지들
  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/${cat}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  // 3. 상품 상세 페이지들
  const productUrls = products.map((p) => ({
    url: `${baseUrl}/${p.product}s/${p._id}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  // 전체 합치기
  return [...staticUrls, ...categoryUrls, ...productUrls];
}
