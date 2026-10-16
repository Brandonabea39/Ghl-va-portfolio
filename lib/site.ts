/**
 * Central site configuration. Everything personal lives here —
 * update this one file and the whole site follows.
 *
 * Fields left as empty strings are hidden on the site rather than faked.
 */
export const site = {
  name: "My Portfolio",
  role: "GoHighLevel Virtual Assistant & Automation Specialist",
  tagline:
    "GoHighLevel systems, workflows & automation that work for your business.",
  description:
    "I help agencies and growing businesses build streamlined CRM systems, conversion-focused funnels, and automated customer journeys using GoHighLevel.",
  association: "Certified GHL expert, associated with GHL Plugins",
  // Set when deployed, e.g. "https://portfolio.example.com" — used for sitemap/OG URLs.
  url: "https://ghl-va-portfolio.vercel.app",
  // Contact details — leave empty to hide. Never invent these.
  email: "brandonabea39@gmail.com",
  linkedin: "https://www.linkedin.com/in/abeabrandon/",
  upwork: "",
  calendarLink: "https://calendar.app.google/PPpBqN414yVXSp5J7",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const;
