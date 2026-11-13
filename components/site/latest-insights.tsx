"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type InsightCard = {
  type: string;
  title: string;
  date: string;
  href?: string;
  image: string;
  imagePosition?: string;
};

export function LatestInsights({ items }: { items: InsightCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <div id="insights" className="relative mx-auto w-full max-w-7xl px-6 pb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-(--color-7)">Latest insights</h2>
        <div className="flex gap-3">
          <ArrowButton label="Previous insights" disabled={!canPrev} onClick={() => scrollByCard(-1)}>
            <ArrowLeft className="size-4" />
          </ArrowButton>
          <ArrowButton label="Next insights" disabled={!canNext} onClick={() => scrollByCard(1)}>
            <ArrowRight className="size-4" />
          </ArrowButton>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={item.title}
            data-card
            className="relative flex h-[295px] w-[85%] max-w-[317px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-md p-5 sm:w-[317px]"
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="317px"
              className="object-cover"
              style={{ objectPosition: item.imagePosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-(--color-3)/10 via-(--color-3)/40 to-(--color-3)/95" />
            <div className="relative space-y-2">
              <p className="text-sm font-semibold text-(--color-5)">
                {item.type} · {item.date}
              </p>
              <h3 className="text-xl/snug font-semibold text-(--color-7)">{item.title}</h3>
              <div className="pt-2">
                {item.href ? (
                  <Link
                    href={item.href as never}
                    className="inline-flex items-center gap-2 rounded-sm bg-(--color-7) px-4 py-2 text-sm font-semibold text-(--color-4) hover:opacity-90"
                  >
                    Read article <ArrowRight className="size-4" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center rounded-sm border border-(--color-7)/40 px-4 py-2 text-sm font-semibold text-(--color-7)/80">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArrowButton({
  label,
  disabled,
  onClick,
  children
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex size-11 items-center justify-center rounded-sm border border-(--color-7) text-(--color-7) transition-opacity hover:bg-(--color-7)/10 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-transparent"
    >
      {children}
    </button>
  );
}
