"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { PaginationButton } from "@/components/article/pagination/pagination-button";
import { PaginationNavButton } from "@/components/article/pagination/pagination-nav-button";
import { getPageNumbers } from "@/lib/pagination-utils";
import { PaginationControlsProps } from "@/types/pagination";

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center space-x-2 my-8">
      {/* 最初のページへ移動するボタン */}
      <PaginationNavButton
        onClick={() => onPageChange(1)}
        disabled={currentPage <= 1}
        ariaLabel="最初のページへ"
        title="最初のページへ"
        icon={ChevronsLeft}
      />

      {/* 前のページへ移動するボタン */}
      <PaginationNavButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        ariaLabel="前のページ"
        title="前のページ"
        icon={ChevronLeft}
      />

      {/* ページ番号ボタン */}
      {pageNumbers.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          isActive={currentPage === page}
          onClick={() => onPageChange(page)}
          ariaLabel={`${page}ページ目`}
          ariaCurrent={currentPage === page ? "page" : undefined}
        />
      ))}

      {/* 次のページへ移動するボタン */}
      <PaginationNavButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        ariaLabel="次のページ"
        title="次のページ"
        icon={ChevronRight}
      />

      {/* 最後のページへ移動するボタン */}
      <PaginationNavButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage >= totalPages}
        ariaLabel="最後のページへ"
        title="最後のページへ"
        icon={ChevronsRight}
      />
    </div>
  );
}
