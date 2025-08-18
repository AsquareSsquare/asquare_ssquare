import React from "react";
import AnimateSlide from "@/components/ui/animate-slide";
import { teamMembers } from "@/constants/data";
import TeamCard from "@/components/common/team-card";

function MyTeam() {
  return (
    <section id="my-team" className="min-h-screen w-full bg-muted">
      <div className="w-full relative max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex items-center justify-between lg:gap-10">
          <div className="sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start">
            <div className="hidden lg:block space-y-3 w-[500px]">
              <AnimateSlide delay={200}>
                <h1 className="text-xl lg:text-5xl font-bold text-neutral-900">
                  Meet Our Development Team
                </h1>
              </AnimateSlide>
              <AnimateSlide delay={400}>
                <p className="font-normal text-base text-neutral-700 mx-auto">
                  4 passionate friends with 15+ years combined experience in
                  production-ready applications.
                </p>
              </AnimateSlide>
            </div>
          </div>
          <div className="relative w-full lg:w-xl">
            <div className="lg:hidden block space-y-3">
              <AnimateSlide delay={200}>
                <h1 className="text-xl md:text-5xl font-bold text-neutral-900">
                  Meet Our Development Team
                </h1>
              </AnimateSlide>
              <AnimateSlide delay={400}>
                <p className="font-normal text-base text-neutral-700 mx-auto">
                  4 passionate friends with 15+ years combined experience in
                  production-ready applications.
                </p>
              </AnimateSlide>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 lg:mt-0">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  teamInfo={member}
                  delay={600 + 200 * (index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyTeam;
