"use client";

import { useState, useEffect } from "react";
import type { Article } from "@/types/article";
import type { PaginationMeta, ApiResponse } from "@/types/index";

interface FetchArticlesResult {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
  pagination: PaginationMeta | null;
  fetchPage: (page: number) => Promise<void>;
}

export function useArticles(initialPage = 1): FetchArticlesResult {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [, setCurrentPage] = useState(initialPage);

  const fetchArticles = async (page: number) => {
    setIsLoading(true);
    setError(null);

    try {
      // 環境変数からAPIエンドポイントとトークンを取得
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://host.docker.internal:1337";
      const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
      const pageSize = process.env.NEXT_PUBLIC_PAGE_SIZE || 2;

      const url = `${apiUrl}/api/articles?sort=createdAt:desc&populate[media]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      // トークンが存在する場合のみAuthorizationヘッダーを追加
      if (apiToken) {
        headers.Authorization = `Bearer ${apiToken}`;
      }

      const response = await fetch(url, { headers });

      if (!response.ok) {
        throw new Error(
          `APIリクエストエラー: ${response.status} ${response.statusText}`
        );
      }

      const responseData = (await response.json()) as ApiResponse;
      setArticles(responseData.data);
      setPagination(responseData.meta.pagination);
      setCurrentPage(page);
    } catch (err) {
      console.error("データ取得エラー:", err);
      setError(
        err instanceof Error
          ? err.message
          : "データの取得中にエラーが発生しました"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPage = async (page: number) => {
    await fetchArticles(page);
  };

  useEffect(() => {
    fetchArticles(initialPage);
  }, [initialPage]);

  return { articles, isLoading, error, pagination, fetchPage };
}
