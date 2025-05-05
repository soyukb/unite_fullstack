import { Article } from "@/types/index";

export type ApiResponse = {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};

// APIから返される単一記事のレスポンス型
export interface ApiArticle {
  data: Article;
}
