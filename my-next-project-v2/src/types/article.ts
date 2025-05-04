export type Media = {
  id: number;
  media_type: string;
  media_url: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Article = {
  id: number;
  title: string;
  translated_title: string;
  article_type: string;
  media: Media[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  source_url: string;
  documentId: string;
  language: string | null;
  body: string | null;
  scheduledAt: string | null;
  source_type: string | null;
  tags: string | null;
};

export interface ArticleListProps {
  articles: Article[];
}
