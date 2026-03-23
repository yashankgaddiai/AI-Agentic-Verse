import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const clientVideos = [
  {
    id: 1,
    title: "E-commerce Brand Growth",
    category: "AI UGC Ads",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
    thumbnail: "https://picsum.photos/seed/work1/800/450"
  },
  {
    id: 2,
    title: "Corporate Identity Launch",
    category: "AI Avatars",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Placeholder
    thumbnail: "https://picsum.photos/seed/work2/800/450"
  },
  {
    id: 3,
    title: "Educational Platform Scaling",
    category: "AI Coaching Systems",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
    thumbnail: "https://picsum.photos/seed/work3/800/450"
  },
  {
    id: 4,
    title: "D2C Product Showcase",
    category: "AI Production Studios",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Placeholder
    thumbnail: "https://picsum.photos/seed/work4/800/450"
  },
  {
    id: 5,
    title: "SaaS Lead Generation",
    category: "AI Chat Agents",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
    thumbnail: "https://picsum.photos/seed/work5/800/450"
  }
];

export default function WorkInMotionPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen font-barlow">
      <NavBar />
      
      <main className="pt-40 pb-24 px-8">
        <header className="max-w-7xl mx-auto mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 uppercase tracking-tight leading-[0.9]">
              Our Work <br/>
              <span className="font-serif italic font-normal text-zinc-400 normal-case">In Motion</span>
            </h1>
          </motion.div>
        </header>

        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {clientVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-white/5">
                  {/* Video Placeholder - In a real app, this would be a video player or custom component */}
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                    <div className="w-20 h-20 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <span className="material-symbols-outlined text-4xl">play_arrow</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">{video.category}</span>
                    <h3 className="text-2xl font-bold text-white">{video.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
