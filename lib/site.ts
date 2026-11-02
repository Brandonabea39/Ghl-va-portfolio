/**
 * Central site configuration. Everything personal lives here —
 * update this one file and the whole site follows.
 *
 * Fields left as empty strings are hidden on the site rather than faked.
 */
export const site = {
  name: "Macdolf's Portfolio",
  personName: "Cho Macdolf Ayong",
  role: "GoHighLevel Virtual Assistant & Automation Specialist",
  tagline:
    "GoHighLevel systems, workflows & automation that work for your business.",
  description:
    "I help agencies and growing businesses build streamlined CRM systems, conversion-focused funnels, and automated customer journeys using GoHighLevel.",
  association: "Certified GHL expert, associated with GHL Plugins",
  // Set when deployed, e.g. "https://portfolio.example.com" — used for sitemap/OG URLs.
  url: "https://ghl-va-portfolio.vercel.app",
  // Contact details — leave empty to hide. Never invent these.
  email: "Macdolf67166@gmail.com",
  linkedin: "https://www.linkedin.com/in/cho-macdolf-766021292",
  upwork: "",
  calendarLink: "webcal://p53-caldav.icloud.com/published/2/MjE2MDU4MDIzMjQyMTYwNWAHXkj2f0UQq619QKjzTvbRVobc2UTBsnNWvEgtKI1_TPNl47-RnLIza2Vd4O0fhLFsNG6w1GFytZqtuDnbUhE",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const;
