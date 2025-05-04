import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/shared/separator";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="container py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          サイトについて
        </h1>

        <Card className="mb-8 shadow-md">
          <CardContent className="p-6 bg-primary/5">
            <p className="text-foreground font-medium italic">
              海外の掲示板サイト「Reddit」の魅力を日本語で紹介するサイトです
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              当サイトの目的
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトは、海外の掲示板サイト「Reddit」で話題になっている投稿や議論を日本語で紹介することを目的としています。
            </p>
            <p className="leading-relaxed text-foreground/90">
              言語の壁を越えて、世界中の人々の考え方や文化、面白いストーリーを日本語圏の方々に届けたいという思いから運営しています。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              Redditとは
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              Redditは、2005年に設立されたアメリカ合衆国の掲示板サイトで、自称「インターネットのフロントページ」です。
              様々なトピックごとに「サブレディット」と呼ばれるコミュニティが存在し、ユーザーは投稿に対して投票やコメントを行うことができます。
            </p>
            <p className="leading-relaxed mb-4 text-foreground/90">
              世界中に数億人のユーザーを持ち、多様な議論や情報共有が行われています。
            </p>
            <p className="leading-relaxed text-foreground/90">
              Redditの公式サイトは
              <Link
                href="https://www.reddit.com"
                className="inline-flex items-center text-primary font-medium hover:underline mx-1 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちら
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
              からアクセスできます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              運営者情報
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトは個人によって運営されています。
            </p>
            <p className="leading-relaxed text-foreground/90">
              運営者は日本在住で、海外の文化や考え方を日本に紹介することに情熱を持っています。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              コンテンツについて
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトでは以下のようなコンテンツを提供しています：
            </p>
            <ul className="list-disc pl-6 my-6 space-y-3 marker:text-primary">
              <li>Redditの人気投稿の翻訳と解説</li>
              <li>特定のトピックに関する議論のまとめ</li>
              <li>海外の文化や考え方についての解説</li>
              <li>面白いストーリーや経験談の紹介</li>
            </ul>
            <p className="leading-relaxed mb-4 text-foreground/90">
              すべてのコンテンツは、原文へのリンクを明記し、原著作者の権利を尊重しています。
            </p>
            <p className="leading-relaxed text-foreground/90">
              また、翻訳は可能な限り原文の意図を正確に伝えるよう努めていますが、
              文化的な違いや言語の特性により、完全に一致しない場合もあることをご了承ください。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              免責事項
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトはRedditの公式サイトではなく、Reddit社とは一切関係がありません。
            </p>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトで提供する情報の正確性・完全性・有用性等について、いかなる保証も行いません。
            </p>
            <p className="leading-relaxed text-foreground/90">
              また、当サイトの利用によりユーザーに生じた損害について、当サイトは一切の責任を負いません。
            </p>
          </section>

          <Separator className="my-10" />

          <p className="text-center text-base pt-2">
            当サイトに関するご質問やご意見がございましたら、
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium mx-1"
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
