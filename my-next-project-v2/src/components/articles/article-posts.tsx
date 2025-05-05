"use client";

import { MessageCircle } from "lucide-react";
import { PostCard } from "@/components/posts/post-card";
import { PostWithChildren } from "@/types";

interface ArticlePostsProps {
  posts?: PostWithChildren[]; // 型は実際のデータ構造に合わせて調整してください
}

export function ArticlePosts({ posts }: ArticlePostsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <MessageCircle className="w-5 h-5" />
        Reddit投稿
      </h2>
      <div className="space-y-4">
        {posts?.map((post) => (
          <PostCard key={post.documentId} post={post} />
        ))}
        {!posts ||
          (posts.length === 0 && (
            <p className="text-muted-foreground text-sm">投稿はありません</p>
          ))}
      </div>
    </div>
  );
}
