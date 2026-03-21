import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="bg-surface text-on-surface font-general selection:bg-on-surface selection:text-surface">
      <NavBar />
      <header className="relative min-h-[716px] flex items-end pb-24 px-[120px] pt-48 overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] rounded-b-[3rem] border-b border-black/5 dark:border-white/5">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALsLppsaY073w77vBmuyhjFsmMQsZB6RRYVAn_qh07vbkmPnjNCgz6zorEwMzidQnNj5ydojLGodG1WBRfiCF5NB3GQnbcrbfroDAIrC5qTgHt9Hthqh31Liliq0gLjIhgNXGilxBvHOI--ETHXpG5O-BffHmXTumVlIcP3LYjkqC5L5_28HPJz7f2yoVgTa-a9sJofDOnCwzZFdaIl6hL5T02S7VzUiLzpnL60aQXq6paPSBEs6iUym1aY2dcmOXaseqTnmA0Anw" alt="Testimonials" referrerPolicy="no-referrer"/>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="font-bold text-7xl md:text-[120px] tracking-tight leading-[0.85] text-on-surface uppercase">
            Proven by <br/>
            <span className="opacity-40">results</span>
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-[120px] py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Featured Video Testimonial */}
          <div className="md:col-span-12 group relative aspect-video overflow-hidden rounded-[3rem] bg-black/[0.03] dark:bg-white/[0.03] shadow-sm border border-black/5 dark:border-white/5">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-12 left-12 right-12 p-12 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white">
              <div className="max-w-2xl">
                <h3 className="text-4xl md:text-5xl mb-6 italic font-medium">"AIAgenticVerse redefined our operational efficiency in weeks, not months. The scale is unprecedented."</h3>
                <p className="font-bold text-lg uppercase tracking-[4px] text-white/40">Marcus Chen — CTO, Global Media</p>
              </div>
              <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
              </div>
            </div>
          </div>

          {/* Text Testimonials Grid */}
          {[
            { quote: "The AI Avatars are indistinguishable from real footage. Our engagement doubled overnight.", author: "Sarah Jenkins", role: "Founder, Trendify" },
            { quote: "Scaling UGC ads used to be a nightmare. Now it's a push of a button.", author: "David Kim", role: "Marketing Director, E-com Pro" },
            { quote: "The deep integration into our existing CRM made the transition seamless.", author: "Elena Rodriguez", role: "Ops Lead, SaaS Scale" }
          ].map((t, i) => (
            <div key={i} className="md:col-span-4 bg-black/[0.03] dark:bg-white/[0.03] p-12 rounded-[2.5rem] shadow-sm border border-black/5 dark:border-white/5 flex flex-col justify-between min-h-[400px] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
              <div className="text-black/20 dark:text-white/20">
                <span className="material-symbols-outlined text-6xl">format_quote</span>
              </div>
              <p className="font-medium text-2xl leading-relaxed mb-8 italic text-black/80 dark:text-white/80">"{t.quote}"</p>
              <div>
                <div className="font-bold text-lg text-on-surface">{t.author}</div>
                <div className="font-medium text-sm uppercase tracking-[4px] text-black/40 dark:text-white/40">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
