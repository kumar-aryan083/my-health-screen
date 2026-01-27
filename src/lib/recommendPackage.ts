type Answers = {
  age?: string;
  sex?: string;
  goal?: string;
};

export function recommendPackage(answers: Answers) {
  // Default recommendation
  let recommendation = "well-man";
  const explanation: string[] = [];

  if (answers.sex === "female") {
    recommendation = "well-woman";
    explanation.push(
      "You indicated that you’re looking for a health check designed specifically for women.",
    );
  }

  if (answers.goal === "prevention") {
    explanation.push(
      "You mentioned prevention as a priority, so a broader health overview is recommended.",
    );
  }

  if (answers.goal === "monitoring") {
    recommendation = "heart-stroke";
    explanation.push(
      "Because monitoring an existing concern is important to you, we recommend a focused cardiovascular assessment.",
    );
  }

  if (answers.age && ["46-60", "60+"].includes(answers.age)) {
    explanation.push(
      "As health risks can change with age, a more comprehensive review can provide useful reassurance.",
    );
  }

  return {
    slug: recommendation,
    explanation,
  };
}
