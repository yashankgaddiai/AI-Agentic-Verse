import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-surface text-on-surface font-general selection:bg-on-surface selection:text-surface">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-white/30 dark:bg-black/60 z-10 transition-colors duration-300"></div>
            <div className="w-full h-full bg-cover bg-center opacity-40" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBltPGN5uBer4SQ4RBI3jNnqGbu-TFlcv5r9pCaxSMbKviAmQmYtca3vJLNFkWmK0IIGxIvdST4yxrSyHeRqhx8BPxGs3eDVe8Vb82cNqSSDBNqM1QmfBZpA2g1E_picTBVlWWecewS-U8WJgTQlCEXBLFSJaEtQuI3OKOnHt8Mk_fqPx9FFGiJfyiuoTZHJUsUbEFVxWqTqihM0JsYjywEQj6Ab3zKwgLBY97zs6m1g-0mQiO_mGtneBJ1QqzTvap5efpGdlt2Ie4')"}}></div>
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-[120px] w-full text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-on-surface mb-8 uppercase">
                Building infrastructure that clones <span className="opacity-40">identity</span>, scales media, and automates revenue.
              </h1>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-32 px-[120px] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="text-black/40 dark:text-white/40 uppercase tracking-[4px] text-sm font-medium">The Mission</span>
              <h2 className="text-5xl mt-4 font-bold leading-none tracking-tight">What we do:</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-on-surface">
                Automate <span className="opacity-40">media</span> + identity + <span className="opacity-40">conversion</span>
              </p>
            </div>
          </div>
        </section>

        {/* Why We Win */}
        <section className="py-32 px-[120px] bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="uppercase tracking-[6px] text-sm font-bold text-black/40 dark:text-white/40 mb-20">Why We Win</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Unified Identity Engine", desc: "One system for video, voice, and interaction" },
                { title: "Deep Integration", desc: "Works inside your existing workflows" },
                { title: "Outcome Model", desc: "Focused on performance, not licences" }
              ].map((item, i) => (
                <div key={i} className="space-y-6 bg-black/[0.03] dark:bg-white/[0.03] p-10 rounded-[2rem] border border-black/5 dark:border-white/5 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">{i + 1}</div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-black/50 dark:text-white/50 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-40 px-[120px] relative overflow-hidden bg-on-surface text-surface">
          <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="max-w-3xl">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8">Ready to <span className="opacity-40">automate</span> your empire?</h2>
              </div>
              <div className="pb-4">
                <Link to="/contact" className="group relative inline-flex items-center justify-center bg-surface text-on-surface rounded-full px-12 py-8 font-bold text-xl uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Book a Strategy Call
                  <span className="ml-4 material-symbols-outlined transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">north_east</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
