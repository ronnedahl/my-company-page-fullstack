import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/booking",
    },
    sitemap: "https://webbkraft.net/sitemap.xml",
  };
}
