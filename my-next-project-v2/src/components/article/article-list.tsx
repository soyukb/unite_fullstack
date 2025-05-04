"use client";

import { useState } from "react";
import { ArticleCard } from "./article-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ArticleListProps } from "@/types/index";

export function ArticleList({ articles }: ArticleListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

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
        <div className="w-full max-w-md mx-auto grid grid-cols-3 mb-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`py-2 px-4 text-center transition-colors ${
              activeTab === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            } rounded-l-md`}
          >
            すべて
          </button>
          <button
            onClick={() => setActiveTab("image")}
            className={`py-2 px-4 text-center transition-colors ${
              activeTab === "image"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            画像
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`py-2 px-4 text-center transition-colors ${
              activeTab === "video"
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            } rounded-r-md`}
          >
            動画
          </button>
        </div>

        {activeTab === "all" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.documentId} article={article} />
            ))}
          </div>
        )}

        {activeTab === "image" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles
              .filter((article) => article.media[0]?.media_type === "image")
              .map((article) => (
                <ArticleCard key={article.documentId} article={article} />
              ))}
          </div>
        )}

        {activeTab === "video" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles
              .filter((article) => article.media[0]?.media_type === "video")
              .map((article) => (
                <ArticleCard key={article.documentId} article={article} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
