import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Code } from "lucide-react";
import { navItems } from "@/constants/data";
import Link from "next/link";

function Footer() {
  return (
    <section id="footer">
      <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className="max-w-7xl  mx-auto relative z-10  w-full py-20 flex flex-col xs:flex-row gap-10 items-start justify-between px-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-primary size-9 text-white flex items-center justify-center rounded-lg">
                <Code size={18} />
              </div>
              <p className="text-white font-bold">
                A<sup>2</sup>S<sup>2</sup>
              </p>
            </div>
            <div className="space-y-2 mt-8">
              <p className="text-gray-200 text-sm">
                Copyright © 2025 A<sup>2</sup>S<sup>2</sup>
              </p>
              <p className="text-gray-200 text-sm">All rights reserved</p>
            </div>
          </div>

          <div className="flex items-start gap-10">
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.route}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-background/80 hover:text-background transition-colors duration-200">
                Privacy Policy
              </p>
              <p className="text-background/80 hover:text-background transition-colors duration-200">
                Privacy Policy
              </p>
              <p className="text-background/80 hover:text-background transition-colors duration-200">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
