"use client";

import Link from "next/link";
import { ExternalLink, MessageSquare } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ArticleHeaderProps {
  article: {
    source_url: string;
    translated_title: string;
    title: string;
    publishedAt: string;
    documentId?: string;
  };
  onScrollToComments: () => void;
}

export function ArticleHeader({
  article,
  onScrollToComments,
}: ArticleHeaderProps) {
  return (
    <header className="mb-8 relative">
      <div className="absolute top-0 right-0">
        <Link
          href={article.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
        >
          元記事を見る
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">{article.translated_title}</h1>
      <p className="text-gray-500 text-sm mb-4">{article.title}</p>

      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">
          {formatDate(article.publishedAt)}
        </p>
        <button
          onClick={onScrollToComments}
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
          aria-label="コメントセクションへスクロール"
        >
          <MessageSquare className="w-4 h-4" />
          <span>コメント欄へ移動</span>
        </button>
      </div>
    </header>
  );
}
