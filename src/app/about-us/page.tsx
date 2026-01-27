export default function AboutUsPage() {
  return (
    <main>
      {/* Page Header */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary">
            About UK Medicare Screening
          </h1>

          <p className="mt-6 text-lg text-textMuted">
            We exist to make private health screening clearer, calmer, and more
            clinically responsible.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Why we exist
          </h2>

          <p className="mt-4 text-textMuted">
            Many people want reassurance about their health but feel overwhelmed
            by medical jargon, unclear results, or unnecessary testing. We built
            UK Medicare Screening to change that experience.
          </p>

          <p className="mt-4 text-textMuted">
            Our focus is on clarity, appropriate screening, and guidance that
            helps people understand what their results mean — and what to do
            next.
          </p>
        </div>
      </section>

      {/* Clinical Approach */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Our clinical approach
          </h2>

          <p className="mt-4 text-textMuted">
            Every health check is designed with clinical responsibility in mind
            and reviewed by UK-registered doctors. We prioritise relevance and
            evidence-based testing, rather than offering broad panels without
            context.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            What makes us different
          </h2>

          <ul className="mt-6 space-y-3 text-textMuted list-disc pl-6">
            <li>Clear, plain-English explanations of results</li>
            <li>Doctor review on every health check</li>
            <li>No unnecessary or inappropriate testing</li>
            <li>Guidance focused on understanding, not fear</li>
          </ul>
        </div>
      </section>

      {/* Support */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Our commitment to patients
          </h2>

          <p className="mt-4 text-textMuted">
            We believe health screening should feel supportive, not
            intimidating. Our team is here to answer questions and help you make
            informed decisions about your health.
          </p>
        </div>
      </section>
    </main>
  );
}
