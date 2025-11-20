import anamolImage from "@/assets/images/anamol.png";
import arnobImage from "@/assets/images/arnob.png";
import atharImage from "@/assets/images/athar.png";
import fajarImage from "@/assets/images/fajar.png";
import fazarImage from "@/assets/images/fazar.png";
import markoImage from "@/assets/images/marko.png";
import ostapImage from "@/assets/images/ostap.png";
import { StaticImageData } from "next/image";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  content2?: string;
  image: StaticImageData;
  stars: number;
  gridClass: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Fajar Siddiq",
    role: "Serial Entrepreneur, Singapore",
    content:
      "TailGrids is such a great help when comes to building landing page and web app UI for Tailwind CSS web projects with just copy-paste method!",
    content2:
      "I really liked the design and it is easy to get started which saves tons of time & money for developers and designers with Figma files & source code!",
    image: fajarImage,
    stars: 5,
    gridClass: "md:col-start-1 md:row-start-1 md:row-span-2",
  },
  {
    name: "Arnob Mukherjee",
    role: "Founder @Qvy",
    content:
      "Seems like an amazing alternative to tailwindui, also the design looks amazing man 🚀",
    image: arnobImage,
    stars: 5,
    gridClass: "md:col-start-2 md:row-start-1 md:row-span-1",
  },
  {
    name: "Ostap Brehin",
    role: "Fullstack Developer",
    content:
      "A landing page is the first thing your customers will see before even trying the product. You want to make sure it looks great, and this is where TailGrids comes to help!",
    content2:
      "It provides a collection of beautiful hand-crafted uniquely-looking components that you can use to build your startup website, web application, or dashboard.",
    image: ostapImage,
    stars: 5,
    gridClass: "md:col-start-1 md:row-start-3 md:row-span-2",
  },
  {
    name: "Marko Denic",
    role: "Developer and Software Engineer",
    content:
      "TailGrids includes all the essential UI components you need to build beautiful websites with Tailwind CSS. Its consistent design, clean codebase, copy-paste interface, and detailed documentation make it organized and easy to use.",
    image: markoImage,
    stars: 5,
    gridClass: "md:col-start-2 md:row-start-2 md:row-span-2",
  },
  {
    name: "Anamoul Rouf",
    role: "UX Designer",
    content:
      "Even though I am a design person, I need to build site sometimes. TailGrids UI empowered me to do more with my little HTML/CSS skills.",
    image: anamolImage,
    stars: 5,
    gridClass: "md:col-start-2 md:row-start-4 md:row-span-1",
  },
  {
    name: "Athar Ahmed",
    role: "Founder, ScrapeOwl",
    content:
      "Since I like doing engineering parts only, designing and coding landing pages is great blocker for me while I develop MVPs or try to validate a new product idea. TailGrids seems have great collection of UI components that also comes relevant contents and Figma file that I can use to play or create prototype before diving into code.",
    image: atharImage,
    stars: 5,
    gridClass: "md:col-start-3 md:row-start-1 md:row-span-2",
  },
  {
    name: "Fajar Siddiq",
    role: "Software Developer @HappyAddons",
    content:
      "Having used almost all the Tailwind CSS UI toolkits and resources, I can confidently say that TailGrids is the easiest and most comprehensive Tailwind UI Library with almost all essential Tailwind CSS components you may need to build web UI faster.",
    image: fazarImage,
    stars: 5,
    gridClass: "md:col-start-3 md:row-start-3 md:row-span-2",
  },
];
