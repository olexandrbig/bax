"use client";

import { useMemo } from "react";
import type { InstrumentIssuePoint } from "@/lib/api";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import * as React from "react";
import type { TooltipProps } from "recharts";

function parseDDMMYYYY(s: string) {
  const [dd, mm, yyyy] = s.split("-").map(Number);
  return new Date(yyyy, (mm || 1) - 1, dd || 1);
}
function niceLabel(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}`;
}
function fullLabel(d: Date) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

export function InstrumentsLineChart({ data }: { data: InstrumentIssuePoint[] }) {
  const rows = useMemo(() => {
    return [...data]
      .map((d) => {
        const dateObj = parseDDMMYYYY(d.date);
        return {
          ...d,
          ts: dateObj.getTime(),
          x: niceLabel(dateObj),
          xFull: fullLabel(dateObj),
        };
      })
      .sort((a, b) => a.ts - b.ts);
  }, [data]);

  const last = rows[rows.length - 1];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold mb-3"></CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rows} margin={{ top: 10, right: 16, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              tickMargin={6}
              interval="preserveStartEnd"
              minTickGap={24}
            />
            <YAxis
              allowDecimals={false}
              width={36}
              tickMargin={6}
              domain={["dataMin - 5", "dataMax + 5"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            {last ? (
              <ReferenceDot
                x={last.x}
                y={last.value}
                r={5}
                strokeWidth={1.5}
                ifOverflow="visible"
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  const pt = payload[0];
  const when = (pt?.payload?.xFull as string) ?? String(label);

  return (
    <div className="rounded-md border bg-popover text-popover-foreground shadow p-2 text-xs">
      <div className="mb-1 font-medium text-muted-foreground">{when}</div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">{pt.value}</span>
        <span className="text-muted-foreground">Issues</span>
      </div>
    </div>
  );
}
