import { put } from '@vercel/blob';
import sharp from 'sharp';
import path from 'path';
import { requireAdminRequest } from './auth.ts';

export default async function handler(req: any, res: any) {
  if (!requireAdminRequest(req, res)) return;

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const rawFilename = req.query.filename as string || "file.png";
    const filename = path.basename(rawFilename).replace(/[^a-zA-Z0-9._-]/g, "-");
    if (!filename || filename !== rawFilename) {
      return res.status(400).json({ error: "Invalid filename" });
    }

    const contentType = req.headers["content-type"] || "application/octet-stream";
    const isImage = contentType.startsWith('image/') && !contentType.includes('svg');

    // If it's an image, we'll process it
    if (isImage) {
      const baseName = filename.substring(0, filename.lastIndexOf('.')) || filename;
      const buffer = req.body;

      // Define sizes to generate
      const sizes = [400, 800, 1200];
      const uploadPromises = sizes.map(async (size) => {
        const optimizedBuffer = await sharp(buffer)
          .resize(size, null, { withoutEnlargement: true })
          .webp({ quality: 70 })
          .toBuffer();
        
        return put(`${baseName}-${size}.webp`, optimizedBuffer, {
          access: "public",
          contentType: "image/webp",
          token,
          addRandomSuffix: false, // Keep names predictable for our OptimizedImage component
          cacheControlMaxAge: 31536000, // 1 year cache
        });
      });

      // Also upload the original or a high-quality version as the main file
      const mainUploadPromise = put(filename, buffer, {
        access: "public",
        contentType,
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536000,
      });

      const results = await Promise.all([...uploadPromises, mainUploadPromise]);
      
      // Return the main blob (the last one in the array)
      res.status(200).json(results[results.length - 1]);
    } else {
      // For non-images, just upload as is
      const blob = await put(filename, req.body, {
        access: "public",
        contentType,
        token,
        addRandomSuffix: false,
        cacheControlMaxAge: 31536000,
      });
      res.status(200).json(blob);
    }
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
}
