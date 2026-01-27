import { popularHealthChecks } from "@/data/healthChecks";

export default function HealthChecksPage() {
  return (
    <main>
      {/* Page Header */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary">
            Health checks
          </h1>
          <p className="mt-6 text-lg text-textMuted">
            Doctor-reviewed health screening designed to give you clarity,
            reassurance, and clear next steps — without unnecessary testing.
          </p>
        </div>
      </section>

      {/* Health Checks Grid */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularHealthChecks.map((check) => (
            <div
              key={check.slug}
              className="border rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-textPrimary">
                  {check.title}
                </h2>

                <p className="mt-3 text-textMuted">{check.description}</p>

                <ul className="mt-4 text-sm text-textMuted space-y-1">
                  <li>{check.time}</li>
                  <li>From {check.priceFrom}</li>
                </ul>
              </div>

              <a
                href={`/health-checks/${check.slug}`}
                className="mt-6 inline-block text-primary font-medium"
              >
                View details →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
