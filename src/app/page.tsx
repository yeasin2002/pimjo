import {
  AnalyticsOverview,
  Footer,
  Hero,
  HomeNavbar,
  NewsLetter,
  TemplateShowcase,
  TestimonialSection,
  WhyChooseUsSimple,
} from '@/feature/homepage'
import { VersionNoticeTopBar } from '../feature/homepage'

const RootPage = async () => {
  return (
    <div className="min-h-screen">
      <VersionNoticeTopBar />
      <HomeNavbar />
      <Hero />
      <AnalyticsOverview />
      <WhyChooseUsSimple />
      <TemplateShowcase />
      <TestimonialSection />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default RootPage
