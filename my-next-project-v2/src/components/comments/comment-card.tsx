"use client";

import { ThumbsUp, ThumbsDown, Clock, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { CommentWithChildren } from "@/types";
import { cn } from "@/lib/utils";

interface CommentCardProps {
  comment: CommentWithChildren;
  depth?: number;
  children?: [];
}

export function CommentCard({ comment, depth = 0 }: CommentCardProps) {
  // ユーザー名の処理 - authorがNullの場合は「匿名」と表示
  const username = comment.author || "匿名";

  // イニシャルを取得
  const initials =
    username === "匿名" ? "匿" : username.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 p-5 shadow-sm bg-white transition-all hover:shadow-md",
        depth > 0 && "border-l-4 border-l-gray-300"
      )}
    >
      <div className="flex items-start gap-3">
        {/* カスタムアバター (Avatarコンポーネントを使用せず) */}
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 border border-gray-200 overflow-hidden flex-shrink-0">
          {username === "匿名" ? (
            <User className="h-5 w-5 text-gray-500" />
          ) : (
            <span className="font-medium">{initials}</span>
          )}
        </div>

        <div className="flex-1">
          {/* ユーザー情報とタイムスタンプ */}
          <div className="flex flex-wrap items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800">{username}</span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatDate(comment.publishedAt)}
              </span>
            </div>

            {/* いいね・よくないね */}
            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                <ThumbsUp className="w-4 h-4" />
                <span>{comment.likes}</span>
              </span>
              <span className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors cursor-pointer">
                <ThumbsDown className="w-4 h-4" />
                <span>{comment.dislikes}</span>
              </span>
            </div>
          </div>

          {/* コメント本文 */}
          <div className="text-gray-700 leading-relaxed mb-2">
            {comment.content}
          </div>
        </div>
      </div>

      {/* 返信コメント */}
      {comment.children && comment.children.length > 0 && (
        <div className="mt-4 ml-5 pl-4 border-l-2 border-gray-200 space-y-3">
          {comment.children.map((reply) => (
            <CommentCard
              key={reply.documentId}
              comment={reply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
