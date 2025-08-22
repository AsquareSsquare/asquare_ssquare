"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { navItems } from "@/constants/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function NavItems() {
  const pathName = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.nav
      onMouseLeave={() => setHovered(null)}
      className="relative items-center gap-2 hidden 2md:flex"
    >
      {navItems.map((item, index) => {
        const isActive = pathName === item.route;
        return (
          <Link
            key={item.label}
            onMouseEnter={() => setHovered(index)}
            href={item.route}
            className={cn(
              "relative flex items-center text-sm gap-2 px-6 py-2 transition-colors duration-300 ease-out rounded-lg" +
                " z-10",
              { "bg-slate-700 text-gray-300": isActive },
              { "text-gray-300": hovered === index },
            )}
          >
            {hovered === index && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-lg bg-slate-700"
              />
            )}
            <span className="relative z-20">{item.label}</span>
          </Link>
        );
      })}
    </motion.nav>
  );
}

export default NavItems;
