import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ポケモンユナイト速報 - Reddit翻訳・大会・最新アップデート情報まとめ",
  description:
    "ポケモンユナイトの最新トレンドをお届け！Redditの注目投稿の翻訳、大会結果、アップデート情報などを分かりやすくまとめたファン必見の記事サイト。",
  icons: {
    icon: "/favicon.ico", // publicフォルダ基準
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
