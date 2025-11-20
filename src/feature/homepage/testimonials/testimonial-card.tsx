import RattingStarIcon from "@/components/icons/svg/rating-star";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Testimonial } from "./testimonials.data";

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-10 border border-gray-200",
        testimonial.gridClass
      )}
    >
      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="space-y-1">
            <p className="text-base leading-6 font-medium tracking-[-0.2px] text-[#1F2937]">
              {testimonial.name}
            </p>
            <p className="text-sm font-normal tracking-[-0.2px] text-[#9CA3AF]">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <RattingStarIcon key={i} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-[30px] space-y-5">
        <p className="text-base leading-6 font-normal tracking-[-0.2px] text-[#6B7280]">
          {testimonial.content}
        </p>
        {testimonial.content2 && (
          <p className="text-base leading-6 font-normal tracking-[-0.2px] text-[#6B7280]">
            {testimonial.content2}
          </p>
        )}
      </div>
    </div>
  );
};
