import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Info } from "lucide-react";
import { getProject, publishedProjects } from "@/lib/projects";
import Lightbox from "@/components/Lightbox";
import VideoEmbed from "@/components/VideoEmbed";

export function generateStaticParams() {
  return publishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="container-content py-16 sm:py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-800"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to project library
      </Link>

      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-zinc-100 px-2.5 py-1 font-medium text-zinc-600">
            {project.category}
          </span>
          {project.illustrative && (
            <span className="rounded-full bg-amber-50 px-2.5 py-1 font-medium text-amber-700">
              Illustrative example
            </span>
          )}
        </div>
        <h1 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-600">{project.summary}</p>

        {project.illustrative && (
          <p className="mt-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            This case study documents a representative implementation pattern,
            not a specific named client engagement. Workflow steps are
            illustrative of how I structure this kind of build.
          </p>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700"
          >
            Open live preview
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="min-w-0 space-y-10">
          {project.context && (
            <Section title="Business context">
              <p>{project.context}</p>
            </Section>
          )}
          {project.problem && (
            <Section title="The problem">
              <p>{project.problem}</p>
            </Section>
          )}
          {project.objectives && project.objectives.length > 0 && (
            <Section title="Objectives">
              <ul className="list-inside list-disc space-y-1">
                {project.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Section>
          )}
          {project.implementation && project.implementation.length > 0 && (
            <Section title="Implementation">
              <ol className="list-inside list-decimal space-y-2">
                {project.implementation.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </Section>
          )}
          {project.workflow && project.workflow.length > 0 && (
            <Section title="Workflow logic">
              <ol className="space-y-0">
                {project.workflow.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-xs font-bold text-accent-700">
                        {i + 1}
                      </span>
                      {i < project.workflow!.length - 1 && (
                        <span className="w-px flex-1 bg-zinc-200" aria-hidden="true" />
                      )}
                    </div>
                    <p className="pb-5 pt-0.5 text-zinc-700">{step}</p>
                  </li>
                ))}
              </ol>
            </Section>
          )}

          <Section title="Screenshots">
            {project.screenshots.length > 0 ? (
              <Lightbox shots={project.screenshots} />
            ) : (
              <p className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4 text-sm text-zinc-500">
                Screenshots for this project are being prepared.
                {project.liveUrl &&
                  " In the meantime, the live preview above shows the full build."}
              </p>
            )}
          </Section>

          {project.videos.length > 0 && (
            <Section title="Video walkthrough">
              <div className="space-y-6">
                {project.videos.map((v) => (
                  <VideoEmbed key={v.url} video={v} />
                ))}
              </div>
            </Section>
          )}

          {project.results &&
            ((project.results.measured?.length ?? 0) > 0 ||
              (project.results.intended?.length ?? 0) > 0) && (
              <Section title="Results">
                {project.results.measured && project.results.measured.length > 0 && (
                  <>
                    <h3 className="font-semibold text-zinc-900">
                      Measured outcomes
                    </h3>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      {project.results.measured.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}
                {project.results.intended && project.results.intended.length > 0 && (
                  <>
                    <h3 className="mt-4 font-semibold text-zinc-900">
                      Intended business benefits
                    </h3>
                    <ul className="mt-2 list-inside list-disc space-y-1">
                      {project.results.intended.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-sm text-zinc-500">
                      Listed as design goals — not measured client metrics.
                    </p>
                  </>
                )}
              </Section>
            )}

          {project.lessons && project.lessons.length > 0 && (
            <Section title="Key decisions & lessons">
              <ul className="list-inside list-disc space-y-1">
                {project.lessons.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            {project.role && (
              <>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  My role
                </h2>
                <p className="mt-2 text-sm text-zinc-700">{project.role}</p>
              </>
            )}
            <h2 className="mt-5 text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Tools & features
            </h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-accent-200 bg-accent-50 p-6">
            <h2 className="font-semibold text-zinc-900">
              Want something like this?
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              I can build this for your business — adapted to your process,
              not copied from a template.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-700"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
      <div className="mt-3 leading-relaxed text-zinc-700">{children}</div>
    </section>
  );
}
