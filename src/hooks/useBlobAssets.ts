import { useState, useEffect } from 'react';

interface RemoteBlob {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

let cachedBlobs: RemoteBlob[] | null = null;
let pendingRequest: Promise<RemoteBlob[]> | null = null;

async function fetchRemoteBlobs() {
  if (cachedBlobs) return cachedBlobs;
  if (pendingRequest) return pendingRequest;

  pendingRequest = fetch('/api/admin/remote-assets')
    .then(res => {
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok || !contentType.includes('application/json')) {
        return [];
      }
      return res.json();
    })
    .then((data) => {
      cachedBlobs = Array.isArray(data) ? data : [];
      return cachedBlobs;
    })
    .catch(() => {
      cachedBlobs = [];
      return cachedBlobs;
    })
    .finally(() => {
      pendingRequest = null;
    });

  return pendingRequest;
}

export function useBlobAssets() {
  const [blobs, setBlobs] = useState<RemoteBlob[]>(cachedBlobs || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchRemoteBlobs()
      .then((data) => {
        if (!isMounted) return;

        setBlobs(data);
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
