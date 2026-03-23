import express from "express";
import { createServer as createViteServer } from "vite";
import { put, list } from "@vercel/blob";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse raw body for file uploads
  app.use(express.raw({ type: "*/*", limit: "50mb" }));

  // API Upload Route for Vercel Blob
  app.post("/api/upload", async (req, res) => {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

    try {
      const filename = req.query.filename as string || "file.png";
      const contentType = req.headers["content-type"] || "application/octet-stream";
      
      const blob = await put(filename, req.body, {
        access: "public",
        contentType,
        token,
      });

      res.json(blob);
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Upload failed" });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // List local assets in /public/images
  app.get("/api/admin/local-assets", (req, res) => {
    const imagesDir = path.join(process.cwd(), "public", "images");
    try {
      if (!fs.existsSync(imagesDir)) {
        return res.json([]);
      }
      const files = fs.readdirSync(imagesDir);
      res.json(files);
    } catch (error) {
      res.status(500).json({ error: "Failed to list assets" });
    }
  });

  // Upload a specific local asset to Vercel Blob
  app.post("/api/admin/sync-asset", async (req, res) => {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

    try {
      const { filename } = req.body;
      if (!filename) return res.status(400).json({ error: "Filename required" });

      const filePath = path.join(process.cwd(), "public", "images", filename);
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found" });
      }

      const fileBuffer = fs.readFileSync(filePath);
      const blob = await put(`assets/${filename}`, fileBuffer, {
        access: "public",
        token,
      });

      res.json(blob);
    } catch (error) {
      console.error("Sync error:", error);
      res.status(500).json({ error: "Sync failed" });
    }
  });

  // List remote assets from Vercel Blob
  app.get("/api/admin/remote-assets", async (req, res) => {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    
    if (!token) {
      // Return empty list gracefully if token is missing, but log a warning for the developer
      console.warn("⚠️ Vercel Blob token (BLOB_READ_WRITE_TOKEN) is missing. Falling back to local assets.");
      return res.json([]);
    }

    try {
      const { blobs } = await list({ token });
      res.json(blobs);
    } catch (error: any) {
      // If the token is invalid (Access Denied), return empty list gracefully
      if (error?.code === 'access_denied' || error?.message?.includes('Access denied')) {
        console.warn("⚠️ Vercel Blob token is invalid or access denied. Falling back to local assets.");
        return res.json([]);
      }
      
      console.error("List remote error:", error);
      res.status(500).json({ error: "Failed to list remote assets from Vercel Blob." });
    }
  });

  // Test upload endpoint (User's snippet example)
  app.post("/api/admin/test-upload", async (req, res) => {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

    try {
      const { url } = await put('articles/blob.txt', 'Hello World!', { 
        access: 'public',
        token
      });
      res.json({ url });
    } catch (error) {
      console.error("Test upload error:", error);
      res.status(500).json({ error: "Test upload failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
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
