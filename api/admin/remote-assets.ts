import { list } from '@vercel/blob';

export default async function handler(req: any, res: any) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  
  if (!token) {
    console.warn("⚠️ Vercel Blob token (BLOB_READ_WRITE_TOKEN) is missing. Falling back to local assets.");
    return res.status(200).json([]);
  }

  try {
    const { blobs } = await list({ token });
    res.status(200).json(blobs);
  } catch (error: any) {
    // If the token is invalid (Access Denied), return empty list gracefully
    if (error?.code === 'access_denied' || error?.message?.includes('Access denied')) {
      console.warn("⚠️ Vercel Blob token is invalid or access denied. Falling back to local assets.");
      return res.status(200).json([]);
    }
    
    console.error("List remote error:", error);
    res.status(500).json({ error: 'Failed to fetch assets' });
  }
}
