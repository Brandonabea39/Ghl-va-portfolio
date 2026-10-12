import Link from "next/link";
import { ArrowUpRight, Camera, ExternalLink, PlayCircle } from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectThumb from "./ProjectThumb";

export default function ProjectCard({ project }: { project: Project }) {
  const hasMedia = project.screenshots.length > 0 || project.videos.length > 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md">
      <Link href={`/projects/${project.slug}`} aria-label={project.title}>
        <ProjectThumb project={project} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-zinc-100 px-2.5 py-1 font-medium text-zinc-600">
            {project.category}
          </span>
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2.5 py-1 font-medium text-accent-700">
              <ExternalLink className="h-3 w-3" aria-hidden="true" /> Live preview
            </span>
          )}
          {project.illustrative && (
            <span className="rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700">
              Illustrative example
            </span>
          )}
        </div>

        <h3 className="mt-3 font-semibold text-zinc-900">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent-700"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-600">
          {project.summary}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
          >
            View case study
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {hasMedia && (
            <span className="inline-flex items-center gap-2 text-zinc-400">
              {project.screenshots.length > 0 && (
                <Camera className="h-4 w-4" aria-label="Screenshots available" />
              )}
              {project.videos.length > 0 && (
                <PlayCircle className="h-4 w-4" aria-label="Video available" />
              )}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
