import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { uploadToBlob } from "../lib/blob";

export default function ContactPage() {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const blob = await uploadToBlob(file);
      setUploadedUrl(blob.url);
    } catch (err) {
      console.error(err);
      setError("Upload failed. Please check your BLOB_READ_WRITE_TOKEN.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-general selection:bg-on-surface selection:text-surface">
      <NavBar />
      <main className="pt-40 pb-24 px-8 md:px-[120px] max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
          <div className="max-w-2xl">
            <h1 className="font-bold text-6xl md:text-8xl tracking-tight leading-[0.9] text-on-surface uppercase mb-6">
              Connect with <span className="opacity-40">intelligence</span>
            </h1>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-black/[0.02] dark:bg-white/[0.02] rounded-[3rem] p-4 md:p-8 border border-black/5 dark:border-white/5 overflow-hidden">
            <h2 className="font-bold text-3xl uppercase tracking-tight mb-8 px-4">Schedule a Call</h2>
            <div className="rounded-[2rem] overflow-hidden bg-white">
              <InlineWidget 
                url="https://calendly.com/aiagenticverse/ai-agentic-verse" 
                styles={{
                  height: '700px',
                  width: '100%'
                }}
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-[3rem] p-8 md:p-12 border border-black/5 dark:border-white/5">
              <h3 className="font-bold text-2xl uppercase tracking-tight mb-10">Direct Message</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40">Full Name</label>
                    <input className="w-full bg-transparent border-0 border-b border-black/10 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-on-surface text-lg" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40">Email Address</label>
                    <input className="w-full bg-transparent border-0 border-b border-black/10 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-on-surface text-lg" placeholder="john@company.com" type="email"/>
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40">Company</label>
                    <input className="w-full bg-transparent border-0 border-b border-black/10 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-on-surface text-lg" placeholder="Company Name" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40">Message</label>
                    <textarea className="w-full bg-transparent border-0 border-b border-black/10 dark:border-white/10 px-0 py-3 focus:ring-0 focus:border-on-surface text-lg min-h-[120px] resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  {/* Vercel Blob Upload Field */}
                  <div className="space-y-2 pt-4">
                    <label className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40">Attach Project Brief (Optional)</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        disabled={uploading}
                        className="w-full text-sm text-black/60 dark:text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-on-surface file:text-surface hover:file:opacity-80 transition-all cursor-pointer disabled:opacity-50"
                      />
                      {uploading && (
                        <div className="mt-2 text-xs font-bold text-blue-500 animate-pulse">Uploading to Vercel Blob...</div>
                      )}
                      {uploadedUrl && (
                        <div className="mt-2 text-xs font-bold text-green-500 flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                          File uploaded successfully!
                        </div>
                      )}
                      {error && (
                        <div className="mt-2 text-xs font-bold text-red-500">{error}</div>
                      )}
                    </div>
                  </div>
                </div>
                <button className="w-full py-6 bg-on-surface text-surface rounded-full font-bold text-lg uppercase tracking-widest hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-4 shadow-xl">
                  Submit Inquiry
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
            <div className="p-12 space-y-8">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Email Us</h4>
                <p className="font-bold text-2xl">hello@aiagenticverse.com</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Follow Us</h4>
                <div className="flex gap-6">
                  {['Twitter', 'LinkedIn', 'Instagram'].map(s => (
                    <a key={s} href="#" className="font-bold text-sm uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-on-surface transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
