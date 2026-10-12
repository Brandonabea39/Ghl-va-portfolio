import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="container-content flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-semibold text-zinc-900">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-600">{site.role}</p>
          <p className="mt-3 text-sm text-zinc-500">{site.association}</p>
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="text-zinc-600 hover:text-zinc-900"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-600 hover:text-zinc-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-zinc-200 py-4">
        <p className="container-content text-xs text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
