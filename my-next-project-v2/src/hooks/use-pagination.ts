"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export function usePagination(initialPath: string) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getCurrentPage = useCallback(() => {
    return Number.parseInt(searchParams.get("page") || "1", 10);
  }, [searchParams]);

  const handlePageChange = useCallback(
    (page: number, fetchCallback?: (page: number) => void) => {
      // URLのクエリパラメータを更新
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`${initialPath}?${params.toString()}`);

      // データを再取得（コールバックがある場合）
      if (fetchCallback) {
        fetchCallback(page);
      }

      // ページトップにスクロール
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [searchParams, router, initialPath]
  );

  return {
    currentPage: getCurrentPage(),
    handlePageChange,
  };
}
