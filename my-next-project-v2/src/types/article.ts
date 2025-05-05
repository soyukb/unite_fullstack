// メディア関連の型定義
export interface Media {
  media_type: string;
  media_url: string;
  documentId?: string;
  id?: number;
  createdAt?: string;
  publishedAt?: string;
  updatedAt?: string;
}

// コメント関連の型定義
export interface Comment {
  documentId: string;
  content: string;
  likes: number;
  dislikes: number;
  publishedAt: string;
  parent?: string | { documentId: string } | null;
  replies: string[];
  author?: string | null;
  createdAt?: string;
  updatedAt?: string;
  id?: number;
}

// 子コメントを含むコメントの型定義
export interface CommentWithChildren extends Comment {
  children?: CommentWithChildren[];
}

// 投稿関連の型定義
export interface Post {
  content: string;
  translated_content: string;
  likes: number;
  depth: number;
  parentid: string | null;
  documentId: string;
  thingid: string;
  post_created_at: string;
  createdAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  id?: number;
}

// 子投稿を含む投稿の型定義
export interface PostWithChildren extends Post {
  children: PostWithChildren[];
}

// 記事全体の型定義
export interface Article {
  translated_title: string;
  title: string;
  publishedAt: string;
  source_url: string;
  media: Media[];
  comments: Comment[];
  posts: Post[];
  article_type?: string;
  body?: string | null;
  createdAt?: string;
  documentId: string;
  id?: number;
  language?: string | null;
  scheduledAt?: string | null;
  source_type?: string | null;
  tags?: string | null;
  updatedAt?: string;
}

export interface ArticleListProps {
  articles: Article[];
}
