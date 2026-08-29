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
        面接指導、巡視、意見書、契約の読み方など、産業医が現場で使う知識を学ぶ場として{site.academyName}を案内します。企業の紹介相談ではありません。
      </p>

      <section className="mt-8 space-y-4 text-sm leading-relaxed">
        <h2 className="font-serif text-xl text-forest">このページで扱うこと</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>産業医業務の手順と記録の考え方</li>
          <li>事業場との契約条件の読み方（報酬の公定価格はありません）</li>
          <li>継続的な学習の入口</li>
        </ul>
        <p>
          価格や入学手続の詳細は、このサイトでは大きな扱いをしません。本体サイトで確認してください。
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
      <p className="mt-2 text-xs text-muted">
        当面のURLはプレースホルダです。公開時に差し替えます。
      </p>
    </div>
  );
}
