export interface Company {
  slug: string;
  name: string;
  logoUrl: string;
  tagline: string;
  description: string;
  mission: string;
  impact: string;
  highlights: string[];
  link: string;
}

export const companies: Record<string, Company> = {
  "lexi-ai": {
    slug: "lexi-ai",
    name: "Lexi AI",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_800/v1784823883/SAVE_20260723_172314_nrwugz.jpg",
    tagline: "Intelligent Conversational Triage & AI Decisions",
    description: "An intelligent conversational AI platform built for real-time triage, automated workflow support, and natural language decision assistance.",
    mission: "To deliver accessible, multilingual artificial intelligence that simplifies complex inquiries, streamlines daily operations, and guides users instantly.",
    impact: "Serving as an integrated intelligence engine across health, delivery, and automated user assistance platforms with high accuracy and low latency.",
    highlights: [
      "Multilingual AI engine tailored for localized health queries",
      "Sub-second response latency for real-time decision support",
      "Seamless integration with telemedicine and delivery ecosystems"
    ],
    link: "https://lexiai.chat",
  },
  "medxlearn": {
    slug: "medxlearn",
    name: "MedxLearn",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784284283/SAVE_20260717_113050_dpq3jv.jpg",
    tagline: "All-in-One Multi-Campus School Management & LMS",
    description: "An all-in-one multi-campus school management portal and modern LMS engineered for end-to-end academic infrastructure.",
    mission: "To power institutions with robust, scalable software that simplifies course registration, grading workflows, and automated computer-based testing.",
    impact: "Streamlining operations for institutions from single-campus academies to expansive university networks with zero-friction administrative tools.",
    highlights: [
      "Automated Computer-Based Testing (CBT) portal",
      "Multi-campus administration and unified student records",
      "Real-time transcript generation and grade tracking"
    ],
    link: "https://medxlearnapp.com",
  },
  "medxverse": {
    slug: "medxverse",
    name: "MedxVerse Telemedicine",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784313040/IMG_0341_mpyrmt.jpg",
    tagline: "Borderless Digital Health & Virtual Care Infrastructure",
    description: "A borderless digital health ecosystem bringing 24/7 instant online doctor consultations, electronic prescriptions, and medical data management.",
    mission: "To bridge the critical healthcare deficit using an optimized, data-efficient digital care delivery framework tailored for emerging regions.",
    impact: "Providing continuous, low-bandwidth medical access and verified digital prescriptions to thousands of remote or underserved users.",
    highlights: [
      "Low-bandwidth video & chat consultation protocols",
      "Verified e-prescriptions sent directly to nearby pharmacies",
      "Encrypted patient health records accessible anytime"
    ],
    link: "https://medxverseapp.com",
  },
  "medxgo": {
    slug: "medxgo",
    name: "MedxGo",
    logoUrl: "https://res.cloudinary.com/datmds5xl/image/upload/f_auto,q_auto,w_300/v1784313041/Frame_ieybdx.jpg",
    tagline: "Hyper-Local Logistics & Emergency Fulfillment",
    description: "A hyper-local delivery and health companion ecosystem combining instant pharmacy fulfillment, premium food delivery, and intelligent assistance.",
    mission: "To connect communities with fast on-demand logistics, simple prescription uploads, and immediate medical guidance via Lexi AI.",
    impact: "Accelerating last-mile delivery chains for essential care resources, daily meals, and digital triage tools directly to the consumer's doorstep.",
    highlights: [
      "Under 30-minute last-mile delivery for essential medication",
      "Integrated prescription scanning and order dispatch",
      "Real-time rider tracking and digital proof-of-delivery"
    ],
    link: "https://medxgoapp.com",
  },
};
