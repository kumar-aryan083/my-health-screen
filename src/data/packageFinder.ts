export type PackageFinderStep = {
  id: string;
  question: string;
  description?: string;
  options: {
    label: string;
    value: string;
  }[];
};

export const packageFinderSteps: PackageFinderStep[] = [
  {
    id: "age",
    question: "What is your age range?",
    options: [
      { label: "18–30", value: "18-30" },
      { label: "31–45", value: "31-45" },
      { label: "46–60", value: "46-60" },
      { label: "60+", value: "60+" },
    ],
  },
  {
    id: "sex",
    question: "What is your sex?",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    id: "goal",
    question: "What best describes your goal?",
    description:
      "There’s no right or wrong answer — this helps us guide you more accurately.",
    options: [
      { label: "General reassurance", value: "reassurance" },
      { label: "Prevent future problems", value: "prevention" },
      { label: "Monitor an existing concern", value: "monitoring" },
    ],
  },
];
