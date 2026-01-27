"use client";

import Link from "next/link";
import { useState } from "react";

type BookingType = "clinic" | "home";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState<BookingType | null>(null);

  return (
    <main>
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary">
            Book your health check
          </h1>

          <p className="mt-4 text-lg text-textMuted">
            Choose how you’d like to complete your health check. You’ll be
            guided through each step.
          </p>

          {/* STEP 1: Booking Type */}
          {step === 1 && (
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-semibold text-textPrimary">
                How would you like to complete your test?
              </h2>

              <button
                onClick={() => {
                  setBookingType("clinic");
                  setStep(2);
                }}
                className="w-full border rounded-md px-4 py-4 text-left"
              >
                Visit a clinic
                <p className="text-sm text-textMuted">
                  Professional appointment at a clinic location
                </p>
              </button>

              <button
                onClick={() => {
                  setBookingType("home");
                  setStep(2);
                }}
                className="w-full border rounded-md px-4 py-4 text-left"
              >
                Home test kit
                <p className="text-sm text-textMuted">
                  Test from home with clear instructions
                </p>
              </button>
            </div>
          )}

          {/* STEP 2: Location / Delivery */}
          {step === 2 && (
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-semibold text-textPrimary">
                {bookingType === "clinic"
                  ? "Choose a clinic location"
                  : "Confirm delivery address"}
              </h2>

              <button
                onClick={() => setStep(3)}
                className="w-full border rounded-md px-4 py-3 text-left"
              >
                {bookingType === "clinic"
                  ? "London Clinic (Example)"
                  : "Deliver to my address"}
              </button>
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-semibold text-textPrimary">
                Choose a date & time
              </h2>

              <button
                onClick={() => setStep(4)}
                className="w-full border rounded-md px-4 py-3 text-left"
              >
                Next available appointment
              </button>
            </div>
          )}

          {/* STEP 4: Confirmation */}
          {step === 4 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-textPrimary">
                Booking confirmed
              </h2>

              <p className="mt-4 text-textMuted">
                Your booking is confirmed. You’ll receive preparation
                instructions and reminders by email.
              </p>

              <Link
                href="/"
                className="inline-block mt-6 rounded-md bg-primary px-6 py-3 text-white font-medium"
              >
                Return to homepage
              </Link>
            </div>
          )}

          {/* Progress */}
          <p className="mt-10 text-sm text-textMuted">Step {step} of 4</p>
        </div>
      </section>
    </main>
  );
}
