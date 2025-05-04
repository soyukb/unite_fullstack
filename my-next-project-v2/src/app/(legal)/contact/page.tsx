"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server
    // For this example, we'll just simulate a successful submission

    // Simulate API call
    setTimeout(() => {
      // Randomly succeed or fail for demonstration
      if (Math.random() > 0.2) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    }, 1000);
  };

  return (
    <main className="flex  flex-col">
      <div className="flex-1 container py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">お問い合わせ</h1>

        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          当サイトに関するご質問、ご意見、ご要望などがございましたら、以下のフォームよりお気軽にお問い合わせください。
        </p>

        {formStatus === "success" && (
          <Alert className="mb-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertTitle>送信完了</AlertTitle>
            <AlertDescription>
              お問い合わせを受け付けました。内容を確認の上、折り返しご連絡いたします。
            </AlertDescription>
          </Alert>
        )}

        {formStatus === "error" && (
          <Alert className="mb-6 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <AlertTitle>エラー</AlertTitle>
            <AlertDescription>
              送信中にエラーが発生しました。しばらく経ってから再度お試しください。
            </AlertDescription>
          </Alert>
        )}

        <div className="max-w-2xl mx-auto w-full">
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
              <CardDescription>
                以下のフォームに必要事項をご記入の上、送信ボタンをクリックしてください。
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="" disabled>
                      お問い合わせ種別を選択してください
                    </option>
                    <option value="general">一般的なお問い合わせ</option>
                    <option value="content">
                      コンテンツに関するお問い合わせ
                    </option>
                    <option value="copyright">
                      著作権に関するお問い合わせ
                    </option>
                    <option value="suggestion">ご意見・ご要望</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="mt-5 w-full sm:w-auto">
                  送信する
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        <div className="mt-12 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold">その他のお問い合わせ方法</h2>
          <p>
            フォーム以外でのお問い合わせをご希望の場合は、以下のメールアドレスまでご連絡ください。
          </p>
          <p className="font-medium">メール: contact@example.com</p>
        </div>
      </div>
    </main>
  );
}
