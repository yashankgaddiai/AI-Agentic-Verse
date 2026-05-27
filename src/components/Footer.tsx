import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-24 px-8 border-t border-outline bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-3 font-barlow font-bold text-xl text-primary uppercase tracking-widest group">
              <img src="https://res.cloudinary.com/dsqmjneyd/image/upload/v1775483943/1_lfvwn7.png" alt="AI Agentic Verse logo" className="w-10 h-10 rounded-full border border-outline group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              AI Agentic Verse
            </Link>
            <p className="text-zinc-500 font-light text-lg max-w-sm leading-relaxed">
              Architecting the future of autonomous AI ecosystems. We specialize in end-to-end automation for media, marketing, and digital identity.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-barlow font-bold text-[11px] uppercase tracking-[0.4em] text-zinc-400">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link className="text-zinc-500 hover:text-primary transition-colors font-medium" to="/services">Services</Link>
              <Link className="text-zinc-500 hover:text-primary transition-colors font-medium" to="/work-in-motion">Our Work</Link>
              <Link className="text-zinc-500 hover:text-primary transition-colors font-medium" to="/about">About Us</Link>
              <Link className="text-zinc-500 hover:text-primary transition-colors font-medium" to="/contact">Contact</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-barlow font-bold text-[11px] uppercase tracking-[0.4em] text-zinc-400">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="https://calendly.com/aiagenticverse/ai-agentic-verse" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary transition-colors font-medium">Book a Strategy Call</a>
              <a href="mailto:hello@aiagenticverse.com" className="text-zinc-500 hover:text-primary transition-colors font-medium">Email Us</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-barlow text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            © 2024 AI Agentic Verse. All rights reserved.
          </div>
          <div className="flex gap-8 font-barlow text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Subtle background detail */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 -z-10"></div>
    </footer>
  );
}
