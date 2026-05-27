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
    let isMounted = true;

    fetch('/api/admin/remote-assets')
      .then(res => {
        const contentType = res.headers.get('content-type') || '';
        if (!res.ok || !contentType.includes('application/json')) {
          return [];
        }
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;

        if (Array.isArray(data)) {
          setBlobs(data);
        } else {
          setBlobs([]);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setBlobs([]);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const getBlobUrl = (filename: string, fallback: string | null = null) => {
    // Try to find a blob that matches the filename (either exactly or as part of the pathname)
    const blob = blobs.find(b => b.pathname.endsWith(filename) || b.pathname === filename);
    return blob ? blob.url : fallback;
  };

  return { blobs, loading, getBlobUrl };
}
