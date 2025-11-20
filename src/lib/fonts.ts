import { DM_Sans, Geist_Mono } from "next/font/google";
const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin-ext"],
  variable: "--font-dm-sans",
});

const geistMono = Geist_Mono({
  weight: ["400", "500"],
  subsets: ["latin-ext"],
  variable: "--font-geist-mono",
});

const fontList = [dmSans, geistMono];
export const fontVariable = fontList.map((font) => font.variable).join(", ");
