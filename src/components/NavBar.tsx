import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 mt-6 mx-auto max-w-7xl w-[95%] bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(26,28,28,0.06)] rounded-full">
      <Link to="/" className="flex items-center gap-2 font-barlow font-bold text-xl tracking-[-2px] text-zinc-900">
        <img src="/images/1.png" alt="Logo" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
        AIAgenticVerse
      </Link>
      <Link to="/contact" className="group flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-barlow font-bold text-[14px] uppercase tracking-wider hover:scale-105 transition-transform duration-300 active:scale-95">
        Book A Free Meeting
        <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">north_east</span>
      </Link>
    </nav>
  );
}
