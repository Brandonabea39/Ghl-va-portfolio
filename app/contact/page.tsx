import type { Metadata } from "next";
import { CalendarClock, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about a GoHighLevel project, or view my shared calendar. Reach out about CRM setup, workflow automation, funnels, integrations, or ongoing support.",
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

        <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm" aria-labelledby="calendar-heading">
          <div className="flex items-start gap-4 border-b border-zinc-100 p-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
              <CalendarClock className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 id="calendar-heading" className="text-xl font-bold text-zinc-900">
                Shared calendar
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                View upcoming events and dates in my calendar.
              </p>
            </div>
          </div>
          <iframe
            src={site.calendarEmbedUrl}
            title={`${site.personName}'s Google Calendar`}
            className="h-[600px] w-full border-0 bg-white"
            loading="lazy"
            scrolling="no"
          />
        </section>
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
