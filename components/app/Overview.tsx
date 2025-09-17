import {
  getSourcesStatus,
  getDataIssuesTables,
  getDataIssuesInstruments,
} from "@/lib/api";
import {InstrumentsLineChart} from "@/components/charts/instruments-line";
import { TrendCell } from "@/components/app/trend-cell";

export default async function Overview() {
  const [sources, tables, instruments] = await Promise.all([
    getSourcesStatus(),
    getDataIssuesTables(),
    getDataIssuesInstruments()
  ]);

  return (
    <div className="mx-auto w-full space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-3">Sources</h2>
        <ul className="divide-y rounded-md border grid grid-cols-3">
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
        <InstrumentsLineChart data={instruments} />
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
            {tables.map((t) => (
              <tr key={t.Table} className="[&>td]:px-3 [&>td]:py-2">
                <td className="font-medium">{t.Table}</td>
                <td>{t.Importance}</td>
                <td>{t.Layer}</td>
                <td>{t.Issues}</td>
                <td><TrendCell trend={t.Trend} /></td>
                <td>{t.Solved24}</td>
                <td>{t.Created24}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
