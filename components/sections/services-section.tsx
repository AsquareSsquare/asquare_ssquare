import React from "react";
import BlueGlowTopBg from "@/components/ui/blue-glow-top-bg";
import AnimateSlide from "@/components/ui/animate-slide";
import FeatureSectionCard from "@/components/cards/feature-section-card";
import { featureSectionItems } from "@/constants/data";

function ServicesSection() {
  return (
    <section id="services-section">
      <BlueGlowTopBg className="flex items-center justify-center">
        <div className="z-1 flex flex-col items-center w-7xl mx-auto py-32 px-4">
          <AnimateSlide delay={300}>
            <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text">
              Our Core Services
            </h1>
          </AnimateSlide>
          <AnimateSlide delay={500}>
            <p className="mt-7 font-normal text-base text-neutral-700 max-w-lg text-center mx-auto">
              Full-stack development services tailored for startups and growing
              businesses.
            </p>
          </AnimateSlide>

          <AnimateSlide delay={700} className="mt-20">
            <div className="border grid divide-x divide-y *:p-8 sm:grid-cols-2 lg:grid-cols-3 bg-muted rounded-xl overflow-hidden shadow-md">
              {featureSectionItems.map((item, i) => (
                <FeatureSectionCard key={i} feature={item} />
              ))}
            </div>
          </AnimateSlide>
        </div>
      </BlueGlowTopBg>
    </section>
  );
}

export default ServicesSection;
