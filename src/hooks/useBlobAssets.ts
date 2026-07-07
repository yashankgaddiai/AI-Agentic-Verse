import { useState, useEffect } from 'react';

interface RemoteBlob {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

export function useBlobAssets() {
  const [blobs, setBlobs] = useState<RemoteBlob[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/remote-assets')
      .then(res => {
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setBlobs(data);
        } else {
          console.warn('Remote assets API did not return an array (likely token missing):', data);
          setBlobs([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn('Failed to fetch remote assets (falling back to local):', err.message);
        setBlobs([]);
        setLoading(false);
      });
  }, []);

  const getBlobUrl = (filename: string, fallback: string | null = null) => {
    // Try to find a blob that matches the filename (either exactly or as part of the pathname)
    const blob = blobs.find(b => b.pathname.endsWith(filename) || b.pathname === filename);
    return blob ? blob.url : fallback;
  };

  return { blobs, loading, getBlobUrl };
}
