import React from "react";
import { Testimonial } from "@/components/sections/testimonials";
import { Rating, RatingButton } from "@/components/ui/kibo-ui/rating";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)] px-8 py-6 md:w-[450px]">
      <Rating value={testimonial.rating} readOnly className="mb-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton className="text-yellow-500" key={index} />
        ))}
      </Rating>
      <p className="relative z-20 text-sm leading-[1.6] font-normal text-gray-100">
        {testimonial.quote}
      </p>
      <div className="mt-8">
        <p className="text-sm leading-[1.6] font-normal text-gray-400">
          {testimonial.name}
        </p>
        <p className="text-sm leading-[1.6] font-normal text-gray-400">
          {testimonial.title}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
