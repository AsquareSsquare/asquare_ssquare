import React from "react";
import DecorateGrid from "@/components/common/decorate-grid";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureSectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
}

function FeatureSectionCard({ feature }: { feature: FeatureSectionCardProps }) {
  return (
    <div className="group">
      <DecorateGrid bgClassname="bg-muted" decoClassName="to-muted">
        <feature.icon
          className={cn(
            "size-6 group-hover:scale-110 transition-transform duration-200",
            feature.iconColor,
          )}
          aria-hidden
        />
      </DecorateGrid>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-lg font-semibold group-hover:translate-x-1 transition-transform duration-200">
          {feature.title}
        </h1>
        <p className="text-center text-sm text-gray-500">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default FeatureSectionCard;
