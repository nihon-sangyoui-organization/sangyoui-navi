import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Audience } from "./site";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  audience: Audience;
  updated: string;
  order: number;
};

export type Article = ArticleMeta & {
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

function audienceDir(audience: Audience) {
  return path.join(contentRoot, audience);
}

function readMeta(filePath: string, slug: string, audience: Audience): ArticleMeta {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  if (typeof data.title !== "string" || typeof data.description !== "string") {
    throw new Error(`記事の frontmatter が不足しています: ${filePath}`);
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    audience,
    updated: typeof data.updated === "string" ? data.updated : "",
    order: typeof data.order === "number" ? data.order : 99,
  };
}

export function getArticles(audience: Audience): ArticleMeta[] {
  const dir = audienceDir(audience);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx") && !name.startsWith("_"))
    .map((name) => {
      const slug = name.replace(/\.mdx$/, "");
      return readMeta(path.join(dir, name), slug, audience);
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, "ja"));
}

export function getArticle(audience: Audience, slug: string): Article | null {
  if (slug.startsWith("_")) return null;

  const filePath = path.join(audienceDir(audience), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta = readMeta(filePath, slug, audience);

  return {
    ...meta,
    title: typeof data.title === "string" ? data.title : meta.title,
    description: typeof data.description === "string" ? data.description : meta.description,
    content,
  };
}

export function articleHref(audience: Audience, slug: string) {
  return audience === "company"
    ? `/for-company/articles/${slug}`
    : `/for-doctors/articles/${slug}`;
}

export function formatDate(iso: string) {
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${year}年${Number(month)}月${Number(day)}日`;
}
