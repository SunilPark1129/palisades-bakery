import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/", "/drafts/"],
    },
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}
// palisadesparkbakery

// # Allow all search engines to crawl public pages
// User-agent: *
// Disallow: /api/
// Disallow: /_next/
// Disallow: /admin/
// Disallow: /drafts/

// # Sitemap
// Sitemap: https://www.palisadesparkbakery.com/sitemap.xml
