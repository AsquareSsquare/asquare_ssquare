import React from "react";
import CardFlip from "@/components/ui/card-flip";
import AnimateSlide from "@/components/ui/animate-slide";
import Image from "next/image";

interface FontContent {
  name: string;
  designation: string;
  imageUrl: string;
}

interface BackContent {
  email: string;
  // socials: [
  //   {
  //     icon: Linkedin,
  //   },
  // ],
  technologies: string[];
}

interface TeamInfo {
  basicInfo: FontContent;
  additionalInfo: BackContent;
}

function FontContent({ fontContent }: { fontContent: FontContent }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image
        src={fontContent.imageUrl}
        alt={fontContent.name}
        width={200}
        height={200}
        className="aspect-square"
      />
      <div className="flex flex-col items-start">
        <h3 className="font-bold">{fontContent.name}</h3>
        <p className="text-sm text-gray-500">{fontContent.designation}</p>
      </div>
    </div>
  );
}

function BackContent({ backContent }: { backContent: BackContent }) {
  return (
    <div className="p-6 flex flex-col justify-between h-full">
      <div className="flex gap-3 flex-wrap justify-center">
        {backContent.technologies.map((technology, index) => (
          <div
            key={index}
            className="bg-muted relative z-20 rounded-xl border p-1"
          >
            <Image
              src={technology}
              alt="technology"
              width={50}
              height={50}
              className="border bg-background rounded-lg p-1"
            />
          </div>
        ))}
      </div>

      <div className="bg-muted px-3 py-2 rounded-lg border">
        {backContent.email}
      </div>
    </div>
  );
}

function TeamCard({ teamInfo, delay }: { teamInfo: TeamInfo; delay: number }) {
  return (
    <AnimateSlide delay={delay}>
      <CardFlip
        fontContent={<FontContent fontContent={teamInfo.basicInfo} />}
        backContent={<BackContent backContent={teamInfo.additionalInfo} />}
      />
    </AnimateSlide>
  );
}

export default TeamCard;
