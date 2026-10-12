import Image from "next/image";
import {
  Bot,
  Globe,
  KanbanSquare,
  CalendarCheck,
  Plug,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Category, Project } from "@/lib/projects";

const categoryIcon: Record<Category, LucideIcon> = {
  "Websites & Funnels": Globe,
  "Workflows & Automation": Workflow,
  "CRM & Pipelines": KanbanSquare,
  "Forms & Calendars": CalendarCheck,
  "Integrations & Webhooks": Plug,
  "AI Automation": Bot,
};

const categoryTint: Record<Category, string> = {
  "Websites & Funnels": "from-accent-50 to-accent-100 text-accent-700",
  "Workflows & Automation": "from-sky-50 to-sky-100 text-sky-700",
  "CRM & Pipelines": "from-violet-50 to-violet-100 text-violet-700",
  "Forms & Calendars": "from-amber-50 to-amber-100 text-amber-700",
  "Integrations & Webhooks": "from-rose-50 to-rose-100 text-rose-700",
  "AI Automation": "from-emerald-50 to-emerald-100 text-emerald-700",
};

/**
 * Renders the project's first screenshot when one exists; otherwise a
 * tasteful category-tinted placeholder. Placeholders never pretend to be
 * screenshots — they show the category icon, not fake UI.
 */
export default function ProjectThumb({ project }: { project: Project }) {
  const shot = project.screenshots[0];
  if (shot) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl bg-zinc-100">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    );
  }
  const Icon = categoryIcon[project.category];
  return (
    <div
      className={`flex aspect-[16/10] items-center justify-center rounded-t-xl bg-gradient-to-br ${categoryTint[project.category]}`}
    >
      <Icon className="h-10 w-10 opacity-70" aria-hidden="true" />
    </div>
  );
}
