import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "学ぶ",
  description: "産業医向けの学習の場として、産業医アカデミーを案内します。",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-sm text-muted" aria-label="パンくず">
        <Link href="/" className="hover:text-navy">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/for-doctors/" className="hover:text-navy">
          産業医向け
        </Link>
      </nav>

      <p className="mt-6 text-xs tracking-[0.16em] text-muted">産業医向け</p>
      <h1 className="mt-2 font-serif text-3xl text-forest">学ぶ</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        面接指導、巡視、意見書、契約の読み方など、産業医が現場で使う知識を学ぶ場として{site.academyName}をご案内します。
      </p>

      <section className="mt-8 space-y-4 text-sm leading-relaxed">
        <h2 className="font-serif text-xl text-forest">このページで扱うこと</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>企業との接点の創出方法</li>
          <li>企業との契約条件（報酬に公定価格はありません）</li>
          <li>産業医業務の手順と記録の考え方</li>
          <li>社員研修の具体的な方法</li>
          <li>継続的な学習</li>
        </ul>
        <p>
          講義内容や入学手続の詳細は、下記サイトでご確認ください。
        </p>
      </section>

      <p className="mt-8 text-sm">
        <a
          href={site.academyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link underline underline-offset-4"
        >
          {site.academyName}へ（別サイト）
        </a>
      </p>
      </div>
  );
}
