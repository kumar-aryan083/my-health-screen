export default function TrustSafetyPage() {
  return (
    <main>
      {/* Page Header */}
      <section>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary">
            Trust, safety & clinical governance
          </h1>

          <p className="mt-6 text-lg text-textMuted">
            Your health information, test results, and care are handled with
            clinical integrity, transparency, and respect.
          </p>
        </div>
      </section>

      {/* Clinical Oversight */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Clinical oversight
          </h2>

          <p className="mt-4 text-textMuted">
            All health checks are designed with clinical responsibility in mind
            and reviewed by UK-registered doctors. We focus on appropriate,
            evidence-based screening — not unnecessary testing.
          </p>
        </div>
      </section>

      {/* Data Protection */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Data protection & confidentiality
          </h2>

          <p className="mt-4 text-textMuted">
            Your personal and medical information is handled in accordance with
            UK GDPR regulations. Data is securely stored and never shared
            without your consent.
          </p>
        </div>
      </section>

      {/* Laboratory Standards */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Laboratory standards
          </h2>

          <p className="mt-4 text-textMuted">
            We work with accredited laboratory partners that meet recognised UK
            quality and safety standards. Every test is processed using
            validated methods to ensure accuracy and reliability.
          </p>
        </div>
      </section>

      {/* Ethical Screening */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Ethical screening philosophy
          </h2>

          <p className="mt-4 text-textMuted">
            We believe more testing is not always better. Our approach
            prioritises clarity, relevance, and patient understanding — with
            guidance on what truly matters for your health.
          </p>
        </div>
      </section>

      {/* Support */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-textPrimary">
            Questions or concerns?
          </h2>

          <p className="mt-4 text-textMuted">
            If you have questions about safety, privacy, or clinical processes,
            our team is here to help.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 rounded-md bg-primary px-6 py-3 text-white font-medium"
          >
            Contact our team
          </a>
        </div>
      </section>
    </main>
  );
}
