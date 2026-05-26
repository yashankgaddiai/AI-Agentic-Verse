import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

// Import Vercel Serverless Handlers
import remoteAssetsHandler from "./api/admin/remote-assets.ts";
import localAssetsHandler from "./api/admin/local-assets.ts";
import syncAssetHandler from "./api/admin/sync-asset.ts";
import uploadHandler from "./api/upload.ts";
import testUploadHandler from "./api/admin/test-upload.ts";
import healthHandler from "./api/health.ts";

let resolvedFilename = "";
try {
  if (typeof import.meta !== "undefined" && import.meta.url) {
    resolvedFilename = fileURLToPath(import.meta.url);
  }
} catch (e) {}

const clientFilename = resolvedFilename;
const clientDirname = clientFilename ? path.dirname(clientFilename) : "";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for JSON bodies (used by sync-asset, etc.)
  app.use(express.json());
  // Middleware to parse raw body for file uploads (used by /api/upload)
  app.use("/api/upload", express.raw({ type: "*/*", limit: "50mb" }));

  // API Routes - Using Vercel Serverless Handlers for consistency
  app.get("/api/health", healthHandler);
  app.post("/api/upload", uploadHandler);
  app.get("/api/admin/local-assets", localAssetsHandler);
  app.post("/api/admin/sync-asset", syncAssetHandler);
  app.get("/api/admin/remote-assets", remoteAssetsHandler);
  app.post("/api/admin/test-upload", testUploadHandler);

  // Vite middleware for development
  const isDev = process.env.NODE_ENV === "development" || process.env.NODE_ENV !== "production" || !process.env.NODE_ENV;
  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
