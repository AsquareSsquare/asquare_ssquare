import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";

interface CustomModalProps<T> {
  isOpen: T;
  setIsOpen: (value: T) => void;
  header: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  height?: string;
}

function CustomModal<T>({
  isOpen,
  setIsOpen,
  children,
  header,
  className,
}: CustomModalProps<T>) {
  const isDialogOpen = !!isOpen;
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        setIsOpen(open as T);
      }}
    >
      <DialogContent
        className={cn(
          "flex flex-col gap-0 p-0 [&>button:last-child]:top-3.5 max-h-[min(640px,80vh)]" +
            " sm:max-w-lg",
          className,
        )}
      >
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto">
          <div className="px-6 py-4">{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomModal;
