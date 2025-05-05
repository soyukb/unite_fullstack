"use client";

import { useState } from "react";
import { ArticleCard } from "./article-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { ArticleListProps } from "@/types/index";
import Link from "next/link";

export function ArticleList({ articles }: ArticleListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.translated_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="記事を検索..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              href={`/articles/${article.documentId}`}
              key={article.documentId}
              className="block transition-transform hover:scale-105"
            >
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
