import type { Metadata } from "next";
import { ArrowUpRight, CalendarClock, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss a GoHighLevel project — book a call or reach out directly about CRM setup, workflow automation, funnels, integrations, or ongoing support.",
};

export default function ContactPage() {
  return (
    <div className="container-content py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Whether it&apos;s a new GHL build, a system that needs rescuing, or
            ongoing support — describe what you&apos;re trying to achieve and
            I&apos;ll come back with an honest take on how to get there.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow icon={<Mail className="h-5 w-5" />} label="Email">
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-accent-700 hover:underline"
              >
                {site.email}
              </a>
            </ContactRow>
            <ContactRow icon={<Linkedin className="h-5 w-5" />} label="LinkedIn">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-700 hover:underline"
              >
                linkedin.com/in/cho-macdolf-766021292
              </a>
            </ContactRow>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-xl border border-accent-200 bg-accent-50 p-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-600 text-white">
            <CalendarClock className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-xl font-bold text-zinc-900">
            Book a call
          </h2>
          <p className="mt-2 text-zinc-600">
            The fastest way to get started — pick a time that suits you and
            we&apos;ll walk through your project together.
          </p>
          <a
            href={site.calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 font-semibold text-white hover:bg-accent-700"
          >
            Pick a time
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm text-zinc-500">
            Opens Google Calendar scheduling in a new tab.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
        {icon}
      </span>
      <div>
        <p className="text-sm text-zinc-500">{label}</p>
        {children}
      </div>
    </div>
  );
}
