import React from "react";
import DeepOceanGlowBg from "@/components/ui/deep-ocean-glow-bg";
import AnimateSlide from "@/components/ui/animate-slide";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/constants/data";

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  title: string;
}

function Testimonials() {
  return (
    <section id="testimonials">
      <DeepOceanGlowBg className="py-32 flex flex-col">
        <AnimateSlide delay={300} className="z-10">
          <h1 className="text-2xl text-center md:text-5xl font-bold text-white/90">
            What Our Clients Say
          </h1>
        </AnimateSlide>
        <AnimateSlide delay={500} className="z-10">
          <p className="mt-7 text-center font-normal text-base text-white/60">
            Real feedback from founders who trusted us with their projects.
          </p>
        </AnimateSlide>

        <AnimateSlide delay={700} className="mt-20">
          <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </AnimateSlide>
      </DeepOceanGlowBg>
    </section>
  );
}

export default Testimonials;
