"use client";

import { useSlugFromUrl } from "@/hooks/use-slug-from-url";
import { useArticleData } from "@/hooks/use-article-data";
import { ArticleHeader } from "@/components/articles/article-header";
import { ArticleMedia } from "@/components/articles/article-media";
import { ArticlePosts } from "@/components/articles/article-posts";
import { ArticleComments } from "@/components/articles/article-comments";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorMessage } from "@/components/shared/error-message";
import { EmptyState } from "@/components/shared/empty-state";
import { useRef } from "react";
import { organizeComments, organizePosts } from "@/lib/data-utils";

export default function ArticleDetail() {
  const slug = useSlugFromUrl();
  const { article, loading, error } = useArticleData(slug);
  const commentsRef = useRef<HTMLDivElement>(null);

  // Function to scroll to comments section
  const scrollToComments = () => {
    commentsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ローディング状態の表示
  if (loading) {
    return <LoadingSpinner />;
  }

  // エラー状態の表示
  if (error) {
    return <ErrorMessage message={`エラーが発生しました: ${error}`} />;
  }

  // データがない場合
  if (!article) {
    return <EmptyState message="記事が見つかりませんでした。" />;
  }

  const articleData = article.data;
  const rootComments = organizeComments(articleData.comments);
  const rootPosts = organizePosts(articleData.posts);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <ArticleHeader
        article={articleData}
        onScrollToComments={scrollToComments}
      />

      <ArticleMedia
        media={articleData.media[0]}
        title={articleData.translated_title}
      />

      <ArticlePosts posts={rootPosts} />

      <div ref={commentsRef}>
        <ArticleComments article={articleData} comments={rootComments} />
      </div>
    </div>
  );
}
