import { put } from '@vercel/blob';
import fs from "fs";
import path from "path";

export default async function handler(req: any, res: any) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    res.status(200).json(blob);
  } catch (error) {
    console.error("Sync error:", error);
    res.status(500).json({ error: "Sync failed" });
  }
}
