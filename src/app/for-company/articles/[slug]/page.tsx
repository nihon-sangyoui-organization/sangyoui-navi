import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getArticle, getArticles } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticles("company").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("company", slug);
  if (!article) return { title: "記事が見つかりません" };
  return { title: article.title, description: article.description };
}

export default async function CompanyArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle("company", slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
