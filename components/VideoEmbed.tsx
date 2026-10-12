import { ExternalLink } from "lucide-react";
import type { Video } from "@/lib/projects";

function embedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("loom.com")) {
      // https://www.loom.com/share/<id> → /embed/<id>
      const id = u.pathname.split("/").filter(Boolean).pop();
      if (id) return `https://www.loom.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1);
      if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
    }
  } catch {
    return null;
  }
  return null;
}

/** Responsive Loom/YouTube embed with a plain-link fallback for anything else. */
export default function VideoEmbed({ video }: { video: Video }) {
  const src = embedUrl(video.url);

  if (!src) {
    return (
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-700 hover:border-zinc-400"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        Watch: {video.title}
      </a>
    );
  }

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100">
        <iframe
          src={src}
          title={video.title}
          loading="lazy"
          allowFullScreen
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <figcaption className="mt-2 text-sm text-zinc-500">
        {video.title}
      </figcaption>
    </figure>
  );
}
