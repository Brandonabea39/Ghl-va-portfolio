import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { publishedProjects } from "@/lib/projects";
import Lightbox from "@/components/Lightbox";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Media Gallery",
  description:
    "Screenshots and video walkthroughs of GoHighLevel builds: workflows, funnels, websites, pipelines, forms, and integrations — organized by project.",
};

export default function MediaPage() {
  const projects = publishedProjects();
  const withMedia = projects.filter(
    (p) => p.screenshots.length > 0 || p.videos.length > 0
  );
  const liveOnly = projects.filter(
    (p) => p.screenshots.length === 0 && p.videos.length === 0 && p.liveUrl
  );

  return (
    <div className="container-content py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Media gallery
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Screenshots and video walkthroughs of real builds, organized by
          project. Each item links back to its full case study.
        </p>
      </div>

      {withMedia.length === 0 && (
        <div className="mt-10 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8">
          <h2 className="font-semibold text-zinc-900">
            Screenshots and walkthrough videos are being prepared
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            Rather than filling this page with stock images, it stays honest:
            media appears here as soon as each build&apos;s screenshots and
            Loom walkthroughs are added. The live website builds below are
            viewable right now.
          </p>
        </div>
      )}

      {withMedia.map((p) => (
        <section key={p.id} className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-bold text-zinc-900">{p.title}</h2>
            <Link
              href={`/projects/${p.slug}`}
              className="text-sm font-semibold text-accent-700 hover:text-accent-800"
            >
              View case study
            </Link>
          </div>
          {p.screenshots.length > 0 && (
            <div className="mt-5">
              <Lightbox shots={p.screenshots} />
            </div>
          )}
          {p.videos.length > 0 && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {p.videos.map((v) => (
                <VideoEmbed key={v.url} video={v} />
              ))}
            </div>
          )}
        </section>
      ))}

      {liveOnly.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-zinc-900">
            Live builds you can open now
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {liveOnly.map((p) => (
              <li key={p.id}>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-800 hover:border-accent-300"
                >
                  {p.title}
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-zinc-400"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
