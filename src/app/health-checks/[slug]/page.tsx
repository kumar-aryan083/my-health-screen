import { notFound } from "next/navigation";
import { healthCheckDetails } from "@/data/healthCheckDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function HealthCheckPage({ params }: Props) {
  const { slug } = await params;

  const data = healthCheckDetails[slug];

  if (!data) {
    notFound();
  }

  return (
    <main>
      {/* 1. Reassurance Intro */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary">
            {data.title}
          </h1>
          <p className="mt-6 text-lg text-textMuted">{data.reassurance}</p>
        </div>
      </section>

      {/* 2. Who This Is For */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Who this health check is for
          </h2>
          <ul className="mt-6 space-y-2 text-textMuted list-disc pl-6">
            {data.whoItsFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. What’s Included */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            What’s included
          </h2>

          <div className="mt-8 space-y-6">
            {Object.entries(data.includedGroups).map(([group, tests]) => (
              <div key={group}>
                <h3 className="font-medium text-textPrimary">{group}</h3>
                <ul className="mt-2 text-textMuted list-disc pl-6">
                  {tests.map((test) => (
                    <li key={test}>{test}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What You’ll Learn */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            What you’ll learn
          </h2>
          <ul className="mt-6 space-y-2 text-textMuted list-disc pl-6">
            {data.whatYouLearn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. What Happens After */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            What happens after
          </h2>
          <p className="mt-4 text-textMuted">{data.afterResults}</p>
        </div>
      </section>

      {/* 6. Booking CTA */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <a
            href="/booking"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium"
          >
            Book this health check
          </a>
        </div>
      </section>
    </main>
  );
}
