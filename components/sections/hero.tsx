import React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HeroBg from "@/components/ui/hero-bg";
import AnimateSlide from "@/components/ui/animate-slide";

function Hero() {
  return (
    <section id="hero">
      <HeroBg className="flex items-center justify-center">
        <div className="flex flex-col items-center z-1">
          <AnimateSlide delay={200}>
            <Badge className="bg-accent text-slate-800 shadow-md border">
              &#127775; Trusted by 50+ startups across 6 countries
            </Badge>
          </AnimateSlide>
          <AnimateSlide delay={400}>
            <div className="flex flex-col items-center mt-6">
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text">
                Affordable <br /> Remote Development Team
              </h1>
              <PointerHighlight rectangleClassName="border-dashed border-primary bg-primary/20">
                <span className="text-4xl md:text-7xl font-bold text-center bg-clip-text">
                  For Global Startups
                </span>
              </PointerHighlight>
            </div>
          </AnimateSlide>
          <AnimateSlide delay={600}>
            <p className="mt-7 font-normal text-base text-neutral-500 max-w-lg text-center mx-auto">
              4 expert developers from India delivering world-class Flutter
              apps, web solutions, and MVPs at startup-friendly prices.
            </p>
          </AnimateSlide>

          <AnimateSlide delay={800}>
            <div className="space-x-10 mt-8">
              <Button className="bg-blue-500 hover:bg-blue-500/90 text-white group">
                Get free quote{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button variant="outline">Contact us</Button>
            </div>
          </AnimateSlide>

          <div>
            <div></div>
          </div>
        </div>
      </HeroBg>
    </section>
  );
}

export default Hero;
