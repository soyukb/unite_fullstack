"use client";

import { ThumbsUp } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { PostWithChildren } from "@/types";

interface PostCardProps {
  post: PostWithChildren;
  depth?: number;
}

export function PostCard({ post, depth = 0 }: PostCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-gray-50">
      <div className="mb-2">
        <p className="mb-2 font-medium text-gray-900">
          {post.translated_content}
        </p>
        <p className="mb-3 text-sm text-gray-600 italic">{post.content}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            {post.likes}
          </span>
          <span>{formatDate(post.post_created_at)}</span>
        </div>
      </div>

      {post.children && post.children.length > 0 && (
        <div className="mt-4 pl-4 border-l-2 border-blue-200 space-y-4">
          {post.children.map((reply) => (
            <PostCard key={reply.documentId} post={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
