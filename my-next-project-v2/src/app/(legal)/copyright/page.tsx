import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/shared/separator";

export default function CopyrightPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="container py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          著作権について
        </h1>

        <p className="text-muted-foreground text-sm mb-8 pb-4 border-b border-primary/10">
          最終更新日: {new Date().toLocaleDateString("ja-JP")}
        </p>

        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              1. コンテンツの著作権
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトで紹介しているRedditの投稿内容の著作権は、原則として元の投稿者に帰属します。
              当サイトでは、フェアユースの原則に基づき、教育・解説目的でコンテンツを引用・翻訳しています。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              2. 引用と出典の明記
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトでは、Redditからの引用内容については、以下の情報を明記しています：
            </p>
            <ul className="list-disc pl-6 my-6 space-y-3 marker:text-primary">
              <li>元の投稿へのURL</li>
              <li>投稿者名（ユーザー名）</li>
              <li>投稿日時</li>
              <li>投稿が属するサブレディット</li>
            </ul>
            <p className="leading-relaxed text-foreground/90">
              これにより、読者が元の投稿を確認できるようにし、原著作者の権利を尊重しています。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              3. Redditコンテンツの利用ポリシー
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              Redditのコンテンツ利用については、Redditの利用規約に従っています。
              Redditの利用規約では、一般的に個人的・非商業的な目的での共有が許可されていますが、
              当サイトではさらに以下の点に注意しています：
            </p>
            <ul className="list-disc pl-6 my-6 space-y-3 marker:text-primary">
              <li>投稿者のクレジットを明記</li>
              <li>コンテンツの文脈を尊重</li>
              <li>必要に応じて個人情報を保護</li>
            </ul>
            <p className="leading-relaxed text-foreground/90">
              Redditの利用規約の詳細については、
              <Link
                href="https://www.redditinc.com/policies/user-agreement"
                className="inline-flex items-center text-primary font-medium hover:underline mx-1 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redditの利用規約
                <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
              をご参照ください。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              4. 著作権侵害の申し立て
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトのコンテンツが著作権を侵害していると思われる場合は、
              <Link
                href="/contact"
                className="text-primary hover:underline font-medium mx-1 transition-colors"
              >
                お問い合わせフォーム
              </Link>
              よりご連絡ください。
              適切な証拠が提示された場合、当該コンテンツの削除など適切な対応を取らせていただきます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              5. 当サイト独自コンテンツ
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトのオリジナルコンテンツ（翻訳文、解説、サイトデザインなど）の著作権は当サイト運営者に帰属します。
              これらのコンテンツを無断で商用利用することはできません。
            </p>
          </section>

          <Separator className="my-10" />

          <p className="text-center text-base pt-2">
            著作権に関するご質問やご懸念がある場合は、
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
