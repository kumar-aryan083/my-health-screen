import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function HeroTrust() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full">
      {/* Background Image */}
      <Image
        src="/images/hero-clinic.jpg"
        alt="Doctor reviewing patient results"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <Container>
        <div className="relative z-10 flex h-[85vh] min-h-[600px] items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Your Health, Our Passion
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              Preventative healthcare made easy with comprehensive biomarker
              testing that identifies imbalances early. Track progress,
              understand your body, and receive personalised guidance to stay
              balanced, prevent issues, and confidently take charge of your
              health today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-md border border-white/70 text-white px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                Book an Appointment
              </Link>
              <Link
                href="/health-checks"
                className="inline-flex items-center justify-center rounded-md border border-white/70 text-white px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                Health Checks & Test Packages
              </Link>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/80">
            UK-registered doctors · Confidential & GDPR secure · No unnecessary
            testing
          </p>
        </div>
      </Container>
    </section>
  );
}
