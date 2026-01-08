"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface AppModalProps {
  title: string;
  description?: string;
  trigger?: React.ReactNode; // The button that opens the modal
  children?: React.ReactNode; // The form or content inside
  footer?: React.ReactNode; // Action buttons
  open?: boolean;            // Controlled state (optional)
  onOpenChange?: (open: boolean) => void; // State handler (optional)
  className?: string;        // Custom width etc.
}

export function AppModal({
  title,
  description,
  trigger,
  children,
  footer,
  open,
  onOpenChange,
  className,
}: AppModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* If a trigger button is passed, render it */}
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      
      <DialogContent 
        className={cn(
          "bg-[#0a0a0a] border border-white/10 text-white sm:rounded-2xl shadow-2xl shadow-purple-900/20",
          className
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-gray-400">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        {/* Modal Body */}
        <div className="py-4">
          {children}
        </div>

        {/* Modal Footer (Actions) */}
        {footer && (
          <DialogFooter className="gap-2 sm:gap-0">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}