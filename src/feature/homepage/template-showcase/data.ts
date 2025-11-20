import aiLandingImage from "@/assets/images/ai-land.png";
import aiLanding1Image from "@/assets/images/ai-land1.png";
import type { TabItem, TemplateCard } from "./types";

export const tabItems: TabItem[] = [
  { label: "All Templates", value: "all" },
  { label: "Agency", value: "agency" },
  { label: "Business", value: "business" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Dashboard", value: "dashboard" },
];

export const cardData: TemplateCard[] = [
  {
    id: 1,
    title: "AI Land - Creative AI Template",
    description:
      "Perfect template to build your AI startup website faster in no time.",
    imgSrc: aiLandingImage,
    category: "all",
  },
  {
    id: 2,
    title: "AI Land - Creative AI Template",
    description:
      "Perfect template to build your AI startup website faster in no time.",
    imgSrc: aiLanding1Image,
    category: "all",
  },
  {
    id: 3,
    title: "AI Land - Creative AI Template",
    description:
      "Perfect template to build your AI startup website faster in no time.",
    imgSrc: aiLandingImage,
    category: "all",
  },
];
