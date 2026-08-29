import Link from "next/link";
import { CtaPanel } from "@/components/CtaPanel";
import { MdxContent } from "@/components/MdxContent";
import { formatDate, type Article } from "@/lib/articles";

export function ArticlePage({ article }: { article: Article }) {
  const isCompany = article.audience === "company";
  const hubHref = isCompany ? "/for-company/" : "/for-doctors/";
  const hubLabel = isCompany ? "企業向け" : "産業医向け";

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-sm text-muted" aria-label="パンくず">
        <Link href="/" className="hover:text-navy">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <Link href={hubHref} className="hover:text-navy">
          {hubLabel}
        </Link>
      </nav>

      <p className="mt-6 text-xs tracking-[0.16em] text-muted">{hubLabel}の実務</p>
      <h1 className="mt-2 font-serif text-2xl leading-snug text-navy-deep sm:text-[1.7rem]">
        {article.title}
      </h1>
      {article.updated ? (
        <p className="mt-3 text-sm text-muted">更新 {formatDate(article.updated)}</p>
      ) : null}

      <div className="mt-8">
        <MdxContent source={article.content} />
      </div>

      <p className="mt-10 border-t border-line pt-6 text-sm leading-relaxed text-muted">
        この記事は概要です。適用の有無や手続の細部は、事業場の業種・規模と最新の法令により異なります。一次情報と、必要に応じて所轄の労働基準監督署や専門家で確認してください。
      </p>

      <div className="mt-8">
        {isCompany ? <CtaPanel audience="company" /> : <CtaPanel audience="doctors" />}
      </div>
    </article>
  );
}
