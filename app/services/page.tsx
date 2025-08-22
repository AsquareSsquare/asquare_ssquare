import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import AnimateSlide from "@/components/ui/animate-slide";
import { faqs, featurePageItems, sectionBadge } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/cards/service-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/sections/footer";

function ServicesPage() {
  return (
    <>
      <section id="services-page">
        <HeroHighlight className="w-full">
          <div className="min-h-screen w-full flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center">
              <AnimateSlide delay={300}>
                <h1 className="text-xl text-center lg:text-5xl font-bold text-neutral-900">
                  Professional
                </h1>
              </AnimateSlide>
              <AnimateSlide delay={600}>
                <h1 className="text-xl text-center lg:text-5xl font-bold text-neutral-900">
                  Development Services
                </h1>
              </AnimateSlide>
              <AnimateSlide delay={900} className="max-w-xl mt-3">
                <p className="font-normal text-center text-base text-neutral-800 mx-auto">
                  From concept to deployment, we provide end-to-end development
                  services tailored for startups and growing businesses.
                </p>
              </AnimateSlide>

              <div className="flex items-center justify-center flex-wrap gap-6 mt-10">
                {sectionBadge.map((item, index) => (
                  <AnimateSlide key={index} delay={900 + 300 * (index + 1)}>
                    <Badge className="bg-accent text-slate-800 shadow-md border text-base [&>svg]:size-4 rounded-full">
                      <item.icon size={20} className={item.iconColor} />{" "}
                      {item.text}
                    </Badge>
                  </AnimateSlide>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featurePageItems.map((item, index) => (
              <AnimateSlide key={index} delay={300 + 300 * (index + 1)}>
                <ServiceCard service={item} />
              </AnimateSlide>
            ))}
          </div>

          <div className="mt-32 w-full flex flex-col items-center justify-center">
            <AnimateSlide delay={200}>
              <h1 className="text-xl text-center lg:text-5xl font-bold text-neutral-900">
                Frequently Asked Questions
              </h1>
            </AnimateSlide>
            <AnimateSlide delay={500} className="max-w-xl mt-3">
              <p className="font-normal text-center text-base text-neutral-800 mx-auto">
                Everything you need to know about working with our team.
              </p>
            </AnimateSlide>
            <AnimateSlide delay={700}>
              <Accordion
                type="single"
                collapsible
                className="w-full px-4 lg:px-0 lg:w-[60rem] space-y-3 mt-20 mb-32"
                defaultValue={faqs[0].id}
              >
                {faqs.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border bg-white shadow-md px-4 rounded-lg"
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateSlide>
          </div>
        </HeroHighlight>
      </section>
      <Footer />
    </>
  );
}

export default ServicesPage;
