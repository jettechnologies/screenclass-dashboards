import firstBank from "../assets/firstBank.svg";
import gtBank from "../assets/gtBank.svg";
import wemaBank from "../assets/wemaBank.svg";

export const set1 = [
  {
    code: "*894*200*2034889408#",
    image: firstBank,
  },
  {
    code: "*737*200*0486803862#",
    image: gtBank,
  },
];

export const set2 = [
  {
    image: wemaBank,
    code: "*945*200*2034889408#",
  },
];

export const subscriptionPlans = [
  {
    id: crypto.randomUUID(),
    plan: { name: "starter", price: 100, duration: "daily" },
    benefits: [
      "24/7 Online Support",
      "Limited Platforms",
      "Benefits",
      "Benefits",
    ],
    buttonGradient: "linear-gradient(135deg, #0b67b0 0%, #052b4a 100%)",
  },
  {
    id: crypto.randomUUID(),
    plan: { name: "advanced", price: 200, duration: "weekly" },
    benefits: [
      "24/7 Online Support",
      "multiple Platforms",
      "Benefits",
      "Benefits",
    ],
    buttonGradient: "linear-gradient(135deg, #0b67b0 0%, #052b4a 100%)",
  },
  {
    id: crypto.randomUUID(),
    plan: { name: "advanced", price: 500, duration: "monthly" },
    benefits: [
      "24/7 Online Support",
      "multiple Platforms",
      "Benefits",
      "Benefits",
    ],
    bgColor: "linear-gradient(to right, #002847 0%, #0B67B0 100%)",
    buttonGradient: "linear-gradient(45deg, #FA590C 0%, #C6470A 100%)",
  },
  {
    id: crypto.randomUUID(),
    plan: { name: "premium", price: 2000, duration: "yearly" },
    benefits: [
      "24/7 Online Support",
      "multiple Platforms",
      "Benefits",
      "Benefits",
    ],
    buttonGradient: "linear-gradient(135deg, #0b67b0 0%, #052b4a 100%)",
  },
];
