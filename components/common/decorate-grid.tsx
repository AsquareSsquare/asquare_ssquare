import React from "react";
import { cn } from "@/lib/utils";

function DecorateGrid({
  children,
  bgClassname,
  decoClassName,
}: {
  children: React.ReactNode;
  bgClassname?: string;
  decoClassName?: string;
}) {
  return (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div
        aria-hidden
        className={cn(
          "bg-radial to-background absolute inset-0 from-transparent to-75%",
          decoClassName,
        )}
      />
      <div
        className={cn(
          "bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l" +
            " border-t",
          bgClassname,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default DecorateGrid;
