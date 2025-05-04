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
