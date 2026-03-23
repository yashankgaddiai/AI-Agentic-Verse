import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Asset {
  filename: string;
  status: "pending" | "syncing" | "success" | "error";
  url?: string;
  error?: string;
}

interface RemoteBlob {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

export default function AdminMediaPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [remoteBlobs, setRemoteBlobs] = useState<RemoteBlob[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingRemote, setLoadingRemote] = useState(true);

  useEffect(() => {
    fetch("/api/admin/local-assets")
      .then((res) => res.json())
      .then((data: string[]) => {
        setAssets(data.map((filename) => ({ filename, status: "pending" })));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    fetchRemoteBlobs();
  }, []);

  const fetchRemoteBlobs = () => {
    setLoadingRemote(true);
    fetch("/api/admin/remote-assets")
      .then((res) => res.json())
      .then((data: RemoteBlob[]) => {
        setRemoteBlobs(data);
        setLoadingRemote(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingRemote(false);
      });
  };

  const syncAsset = async (filename: string) => {
    setAssets((prev) =>
      prev.map((a) => (a.filename === filename ? { ...a, status: "syncing" } : a))
    );

    try {
      const res = await fetch("/api/admin/sync-asset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename }),
      });

      if (!res.ok) throw new Error("Sync failed");

      const data = await res.json();
      setAssets((prev) =>
        prev.map((a) =>
          a.filename === filename ? { ...a, status: "success", url: data.url } : a
        )
      );
    } catch (err) {
      setAssets((prev) =>
        prev.map((a) =>
          a.filename === filename ? { ...a, status: "error", error: "Failed" } : a
        )
      );
    }
  };

  const syncAll = async () => {
    for (const asset of assets) {
      if (asset.status !== "success") {
        await syncAsset(asset.filename);
      }
    }
  };

  const runTestUpload = async () => {
    try {
      const res = await fetch("/api/admin/test-upload", { method: "POST" });
      if (!res.ok) throw new Error("Test upload failed");
      const data = await res.json();
      alert(`Success! File uploaded to: ${data.url}`);
      fetchRemoteBlobs();
    } catch (err) {
      alert("Test upload failed. Check console for details.");
    }
  };

  return (
    <div className="bg-surface text-on-surface font-general min-h-screen">
      <NavBar />
      <main className="pt-40 pb-24 px-8 md:px-[120px] max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-bold text-5xl uppercase tracking-tight mb-4">Media Manager</h1>
            <p className="text-black/60 dark:text-white/60 max-w-2xl">
              Sync your local assets from <code className="bg-black/5 px-2 py-1 rounded">/public/images</code> to Vercel Blob.
            </p>
          </div>
          <button 
            onClick={runTestUpload}
            className="px-6 py-3 border-2 border-on-surface text-on-surface rounded-full font-bold text-sm uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">code</span>
            Run Test Upload
          </button>
        </header>

        <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-sm mb-12">
          <div className="p-8 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
            <h2 className="font-bold text-xl uppercase tracking-tight">Local Assets ({assets.length})</h2>
            <button 
              onClick={syncAll}
              disabled={assets.every(a => a.status === 'success') || assets.some(a => a.status === 'syncing')}
              className="px-6 py-2 bg-on-surface text-surface rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-80 transition-all disabled:opacity-50"
            >
              Sync All to Blob
            </button>
          </div>

          <div className="divide-y divide-black/5 dark:divide-white/5">
            {loading ? (
              <div className="p-12 text-center text-black/40">Loading assets...</div>
            ) : assets.length === 0 ? (
              <div className="p-12 text-center text-black/40">No assets found in /public/images</div>
            ) : (
              assets.map((asset) => (
                <div key={asset.filename} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center overflow-hidden">
                      {asset.filename.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                        <img src={`/images/${asset.filename}`} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <span className="material-symbols-outlined text-black/40">movie</span>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{asset.filename}</div>
                      {asset.url && (
                        <div className="text-xs text-blue-500 break-all max-w-md mt-1">
                          <a href={asset.url} target="_blank" rel="noreferrer" className="hover:underline">{asset.url}</a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {asset.status === "syncing" && (
                      <span className="text-xs font-bold text-blue-500 animate-pulse uppercase tracking-widest">Syncing...</span>
                    )}
                    {asset.status === "success" && (
                      <span className="text-xs font-bold text-green-500 uppercase tracking-widest flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        Synced
                      </span>
                    )}
                    {asset.status === "error" && (
                      <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Error</span>
                    )}
                    
                    <button 
                      onClick={() => syncAsset(asset.filename)}
                      disabled={asset.status === "syncing" || asset.status === "success"}
                      className="px-4 py-2 border border-black/10 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-all disabled:opacity-50"
                    >
                      {asset.status === "success" ? "Re-sync" : "Sync"}
                    </button>

                    {asset.url && (
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(asset.url!);
                          alert('URL copied to clipboard!');
                        }}
                        className="p-2 hover:bg-black/5 rounded-full transition-all"
                        title="Copy URL"
                      >
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
            <h2 className="font-bold text-xl uppercase tracking-tight">Vercel Blob Storage ({remoteBlobs.length})</h2>
            <button 
              onClick={fetchRemoteBlobs}
              className="p-2 hover:bg-black/5 rounded-full transition-all"
              title="Refresh"
            >
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>

          <div className="divide-y divide-black/5 dark:divide-white/5">
            {loadingRemote ? (
              <div className="p-12 text-center text-black/40">Loading remote assets...</div>
            ) : remoteBlobs.length === 0 ? (
              <div className="p-12 text-center text-black/40">No assets found in Vercel Blob storage</div>
            ) : (
              remoteBlobs.map((blob) => (
                <div key={blob.url} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center overflow-hidden">
                      {blob.pathname.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                        <img src={blob.url} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <span className="material-symbols-outlined text-black/40">movie</span>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{blob.pathname}</div>
                      <div className="text-xs text-black/40 mt-1">
                        {(blob.size / 1024).toFixed(2)} KB • Uploaded {new Date(blob.uploadedAt).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-blue-500 break-all max-w-md mt-1">
                        <a href={blob.url} target="_blank" rel="noreferrer" className="hover:underline">{blob.url}</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(blob.url);
                        alert('URL copied to clipboard!');
                      }}
                      className="px-4 py-2 bg-on-surface text-surface rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                      Copy URL
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
