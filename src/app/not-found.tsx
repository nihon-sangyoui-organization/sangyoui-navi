import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-2xl text-navy-deep">ページが見つかりません</h1>
      <p className="mt-3 text-sm text-muted">アドレスを確認するか、トップから入り直してください。</p>
      <Link href="/" className="mt-6 inline-block text-sm text-link underline underline-offset-4">
        トップへ戻る
      </Link>
    </div>
  );
}
