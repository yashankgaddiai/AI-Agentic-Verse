import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const clientVideos = [
  {
    id: 0,
    title: "Dr. Raghavendra Hunasgi",
    category: "Global Growth Strategist",
    videoUrl: "https://www.youtube.com/embed/-5l1AhrZPlQ",
    thumbnail: "https://img.youtube.com/vi/-5l1AhrZPlQ/maxresdefault.jpg",
    description: "Dr. Raghavendra Hunasgi is a serial entrepreneur, CMO and Co-founder of the Web3 unicorn Zeebu, bestselling author of 'Unleashing Growth', and a global growth strategist known for bridging traditional branding with emerging technologies like blockchain."
  }
];

export default function WorkInMotionPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen font-barlow">
      <NavBar />
      
      <main className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8">
        <header className="max-w-7xl mx-auto mb-16 sm:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 uppercase tracking-tight leading-[0.9]">
              Our Work <br/>
              <span className="font-serif italic font-normal text-zinc-400 normal-case">In Motion</span>
            </h1>
          </motion.div>
        </header>

        <section className="max-w-7xl mx-auto">
          {clientVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row gap-12 items-start"
            >
              <div className="w-full lg:w-3/5 aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  loading="lazy"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="w-full lg:w-2/5 pt-4">
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 block">{video.category}</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">{video.title}</h3>
                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                  {video.description}
                </p>
                
                <div className="mt-12 flex flex-wrap gap-4">
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">Web3 Unicorn</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">Blockchain Strategy</span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">Growth Marketing</span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto mt-40 text-center p-16 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to See Your Brand <br/><span className="font-serif italic font-normal text-zinc-400">In Motion?</span></h2>
          <p className="text-xl text-zinc-400 mb-12">
            Let's build your autonomous content engine and scale your presence globally.
          </p>
          <a href="https://calendly.com/aiagenticverse/ai-agentic-verse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-zinc-50 transition-all active:scale-95">
            Book Your Strategy Call
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
