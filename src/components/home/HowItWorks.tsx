import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function HowItWorks() {
  return (
    <Section>
      <Container size="md">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary">
            How it works
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-textMuted">
            A simple, guided process designed to give you clarity — not
            confusion.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 md:mt-16 grid gap-10 md:gap-12 md:grid-cols-3">
          {[
            {
              step: "Step 1",
              title: "We help you choose",
              text: "Answer a few simple questions. We guide you to the most appropriate health check based on your age, sex, and goals.",
            },
            {
              step: "Step 2",
              title: "Attend a clinic or test at home",
              text: "Visit one of our clinics or complete your test at home — discreet, professional, and designed around your schedule.",
            },
            {
              step: "Step 3",
              title: "Doctor-reviewed results & guidance",
              text: "A doctor reviews your results and explains what they mean, what’s reassuring, and what steps (if any) to take next.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center md:text-left">
              <p className="text-sm font-medium text-primary">{item.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-textPrimary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-textMuted leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
