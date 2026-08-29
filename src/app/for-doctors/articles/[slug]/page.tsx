import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { getArticle, getArticles } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticles("doctors").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("doctors", slug);
  if (!article) return { title: "記事が見つかりません" };
  return { title: article.title, description: article.description };
}

export default async function DoctorArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle("doctors", slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
