import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "トップ",
  description: site.description,
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs tracking-[0.2em] text-muted">{site.name}</p>
      <h1 className="mt-3 max-w-2xl font-serif text-3xl leading-snug text-navy-deep sm:text-4xl">
        産業保健の実務を、
        <br />
        企業と産業医に分けて置く。
      </h1>
      <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
        {site.description}
        根拠のない規模の自称はしません。法令は一次情報へ戻します。
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="border border-line p-6 sm:p-8">
          <p className="text-xs tracking-[0.16em] text-muted">企業の担当者の方へ</p>
          <h2 className="mt-2 font-serif text-2xl text-navy-deep">企業向け</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            選任、ストレスチェック、休職・復職など、安全衛生の実務を整理します。出口は産業医の紹介相談と、体制づくりのコンサル相談です。
          </p>
          <Link
            href="/for-company/"
            className="mt-6 inline-flex border border-navy bg-navy px-4 py-2 text-sm text-white hover:bg-navy-deep"
          >
            企業向けを開く
          </Link>
        </section>

        <section className="border border-line p-6 sm:p-8">
          <p className="text-xs tracking-[0.16em] text-muted">産業医・産業医を志す医師の方へ</p>
          <h2 className="mt-2 font-serif text-2xl text-forest">産業医向け</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            面接指導、巡視、復職、意見書など、現場の実務と、自分で仕事を取り適正に契約するための情報です。紹介サービスの営業は置きません。
          </p>
          <Link
            href="/for-doctors/"
            className="mt-6 inline-flex border border-forest px-4 py-2 text-sm text-forest hover:bg-paper"
          >
            産業医向けを開く
          </Link>
        </section>
      </div>
    </div>
  );
}
