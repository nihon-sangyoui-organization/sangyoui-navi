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
        産業保健の重要な情報を、
        <br />
        企業と産業医にそれぞれお届けします。
      </h1>
      <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
        {site.description}
        現場の”困った”を素早く解決できる入り口です。
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="border border-line p-6 sm:p-8">
          <p className="text-xs tracking-[0.16em] text-muted">企業の人事労務担当者の方へ</p>
          <h2 className="mt-2 font-serif text-2xl text-navy-deep">人事・労務のための産業保健</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            産業医の選任、ストレスチェック、休職・復職など、安全衛生の実務、社員研修などについてお伝えします。
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
            面接指導、巡視、復職、意見書など、現場の実務を回すための方法と、産業医として企業と契約するための情報をお伝えします。
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
