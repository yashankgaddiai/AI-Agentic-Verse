import { put } from '@vercel/blob';

export default async function handler(req: any, res: any) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const filename = req.query.filename as string || "file.png";
    const contentType = req.headers["content-type"] || "application/octet-stream";
    
    // Vercel Serverless Functions handle the body differently than Express raw middleware
    // Usually, req.body is already parsed if it's JSON, but for binary it might be a Buffer if configured
    // or we might need to use a different approach.
    // However, for simplicity, we'll assume the body is the file content.
    
    const blob = await put(filename, req.body, {
      access: "public",
      contentType,
      token,
    });

    res.status(200).json(blob);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
}
