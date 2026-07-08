import express from "express";
import path from "path";
import healthHandler from "./api/health";
import localAssetsHandler from "./api/admin/local-assets";
import remoteAssetsHandler from "./api/admin/remote-assets";
import syncAssetHandler from "./api/admin/sync-asset";
import testUploadHandler from "./api/admin/test-upload";
import uploadHandler from "./api/upload";

const app = express();
const port = Number(process.env.PORT || 3000);
const distDir = path.join(__dirname, "dist");

app.disable("x-powered-by");

app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.get("/api/health", healthHandler);
app.get("/api/admin/local-assets", localAssetsHandler);
app.get("/api/admin/remote-assets", remoteAssetsHandler);
app.post("/api/admin/sync-asset", express.json({ limit: "1mb" }), syncAssetHandler);
app.post("/api/admin/test-upload", testUploadHandler);
app.post("/api/upload", express.raw({ type: "*/*", limit: "25mb" }), uploadHandler);

app.use(
  express.static(distDir, {
    etag: true,
    maxAge: "1y",
    immutable: true,
    setHeaders(res, filePath) {
      if (filePath.endsWith(".js") || filePath.endsWith(".mjs")) {
        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      }

      if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css; charset=utf-8");
      }

      if (filePath.endsWith("index.html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, () => {
  console.log(`AI Agentic Verse listening on port ${port}`);
});
