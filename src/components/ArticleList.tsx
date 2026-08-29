import Link from "next/link";
import { articleHref, formatDate, type ArticleMeta } from "@/lib/articles";

export function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) {
    return <p className="text-sm text-muted">公開中の記事はまだありません。</p>;
  }

  return (
    <ul className="divide-y divide-line border-y border-line">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={articleHref(article.audience, article.slug)}
            className="block py-4 transition-colors hover:bg-paper/70"
          >
            <p className="font-medium text-navy-deep">{article.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{article.description}</p>
            {article.updated ? (
              <p className="mt-2 text-xs text-muted">更新 {formatDate(article.updated)}</p>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
