import React from "react";
import { ArrowRight, Check, LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  offers: string[];
  startingAt: string;
  timeline: string;
  icon: LucideIcon;
  iconColor: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:-translate-y-1 transition-transform duration-200">
      <div className="flex flex-col items-center space-y-3">
        <div className="size-10 border rounded-md shadow-lg flex items-center justify-center">
          <service.icon size={18} className={service.iconColor} />
        </div>
        <h3 className="text-lg font-bold text-center">{service.title}</h3>
        <p className="text-sm text-gray-700 text-center">
          {service.description}
        </p>
      </div>

      <div className="mt-6">
        {service.offers.map((item, i) => (
          <div key={i} className="flex items-center gap-1">
            <Check size={16} className="text-emerald-500" />
            <p className="text-sm font-semibold">{item}</p>
          </div>
        ))}
      </div>
      <Separator className="my-6" />

      <div>
        <p className="font-bold">
          Starting at:{" "}
          <span className="text-emerald-500 ml-4">{service.startingAt}</span>
        </p>
        <p className="font-bold">
          Time line:{" "}
          <span className="text-blue-500 ml-4">{service.timeline}</span>
        </p>
      </div>
      <Button className="w-full mt-6">
        Get free quote <ArrowRight />
      </Button>
    </div>
  );
}

export default ServiceCard;
