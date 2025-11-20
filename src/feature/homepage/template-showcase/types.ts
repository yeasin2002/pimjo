import { StaticImageData } from "next/image";

export interface TabItem {
  label: string;
  value: string;
}

export interface TemplateCard {
  id: number;
  title: string;
  description: string;
  imgSrc: StaticImageData;
  category: string;
}
