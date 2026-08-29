import type { Metadata } from "next";
import Link from "next/link";
import { ArticleList } from "@/components/ArticleList";
import { CtaPanel } from "@/components/CtaPanel";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "企業向け",
  description:
    "産業医の選任、ストレスチェック、休職・復職など、事業場の安全衛生実務をまとめています。",
};

export default function ForCompanyPage() {
  const articles = getArticles("company");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.16em] text-muted">企業の担当者の方へ</p>
      <h1 className="mt-2 font-serif text-3xl text-navy-deep">企業向け</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        労働安全衛生の義務と手順を、事業場の担当者が確認できる形で置いています。産業医アカデミーの案内はありません。
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
        <section>
          <h2 className="mb-4 font-serif text-xl text-navy-deep">実務記事</h2>
          <ArticleList articles={articles} />
        </section>
        <div className="space-y-4">
          <CtaPanel audience="company" />
          <p className="text-sm text-muted">
            相談の種類や記入項目は{" "}
            <Link href="/for-company/consult/" className="text-link underline underline-offset-2">
              相談窓口
            </Link>
            で確認できます。
          </p>
        </div>
      </div>
    </div>
  );
}
