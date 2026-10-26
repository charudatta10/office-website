import { MetadataRoute } from "next";
import { SITE_URL, withBasePath } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [withBasePath("/settings"), withBasePath("/api/")],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
