import {getAnalyticsReports} from "@/lib/api";

export default async function Analytics() {
  const [reports] = await Promise.all([
    getAnalyticsReports()
  ]);
  return (
    <div className="mx-auto w-fullspace-y-6">

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Favorites</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {reports.filter(i => i.displayIndicator === 'AsFavourite').map((r) => (
            <li key={r.name} className="rounded-md border p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-semibold truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Last Updated: {r.lastUpdated}
                  </div>
                </div>
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

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">All reports</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {reports.filter(i => i.displayIndicator !== 'AsFavourite').map((r) => (
            <li key={r.name} className="rounded-md border p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-semibold truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Last Updated: {r.lastUpdated}
                  </div>
                </div>
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
