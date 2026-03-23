import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function NavBar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => `font-barlow font-medium text-[14px] uppercase tracking-wider transition-colors hover:scale-105 transition-transform duration-300 ${isActive(path) ? 'text-zinc-900 font-bold border-b border-zinc-900 pb-1' : 'text-zinc-500 hover:text-zinc-900'}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 mt-6 mx-auto max-w-7xl w-[95%] bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(26,28,28,0.06)] rounded-full">
      <Link to="/" className="flex items-center gap-2 font-barlow font-bold text-xl tracking-[-2px] text-zinc-900">
        <img src="/images/1.png" alt="Logo" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
        AI Agentic Verse
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/" className={navLinkClass('/')}>Home</Link>
        <Link to="/services" className={navLinkClass('/services')}>Services</Link>
        <Link to="/work-in-motion" className={navLinkClass('/work-in-motion')}>Our Work</Link>
        <Link to="/about" className={navLinkClass('/about')}>About Us</Link>
        <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
      </div>
      <a href="https://calendly.com/aiagenticverse/ai-agentic-verse" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-full font-barlow font-bold text-[13px] uppercase tracking-[0.1em] hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
        Book A Free Meeting
        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">north_east</span>
      </a>
    </nav>
  );
}
