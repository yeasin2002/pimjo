import StarFatIcon from '@/components/icons/svg/star-fat'
import { SectionHeader } from '@/components/shared'
import { TestimonialCard } from './testimonial-card'
import { testimonials } from './testimonials.data'

export const TestimonialSection = () => {
  return (
    <div className="hidden md:block">
      <SectionHeader
        icon={<StarFatIcon />}
        badgeText="Testimonial"
        title="Our Wall of Love - Words from Happy Customers"
        subtitle={
          <>
            Trusted by <span className="font-medium text-[#374151]">design professionals</span> and{' '}
            <span className="font-medium text-[#374151]">loved by creators</span> worldwide.
          </>
        }
        className="mt-0 border-t-0"
      />
      <div className="border-t border-b border-gray-200 bg-gray-50 p-10">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:grid-rows-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}
