import Link from "next/link";
import { Separator } from "@/components/shared/separator";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="container py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          利用規約
        </h1>

        <p className="text-muted-foreground text-sm mb-8 pb-4 border-b border-primary/10">
          最終更新日: {new Date().toLocaleDateString("ja-JP")}
        </p>

        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              1. 利用規約について
            </h2>
            <p className="leading-relaxed text-foreground/90">
              本利用規約（以下「本規約」）は、当サイト（以下「当サイト」）の利用条件を定めるものです。
              ユーザーの皆様（以下「ユーザー」）には、本規約に従って当サイトをご利用いただきます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              2. サービス内容
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトは、Redditの投稿を日本語で紹介する非公式サイトです。
              当サイトは、Reddit社とは一切関係がなく、独自に運営されています。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              3. 知的財産権
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトに掲載されているコンテンツの原著作権は、Reddit上の投稿者に帰属します。
              当サイトでは、フェアユースの原則に基づき、教育・解説目的でコンテンツを引用・翻訳しています。
              すべての引用には原文へのリンクを明記しています。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              4. 禁止事項
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              ユーザーは、以下の行為を行ってはならないものとします。
            </p>
            <ul className="list-disc pl-6 my-6 space-y-3 marker:text-primary">
              <li>当サイトの運営を妨げる行為</li>
              <li>当サイトのコンテンツを無断で商用利用する行為</li>
              <li>他のユーザーや第三者に不利益を与える行為</li>
              <li>法令または公序良俗に反する行為</li>
              <li>その他、当サイトが不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              5. 免責事項
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトは、提供する情報の正確性・完全性・有用性等について、いかなる保証も行いません。
              当サイトの利用によりユーザーに生じた損害について、当サイトは一切の責任を負いません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              6. 規約の変更
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトは、必要に応じて本規約を変更することがあります。
              変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <Separator className="my-10" />

          <p className="text-center text-base pt-2">
            ご不明な点がございましたら、
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium mx-1 transition-colors"
            >
              お問い合わせフォーム
            </Link>
            よりご連絡ください。
          </p>
        </div>
      </div>
    </main>
  );
}
