"use client";

import { useState } from "react";
import { packageFinderSteps } from "@/data/packageFinder";
import { recommendPackage } from "@/lib/recommendPackage";

type Answers = Record<string, string>;

export default function PackageFinderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [isComplete, setIsComplete] = useState(false);

  const step = packageFinderSteps[currentStep];

  function handleAnswer(value: string) {
    const updatedAnswers = {
      ...answers,
      [step.id]: value,
    };

    setAnswers(updatedAnswers);

    const nextStep = currentStep + 1;

    if (nextStep < packageFinderSteps.length) {
      setCurrentStep(nextStep);
    } else {
      setIsComplete(true);
    }
  }

  function resetFinder() {
    setAnswers({});
    setCurrentStep(0);
    setIsComplete(false);
  }

  // -----------------------------
  // RESULT VIEW
  // -----------------------------
  if (isComplete) {
    const result = recommendPackage(answers);

    return (
      <main>
        <section>
          <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary">
              Based on your answers, we recommend
            </h1>

            <p className="mt-4 text-xl font-medium text-primary">
              {result.slug
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </p>

            <div className="mt-6 space-y-3 text-textMuted">
              {result.explanation.map((line) => (
                <p key={line}>• {line}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`/health-checks/${result.slug}`}
                className="rounded-md bg-primary px-6 py-3 text-white font-medium text-center"
              >
                View recommended health check
              </a>

              <button
                onClick={resetFinder}
                className="rounded-md border px-6 py-3 font-medium"
              >
                Start again
              </button>
            </div>

            <p className="mt-6 text-sm text-textMuted">
              This recommendation is designed to guide you. A clinician can help
              you decide if you’re unsure.
            </p>
          </div>
        </section>
      </main>
    );
  }

  // -----------------------------
  // QUESTION VIEW
  // -----------------------------
  return (
    <main>
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-semibold text-textPrimary">
            Find the right health check
          </h1>

          <p className="mt-4 text-lg text-textMuted">
            Answer a few simple questions. We’ll guide you to the most
            appropriate health check — without pressure or unnecessary testing.
          </p>

          {/* Question */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-textPrimary">
              {step.question}
            </h2>

            {step.description && (
              <p className="mt-2 text-textMuted">{step.description}</p>
            )}

            {/* Options */}
            <div className="mt-6 space-y-4">
              {step.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left border rounded-md px-4 py-3"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Progress */}
          <p className="mt-8 text-sm text-textMuted">
            Step {currentStep + 1} of {packageFinderSteps.length}
          </p>
        </div>
      </section>
    </main>
  );
}
