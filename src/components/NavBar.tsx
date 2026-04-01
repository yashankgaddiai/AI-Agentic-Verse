import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useBlobAssets } from "../hooks/useBlobAssets";
import Button from "./ui/Button";

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
          <Button 
            variant="primary" 
            size="sm" 
            className="hidden sm:flex group h-11 px-6"
            onClick={() => window.open("https://calendly.com/aiagenticverse/ai-agentic-verse", "_blank")}
          >
            Book Meeting
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>

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
            
            <Button 
              variant="primary" 
              className="w-full py-6 rounded-2xl"
              onClick={() => window.open("https://calendly.com/aiagenticverse/ai-agentic-verse", "_blank")}
            >
              Book A Free Meeting
              <ArrowUpRight size={20} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
