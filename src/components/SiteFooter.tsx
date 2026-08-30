import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="font-serif text-navy-deep">{site.name}</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          選任、面談、復職、メンタルヘルス、長時間労働、衛生委員会まで。担当者と産業医が、実務で迷ったときに使う情報をまとめています。
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy">
          <li>
            <Link href="/for-company/" className="hover:underline">
              企業・団体の人事労務担当者向け
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
