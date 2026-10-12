"use client";

import { useMemo, useState } from "react";
import { categories, type Category, type Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | "All">("All");

  const counts = useMemo(() => {
    const c = new Map<string, number>();
    for (const p of projects) c.set(p.category, (c.get(p.category) ?? 0) + 1);
    return c;
  }, [projects]);

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        <FilterButton
          label={`All (${projects.length})`}
          active={active === "All"}
          onClick={() => setActive("All")}
        />
        {categories
          .filter((c) => (counts.get(c) ?? 0) > 0)
          .map((c) => (
            <FilterButton
              key={c}
              label={`${c} (${counts.get(c)})`}
              active={active === c}
              onClick={() => setActive(c)}
            />
          ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-zinc-500">No projects in this category yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-accent-600 bg-accent-600 text-white"
          : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
      }`}
    >
      {label}
    </button>
  );
}
