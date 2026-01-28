"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type BookingType = "clinic" | "home";

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<BookingType | null>(null);

  function goBack() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-white">
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left: Content */}
            <div>
              {/* Header */}
              <header className="mb-10">
                <h1 className="text-3xl sm:text-4xl font-semibold text-textPrimary">
                  Book your health check
                </h1>
                <p className="mt-3 text-base sm:text-lg text-textMuted">
                  {
                    "Simple, guided booking designed around your comfort and convenience."
                  }
                </p>
              </header>

              {/* Stepper */}
              <div className="mb-10 flex items-center gap-3 text-sm">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span
                      className={[
                        "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium",
                        step >= s
                          ? "border-primary bg-primary text-textPrimary"
                          : "border-borderSoft text-textMuted bg-white",
                      ].join(" ")}
                    >
                      {s}
                    </span>
                    {s !== 4 && <span className="h-px w-8 bg-borderSoft" />}
                  </div>
                ))}
              </div>

              {/* Card */}
              <div className="rounded-2xl bg-white border border-borderSoft shadow-card p-6 sm:p-8">
                {/* Back button */}
                {step > 1 && (
                  <button
                    onClick={goBack}
                    className="mb-4 inline-flex items-center gap-2 text-sm text-textMuted hover:text-textPrimary cursor-pointer transition"
                  >
                    <span className="text-lg">←</span>
                    Back
                  </button>
                )}

                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold text-textPrimary">
                      How would you like to complete your test?
                    </h2>

                    <OptionCard
                      title="Visit a clinic"
                      description="Attend a professional appointment at our laboratory"
                      icon="🏥"
                      onClick={() => {
                        setBookingType("clinic");
                        setStep(2);
                      }}
                    />

                    <OptionCard
                      title="Home test kit"
                      description="Receive a test kit and return it by courier"
                      icon="🏠"
                      onClick={() => {
                        setBookingType("home");
                        setStep(2);
                      }}
                    />
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && bookingType === "clinic" && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold text-textPrimary">
                      Choose a clinic location
                    </h2>

                    <OptionCard
                      title="London Central Clinic"
                      description="123 Medical Street, London"
                      icon="📍"
                      onClick={() => setStep(3)}
                    />
                  </div>
                )}

                {step === 2 && bookingType === "home" && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold text-textPrimary">
                      Delivery address
                    </h2>

                    <Input label="Full name" />
                    <Input label="Address line" />
                    <Input label="City" />
                    <Input label="Postcode" />
                    <Input label="Phone number" />

                    <PrimaryButton onClick={() => setStep(3)}>
                      Continue
                    </PrimaryButton>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && bookingType === "clinic" && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold text-textPrimary">
                      Appointment details
                    </h2>

                    <Input label="Patient full name" />
                    <Input label="Date of birth" />
                    <Input label="Email address" />

                    <OptionCard
                      title="Next available appointment"
                      description="We’ll confirm the exact time by email"
                      icon="📅"
                      onClick={() => setStep(4)}
                    />
                  </div>
                )}

                {step === 3 && bookingType === "home" && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold text-textPrimary">
                      Test kit & return
                    </h2>

                    <Input label="Patient full name" />
                    <Input label="Email address" />

                    <OptionCard
                      title="Courier pickup from my address"
                      description="We’ll arrange collection after sample is ready"
                      icon="🚚"
                      onClick={() => setStep(4)}
                    />
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-textPrimary">
                      Booking confirmed
                    </h2>

                    <p className="text-textMuted">
                      {bookingType === "clinic"
                        ? "Your appointment request has been received. We’ll confirm your time and preparation instructions by email."
                        : "Your home test kit will be dispatched shortly with clear instructions and a prepaid return label."}
                    </p>

                    <Link
                      href="/"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium transition hover:opacity-90"
                    >
                      Return to homepage
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative hidden lg:block">
              <div className="sticky top-28 rounded-2xl overflow-hidden shadow-card h-[520px]">
                <Image
                  src="/images/booking-healthcare.png"
                  alt="Healthcare consultation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- */
/* Reusable Components */
/* -------------------- */

function OptionCard({
  title,
  description,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        w-full rounded-xl border border-borderSoft px-5 py-4 text-left
        transition-all cursor-pointer
        hover:border-primary hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-primary/30
      "
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="font-medium text-textPrimary">{title}</p>
          <p className="mt-1 text-sm text-textMuted">{description}</p>
        </div>
      </div>
    </button>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-textMuted">{label}</label>
      <input
        type="text"
        className="w-full rounded-md border border-borderSoft px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium transition hover:opacity-90"
    >
      {children}
    </button>
  );
}
