"use client";

import { useState, useEffect } from "react";
import type { ApiArticle } from "@/types";

export function useArticleData(slug: string | null) {
  const [article, setArticle] = useState<ApiArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticleData() {
      try {
        setLoading(true);
        // 環境変数からAPIエンドポイントとトークンを取得
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://host.docker.internal:1337";
        const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

        const url = `${apiUrl}/api/articles/${slug}/?populate[posts]=true&populate[media]=true&populate[comments][populate][parent]=true&populate[comments][populate][replies]=true`;

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

        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "エラーが発生しました");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchArticleData();
    }
  }, [slug]);

  return { article, loading, error };
}
