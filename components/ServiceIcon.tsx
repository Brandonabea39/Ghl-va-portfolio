import {
  Bot,
  Building2,
  CalendarCheck,
  Database,
  Globe,
  KanbanSquare,
  MessageSquareText,
  Plug,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Bot,
  Building2,
  CalendarCheck,
  Database,
  Globe,
  KanbanSquare,
  MessageSquareText,
  Plug,
  Workflow,
  Wrench,
};

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Workflow;
  return <Icon className={className} aria-hidden="true" />;
}
