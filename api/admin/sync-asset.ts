import { put } from '@vercel/blob';
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { requireAdminRequest } from "../auth.ts";

export default async function handler(req: any, res: any) {
  if (!requireAdminRequest(req, res)) return;

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename } = req.body;
    if (!filename) return res.status(400).json({ error: "Filename required" });

    const safeFilename = path.basename(filename);
    if (safeFilename !== filename) {
      return res.status(400).json({ error: "Invalid filename" });
    }

    const imagesDir = path.join(process.cwd(), "public", "images");
    const filePath = path.join(imagesDir, safeFilename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found" });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const contentType = safeFilename.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const isImage = contentType.startsWith('image/') && !filename.endsWith('.svg');

    if (isImage) {
      const baseName = safeFilename.substring(0, safeFilename.lastIndexOf('.')) || safeFilename;
      const sizes = [400, 800, 1200];
      
      const uploadPromises = sizes.map(async (size) => {
        const optimizedBuffer = await sharp(fileBuffer)
          .resize(size, null, { withoutEnlargement: true })
          .webp({ quality: 70 })
          .toBuffer();
        
        return put(`${baseName}-${size}.webp`, optimizedBuffer, {
          access: "public",
          contentType: "image/webp",
          token,
          addRandomSuffix: false,
          cacheControlMaxAge: 31536000,
        });
      });

      const mainUploadPromise = put(safeFilename, fileBuffer, {
        access: "public",
        contentType,
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536000,
      });

      const results = await Promise.all([...uploadPromises, mainUploadPromise]);
      res.status(200).json(results[results.length - 1]);
    } else {
      const blob = await put(safeFilename, fileBuffer, {
        access: "public",
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536000,
      });
      res.status(200).json(blob);
    }
  } catch (error) {
    console.error("Sync error:", error);
    res.status(500).json({ error: "Sync failed" });
  }
}
