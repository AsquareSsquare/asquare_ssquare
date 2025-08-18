"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  discountedPrice: number;
}

function PriceTag({ price, discountedPrice }: PriceTagProps) {
  return (
    <div className="flex items-center justify-around gap-4 max-w-fit mx-auto">
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
          ${discountedPrice}
        </span>
        <span className="text-lg line-through text-zinc-400 dark:text-zinc-500">
          ${price}
        </span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Lifetime access
        </span>
        <span className="text-xs text-zinc-700 dark:text-zinc-300">
          One-time payment
        </span>
      </div>
    </div>
  );
}

interface DrawerProps<T> {
  isOpen: T;
  setIsOpen: (value: T) => void;
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  height?: string;
}

const drawerVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
};

export default function SmoothDrawer<T>({
  isOpen,
  setIsOpen,
  children,
  header,
  className,
}: DrawerProps<T>) {
  const isDialogOpen = !!isOpen;
  return (
    <Drawer
      open={isDialogOpen}
      onOpenChange={(open) => {
        setIsOpen(open as T);
      }}
    >
      <DrawerContent
        className={cn("max-w-lg mx-auto p-6 rounded-2xl shadow-xl", className)}
      >
        <motion.div
          variants={drawerVariants as any}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.div variants={itemVariants as any}>
            <DrawerHeader className="px-0">
              <DrawerTitle className="text-2xl font-semibold flex items-center">
                <motion.div variants={itemVariants as any}>{header}</motion.div>
              </DrawerTitle>
            </DrawerHeader>
          </motion.div>

          <motion.div variants={itemVariants as any}>{children}</motion.div>

          {/*<motion.div variants={itemVariants as any}>*/}
          {/*  <DrawerFooter className="flex flex-row justify-end gap-3 px-0">*/}
          {/*    <motion.div*/}
          {/*      initial={{ opacity: 0 }}*/}
          {/*      animate={{ opacity: 1 }}*/}
          {/*      transition={{ duration: 0.3 }}*/}
          {/*    >*/}
          {/*      <Button className="rounded-lg">Submit</Button>*/}
          {/*    </motion.div>*/}
          {/*    <DrawerClose asChild>*/}
          {/*      <Button variant="outline" className="rounded-lg">*/}
          {/*        Cancel*/}
          {/*      </Button>*/}
          {/*    </DrawerClose>*/}
          {/*  </DrawerFooter>*/}
          {/*</motion.div>*/}
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
