"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface CommentFormProps {
  articleId: string;
  parentId?: string;
  onCommentAdded?: () => void;
}

export function CommentForm({ articleId, onCommentAdded }: CommentFormProps) {
  const [author, setAuthor] = useState("匿名");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        data: {
          content: content,
          author: author,
          article: {
            connect: [{ documentId: articleId }],
          },
          //   parent: {
          //     connect: [{ documentId: "dj38bhiwnpqxq6z6ncq9d4np" }]
          //   }
        },
      };

      const response = await fetch(
        "http://host.docker.internal:1337/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 2a0bd1a1509f4274a2778d7644441bd792539ec67c6ba8831877b3bef5255d21315481c98d9efd77920e1c396749b5093579706a3195e085450f2a7472ae312e6a63b1f0a5257e778180265cc48a4eb6c2e1bd32240740a620b8f802f02733bbdab67b792ce70475b2ce141382b6563cd296eaf51efd0dcdac6ac51921264640",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("コメントの投稿に失敗しました");
      }

      // フォームをリセット
      setContent("");

      // 親コンポーネントに通知（必要に応じてコメント一覧を更新）
      if (onCommentAdded) {
        onCommentAdded();
      }
      // ページを再読み込み
      window.location.reload();
    } catch (error) {
      console.error("コメント投稿エラー:", error);
      alert("コメントの投稿に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mb-6 p-4 border rounded-lg bg-gray-50"
    >
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          ユーザー名
        </label>
        <Input
          id="username"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          コメント
        </label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="コメントを入力してください"
          rows={4}
          className="w-full"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !content.trim()}
        className="flex items-center gap-2"
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? "送信中..." : "コメントを投稿"}
      </Button>
    </form>
  );
}
