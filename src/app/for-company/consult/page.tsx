import type { Metadata } from "next";
import Link from "next/link";
import { ConsultForm } from "@/components/ConsultForm";

export const metadata: Metadata = {
  title: "相談窓口",
  description: "産業医の紹介相談と、衛生管理体制づくりのコンサル相談の窓口です。",
};

export default function ConsultPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-sm text-muted" aria-label="パンくず">
        <Link href="/" className="hover:text-navy">
          トップ
        </Link>
        <span className="mx-2">/</span>
        <Link href="/for-company/" className="hover:text-navy">
          企業向け
        </Link>
      </nav>

      <p className="mt-6 text-xs tracking-[0.16em] text-muted">企業向け</p>
      <h1 className="mt-2 font-serif text-3xl text-navy-deep">相談窓口</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        産業医の紹介と、衛生管理体制の整え方について相談を受けます。学習講座の案内ではありません。
      </p>

      <section className="mt-8 space-y-3 text-sm leading-relaxed">
        <h2 className="font-serif text-xl text-navy-deep">扱っている相談</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>事業場規模に応じた産業医の選任・紹介の相談</li>
          <li>衛生委員会、健診後措置、面接指導など、体制づくりのコンサル相談</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 font-serif text-xl text-navy-deep">相談フォーム</h2>
        <ConsultForm />
      </section>
    </div>
  );
}
