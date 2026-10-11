import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
let html = await readFile(resolve(root, "dist/index.html"), "utf8");
const scriptTag = html.match(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/);
const styleTag = html.match(
  /<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/,
);
if (!scriptTag || !styleTag)
  throw new Error("The production bundle is missing.");
const js = await readFile(resolve(root, "dist", scriptTag[1]), "utf8");
const css = await readFile(resolve(root, "dist", styleTag[1]), "utf8");
html = html.replace(
  scriptTag[0],
  () =>
    `<script type="module">${js.replaceAll("</script", "<\\/script")}</script>`,
);
html = html.replace(
  styleTag[0],
  () => `<style>${css.replaceAll("../fonts/", "./fonts/")}</style>`,
);
await writeFile(resolve(root, "dist/preview.html"), html);
console.log("Offline preview ready: dist/preview.html");
