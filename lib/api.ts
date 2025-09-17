export type SourceStatus = {
  name: string;
  status: "green" | "yellow" | "red" | string;
  LastIssue: string;
  IssueDescription: string;
};
export type DataIssuesTable = {
  Table: string;
  Importance: "High" | "Medium" | "Low" | string;
  Layer: string;
  Issues: number;
  Trend: "UP" | "DOWN" | "STABLE" | string;
  Solved24: number;
  Created24: number;
};
export type InstrumentIssuePoint = { date: string; value: number };
export type AnalyticsReport = {
  name: string;
  version: string;
  type: string;
  lastUpdated: string;
  labels: string;
  displayIndicator: string;
  lastViewed: string;
};

import sourcesStatus from "@/data/sources-status.json";
import tablesJson from "@/data/dataissues-tables.json";
import instrumentsJson from "@/data/dataissues-instruments.json";
import reportsJson from "@/data/analytics-reports.json";

const BASE = process.env.NEXT_PUBLIC_API_BASE?.trim();
const USE_STATIC = !BASE;

async function api<T>(path: string): Promise<T> {
  if (USE_STATIC) throw new Error("static-mode");
  const res = await fetch(`${BASE}${path}`, {
    cache: "no-store",
    headers: { Accept: "application/json" }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${path}`);
  return (await res.json()) as T;
}

export async function getSourcesStatus(): Promise<SourceStatus[]> {
  try { return await api<SourceStatus[]>("/api/sources/status"); }
  catch { return sourcesStatus as SourceStatus[]; }
}
export async function getDataIssuesTables(): Promise<DataIssuesTable[]> {
  try { return await api<DataIssuesTable[]>("/api/dataissues/tables"); }
  catch { return tablesJson as DataIssuesTable[]; }
}
export async function getDataIssuesInstruments(): Promise<InstrumentIssuePoint[]> {
  try { return await api<InstrumentIssuePoint[]>("/api/dataissues/instruments"); }
  catch { return instrumentsJson as InstrumentIssuePoint[]; }
}
export async function getAnalyticsReports(): Promise<AnalyticsReport[]> {
  try { return await api<AnalyticsReport[]>("/api/analytics/reports"); }
  catch { return reportsJson as AnalyticsReport[]; }
}
