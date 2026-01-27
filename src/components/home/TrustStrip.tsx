import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function TrustStrip() {
  return (
    <Section variant="white">
      <div className="border-y border-borderSoft">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 text-center text-sm text-textMuted">
            {[
              {
                title: "UK-Registered Doctors",
                text: "Clinical review on every test",
              },
              {
                title: "CQC-Aligned Care",
                text: "Governance & safety standards",
              },
              {
                title: "Confidential & Secure",
                text: "GDPR-compliant data handling",
              },
              {
                title: "No Unnecessary Testing",
                text: "Ethical, patient-first screening",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-medium text-textPrimary">{item.title}</p>
                <p className="mt-1 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
