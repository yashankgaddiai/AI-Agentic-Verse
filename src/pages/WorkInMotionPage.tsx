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
    description: "Dr. Raghavendra Hunasgi is a serial entrepreneur, CMO and Co-founder of the Web3 unicorn Zeebu, bestselling author of 'Unleashing Growth', and a global growth strategist known for bridging traditional branding with emerging technologies like blockchain.",
    tags: ["Web3 Unicorn", "Blockchain Strategy", "Growth Marketing"]
  },
  {
    id: 5,
    title: "AI Agentic Verse - Scaling Digital Presence",
    category: "AI Identity & Growth",
    videoUrl: "https://www.youtube.com/embed/o0b0IAIfVb0",
    thumbnail: "https://img.youtube.com/vi/o0b0IAIfVb0/maxresdefault.jpg",
    description: "Discover how we leverage advanced AI to scale digital identities and automate content pipelines, ensuring consistent growth and global reach.",
    tags: ["AI Identity", "Digital Growth", "Automation"]
  },
  {
    id: 4,
    title: "AI Agentic Verse - The Future of Automation",
    category: "AI Strategy & Execution",
    videoUrl: "https://www.youtube.com/embed/Gx122aGmh1U",
    thumbnail: "https://img.youtube.com/vi/Gx122aGmh1U/maxresdefault.jpg",
    description: "Experience how AI Agentic Verse is redefining business efficiency through autonomous agentic systems. We build the intelligence that powers your growth, 24/7.",
    tags: ["AI Strategy", "Autonomous Systems", "Business Scaling"]
  },
  {
    id: 1,
    title: "AI Content Automation",
    category: "Content Strategy",
    videoUrl: "https://www.youtube.com/embed/8qDhdXyyP-s",
    thumbnail: "https://img.youtube.com/vi/8qDhdXyyP-s/maxresdefault.jpg",
    description: "Harness the power of AI to automate your content creation and distribution. Our agentic systems ensure your brand stays active and relevant across all digital channels without manual effort.",
    tags: ["AI Content", "Automation", "Digital Strategy"]
  },
  {
    id: 2,
    title: "AI Agentic Verse Showcase",
    category: "AI Automation & Scaling",
    videoUrl: "https://www.youtube.com/embed/O6zFm4xqkS4",
    thumbnail: "https://img.youtube.com/vi/O6zFm4xqkS4/maxresdefault.jpg",
    description: "Discover how AI Agentic Verse is revolutionizing digital growth through autonomous AI systems. This showcase highlights our latest breakthroughs in AI-driven media, marketing, and identity scaling.",
    tags: ["AI Automation", "Content Scaling", "Autonomous Systems"]
  },
  {
    id: 3,
    title: "AI Digital Identity Scaling",
    category: "Digital Identity & Branding",
    videoUrl: "https://www.youtube.com/embed/egWlU-ZNqNY",
    thumbnail: "https://img.youtube.com/vi/egWlU-ZNqNY/maxresdefault.jpg",
    description: "Experience the future of personal branding with our AI-driven digital identity solutions. We help founders and creators scale their presence through hyper-realistic AI avatars and automated content pipelines.",
    tags: ["Digital Identity", "AI Avatars", "Personal Branding"]
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

        <section className="max-w-7xl mx-auto space-y-32 sm:space-y-48">
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
                  {video.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                      {tag}
                    </span>
                  ))}
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
