import type { Config } from "tailwindcss";
// import * as tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "task-bg-one": "url('/images/task-bg-one.png')",
        "task-bg-two": "url('/images/task-bg-two.png')",
        "main-bg": "url('/images/bg-one.png')",
        "bg-index-one": "url('/images/bg-index-one.png')",
        "bg-index-two": "url('/images/bg-index-two.png')",
        "bg-index-three": "url('/images/bg-index-three.png')",
        "bg-about-hero": "url('/images/about-hero-img.png')",
        "bg-about-section-2": "url('/images/about-bg-img-2.png')",
        "bg-about-section-3": "url('/images/about-bg-img-3.png')",
        "bg-about-section-4": "url('/images/about-bg-img-5.png')",
        "bg-about-section-5": "url('/images/about-bg-img-6.png')",
        "bg-contact-hero": "url('/images/contact-us-hero.png')",
        "bg-contact-map": "url('/images/contact-map.png')",
        "bg-contact-e-learning": "url('/images/contact-e-learning.png')",
        "bg-contact-brain": "url('/images/contact-brain.png')",
        "bg-pricing-main": "url('/images/pricing-bg-main.png')",
        "bg-pricing-sub": "url('/images/bg-pricing-sub.png')",
        "bg-pricing-feature": "url('/images/pricing-people-gathering-1.png')",
        "bg-pricing-feature-sm": "url('/images/pricing-people-gathering.png')",
        "bg-faq-hero": "url('/images/faq-hero-section.png')",
        "bg-faq-hero-sm": "url(/images/faq-hero-section-sm.png)",
        "bg-faq-section-one": "url('/images/faq-second-section.png')",
        "bg-faq-section-two": "url('/images/faq-third-section.png')",
        "bg-faq-section-two-sm": "url('/images/faqs-third-section-sm.png')",
        "bg-faq-section-three": "url('/images/faq-fourth-section.png')",
        "bg-faq-section-three-sm": "url('/images/faq-fourth-section-sm.png')",
        "bg-auth-bg": "url('/images/screenclass-auth-bg.png')",
        "bg-auth-bg-2": "url('/images/screenclass-auth-bg-2.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        "Sedan-sc": ["Sedan SC", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "SC-Deep-Blue": "#082038",
        "SC-Light-Blue": "#109AB7",
        "SC-Orange": "#F7631B",
        "SC-Brand-Blue": "#0966AB",
        "SC-Bland": "#F5F5F5",
        "SC-Nav-Blue": "#0B67B0",
        "SC-Blue": "#016AAD",
        "SC-Light-orange": "rgba(244, 122, 28, 0.17)",
        "SC-text-red": "#BC3508",
        "custom-yellow": "#FCCB04",
        "custom-green": "#015E43",
      },
      boxShadow: {
        custom: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
      },
      animation: {
        "calculator-fade-in": "calFadeIn 0.3s ease-in-out",
      },
      keyframes: {
        calFadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
