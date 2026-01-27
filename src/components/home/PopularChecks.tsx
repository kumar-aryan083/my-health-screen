import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { popularHealthChecks } from "@/data/healthChecks";

export default function PopularChecks() {
  return (
    <Section>
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary">
            Popular health checks
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-textMuted">
            Carefully designed packages to give clarity, reassurance, and
            actionable insight — without unnecessary testing.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularHealthChecks.map((check) => (
            <Card key={check.slug} className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-textPrimary">
                  {check.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-textMuted leading-relaxed">
                  {check.description}
                </p>

                <ul className="mt-4 text-sm text-textMuted space-y-1">
                  <li>{check.time}</li>
                  <li className="font-medium text-textPrimary">
                    From {check.priceFrom}
                  </li>
                </ul>
              </div>

              <Link
                href={`/health-checks/${check.slug}`}
                className="mt-6 inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
