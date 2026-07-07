import { put } from '@vercel/blob';

export default async function handler(req: any, res: any) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return res.status(401).json({ error: "Vercel Blob token is missing." });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { url } = await put('articles/blob.txt', 'Hello World!', { 
      access: 'public',
      token
    });
    res.status(200).json({ url });
  } catch (error) {
    console.error("Test upload error:", error);
    res.status(500).json({ error: "Test upload failed" });
  }
}
