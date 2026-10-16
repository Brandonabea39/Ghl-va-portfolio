/**
 * Project/case-study data store.
 *
 * To add a project: append an object to `projects` below. See
 * README.md ("Managing content") for the full field guide.
 *
 * Honesty rules baked into the rendering:
 *  - `illustrative: true` renders an "Illustrative example" badge on the
 *    card and case-study page. Use it for representative implementation
 *    patterns that are not a specific named client engagement.
 *  - `published: false` keeps a project out of every list and out of the
 *    sitemap — use it to draft case studies before they go live.
 *  - `results.measured` vs `results.intended` are rendered separately so
 *    measured outcomes are never mixed with expected benefits.
 */

export type Category =
  | "Websites & Funnels"
  | "Workflows & Automation"
  | "CRM & Pipelines"
  | "Forms & Calendars"
  | "Integrations & Webhooks"
  | "AI Automation";

export const categories: Category[] = [
  "Websites & Funnels",
  "Workflows & Automation",
  "CRM & Pipelines",
  "Forms & Calendars",
  "Integrations & Webhooks",
  "AI Automation",
];

export interface Screenshot {
  /** Path under /public, e.g. "/images/projects/restaurant/home.png" */
  src: string;
  alt: string;
  caption?: string;
}

export interface Video {
  /** Loom share URL or YouTube watch URL */
  url: string;
  title: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  summary: string;
  /** Business context / scenario */
  context?: string;
  problem?: string;
  objectives?: string[];
  role?: string;
  tools: string[];
  implementation?: string[];
  /** Workflow logic rendered as a step sequence */
  workflow?: string[];
  screenshots: Screenshot[];
  videos: Video[];
  /** Live, publicly viewable build */
  liveUrl?: string;
  results?: {
    measured?: string[];
    intended?: string[];
  };
  lessons?: string[];
  featured?: boolean;
  published: boolean;
  /** Representative pattern, not a specific named client engagement */
  illustrative?: boolean;
}

