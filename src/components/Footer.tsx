import { Link } from "react-router-dom";
import { useBlobAssets } from "../hooks/useBlobAssets";

export default function Footer() {
  const { getBlobUrl } = useBlobAssets();
  return (
    <footer className="w-full py-12 px-8 border-t border-outline-variant/10 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-8">
        <div className="flex items-center gap-2 font-barlow font-bold text-lg text-zinc-900 uppercase tracking-widest">
          <img src={getBlobUrl('1.png', '/images/1.png')} alt="Logo" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
          AI Agentic Verse
        </div>
        <div className="flex gap-12 font-barlow text-sm tracking-tight">
          <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/services">Services</Link>
          <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/work-in-motion">Our Work</Link>
          <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/contact">Contact</Link>
        </div>
        <div className="font-barlow text-sm tracking-tight text-zinc-500">
          © 2024 AIAgenticVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
