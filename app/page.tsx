import Link from "next/link";
import Image from "next/image";
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
      <section className="overflow-hidden border-b border-zinc-200 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-50 via-white to-white">
        <div className="container-content grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-14 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              {site.role}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.65rem]">
              GoHighLevel systems, workflows &amp; automation that work for your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-accent-800"
              >
                Explore my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-zinc-300 bg-white/70 px-6 py-3 font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-white"
              >
                Let&apos;s work together
              </Link>
            </div>
            <p className="mt-6 text-sm text-zinc-500">{site.association}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent-100/70 blur-2xl" aria-hidden="true" />
            <figure className="relative overflow-hidden rounded-2xl border border-white bg-zinc-900 shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-900/5">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/workflows/lead-follow-up.svg"
                  alt="Illustrative workflow map showing lead capture, a timely reply, engagement checks and pipeline updates."
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 bg-zinc-950 px-5 py-4 text-sm">
                <span className="font-medium text-white">A workflow built around the customer journey</span>
                <span className="shrink-0 rounded-full bg-amber-300/10 px-2.5 py-1 text-xs font-semibold text-amber-200">Illustrative map</span>
              </figcaption>
            </figure>
          </div>
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