export const projects: Project[] = [
  // ——— Live demo website builds (carried over from the existing portfolio; preview links verified live) ———
  {
    id: "site-restaurant",
    slug: "restaurant-website",
    title: "Restaurant Website Build",
    category: "Websites & Funnels",
    summary:
      "A complete restaurant website designed and built in the GoHighLevel site builder — menu presentation, location details, and a clear path to booking.",
    context:
      "Demo build showcasing a restaurant web presence done entirely inside GoHighLevel, so the business runs its site, forms, and follow-up from one platform.",
    role: "Design and full build in the GHL website builder.",
    tools: ["GoHighLevel Websites", "GHL Forms", "Responsive design"],
    screenshots: [],
    videos: [],
    liveUrl: "https://app.gohighlevel.com/v2/preview/73mW9lpRnAiBXNUjxOHr",
    results: {
      intended: [
        "Give a restaurant a professional web presence without a separate CMS",
        "Capture reservations and enquiries directly into the GHL CRM",
      ],
    },
    featured: true,
    published: true,
  },
  {
    id: "site-gym",
    slug: "gym-fitness-website",
    title: "Gym & Fitness Website Build",
    category: "Websites & Funnels",
    summary:
      "A fitness studio website built in GoHighLevel with class/program presentation and lead-capture sections designed to feed the CRM.",
    role: "Design and full build in the GHL website builder.",
    tools: ["GoHighLevel Websites", "GHL Forms", "Responsive design"],
    screenshots: [],
    videos: [],
    liveUrl: "https://link.storvelo.com/preview/R9wtbsG04OAvYIzVUr3a",
    results: {
      intended: [
        "Present programs and trainers clearly on desktop and mobile",
        "Route trial-session enquiries straight into a follow-up pipeline",
      ],
    },
    featured: true,
    published: true,
  },
  {
    id: "site-realestate",
    slug: "real-estate-website",
    title: "Real Estate Website Build",
    category: "Websites & Funnels",
    summary:
      "A real-estate web presence built in GoHighLevel, structured around listings presentation and buyer/seller enquiry capture.",
    role: "Design and full build in the GHL website builder.",
    tools: ["GoHighLevel Websites", "GHL Forms", "Responsive design"],
    screenshots: [],
    videos: [],
    liveUrl: "https://app.gohighlevel.com/v2/preview/cGuYRPVZh4n1P3Z0UOTB",
    results: {
      intended: [
        "Give agents a listings-ready site inside the platform they already use",
        "Capture buyer and seller enquiries with source attribution",
      ],
    },
    published: true,
  },
  {
    id: "site-healthcare",
    slug: "healthcare-website",
    title: "Healthcare Website Build",
    category: "Websites & Funnels",
    summary:
      "A healthcare practice website built in GoHighLevel with service pages and appointment-request capture.",
    role: "Design and full build in the GHL website builder.",
    tools: ["GoHighLevel Websites", "GHL Forms", "GHL Calendars"],
    screenshots: [],
    videos: [],
    liveUrl: "https://link.storvelo.com/preview/XmiEVzRlOJTEMMujhGfQ",
    results: {
      intended: [
        "Present services with the clarity patients expect",
        "Turn appointment requests into calendar bookings automatically",
      ],
    },
    published: true,
  },
  {
    id: "site-wellness",
    slug: "mental-health-wellness-website",
    title: "Mental Health & Wellness Website Build",
    category: "Websites & Funnels",
    summary:
      "A calm, trust-focused wellness practice website built in GoHighLevel, designed around approachability and easy first contact.",
    role: "Design and full build in the GHL website builder.",
    tools: ["GoHighLevel Websites", "GHL Forms", "Responsive design"],
    screenshots: [],
    videos: [],
    liveUrl: "https://app.gohighlevel.com/v2/preview/5puWImb7g7rT8UA6XnE7",
    results: {
      intended: [
        "Lower the barrier for a first enquiry with a gentle, uncluttered design",
        "Keep intake and follow-up inside one system",
      ],
    },
    published: true,
  },
  {
    id: "site-fashion",
    slug: "fashion-website",
    title: "Fashion Brand Website Build",
    category: "Websites & Funnels",
    summary:
      "A visual-first fashion brand website built in GoHighLevel, led by imagery and collection presentation.",
    role: "Design and full build in the GHL website builder.",
    tools: ["GoHighLevel Websites", "Responsive design"],
    screenshots: [],
    videos: [],
    liveUrl: "https://link.storvelo.com/preview/3SJ62rOuj41mQJE2Dyyf",
    results: {
      intended: [
        "Showcase collections with a strong visual hierarchy",
        "Grow an email/SMS audience through integrated capture",
      ],
    },
    featured: true,
    published: true,
  },

  // ——— Illustrative implementation patterns (clearly badged on the site) ———
  {
    id: "wf-lead-followup",
    slug: "automated-lead-follow-up",
    title: "Automated Lead Follow-Up System",
    category: "Workflows & Automation",
    summary:
      "A GHL workflow pattern that follows up with new enquiries over several days, checks engagement, and updates lead status — so no lead goes cold from silence.",
    context:
      "Service businesses routinely lose leads not to competitors but to slow follow-up. This pattern answers every enquiry within minutes and keeps a structured cadence going without manual effort.",
    problem:
      "Enquiries arrive at all hours; manual follow-up is inconsistent and leads quietly go stale.",
    objectives: [
      "Respond to every new enquiry immediately",
      "Maintain a multi-touch cadence without manual work",
      "Keep pipeline stages accurate as leads engage or go quiet",
    ],
    role: "Workflow architecture, build, and testing in the GHL workflow builder.",
    tools: [
      "GHL Workflows",
      "Email & SMS actions",
      "Wait / condition steps",
      "Pipelines",
      "Tags",
    ],
    workflow: [
      "Lead submits inquiry",
      "Contact is created or updated",
      "Instant acknowledgement (email + SMS) is sent",
      "Conditional wait period",
      "Engagement is checked (reply, click, or booking)",
      "Engaged → pipeline stage advances and the owner is notified",
      "Not engaged → next follow-up message is sent",
      "After the final touch, lead status is updated and the lead exits the workflow",
    ],
    screenshots: [
      { src: "/images/workflows/lead-follow-up.svg", alt: "Illustrative lead follow-up workflow map showing enquiry capture, instant reply, engagement checks and pipeline updates.", caption: "Illustrative workflow map — enquiry through timely follow-up and pipeline update." },
    ],
    videos: [],
    results: {
      intended: [
        "Every lead receives a response within minutes, around the clock",
        "Pipeline stages stay accurate without manual bookkeeping",
      ],
    },
    illustrative: true,
    featured: true,
    published: true,
  },
  {
    id: "crm-pipeline",
    slug: "crm-pipeline-system",
    title: "CRM & Pipeline System Setup",
    category: "CRM & Pipelines",
    summary:
      "A structured GHL CRM pattern: pipelines that mirror the real sales process, custom fields that capture what matters, and a tagging convention that stays clean at scale.",
    problem:
      "A CRM without conventions degrades fast — duplicate contacts, inconsistent tags, and pipelines nobody trusts.",
    objectives: [
      "Design pipeline stages around the business's actual sales process",
      "Define custom fields and picklists so data entry is consistent",
      "Establish a tagging convention the whole team can follow",
    ],
    role: "CRM architecture, field/tag design, pipeline configuration.",
    tools: ["GHL CRM", "Pipelines", "Custom fields", "Tags", "Smart lists"],
    implementation: [
      "Map the sales process into pipeline stages with clear entry/exit criteria",
      "Create custom fields with controlled picklist values instead of free text",
      "Define a minimal tag set and document when each tag applies",
      "Build smart lists for the views the team actually works from",
      "Set up duplicate-prevention rules on create",
    ],
    screenshots: [
      { src: "/images/workflows/crm-pipeline.svg", alt: "Illustrative CRM pipeline map showing five stages with ownership, qualification and follow-up actions.", caption: "Illustrative CRM map — stages and actions should reflect the real sales process." },
    ],
    videos: [],
    results: {
      intended: [
        "A pipeline the team trusts as the single source of truth",
        "Reporting that reflects reality because the data underneath is consistent",
      ],
    },
    illustrative: true,
    published: true,
  },
  {
    id: "int-webhooks",
    slug: "integrations-and-webhooks",
    title: "Third-Party Integrations & Webhooks",
    category: "Integrations & Webhooks",
    summary:
      "Connecting external platforms to GHL — inbound webhooks for lead capture, outbound webhooks for data sync, and middleware (Make/Zapier) where direct connections don't exist.",
    problem:
      "Lead and customer data scattered across tools that don't talk to each other means manual re-entry and missed follow-ups.",
    objectives: [
      "Capture leads from external sources directly into GHL",
      "Keep contact data in sync across platforms",
      "Avoid brittle, undocumented point-to-point glue",
    ],
    role: "Integration design, webhook configuration, payload mapping, end-to-end testing.",
    tools: ["GHL Webhooks", "GHL API", "Make", "Zapier", "Custom fields"],
    workflow: [
      "External platform fires an event (form submission, purchase, booking)",
      "Webhook delivers the payload to GHL or middleware",
      "Payload fields are mapped to GHL contact and custom fields",
      "Contact is created or updated (deduped by email/phone)",
      "A workflow is triggered for follow-up or internal notification",
    ],
    screenshots: [
      { src: "/images/workflows/integrations-webhooks.svg", alt: "Illustrative integration map showing an external event passing through a webhook, field mapping and contact matching into GoHighLevel.", caption: "Illustrative integration map — actual fields and safeguards depend on the connected tools." },
    ],
    videos: [],
    results: {
      intended: [
        "One system of record, with no manual re-entry between tools",
        "Documented field mappings a future admin can maintain",
      ],
    },
    illustrative: true,
    published: true,
  },
  {
    id: "ai-automation",
    slug: "ai-workflow-automation",
    title: "AI-Assisted Workflow Automation",
    category: "AI Automation",
    summary:
      "Using GHL's AI features and conversational automation for first-line responses and triage — with explicit human-handoff boundaries built in.",
    context:
      "AI handles the repetitive first mile (answering common questions, qualifying, booking); humans handle everything that needs judgment. The boundary is designed, not accidental.",
    objectives: [
      "Answer common enquiries instantly, 24/7",
      "Qualify and route conversations before a human touches them",
      "Hand off to a human cleanly whenever confidence is low or the topic is sensitive",
    ],
    role: "Conversation design, AI configuration, guardrail and handoff design.",
    tools: [
      "GHL Conversation AI",
      "Workflows",
      "Calendars",
      "Pipelines",
    ],
    workflow: [
      "Inbound message arrives (SMS, chat widget, or social)",
      "Conversation AI responds using the configured knowledge base",
      "Qualified intent → booking link offered and appointment created",
      "Low confidence or sensitive topic → conversation is assigned to a human with full context",
      "Outcome is logged on the contact for follow-up",
    ],
    screenshots: [
      { src: "/images/workflows/ai-workflow.svg", alt: "Illustrative AI workflow map showing conversation handling, qualification, booking and human escalation.", caption: "Illustrative AI map — the human escalation path is part of the design." },
    ],
    videos: [],
    results: {
      intended: [
        "Faster first response without losing the human touch where it matters",
        "A documented automation boundary the business controls",
      ],
    },
    illustrative: true,
    published: true,
  },
  {
    id: "forms-calendars",
    slug: "forms-calendars-appointments",
    title: "Forms, Calendars & Appointment Automation",
    category: "Forms & Calendars",
    summary:
      "Intake forms, surveys, and calendar configurations that turn 'can we find a time?' email chains into self-serve booking with automated reminders.",
    problem:
      "Manual scheduling wastes hours and no-shows erode the hours that remain.",
    objectives: [
      "Let prospects and clients book without back-and-forth",
      "Reduce no-shows with a reminder sequence",
      "Capture intake information before the call, not during it",
    ],
    role: "Form and calendar configuration, reminder workflow build.",
    tools: ["GHL Forms", "GHL Surveys", "GHL Calendars", "Workflows"],
    workflow: [
      "Prospect picks a time on the booking calendar",
      "Intake form captures context and writes it to the contact record",
      "Confirmation goes out immediately; reminders at 24h and 1h",
      "No-show → reschedule sequence starts automatically",
      "Showed → post-call follow-up workflow begins",
    ],
    screenshots: [
      { src: "/images/workflows/booking-reminders.svg", alt: "Illustrative appointment workflow map showing booking, intake capture, reminders and rescheduling or follow-up.", caption: "Illustrative appointment map — reminder timing can be tailored to the business." },
    ],
    videos: [],
    results: {
      intended: [
        "Scheduling handled end-to-end without manual coordination",
        "Fewer no-shows and better-prepared calls",
      ],
    },
    illustrative: true,
    published: true,
  },
];

export function publishedProjects(): Project[] {
  return projects.filter((p) => p.published);
}

export function featuredProjects(): Project[] {
  return publishedProjects().filter((p) => p.featured);
}

export function getProject(slug: string): Project | undefined {
  return publishedProjects().find((p) => p.slug === slug);
}
