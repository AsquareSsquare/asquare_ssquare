"use client";

import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Variants } from "motion";

interface DrawerProps<T> {
  isOpen: T;
  setIsOpen: (value: T) => void;
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  height?: string;
}

const drawerVariants: Variants = {
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

const itemVariants: Variants = {
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
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.div variants={itemVariants}>
            <DrawerHeader className="px-0">
              <DrawerTitle className="text-2xl font-semibold flex items-center">
                <motion.div variants={itemVariants}>{header}</motion.div>
              </DrawerTitle>
            </DrawerHeader>
          </motion.div>

          <motion.div variants={itemVariants}>{children}</motion.div>
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
