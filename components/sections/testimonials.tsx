import React from "react";
import DeepOceanGlowBg from "@/components/ui/deep-ocean-glow-bg";
import AnimateSlide from "@/components/ui/animate-slide";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constants/data";
import TestimonialCard from "@/components/common/testimonial-card";

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  title: string;
}

function Testimonials() {
  return (
    <section id="testimonials">
      <DeepOceanGlowBg className="py-32">
        <div className="max-w-7xl relative mx-auto flex flex-col items-center px-4 z-1">
          <AnimateSlide delay={300}>
            <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              What Our Clients Say
            </h1>
          </AnimateSlide>
          <AnimateSlide delay={500}>
            <p className="mt-7 font-normal text-base max-w-lg bg-clip-text text-center mx-auto text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Real feedback from founders who trusted us with their projects.
            </p>
          </AnimateSlide>

          <AnimateSlide delay={700}>
            <InfiniteMovingCards speed="slow" className="mt-20">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
            </InfiniteMovingCards>
          </AnimateSlide>
        </div>
      </DeepOceanGlowBg>
    </section>
  );
}

export default Testimonials;
