"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

function MobileNavItems() {
  return (
    <div className="flex 2md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="group size-8"
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <nav className="space-y-2">
            {navItems.map((navItem) => (
              <DropdownMenuItem
                key={navItem.label}
                className={cn(
                  "p-2 rounded-md focus:bg-muted focus:text-muted-foreground capitalize",
                )}
                asChild
              >
                <Link href={navItem.route}>{navItem.label}</Link>
              </DropdownMenuItem>
            ))}
          </nav>
          <Button>Get quote</Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MobileNavItems;
