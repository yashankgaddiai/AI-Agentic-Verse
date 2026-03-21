import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface font-general selection:bg-on-surface selection:text-surface">
      <NavBar />
      <main className="pt-40 pb-24 px-[120px] max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
          <div className="max-w-2xl">
            <h1 className="font-bold text-6xl md:text-8xl tracking-tight leading-[0.9] text-on-surface uppercase mb-6">
              Connect with <span className="opacity-40">intelligence</span>
            </h1>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-black/[0.02] dark:bg-white/[0.02] rounded-[3rem] p-8 md:p-16 border border-black/5 dark:border-white/5">
            <h2 className="font-bold text-3xl uppercase tracking-tight mb-12">Schedule a Call</h2>
            <div className="aspect-[4/3] bg-black/[0.03] dark:bg-white/[0.03] rounded-[2rem] p-12 flex flex-col justify-between overflow-hidden relative group cursor-pointer border border-black/10 dark:border-white/10 hover:border-on-surface transition-colors">
              <div className="z-10">
                <div className="w-20 h-20 rounded-full bg-on-surface text-surface flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-4xl">calendar_today</span>
                </div>
                <h3 className="font-bold text-4xl leading-tight uppercase mb-4">Strategy Session</h3>
                <p className="text-xl text-black/50 dark:text-white/50 max-w-md">Book a 30-minute discovery call with our AI experts to explore how we can scale your media production.</p>
              </div>
              <div className="z-10 flex items-center gap-4 font-bold text-lg uppercase tracking-widest text-on-surface group-hover:gap-6 transition-all">
                Select a Time <span className="material-symbols-outlined">arrow_forward</span>
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[200px]">event</span>
              </div>
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
