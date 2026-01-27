import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ClinicianCTA() {
  return (
    <Section variant="soft">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary">
            Not sure which health check is right for you?
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
            Speak to a clinician who can help you choose the most appropriate
            screening — without pressure and without unnecessary testing.
          </p>

          <div className="mt-6 md:mt-8">
            <Link href="/contact">
              <Button>Talk to a clinician</Button>
            </Link>
          </div>

          <p className="mt-4 text-xs md:text-sm text-textMuted">
            No obligation · Confidential · UK-registered clinicians
          </p>
        </div>
      </Container>
    </Section>
  );
}
