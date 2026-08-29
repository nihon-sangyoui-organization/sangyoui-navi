import type { Metadata } from "next";
import Link from "next/link";
import { ArticleList } from "@/components/ArticleList";
import { CtaPanel } from "@/components/CtaPanel";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "産業医向け",
  description:
    "嘱託産業医の始め方、契約の考え方、長時間労働の面接指導など、産業医側の実務をまとめています。",
};

export default function ForDoctorsPage() {
  const articles = getArticles("doctors");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.16em] text-muted">産業医の方へ</p>
      <h1 className="mt-2 font-serif text-3xl text-forest">産業医向け</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        現場の実務と、自分で仕事を取り、条件を見て契約するための情報です。企業向けの紹介サービスの営業は置きません。
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
        <section>
          <h2 className="mb-4 font-serif text-xl text-forest">実務記事</h2>
          <ArticleList articles={articles} />
        </section>
        <div className="space-y-4">
          <CtaPanel audience="doctors" variant="learn" />
          <p className="text-sm text-muted">
            学習の場の案内は{" "}
            <Link href="/for-doctors/learn/" className="text-link underline underline-offset-2">
              学ぶ
            </Link>
            に限っています。
          </p>
        </div>
      </div>
    </div>
  );
}
