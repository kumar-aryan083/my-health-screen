import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function ReassuranceBlock() {
  return (
    <Section>
      <Container size="sm">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary">
            You don’t need to understand medicine to understand your health.
          </h2>

          <p className="mt-6 text-lg text-textMuted">
            Every result is reviewed by a doctor and explained in plain English
            — what it means, why it matters, and what to do next if anything
            needs attention.
          </p>
        </div>
      </Container>
    </Section>
  );
}
