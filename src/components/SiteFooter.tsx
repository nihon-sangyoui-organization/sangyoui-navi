import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="font-serif text-navy-deep">{site.name}</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          産業保健の実務情報を、企業と産業医に分けて置く情報拠点です。法令の解釈や個別事案の判断は、一次情報と所轄機関・専門家の確認を前提とします。
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy">
          <li>
            <Link href="/for-company/" className="hover:underline">
              企業向け
            </Link>
          </li>
          <li>
            <Link href="/for-doctors/" className="hover:underline">
              産業医向け
            </Link>
          </li>
          <li>
            <Link href="/for-company/consult/" className="hover:underline">
              企業の相談窓口
            </Link>
          </li>
          <li>
            <Link href="/for-doctors/learn/" className="hover:underline">
              産業医が学ぶ
            </Link>
          </li>
        </ul>
        <p className="mt-8 text-xs text-muted">© {site.name}</p>
      </div>
    </footer>
  );
}
