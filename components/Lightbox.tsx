"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "@/lib/projects";

/**
 * Screenshot grid with a keyboard-accessible lightbox.
 * Renders nothing when the list is empty — pages show their own empty state.
 */
export default function Lightbox({ shots }: { shots: Screenshot[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) => {
      setIndex((i) =>
        i === null ? i : (i + delta + shots.length) % shots.length
      );
    },
    [shots.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  if (shots.length === 0) return null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((s, i) => (
          <figure key={s.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="block w-full overflow-hidden rounded-lg border border-zinc-200"
              aria-label={`Open screenshot: ${s.alt}`}
            >
              <div className="relative aspect-[16/10] bg-zinc-100">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform hover:scale-[1.02]"
                />
              </div>
            </button>
            {s.caption && (
              <figcaption className="mt-2 text-sm text-zinc-500">
                {s.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={shots[index].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          {shots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous screenshot"
                className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <figure
            className="max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- full-size view, natural dimensions */}
            <img
              src={shots[index].src}
              alt={shots[index].alt}
              className="max-h-[80vh] w-auto rounded-lg"
            />
            <figcaption className="mt-3 text-center text-sm text-zinc-300">
              {shots[index].caption ?? shots[index].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
