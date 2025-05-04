import Link from "next/link";
import { Separator } from "@/components/shared/separator";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="container py-12 px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
          プライバシーポリシー
        </h1>

        <p className="text-muted-foreground text-sm mb-8 pb-4 border-b border-primary/10">
          最終更新日: {new Date().toLocaleDateString("ja-JP")}
        </p>

        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              1. 基本方針
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトは、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
              本プライバシーポリシーでは、当サイトが収集する情報とその利用方法について説明します。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              2. 収集する情報
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトでは、以下の情報を収集することがあります：
            </p>
            <ul className="list-disc pl-6 my-6 space-y-3 marker:text-primary">
              <li>
                アクセスログ（IPアドレス、ブラウザの種類、参照元ページなど）
              </li>
              <li>
                お問い合わせフォームから送信された情報（氏名、メールアドレス、問い合わせ内容など）
              </li>
              <li>Cookieを通じて収集される情報</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              3. 情報の利用目的
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              収集した情報は、以下の目的で利用します：
            </p>
            <ul className="list-disc pl-6 my-6 space-y-3 marker:text-primary">
              <li>サイトの利用状況の分析と改善</li>
              <li>お問い合わせへの対応</li>
              <li>サービスの提供と維持</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              4. 第三者への情報提供
            </h2>
            <p className="leading-relaxed mb-4 text-foreground/90">
              当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
              ただし、以下の場合には情報を共有することがあります：
            </p>
            <ul className="list-disc pl-6 my-6 space-y-3 marker:text-primary">
              <li>法令に基づく場合</li>
              <li>ユーザーの同意がある場合</li>
              <li>
                サイト運営に必要なサービス提供者（アクセス解析ツールなど）との共有
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              5. Cookieの使用
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトでは、ユーザー体験の向上やサイト利用状況の分析のためにCookieを使用しています。
              ブラウザの設定によりCookieの受け入れを拒否することも可能ですが、一部の機能が利用できなくなる場合があります。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-primary/20 text-primary">
              6. プライバシーポリシーの変更
            </h2>
            <p className="leading-relaxed text-foreground/90">
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <Separator className="my-10" />

          <p className="text-center text-base pt-2">
            プライバシーに関するご質問やご懸念がある場合は、
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
