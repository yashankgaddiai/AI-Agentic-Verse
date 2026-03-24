import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useBlobAssets } from "../hooks/useBlobAssets";

export default function NavBar() {
  const { getBlobUrl } = useBlobAssets();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => `font-barlow font-medium text-[14px] uppercase tracking-wider transition-colors hover:scale-105 transition-transform duration-300 ${isActive(path) ? 'text-zinc-900 font-bold border-b border-zinc-900 pb-1' : 'text-zinc-500 hover:text-zinc-900'}`;
  const mobileNavLinkClass = (path: string) => `font-barlow font-bold text-2xl uppercase tracking-widest transition-colors ${isActive(path) ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-900'}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'mt-2' : 'mt-6'} mx-auto max-w-7xl w-[95%]`}>
      <div className={`flex justify-between items-center px-6 md:px-8 py-4 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(26,28,28,0.06)] rounded-full border border-zinc-100`}>
        <Link to="/" className="flex items-center gap-2 font-barlow font-bold text-lg md:text-xl tracking-[-1px] md:tracking-[-2px] text-zinc-900">
          <img src={getBlobUrl('1.png', '/images/1.png')} alt="Logo" className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
          <span className="whitespace-nowrap">AI Agentic Verse</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/services" className={navLinkClass('/services')}>Services</Link>
          <Link to="/work-in-motion" className={navLinkClass('/work-in-motion')}>Our Work</Link>
          <Link to="/about" className={navLinkClass('/about')}>About Us</Link>
          <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://calendly.com/aiagenticverse/ai-agentic-verse" target="_blank" rel="noopener noreferrer" className="hidden sm:flex group items-center gap-2 bg-zinc-900 text-white px-5 md:px-7 py-3 md:py-3.5 rounded-full font-barlow font-bold text-[11px] md:text-[13px] uppercase tracking-[0.1em] hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
            Book Meeting
            <span className="material-symbols-outlined text-[16px] md:text-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">north_east</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 p-8 bg-white/95 backdrop-blur-xl rounded-[32px] border border-zinc-100 shadow-2xl lg:hidden flex flex-col items-center gap-8 z-40"
          >
            <Link to="/" className={mobileNavLinkClass('/')}>Home</Link>
            <Link to="/services" className={mobileNavLinkClass('/services')}>Services</Link>
            <Link to="/work-in-motion" className={mobileNavLinkClass('/work-in-motion')}>Our Work</Link>
            <Link to="/about" className={mobileNavLinkClass('/about')}>About Us</Link>
            <Link to="/contact" className={mobileNavLinkClass('/contact')}>Contact</Link>
            
            <div className="w-full h-px bg-zinc-100 my-4"></div>
            
            <a href="https://calendly.com/aiagenticverse/ai-agentic-verse" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-3 bg-zinc-900 text-white py-6 rounded-2xl font-barlow font-bold text-lg uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95">
              Book A Free Meeting
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
