var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path3 = __toESM(require("path"), 1);

// api/admin/remote-assets.ts
var import_blob = require("@vercel/blob");
async function handler(req, res) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.warn("\u26A0\uFE0F Vercel Blob token (BLOB_READ_WRITE_TOKEN) is missing. Falling back to local assets.");
    return res.status(200).json([]);
  }
  try {
    const { blobs } = await (0, import_blob.list)({ token });
    res.status(200).json(blobs);
  } catch (error) {
    if (error?.code === "access_denied" || error?.message?.includes("Access denied")) {
      console.warn("\u26A0\uFE0F Vercel Blob token is invalid or access denied. Falling back to local assets.");
      return res.status(200).json([]);
    }
    console.error("List remote error:", error);
    res.status(500).json({ error: "Failed to fetch assets" });
  }
}

// api/admin/local-assets.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
async function handler2(req, res) {
  const imagesDir = import_path.default.join(process.cwd(), "public", "images");
  try {
    if (!import_fs.default.existsSync(imagesDir)) {
      return res.status(200).json([]);
    }
    const files = import_fs.default.readdirSync(imagesDir);
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to list assets" });
  }
}

// api/admin/sync-asset.ts
var import_blob2 = require("@vercel/blob");
var import_fs2 = __toESM(require("fs"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_sharp = __toESM(require("sharp"), 1);
async function handler3(req, res) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { filename } = req.body;
    if (!filename) return res.status(400).json({ error: "Filename required" });
    const filePath = import_path2.default.join(process.cwd(), "public", "images", filename);
    if (!import_fs2.default.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" });
    }
    const fileBuffer = import_fs2.default.readFileSync(filePath);
    const contentType = filename.endsWith(".png") ? "image/png" : "image/jpeg";
    const isImage = contentType.startsWith("image/") && !filename.endsWith(".svg");
    if (isImage) {
      const baseName = filename.substring(0, filename.lastIndexOf(".")) || filename;
      const sizes = [400, 800, 1200];
      const uploadPromises = sizes.map(async (size) => {
        const optimizedBuffer = await (0, import_sharp.default)(fileBuffer).resize(size, null, { withoutEnlargement: true }).webp({ quality: 70 }).toBuffer();
        return (0, import_blob2.put)(`${baseName}-${size}.webp`, optimizedBuffer, {
          access: "public",
          contentType: "image/webp",
          token,
          addRandomSuffix: false,
          cacheControlMaxAge: 31536e3
        });
      });
      const mainUploadPromise = (0, import_blob2.put)(filename, fileBuffer, {
        access: "public",
        contentType,
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536e3
      });
      const results = await Promise.all([...uploadPromises, mainUploadPromise]);
      res.status(200).json(results[results.length - 1]);
    } else {
      const blob = await (0, import_blob2.put)(filename, fileBuffer, {
        access: "public",
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536e3
      });
      res.status(200).json(blob);
    }
  } catch (error) {
    console.error("Sync error:", error);
    res.status(500).json({ error: "Sync failed" });
  }
}

// api/upload.ts
var import_blob3 = require("@vercel/blob");
var import_sharp2 = __toESM(require("sharp"), 1);
async function handler4(req, res) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const filename = req.query.filename || "file.png";
    const contentType = req.headers["content-type"] || "application/octet-stream";
    const isImage = contentType.startsWith("image/") && !contentType.includes("svg");
    if (isImage) {
      const baseName = filename.substring(0, filename.lastIndexOf(".")) || filename;
      const buffer = req.body;
      const sizes = [400, 800, 1200];
      const uploadPromises = sizes.map(async (size) => {
        const optimizedBuffer = await (0, import_sharp2.default)(buffer).resize(size, null, { withoutEnlargement: true }).webp({ quality: 70 }).toBuffer();
        return (0, import_blob3.put)(`${baseName}-${size}.webp`, optimizedBuffer, {
          access: "public",
          contentType: "image/webp",
          token,
          addRandomSuffix: false,
          // Keep names predictable for our OptimizedImage component
          cacheControlMaxAge: 31536e3
          // 1 year cache
        });
      });
      const mainUploadPromise = (0, import_blob3.put)(filename, buffer, {
        access: "public",
        contentType,
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536e3
      });
      const results = await Promise.all([...uploadPromises, mainUploadPromise]);
      res.status(200).json(results[results.length - 1]);
    } else {
      const blob = await (0, import_blob3.put)(filename, req.body, {
        access: "public",
        contentType,
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536e3
      });
      res.status(200).json(blob);
    }
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
}

// api/admin/test-upload.ts
var import_blob4 = require("@vercel/blob");
async function handler5(req, res) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { url } = await (0, import_blob4.put)("articles/blob.txt", "Hello World!", {
      access: "public",
      token
    });
    res.status(200).json({ url });
  } catch (error) {
    console.error("Test upload error:", error);
    res.status(500).json({ error: "Test upload failed" });
  }
}

// api/health.ts
async function handler6(req, res) {
  res.status(200).json({ status: "ok" });
}

// server.ts
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = Number(process.env.PORT) || 3e3;
  const isDev = process.argv.includes("--dev") || process.env.NODE_ENV === "development";
  app.disable("x-powered-by");
  app.use(import_express.default.json());
  app.use("/api/upload", import_express.default.raw({ type: "*/*", limit: "50mb" }));
  app.get("/api/health", handler6);
  app.post("/api/upload", handler4);
  app.get("/api/admin/local-assets", handler2);
  app.post("/api/admin/sync-asset", handler3);
  app.get("/api/admin/remote-assets", handler);
  app.post("/api/admin/test-upload", handler5);
  if (isDev) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      import_express.default.static(import_path3.default.join(__dirname, "dist"), {
        index: false,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith(".js") || filePath.endsWith(".mjs")) {
            res.type("application/javascript");
          }
        }
      })
    );
    app.get(/^\/(?:src\/.*|main)\.(?:ts|tsx|js|jsx)$/, (_req, res) => {
      res.sendStatus(404);
    });
    app.get("*", (req, res) => {
      res.sendFile(import_path3.default.join(__dirname, "dist", "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
