import type { NextConfig } from "next";

const GITHUB_PAGES_BASE_PATH = "/sangyoui-navi";

function resolveBasePath(): string {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH;
  if (fromEnv !== undefined) {
    return fromEnv.replace(/\/$/, "");
  }

  // GitHub Actions 上では Pages のサブパスを付ける。
  // ローカルの `next dev` では付けず、localhost:3000 のままにする。
  if (process.env.GITHUB_ACTIONS === "true") {
    return GITHUB_PAGES_BASE_PATH;
  }

  return "";
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ["next-mdx-remote"],
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
