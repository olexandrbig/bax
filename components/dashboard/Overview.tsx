"use client";

export default function Overview() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">

      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-sm text-muted-foreground">
          A quick glance at your activity and performance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Total Revenue" value="$45,231.89" delta="+20.1%" />
        <KpiCard label="Subscriptions" value="+2350" delta="+180.1%" />
        <KpiCard label="Sales" value="+12,234" delta="+19%" />
        <KpiCard label="Active Now" value="+573" delta="+201" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Recent Sales</h2>
          <div className="mt-4 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-muted" />
                  <div>
                    <div className="text-sm font-medium">Customer {i}</div>
                    <div className="text-xs text-muted-foreground">
                      customer{i}@example.com
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium">+$19.99</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold">Traffic</h2>
          <div className="mt-4 aspect-video rounded-lg border bg-background" />
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-emerald-600">{delta}</div>
    </div>
  );
}
