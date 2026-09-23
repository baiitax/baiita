import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mujaheedbaita.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...caseStudies.map((c) => ({
      url: `${base}/work/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
