import React from "react";
import { cn } from "@/lib/utils";

function BlueGlowTopBg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen w-full relative bg-white", className)}>
      {/* Cool Blue Glow Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      {children}
    </div>
  );
}

export default BlueGlowTopBg;
