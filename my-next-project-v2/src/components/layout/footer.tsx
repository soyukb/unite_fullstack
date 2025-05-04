"use client";
import Link from "next/link";
import {
  Mail,
  Info,
  FileText,
  Shield,
  Copyright,
  ExternalLink,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/shared/separator";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("w-full border-t bg-background", className)}>
      <div className="container px-4 py-10 md:px-6 mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-items-center md:justify-items-start">
          <div className="space-y-3 w-full max-w-xs">
            <h3 className="text-lg font-medium">サイトについて</h3>
            <p className="text-sm text-muted-foreground">
              当サイトはRedditの興味深い投稿を日本語で紹介する非公式サイトです。
            </p>
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-3 w-full max-w-xs">
            <h3 className="text-lg font-medium">法的情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground"
                >
                  <Copyright className="mr-2 h-4 w-4" />
                  著作権について
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 w-full max-w-xs">
            <h3 className="text-lg font-medium">お問い合わせ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  お問い合わせフォーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground"
                >
                  <Info className="mr-2 h-4 w-4" />
                  サイトについて
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 w-full max-w-xs">
            <h3 className="text-lg font-medium">Reddit利用者へのクレジット</h3>
            <p className="text-sm text-muted-foreground">
              当サイトで紹介しているコンテンツはRedditユーザーの投稿に基づいています。すべての権利は元の投稿者に帰属します。
            </p>
            <p className="text-sm text-muted-foreground">
              当サイトはRedditの公式サイトではありません。
            </p>
            <Link
              href="https://www.reddit.com"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Reddit公式サイト
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left max-w-md mx-auto md:mx-0">
            &copy; {new Date().getFullYear()} pokemonunitenews. All rights
            reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground max-w-md mx-auto md:mx-0">
            当サイトで紹介されているRedditの投稿は、原文の出典URLを明記しています。
          </p>
        </div>
      </div>
    </footer>
  );
}
