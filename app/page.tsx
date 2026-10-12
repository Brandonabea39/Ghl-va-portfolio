import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ServiceIcon from "@/components/ServiceIcon";

const approach = [
  {
    title: "Understand the business first",
    body: "Before touching GHL, I map how leads actually arrive, what follow-up looks like today, and where things fall through. Automation that ignores the real process just automates the mess.",
  },
  {
    title: "Build in small, testable pieces",
    body: "Workflows, pipelines, and integrations go live one piece at a time, each tested end-to-end with real scenarios before the next layer goes on.",
  },
  {
    title: "Document and hand over",
    body: "Every build comes with a plain-English explanation of what fires when, and why — so your team can run and adjust the system without me on retainer forever.",
  },
];

export default function HomePage() {
  const featured = featuredProjects().slice(0, 4);
  const coreServices = services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white">
        <div className="container-content py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">
            {site.role}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            GoHighLevel systems, workflows &amp; automation that work for your
            business.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 font-semibold text-white hover:bg-accent-700"
            >
              Explore my work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 font-semibold text-zinc-800 hover:border-zinc-400"
            >
              Let&apos;s work together
            </Link>
          </div>
          <p className="mt-6 text-sm text-zinc-500">{site.association}</p>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-content py-16 sm:py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-2 text-zinc-600">
              Live website builds and the implementation patterns I work from.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800 sm:inline-flex"
          >
            All projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 sm:hidden"
        >
          All projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* Services overview */}
      <section className="border-y border-zinc-100 bg-zinc-50">
        <div className="container-content py-16 sm:py-20">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            What I can build for you
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Everything inside GoHighLevel — from first lead capture to the
            automated follow-up that turns enquiries into booked calls.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-zinc-200 bg-white p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="mt-4 font-semibold text-zinc-900">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{s.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-1 font-semibold text-accent-700 hover:text-accent-800"
          >
            See all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="container-content py-16 sm:py-20">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          How I approach projects
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {approach.map((a, i) => (
            <div key={a.title}>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-zinc-900">{a.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-zinc-100 bg-zinc-900">
        <div className="container-content flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a GHL project in mind?
            </h2>
            <p className="mt-2 max-w-xl text-zinc-300">
              Tell me what you&apos;re trying to automate or fix, and I&apos;ll
              tell you honestly whether and how GHL can do it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 font-semibold text-white hover:bg-accent-400"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
