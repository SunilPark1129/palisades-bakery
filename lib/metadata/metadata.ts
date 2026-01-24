import { Metadata } from "next";
export const CATEGORY_METADATA: Record<string, Metadata> = {
  breads: {
    title: "Fresh Breads | Palisades Park Bakery",
    description:
      "Browse our selection of freshly baked breads made daily with high-quality ingredients. Perfect for breakfast, sandwiches, and more.",
    keywords: ["fresh breads", "bakery near me", "Palisades Park bread"],
    openGraph: {
      title: "Fresh Breads | Palisades Park Bakery",
      description:
        "Explore freshly baked breads made daily at Palisades Park Bakery.",
      type: "website",
      images: ["/images/main-hero-og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Breads | Palisades Park Bakery",
      description:
        "Explore freshly baked breads made daily at Palisades Park Bakery.",
      images: ["/images/main-hero-og.jpg"],
    },
  },

  cakes: {
    title: "Cakes | Palisades Park Bakery",
    description:
      "Discover our handcrafted cakes for birthdays, weddings, and special occasions. Custom designs available upon request.",
    keywords: ["custom cakes", "nj bakery cakes", "order birthday cake"],
    openGraph: {
      title: "Cakes | Palisades Park Bakery",
      description:
        "Order beautifully crafted cakes for any celebration at Palisades Park Bakery.",
      type: "website",
      images: ["/images/main-hero-og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cakes | Palisades Park Bakery",
      description:
        "Order beautifully crafted cakes for any celebration at Palisades Park Bakery.",
      images: ["/images/main-hero-og.jpg"],
    },
  },

  pies: {
    title: "Pies | Palisades Park Bakery",
    description:
      "Enjoy our homemade pies baked with seasonal fruits and classic recipes. Perfect for holidays and family gatherings.",
    keywords: ["homemade pies", "fruit pies", "freshly baked pies"],
    openGraph: {
      title: "Pies | Palisades Park Bakery",
      description:
        "Taste our classic and seasonal homemade pies, baked fresh daily.",
      type: "website",
      images: ["/images/main-hero-og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Pies | Palisades Park Bakery",
      description:
        "Taste our classic and seasonal homemade pies, baked fresh daily.",
      images: ["/images/main-hero-og.jpg"],
    },
  },

  cookies: {
    title: "Cookies | Palisades Park Bakery",
    description:
      "Indulge in our freshly baked cookies made with premium ingredients. Soft, chewy, and perfect for any time of day.",
    keywords: [
      "chocolate chip cookies",
      "bakery cookies",
      "handmade snacks",
      "custom cookie sets",
    ],
    openGraph: {
      title: "Cookies | Palisades Park Bakery",
      description: "Enjoy freshly baked cookies from Palisades Park Bakery.",
      type: "website",
      images: ["/images/main-hero-og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cookies | Palisades Park Bakery",
      description: "Enjoy freshly baked cookies from Palisades Park Bakery.",
      images: ["/images/main-hero-og.jpg"],
    },
  },
};
