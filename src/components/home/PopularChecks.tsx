import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { popularHealthChecks } from "@/data/healthChecks";
import Image from "next/image";

export default function PopularChecks() {
  return (
    <Section>
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary">
            Health, Checked
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-textMuted">
            {`  With more than 40 years of health testing experience, we're
            committed to helping you shape a healthier future. From the world's
            most comprehensive in-clinic testing packages, to a full range of
            convenient home test kits, we've got you covered.`}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularHealthChecks.map((check) => (
            <Card
              key={check.slug}
              padded={false}
              className="group relative h-72 overflow-hidden cursor-pointer transition-shadow hover:shadow-3xl"
            >
              {/* Background image */}
              <Image
                src={check.image}
                alt={check.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0">
                <div
                  className="
                    px-6 pb-6 pt-10 text-white
                    transform transition-all duration-400 ease-out
                    translate-y-16 group-hover:translate-y-0
                  "
                >
                  {/* Title (always visible) */}
                  <h3 className="text-lg font-semibold leading-tight">
                    {check.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2 text-sm leading-relaxed
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 delay-100
                    "
                  >
                    {check.description}
                  </p>

                  {/* Meta */}
                  <div
                    className="
                      mt-4 flex items-center justify-between text-xs
                      opacity-0 group-hover:opacity-80
                      transition-opacity duration-300 delay-150
                    "
                  >
                    <span>{check.time}</span>
                    <span className="font-medium">{check.priceFrom}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
