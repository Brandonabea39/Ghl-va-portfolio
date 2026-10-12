import type { Metadata } from "next";
import { publishedProjects } from "@/lib/projects";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "GoHighLevel project library: live website builds, workflow automation, CRM systems, integrations, and AI automation case studies.",
};

export default function ProjectsPage() {
  const projects = publishedProjects();

  return (
    <div className="container-content py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Project library
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Live GoHighLevel website builds you can open right now, plus the
          implementation patterns I use for workflows, CRM systems,
          integrations, and AI automation. Projects marked{" "}
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-sm font-medium text-amber-700">
            Illustrative example
          </span>{" "}
          show a representative pattern rather than a specific named client
          engagement.
        </p>
      </div>

      <div className="mt-10">
        <ProjectGallery projects={projects} />
      </div>
    </div>
  );
}
