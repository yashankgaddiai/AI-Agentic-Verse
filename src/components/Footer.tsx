import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-8">
        <div className="flex items-center gap-2 font-barlow font-bold text-lg text-zinc-900 uppercase tracking-widest">
          <img src="/images/1.png" alt="Logo" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
          AIAgenticVerse
        </div>
        <div className="flex gap-12 font-barlow text-sm tracking-tight">
          <a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy</a>
          <a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms</a>
          <Link className="text-zinc-500 hover:text-zinc-900 transition-colors" to="/contact">Contact</Link>
        </div>
        <div className="font-barlow text-sm tracking-tight text-zinc-500">
          © 2024 AIAgenticVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
