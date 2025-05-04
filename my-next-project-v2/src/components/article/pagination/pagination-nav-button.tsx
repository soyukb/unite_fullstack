"use client";

import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";

interface PaginationNavButtonProps {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  title: string;
  icon: LucideIcon;
}

export function PaginationNavButton({
  onClick,
  disabled,
  ariaLabel,
  title,
  icon: Icon,
}: PaginationNavButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
