import { HomeNavbar } from "@/components/shared";
import {
  AnalyticsOverview,
  Footer,
  Hero,
  NewsLetter,
  TemplateShowcase,
  TestimonialSection,
  WhyChooseUsSimple,
} from "@/feature/homepage";

const RootPage = async () => {
  return (
    <div className="min-h-screen">
      <HomeNavbar />
      <Hero />
      <AnalyticsOverview />
      <WhyChooseUsSimple />
      <TemplateShowcase />
      <TestimonialSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default RootPage;
