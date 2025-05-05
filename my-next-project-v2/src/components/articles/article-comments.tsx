"use client";

import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { CommentCard } from "@/components/comments/comment-card";
import { CommentForm } from "@/components/comments/comment-form";
import { Comment } from "@/types/index";
interface ArticleCommentsProps {
  comments: Comment[]; // 型は実際のデータ構造に合わせて調整してください
  article: {
    source_url: string;
    translated_title: string;
    title: string;
    publishedAt: string;
    documentId: string;
  };
}

export function ArticleComments({
  comments: initialComments,
  article,
}: ArticleCommentsProps) {
  const [comments] = useState(initialComments);
  const [refreshKey, setRefreshKey] = useState(0);

  // コメントが追加されたときに一覧を更新する関数
  const refreshComments = async () => {
    try {
      // ここでコメント一覧を再取得するAPIを呼び出す
      // 実際の実装ではAPIエンドポイントを使用してください
      // 例: const response = await fetch(`/api/articles/${articleId}/comments`);
      // const data = await response.json();
      // setComments(data);

      // 今回はrefreshKeyを更新して親コンポーネントから再取得を促す
      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error("コメント一覧の更新に失敗しました:", error);
    }
  };

  // refreshKeyが変更されたときに親コンポーネントから新しいcommentsを受け取る
  useEffect(() => {
    // 実際の実装では、ここでpropsの更新を待つか、
    // 親コンポーネントからrefreshCommentsを呼び出す
  }, [refreshKey]);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-blue-600" />
        コメント一覧
      </h2>

      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentCard key={comment.documentId} comment={comment} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">まだコメントはありません。</p>
      )}
      {/* コメント投稿フォーム */}

      <div className="mt-4">
        <CommentForm
          articleId={article.documentId}
          onCommentAdded={refreshComments}
        />
      </div>
    </div>
  );
}
