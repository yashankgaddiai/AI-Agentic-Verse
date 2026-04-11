import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Button from "../components/ui/Button";
import { Play, ArrowRight, Tag } from "lucide-react";

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
    id: 7,
    title: "AI Agentic Verse - Strategic Growth",
    category: "Strategic Growth & AI",
    videoUrl: "https://www.youtube.com/embed/ps08u-aUw88",
    thumbnail: "https://img.youtube.com/vi/ps08u-aUw88/maxresdefault.jpg",
    description: "Explore how we integrate strategic growth frameworks with AI-driven automation to deliver exponential results for global brands.",
    tags: ["Strategic Growth", "AI Automation", "Global Branding"]
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
  },
  {
    id: 10,
    title: "AI Agentic Verse - Identity Scaling",
    category: "Digital Identity & Automation",
    videoUrl: "https://www.youtube.com/embed/UwtDDeJGLy4",
    thumbnail: "https://img.youtube.com/vi/UwtDDeJGLy4/maxresdefault.jpg",
    description: "Scale your digital presence with autonomous AI systems. We specialize in building hyper-realistic digital identities and automated content pipelines for global reach.",
    tags: ["Identity Scaling", "AI Automation", "Digital Presence"]
  },
  {
    id: 8,
    title: "AI Agentic Verse - Brand Evolution",
    category: "AI Branding & Identity",
    videoUrl: "https://www.youtube.com/embed/tsJdkbgk7W4",
    thumbnail: "https://img.youtube.com/vi/tsJdkbgk7W4/maxresdefault.jpg",
    description: "Witness the evolution of brand identity in the age of AI. We create hyper-realistic digital assets and autonomous systems that amplify your brand's voice and reach.",
    tags: ["Brand Evolution", "AI Identity", "Digital Assets"]
  },
  {
    id: 9,
    title: "AI Agentic Verse - Creative Innovation",
    category: "AI Innovation & Media",
    videoUrl: "https://www.youtube.com/embed/2_1zoeWOBn4",
    thumbnail: "https://img.youtube.com/vi/2_1zoeWOBn4/maxresdefault.jpg",
    description: "Explore the intersection of AI and creative media. Our short-form content solutions leverage advanced AI to deliver high-impact visuals and engaging narratives at scale.",
    tags: ["AI Innovation", "Creative Media", "Short-form Content"]
  },
  {
    id: 6,
    title: "AI Agentic Verse - Future of Work",
    category: "AI Strategy & Innovation",
    videoUrl: "https://www.youtube.com/embed/zXzrkBPJrsM",
    thumbnail: "https://img.youtube.com/vi/zXzrkBPJrsM/maxresdefault.jpg",
    description: "Witness the convergence of AI and human creativity. We build the infrastructure for the next generation of digital-first businesses through autonomous agents and hyper-realistic digital identities.",
    tags: ["AI Innovation", "Future of Work", "Digital Identity"]
  }
];

function LazyVideo({ video }: { video: typeof clientVideos[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "400px" });
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldLoad(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full h-full relative group">
      {!shouldLoad ? (
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${video.thumbnail})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
              <Play className="text-white fill-white" size={32} />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`${video.videoUrl}?autoplay=0`}
          title={video.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

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

        <motion.section 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto space-y-32 sm:space-y-48"
        >
          {clientVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }
                }
              }}
              className="flex flex-col lg:flex-row gap-12 items-start"
            >
              <div className="w-full lg:w-3/5 aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
                <LazyVideo video={video} />
              </div>
              
              <div className="w-full lg:w-2/5 pt-4">
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 block">{video.category}</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">{video.title}</h3>
                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                  {video.description}
                </p>
                
                <div className="mt-10 flex flex-wrap gap-3">
                  {video.tags.map((tag, tagIdx) => (
                    <div 
                      key={tagIdx} 
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default group/tag"
                    >
                      <Tag className="w-3 h-3 text-zinc-600 group-hover/tag:text-zinc-400 transition-colors" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mx-auto mt-40 text-center p-16 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to See Your Brand <br/><span className="font-serif italic font-normal text-zinc-400">In Motion?</span></h2>
          <p className="text-xl text-zinc-400 mb-12">
            Let's build your autonomous content engine and scale your presence globally.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="group"
            onClick={() => window.open("https://calendly.com/aiagenticverse/ai-agentic-verse", "_blank")}
          >
            Book Your Strategy Call
            <ArrowRight className="group-hover:translate-x-1.5 transition-transform" />
          </Button>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
