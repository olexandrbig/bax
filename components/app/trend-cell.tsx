"use client";

import {TrendingUp, TrendingDown, MoveRight} from "lucide-react";

export function TrendCell({ trend }: { trend: string }) {
  const t = String(trend || "").toUpperCase();

  if (t === "UP") {
    return (
      <span className="inline-flex items-center text-red-600" title="Up">
        <TrendingUp className="size-4" aria-hidden />
        <span className="sr-only">Up</span>
      </span>
    );
  }

  if (t === "DOWN") {
    return (
      <span className="inline-flex items-center text-emerald-600" title="Down">
        <TrendingDown className="size-4" aria-hidden />
        <span className="sr-only">Down</span>
      </span>
    );
  }

  if (t === "STABLE") {
    return (
      <span className="inline-flex items-center text-blue-600" title="Stable">
        <MoveRight className="size-4" aria-hidden />
        <span className="sr-only">Stable</span>
      </span>
    );
  }

  return <span className="text-muted-foreground">{trend}</span>;
}
