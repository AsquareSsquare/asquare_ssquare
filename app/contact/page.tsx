import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import AnimateSlide from "@/components/ui/animate-slide";
import { sectionBadge } from "@/constants/data";
import { Badge } from "@/components/ui/badge";

function ContactPage() {
  return (
    <section id="contact">
      <HeroHighlight className="w-full">
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4">
          <div className="flex flex-col items-center">
            <AnimateSlide delay={300} className="max-w-xl">
              <h1 className="text-xl text-center lg:text-5xl font-bold text-neutral-900">
                Let's Build Something Amazing Together
              </h1>
            </AnimateSlide>
            <AnimateSlide delay={600} className="max-w-xl mt-3">
              <p className="font-normal text-center text-base text-neutral-800 mx-auto">
                Ready to turn your idea into reality? Get in touch with our team
                for a free consultation and detailed project quote. No
                commitments, just honest advice and transparent pricing.
              </p>
            </AnimateSlide>

            <div className="flex items-center justify-center flex-wrap gap-6 mt-10">
              {sectionBadge.map((item, index) => (
                <AnimateSlide key={index} delay={600 + 300 * (index + 1)}>
                  <Badge className="bg-accent text-slate-800 shadow-md border text-base [&>svg]:size-4 rounded-full">
                    <item.icon size={20} className={item.iconColor} />{" "}
                    {item.text}
                  </Badge>
                </AnimateSlide>
              ))}
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}

export default ContactPage;
