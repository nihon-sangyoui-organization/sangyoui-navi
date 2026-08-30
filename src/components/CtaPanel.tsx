import Link from "next/link";

type CompanyCta = {
  audience: "company";
};

type DoctorCta = {
  audience: "doctors";
  variant?: "hub" | "learn";
};

export function CtaPanel(props: CompanyCta | DoctorCta) {
  if (props.audience === "company") {
    return (
      <aside className="border border-navy/20 bg-paper px-5 py-5">
        <p className="text-xs tracking-[0.14em] text-muted">企業の担当者の方へ</p>
        <p className="mt-1 font-serif text-lg text-navy-deep">紹介相談・体制づくりの相談</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          産業医の選任や、衛生管理体制の整え方について相談できます。まず、現状の整理から始めます。
        </p>
        <Link
          href="/for-company/consult/"
          className="mt-4 inline-flex border border-navy bg-navy px-4 py-2 text-sm text-white hover:bg-navy-deep"
        >
          相談窓口を見る
        </Link>
      </aside>
    );
  }

  if (props.variant === "learn") {
    return (
      <aside className="border border-forest/25 bg-paper px-5 py-5">
        <p className="text-xs tracking-[0.14em] text-muted">産業医の方へ</p>
        <p className="mt-1 font-serif text-lg text-forest">実務の学び</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          面接指導や契約の考え方など、産業医としての実務や収入に直結するスキルアップを別途まとめています。
        </p>
        <Link
          href="/for-doctors/learn/"
          className="mt-4 inline-flex border border-forest px-4 py-2 text-sm text-forest hover:bg-white"
        >
          学ぶページを見る
        </Link>
      </aside>
    );
  }

  return (
    <aside className="border border-forest/25 bg-paper px-5 py-5">
      <p className="text-xs tracking-[0.14em] text-muted">産業医の方へ</p>
      <p className="mt-1 font-serif text-lg text-forest">隣接する実務記事</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        企業との契約方法、面接指導、嘱託産業医の業務の始め方などは産業医向け案内にまとめています。
      </p>
      <Link
        href="/for-doctors/"
        className="mt-4 inline-flex border border-forest px-4 py-2 text-sm text-forest hover:bg-white"
      >
        産業医向け案内へ
      </Link>
    </aside>
  );
}
