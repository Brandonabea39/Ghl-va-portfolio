/**
 * Service catalog. `delivered: true` marks services backed by work shown in
 * the project library; the rest are offered capabilities and are labeled as
 * such on the services page — the distinction is rendered, not implied.
 */

export interface Service {
  id: string;
  title: string;
  icon: string; // lucide icon name, resolved in components/ServiceIcon.tsx
  description: string;
  problem: string;
  examples: string[];
  value: string;
  delivered: boolean;
}

export const services: Service[] = [
  {
    id: "crm-setup",
    title: "GoHighLevel CRM Setup & Management",
    icon: "Database",
    description:
      "Full CRM configuration — contacts, custom fields, tags, smart lists, and the conventions that keep data clean as the business grows.",
    problem:
      "A CRM nobody trusts because fields are inconsistent, tags multiply, and duplicates pile up.",
    examples: [
      "Custom field and picklist design",
      "Tagging conventions and cleanup",
      "Smart lists for daily working views",
      "Duplicate prevention and merge policies",
    ],
    value:
      "A CRM the whole team can rely on as the single source of truth.",
    delivered: true,
  },
  {
    id: "workflows",
    title: "Workflow Automation & Lead Nurturing",
    icon: "Workflow",
    description:
      "Multi-step workflows for follow-up, nurture, and internal operations — triggers, waits, conditions, and clean exits.",
    problem:
      "Leads going cold because follow-up depends on someone remembering to do it.",
    examples: [
      "New-lead speed-to-response sequences",
      "Multi-touch nurture cadences with engagement checks",
      "Internal notification and task-creation flows",
      "Re-engagement sequences for stale leads",
    ],
    value:
      "Every lead gets consistent, timely follow-up without manual effort.",
    delivered: true,
  },
  {
    id: "funnels-websites",
    title: "Sales Funnels & Website Development",
    icon: "Globe",
    description:
      "Websites, landing pages, and funnels built in the GHL builder — designed to look professional and wired to capture leads into the CRM.",
    problem:
      "A web presence that looks dated or lives outside the CRM, so leads arrive untracked.",
    examples: [
      "Full business websites in the GHL builder (see the six live demo builds in the project library)",
      "Landing pages and multi-step funnels",
      "Lead-capture sections wired to workflows",
      "Mobile-responsive layouts",
    ],
    value:
      "A professional web presence where every visitor action lands in the CRM.",
    delivered: true,
  },
  {
    id: "forms-calendars",
    title: "Forms, Surveys, Calendars & Appointment Automation",
    icon: "CalendarCheck",
    description:
      "Intake forms, surveys, and booking calendars with confirmation and reminder sequences.",
    problem:
      "Hours lost to scheduling back-and-forth, and revenue lost to no-shows.",
    examples: [
      "Booking calendars with team round-robin",
      "Pre-call intake forms that write to contact records",
      "Reminder and no-show recovery sequences",
      "Survey-based lead qualification",
    ],
    value:
      "Self-serve scheduling and fewer no-shows, with context captured before every call.",
    delivered: true,
  },
  {
    id: "pipelines",
    title: "Pipelines, Custom Fields, Tags & Contact Management",
    icon: "KanbanSquare",
    description:
      "Pipeline design that mirrors the real sales process, with stages, fields, and automations that keep it accurate.",
    problem:
      "A pipeline that doesn't reflect reality, so forecasting is guesswork.",
    examples: [
      "Stage design with clear entry/exit criteria",
      "Automated stage movement from engagement signals",
      "Opportunity hygiene automations",
      "Reporting-ready field structures",
    ],
    value:
      "A pipeline that tells the truth about where revenue stands.",
    delivered: true,
  },
  {
    id: "integrations",
    title: "Third-Party Integrations & Webhooks",
    icon: "Plug",
    description:
      "Connecting GHL to the rest of the stack — inbound/outbound webhooks, API work, and middleware via Make or Zapier.",
    problem:
      "Data trapped in disconnected tools, re-entered by hand and often wrong.",
    examples: [
      "Inbound webhooks for external lead sources",
      "Outbound webhooks for data sync",
      "Make / Zapier scenarios where no native integration exists",
      "Payload mapping documented for future maintainers",
    ],
    value:
      "One connected system instead of a pile of disconnected tools.",
    delivered: false,
  },
  {
    id: "ai-automation",
    title: "AI-Powered Automation & Conversational Workflows",
    icon: "Bot",
    description:
      "GHL Conversation AI and AI-assisted workflows for first-line response and triage, with designed human-handoff boundaries.",
    problem:
      "Enquiries arriving at all hours that nobody can answer fast enough.",
    examples: [
      "Conversation AI for FAQ and qualification",
      "AI-assisted booking flows",
      "Human-handoff rules for sensitive or low-confidence conversations",
    ],
    value:
      "Instant first response, around the clock, without losing the human touch.",
    delivered: false,
  },
  {
    id: "email-sms",
    title: "Email & SMS Automation",
    icon: "MessageSquareText",
    description:
      "Campaigns and automated sequences across email and SMS — templates, scheduling, and deliverability basics.",
    problem:
      "Sporadic, manual outreach that stops the moment things get busy.",
    examples: [
      "Nurture and onboarding sequences",
      "Broadcast campaigns with clean segmentation",
      "Template systems for consistent branding",
    ],
    value:
      "Consistent communication that runs whether or not the week got busy.",
    delivered: false,
  },
  {
    id: "saas-agency",
    title: "SaaS Configuration & Agency Support",
    icon: "Building2",
    description:
      "Sub-account setup, snapshots, and ongoing support for agencies running GHL in SaaS mode.",
    problem:
      "Agencies spending delivery hours on repetitive sub-account setup.",
    examples: [
      "Sub-account provisioning and snapshot deployment",
      "White-label configuration",
      "Client onboarding checklists and SOPs",
    ],
    value:
      "Faster client onboarding and consistent delivery across accounts.",
    delivered: false,
  },
  {
    id: "troubleshooting",
    title: "GHL Troubleshooting & System Optimization",
    icon: "Wrench",
    description:
      "Diagnosing broken automations, cleaning up legacy configurations, and tuning systems that have drifted.",
    problem:
      "Workflows that silently stopped firing, and nobody knows why.",
    examples: [
      "Workflow audits and failure diagnosis",
      "Legacy automation cleanup",
      "Performance and deliverability reviews",
    ],
    value:
      "A system that works again — and documentation so it stays that way.",
    delivered: false,
  },
];
