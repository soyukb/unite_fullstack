"use client";
import { Suspense } from "react";
import { useArticles } from "@/hooks/use-articles";
import { ArticleList } from "@/components/article/article-list";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorMessage } from "@/components/shared/error-message";
import { EmptyState } from "@/components/shared/empty-state";
import { PaginationControls } from "@/components/article/pagination-controls";
import { usePagination } from "@/hooks/use-pagination";

// 実際のコンテンツを表示するコンポーネント
function ArticlesContent() {
  const { currentPage, handlePageChange } = usePagination("/articles");
  const { articles, isLoading, error, pagination, fetchPage } =
    useArticles(currentPage);

  const onPageChange = (page: number) => {
    handlePageChange(page, fetchPage);
  };

  return (
    <div className="container mx-auto p-5">
      {isLoading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && articles.length === 0 && (
        <EmptyState message="記事が見つかりませんでした" />
      )}

      {!isLoading && !error && articles.length > 0 && (
        <>
          <ArticleList articles={articles} />

          {pagination && (
            <PaginationControls
              currentPage={pagination.page}
              totalPages={pagination.pageCount}
              onPageChange={onPageChange}
            />
          )}
        </>
      )}
    </div>
  );
}

// メインのページコンポーネント
export default function ArticlesPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ArticlesContent />
    </Suspense>
  );
}
