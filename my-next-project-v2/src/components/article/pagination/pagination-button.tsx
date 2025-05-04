"use client";

import { Button } from "@/components/ui/button";

interface PaginationButtonProps {
  page: number;
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
  ariaCurrent?: "page" | undefined;
}

export function PaginationButton({
  page,
  isActive,
  onClick,
  ariaLabel,
  ariaCurrent,
}: PaginationButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
    >
      {page}
    </Button>
  );
}
