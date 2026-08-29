import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");

if (existsSync(outDir)) {
  writeFileSync(join(outDir, ".nojekyll"), "");

  const nested404 = join(outDir, "404", "index.html");
  const root404 = join(outDir, "404.html");
  if (!existsSync(root404) && existsSync(nested404)) {
    copyFileSync(nested404, root404);
  }
}
