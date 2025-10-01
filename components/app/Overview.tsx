"use client";

import { useEffect, useState, useCallback } from "react";
import {
  getSourcesStatus,
  getDataIssuesTables,
  getDataIssuesInstruments,
} from "@/lib/api";
import { InstrumentsLineChart } from "@/components/charts/instruments-line";
import { TrendCell } from "@/components/app/trend-cell";

type Source = { name: string; status: "green" | "yellow" | "red" };
type TableRow = {
  Table: string;
  Importance: string;
  Layer: string;
  Issues: number;
  Trend: "UP" | "DOWN" | "STABLE";
  Solved24: number;
  Created24: number;
};
type SeriesPoint = { date: string; value: number };

export default function Overview() {
  const [sources, setSources] = useState<Source[]>([]);
  const [tables, setTables] = useState<TableRow[]>([]);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [series, setSeries] = useState<SeriesPoint[]>([]);
  const [loadingChart, setLoadingChart] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const [s, t, i] = await Promise.all([
        getSourcesStatus(),
        getDataIssuesTables(),
        getDataIssuesInstruments(''),
      ]);
      if (!mounted) return;
      setSources(s as Source[]);
      setTables(t as TableRow[]);
      setSeries(i);
      setSelectedTable(t?.[0]?.Table ?? "");
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const loadChart = useCallback(async (table: string) => {
    setLoadingChart(true);
    setSelectedTable(table);
    try {
      const data = await getDataIssuesInstruments(table);
      setSeries(data as SeriesPoint[]);
    } finally {
      setLoadingChart(false);
    }
  }, []);

  return (
    <div className="mx-auto w-full space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-3">Sources</h2>
        <ul className="divide-y rounded-md border grid grid-cols-2 sm:grid-cols-3">
          {sources.map((s) => (
            <li key={s.name} className="flex items-start p-3 gap-4">
              <span
                className={[
                  "shrink-0 rounded-full px-2 py-0.5 text-xs font-medium border",
                  s.status === "green" && "bg-emerald-700 text-emerald-50 border-emerald-200",
                  s.status === "yellow" && "bg-yellow-400 text-yellow-50 border-yellow-200",
                  s.status === "red" && "bg-red-700 text-red-50 border-red-200",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                &nbsp;
              </span>
              <div className="min-w-0">
                <div className="font-medium truncate">{s.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Instruments</h2>
          <div className="text-sm text-muted-foreground text-right">
            {selectedTable ? (
              <>
                Data issues trend for <span className="font-medium">{selectedTable}</span>
              </>
            ) : (
              "Select a table below to filter the chart"
            )}
          </div>
        </div>

        <div className="rounded-md border p-3">
          {loadingChart ? (
            <div className="h-[280px] animate-pulse rounded-md bg-muted/50" />
          ) : (
            <InstrumentsLineChart data={series} />
          )}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Data issues</h2>
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
            <tr className="[&>th]:px-3 [&>th]:py-2 text-left">
              <th>Table</th>
              <th>Importance</th>
              <th>Layer</th>
              <th>Issues</th>
              <th>Trend</th>
              <th>Solved (24h)</th>
              <th>Created (24h)</th>
            </tr>
            </thead>
            <tbody className="divide-y">
            {tables.map((t) => {
              const active = t.Table === selectedTable;
              return (
                <tr
                  key={t.Table}
                  onClick={() => loadChart(t.Table)}
                  className={[
                    "[&>td]:px-3 [&>td]:py-2 cursor-pointer",
                    active && "bg-muted/40",
                    "hover:bg-muted/30",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  role="button"
                  aria-pressed={active}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") loadChart(t.Table);
                  }}
                >
                  <td className="font-medium">
                    <span className="underline-offset-2 hover:underline">{t.Table}</span>
                  </td>
                  <td>{t.Importance}</td>
                  <td>{t.Layer}</td>
                  <td>{t.Issues}</td>
                  <td>
                    <TrendCell trend={t.Trend} />
                  </td>
                  <td>{t.Solved24}</td>
                  <td>{t.Created24}</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>

        <div className="mt-2 text-xs text-muted-foreground">
          Tip: Click a row to reload the chart with that table&apos;s trend.
        </div>
      </section>
    </div>
  );
}
