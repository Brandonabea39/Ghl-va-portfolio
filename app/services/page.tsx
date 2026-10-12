import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "GoHighLevel services: CRM setup, workflow automation, funnels and websites, calendars, integrations, AI automation, and more.",
};

export default function ServicesPage() {
  const delivered = services.filter((s) => s.delivered);
  const offered = services.filter((s) => !s.delivered);

  return (
    <div className="container-content py-16 sm:py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Services
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Everything below runs inside GoHighLevel or connects to it. Services
          are grouped honestly: work demonstrated in the{" "}
          <Link href="/projects" className="font-medium text-accent-700 underline">
            project library
          </Link>{" "}
          first, then capabilities I offer beyond it.
        </p>
      </div>

      <h2 className="mt-14 text-xl font-bold text-zinc-900">
        Core services — backed by work in the project library
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {delivered.map((s) => (
          <ServiceCard key={s.id} serviceId={s.id} />
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold text-zinc-900">
        Additional capabilities
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-500">
        Areas I&apos;m equipped to deliver; public case studies for these are
        still being prepared.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {offered.map((s) => (
          <ServiceCard key={s.id} serviceId={s.id} />
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center">
        <h2 className="text-xl font-bold text-zinc-900">
          Not sure which of these you need?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-zinc-600">
          Describe the problem — slow follow-up, messy CRM, manual scheduling —
          and I&apos;ll map it to the right GHL solution.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 font-semibold text-white hover:bg-accent-700"
        >
          Describe your project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function ServiceCard({ serviceId }: { serviceId: string }) {
  const s = services.find((x) => x.id === serviceId)!;
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
          <ServiceIcon name={s.icon} className="h-5 w-5" />
        </span>
        <h3 className="font-semibold text-zinc-900">{s.title}</h3>
      </div>
      <p className="mt-3 text-sm text-zinc-600">{s.description}</p>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-medium text-zinc-800">Solves</dt>
          <dd className="text-zinc-600">{s.problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-800">Typical implementations</dt>
          <dd>
            <ul className="mt-1 list-inside list-disc text-zinc-600">
              {s.examples.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-800">Value</dt>
          <dd className="text-zinc-600">{s.value}</dd>
        </div>
      </dl>
    </div>
  );
}
