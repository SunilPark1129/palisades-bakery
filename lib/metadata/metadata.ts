// lib/categoryMeta.ts
import { Metadata } from "next";
// keywords: ["bakery", "fresh breads", "custom cakes", "pies", "cookies"]
export const CATEGORY_METADATA: Record<string, Metadata> = {
  breads: {
    title: "Fresh Breads | Palisades Park Bakery",
    description:
      "Browse our selection of freshly baked breads made daily with high-quality ingredients. Perfect for breakfast, sandwiches, and more.",
    openGraph: {
      title: "Fresh Breads | Palisades Park Bakery",
      description:
        "Explore freshly baked breads made daily at Palisades Park Bakery.",
      type: "website",
    },
  },

  cakes: {
    title: "Custom Cakes | Palisades Park Bakery",
    description:
      "Discover our handcrafted cakes for birthdays, weddings, and special occasions. Custom designs available upon request.",
    openGraph: {
      title: "Custom Cakes | Palisades Park Bakery",
      description:
        "Order beautifully crafted cakes for any celebration at Palisades Park Bakery.",
      type: "website",
    },
  },

  pies: {
    title: "Homemade Pies | Palisades Park Bakery",
    description:
      "Enjoy our homemade pies baked with seasonal fruits and classic recipes. Perfect for holidays and family gatherings.",
    openGraph: {
      title: "Homemade Pies | Palisades Park Bakery",
      description:
        "Taste our classic and seasonal homemade pies, baked fresh daily.",
      type: "website",
    },
  },

  cookies: {
    title: "Fresh Cookies | Palisades Park Bakery",
    description:
      "Indulge in our freshly baked cookies made with premium ingredients. Soft, chewy, and perfect for any time of day.",
    openGraph: {
      title: "Fresh Cookies | Palisades Park Bakery",
      description: "Enjoy freshly baked cookies from Palisades Park Bakery.",
      type: "website",
    },
  },
};
