"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { MoreHorizontal, Star } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getAnalyticsReports } from "@/lib/api";

type Report = {
  name: string;
  lastUpdated?: string;
  type?: string;
  version?: string | number;
  labels?: string[];
  displayIndicator?: string; // 'AsFavourite' or other
};

const LS_KEY = "analytics.favorites:v1";

function useFavorites() {
  const [favSet, setFavSet] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return new Set(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      return new Set<string>();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(Array.from(favSet)));
    } catch {}
  }, [favSet]);

  const isFav = useCallback((name: string) => favSet.has(name), [favSet]);
  const add = useCallback((name: string) => setFavSet(s => new Set(s).add(name)), []);
  const remove = useCallback((name: string) => setFavSet(s => {
    const n = new Set(s);
    n.delete(name);
    return n;
  }), []);

  const toggle = useCallback((name: string) => {
    setFavSet(s => {
      const n = new Set(s);
      if (n.has(name)) n.delete(name);
      else n.add(name);
      return n;
    });
  }, []);

  return { isFav, add, remove, toggle };
}

export default function Analytics() {
  const [reports, setReports] = useState<Report[]>([]);
  const { isFav, toggle } = useFavorites();

  useEffect(() => {
    let alive = true;
    (async () => {
      const [list] = await Promise.all([getAnalyticsReports()]);
      if (!alive) return;
      setReports((Array.isArray(list) ? list : []) as unknown as Report[]);
    })();
    return () => {
      alive = false;
    };
  }, []);

  const withFavFlag = useMemo(() => {
    return reports.map(r => ({
      ...r,
      _fav: r.displayIndicator === "AsFavourite" || isFav(r.name),
    })) as (Report & { _fav: boolean })[];
  }, [reports, isFav]);

  const favorites = withFavFlag.filter(r => r._fav);
  const others = withFavFlag.filter(r => !r._fav);

  return (
    <div className="mx-auto w-full space-y-12">
      <section>
        <h2 className="text-xl font-semibold mb-3">Favorites</h2>
        {favorites.length === 0 ? (
          <div className="text-sm text-muted-foreground">No favorites yet.</div>
        ) : (
          <ul className="grid gap-3 md:grid-cols-4">
            {favorites.map(r => (
              <li key={r.name} className="rounded-md border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold truncate">{r.name}</div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Last Updated: {r.lastUpdated ?? "—"}
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => toggle(r.name)}>
                        Remove from favorites
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => navigator.clipboard?.writeText(r.name)}>
                        Copy name
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {r.labels ? (
                  <div className="mt-2 text-xs text-right">
                    {r.type} • v{r.version}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">All reports</h2>
        <ul className="grid gap-3 md:grid-cols-4">
          {others.map(r => (
            <li key={r.name} className="rounded-md border p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-semibold truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Last Updated: {r.lastUpdated ?? "—"}
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent">
                    <MoreHorizontal className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => toggle(r.name)}>
                      Add to favorites
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigator.clipboard?.writeText(r.name)}>
                      Copy name
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {r.labels ? (
                <div className="mt-2 text-xs text-right">
                  {r.type} • v{r.version}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
