export type HealthCheckDetail = {
  title: string;
  reassurance: string;
  whoItsFor: string[];
  includedGroups: Record<string, string[]>;
  whatYouLearn: string[];
  afterResults: string;
};

export const healthCheckDetails: Record<string, HealthCheckDetail> = {
  "well-man": {
    title: "Well-Man Health MOT",
    reassurance:
      "This health check is designed for men who want clarity and reassurance about their health — without unnecessary testing or medical complexity.",
    whoItsFor: [
      "Men looking for a general overview of their health",
      "Those with a family history of common conditions",
      "Anyone wanting reassurance or early insight into potential risks",
    ],
    includedGroups: {
      Heart: ["Cholesterol profile", "Cardiovascular risk markers"],
      Metabolic: ["Blood sugar levels", "Diabetes risk indicators"],
      "Liver & Kidneys": ["Liver function markers", "Kidney health indicators"],
      Hormones: ["Testosterone"],
    },
    whatYouLearn: [
      "Which results are normal and reassuring",
      "Any early risk factors worth monitoring",
      "Whether lifestyle changes could improve long-term health",
    ],
    afterResults:
      "All results are reviewed by a UK-registered doctor. You’ll receive a clear report explaining what everything means, along with guidance on next steps if anything needs attention.",
  },

  "well-woman": {
    title: "Well-Woman Health MOT",
    reassurance:
      "Designed to support women who want a clear, balanced understanding of their health — explained in plain English and reviewed by a doctor.",
    whoItsFor: [
      "Women seeking a comprehensive health overview",
      "Those experiencing hormonal or energy changes",
      "Anyone wanting reassurance or preventative insight",
    ],
    includedGroups: {
      Heart: ["Cholesterol profile"],
      Metabolic: ["Blood sugar levels", "Metabolic health indicators"],
      Hormones: ["Oestrogen", "Thyroid function"],
      "Liver & Kidneys": ["Liver function markers", "Kidney health indicators"],
    },
    whatYouLearn: [
      "How hormonal and metabolic markers affect wellbeing",
      "Which results are reassuring and within normal ranges",
      "Whether further monitoring may be helpful",
    ],
    afterResults:
      "Your results are doctor-reviewed and presented with clear explanations. If anything needs follow-up, you’ll receive guidance on what to do next.",
  },

  "heart-stroke": {
    title: "Heart & Stroke Complete",
    reassurance:
      "Focused on identifying cardiovascular risk factors early, helping you understand your heart health clearly and calmly.",
    whoItsFor: [
      "Anyone with a family history of heart disease or stroke",
      "Those wanting reassurance about cardiovascular risk",
      "People managing blood pressure or cholesterol concerns",
    ],
    includedGroups: {
      Heart: [
        "Cholesterol profile",
        "Inflammation markers",
        "Cardiovascular risk indicators",
      ],
      Metabolic: ["Blood sugar levels"],
    },
    whatYouLearn: [
      "Your overall cardiovascular risk profile",
      "Which markers may benefit from monitoring",
      "Lifestyle factors that influence heart health",
    ],
    afterResults:
      "A doctor reviews your results and explains what they mean in context, with practical guidance on next steps where appropriate.",
  },

  "cancer-risk": {
    title: "Cancer Risk Screening",
    reassurance:
      "Screens selected markers where clinically appropriate, focusing on reassurance, early awareness, and responsible testing.",
    whoItsFor: [
      "Those with a family history of certain cancers",
      "People seeking informed reassurance",
      "Anyone wanting proactive health insight",
    ],
    includedGroups: {
      "Cancer Markers": ["Selected tumour markers (where appropriate)"],
      General: ["Supporting health indicators"],
    },
    whatYouLearn: [
      "Which markers are within normal ranges",
      "Whether any results warrant monitoring",
      "What reassurance your results provide",
    ],
    afterResults:
      "Results are carefully reviewed by a doctor. If anything needs further discussion, you’ll receive clear guidance and appropriate referral advice.",
  },

  executive: {
    title: "Executive Health Assessment",
    reassurance:
      "A comprehensive assessment for those who want a deeper understanding of their health and long-term wellbeing.",
    whoItsFor: [
      "Professionals seeking a detailed health overview",
      "Those planning long-term health monitoring",
      "Anyone wanting an in-depth, doctor-led assessment",
    ],
    includedGroups: {
      Heart: ["Cholesterol profile", "Cardiovascular risk indicators"],
      Metabolic: ["Blood sugar and metabolic markers"],
      Hormones: ["Key hormonal markers"],
      "Liver & Kidneys": ["Liver and kidney function"],
      Nutrition: ["Key nutritional indicators"],
    },
    whatYouLearn: [
      "A detailed picture of your current health",
      "Areas that are reassuring and stable",
      "Where proactive monitoring may be beneficial",
    ],
    afterResults:
      "You’ll receive a comprehensive, doctor-reviewed report with clear explanations and guidance for ongoing health planning.",
  },
};
