import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Background, technical strengths, and working approach of a ${site.role}.`,
};

const strengths = [
  "GoHighLevel: websites, funnels, workflows, pipelines, calendars, forms, Conversation AI",
  "Web development and responsive design",
  "Digital marketing, SEO, and social media management",
  "CRM management and business process automation",
  "SaaS configuration and agency sub-account support",
  "Third-party integrations via webhooks, Make, and Zapier",
];

const problems = [
  {
    title: "Leads falling through the cracks",
    body: "Enquiries arrive and nobody follows up fast enough, or at all. I build speed-to-lead and nurture systems so every lead gets a timely, consistent response.",
  },
  {
    title: "Operations stuck in manual mode",
    body: "Scheduling, intake, reminders, and handoffs eaten by copy-paste work. I move those into workflows so people only touch what needs judgment.",
  },
  {
    title: "A CRM nobody trusts",
    body: "Inconsistent fields, tag sprawl, pipelines that don't match reality. I design conventions and clean structures that stay clean at scale.",
  },
  {
    title: "Tools that don't talk to each other",
    body: "Lead data stranded across platforms. I connect them with webhooks and integrations so there's one system of record.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-content py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          About me
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600">
          I&apos;m a {site.role.toLowerCase()} — a{" "}
          {site.association.toLowerCase()}. My background spans web
          development, digital marketing, SEO, social media management, SaaS
          development, CRM management, and business process automation.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          That mix matters: GoHighLevel work sits at the intersection of
          marketing, operations, and technology. The best automations come
          from understanding all three — what the message should say, how the
          process should run, and how to make the platform actually do it.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900">
          Technical strengths
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {strengths.map((s) => (
            <li key={s} className="flex items-start gap-3 text-zinc-700">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                aria-hidden="true"
              />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900">
          The problems I help solve
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-zinc-200 bg-white p-6"
            >
              <h3 className="font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-zinc-900">Who I work with</h2>
        <p className="mt-4 leading-relaxed text-zinc-600">
          I support agencies running GHL for their clients, growing businesses
          using it as their CRM and marketing engine, and entrepreneurs who
          need their first proper lead-capture and follow-up system. Whether
          it&apos;s a one-off build, a rescue of a system that&apos;s drifted,
          or ongoing support, the goal is the same: systems your team
          understands and trusts.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 font-semibold text-white hover:bg-accent-700"
        >
          Work with me <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
