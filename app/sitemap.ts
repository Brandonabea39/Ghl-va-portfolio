import type { MetadataRoute } from "next";
import { publishedProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/projects", "/media", "/contact"].map(
    (p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
    })
  );
  const projectPages = publishedProjects().map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...projectPages];
}
