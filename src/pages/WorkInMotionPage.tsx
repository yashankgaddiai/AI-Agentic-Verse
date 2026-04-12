import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Button from "../components/ui/Button";
import { Play, ArrowRight, Tag } from "lucide-react";
import SEO from "../components/SEO";

const clientVideos = [
  {
    id: 0,
    title: "Dr. Raghavendra Hunasgi",
    category: "AI Avatar · Personal Branding · Thought Leadership",
    videoUrl: "https://www.youtube.com/embed/-5l1AhrZPlQ",
    thumbnail: "https://img.youtube.com/vi/-5l1AhrZPlQ/maxresdefault.jpg",
    description: "Dr. Raghavendra Hunasgi is a serial entrepreneur, CMO and Co-founder of Web3 unicorn Zeebu, bestselling author of Unleashing Growth, and a global growth strategist known for bridging traditional branding with emerging technologies like blockchain.\n\nWe created an AI avatar of Dr. Raghavendra, cloned from a single recording session, to amplify his personal brand at scale. The avatar delivers his insights on growth strategy, Web3, branding and entrepreneurship, keeping him visible and active across platforms while he focuses on building businesses and leading teams globally.\n\nThe result is a thought leadership engine that speaks in his voice, carries his expertise and grows his personal brand around the clock, without him ever needing to record again.",
    tags: ["AI Avatar", "Personal Branding", "Thought Leadership"]
  },
  {
    id: 7,
    title: "Gentech Agronation",
    category: "AI Commercial · Brand Storytelling",
    videoUrl: "https://www.youtube.com/embed/ps08u-aUw88",
    thumbnail: "https://img.youtube.com/vi/ps08u-aUw88/maxresdefault.jpg",
    description: "Gentech Crop Sciences is one of India's leading agricultural companies, with over 25 years of experience in crop protection and a presence across the country.\n\nWe produced an AI-generated brand commercial built around a single, powerful story. A farmer's journey with Gentech. From the first seed in the soil to a thriving harvest, the film follows the quiet determination of the Indian farmer and the role Gentech's products play in protecting every season he works for.\n\nThe result is a cinematic commercial that connects Gentech's science-driven mission to the human story at the heart of Indian agriculture.",
    tags: ["AI Commercial", "Brand Storytelling"]
  },
  {
    id: 2,
    title: "Gentech Agronation",
    category: "AI Commercial · Brand Storytelling · Tamil",
    videoUrl: "https://www.youtube.com/embed/O6zFm4xqkS4",
    thumbnail: "https://img.youtube.com/vi/O6zFm4xqkS4/maxresdefault.jpg",
    description: "Gentech Crop Sciences is one of India's leading agricultural companies, with over 25 years of experience in crop protection and a presence across the country.\n\nWe produced an AI-generated brand commercial in Tamil, built around the story of a paddy farmer and his fight to protect every crop he grows. The film follows his journey through the season, with Fertigen Extra at the heart of the narrative, a granule-based solution that shields crops like paddy, chilly and cotton from stem borer and leaf roller infestations.\n\nTold in Tamil to speak directly to the farming communities of South India, the commercial connects Gentech's most trusted product to the lived reality of the farmers who depend on it.",
    tags: ["AI Commercial", "Brand Storytelling", "Tamil"]
  },
  {
    id: 3,
    title: "SLS Seeds",
    category: "AI Avatar · Product Promotion · Brand Storytelling",
    videoUrl: "https://www.youtube.com/embed/egWlU-ZNqNY",
    thumbnail: "https://img.youtube.com/vi/egWlU-ZNqNY/maxresdefault.jpg",
    description: "SLS Seeds is a seed company dedicated to bringing high-quality agricultural products to farmers across India, with Suraj Dhan as their flagship seed variety.\n\nTo promote Suraj Dhan, we created an AI avatar of the company's founder and CEO. Without him stepping in front of a camera, we brought his voice and presence to life digitally, using it to speak directly to farmers about the product he built his company around.\n\nThe result is a compelling product promotion that feels personal and authentic, delivered entirely through AI.",
    tags: ["AI Avatar", "Product Promotion", "Brand Storytelling"]
  },
  {
    id: 10,
    title: "Damp Prime Paints",
    category: "AI Commercial · Hindi · Brand Storytelling",
    videoUrl: "https://www.youtube.com/embed/UwtDDeJGLy4",
    thumbnail: "https://img.youtube.com/vi/UwtDDeJGLy4/maxresdefault.jpg",
    description: "Damp Prime is a waterproofing paint brand built to protect homes from moisture, seepage and weather damage across India.\n\nWe produced an AI-generated commercial in Hindi, crafted to connect with homeowners who know the frustration of damp walls and leaking roofs. The film tells the story of a home protected, bringing Damp Prime's waterproofing promise to life through cinematic visuals and a narrative that speaks the language of every Indian household.\n\nThe commercial delivers Damp Prime's message with warmth and credibility, powered entirely by AI.",
    tags: ["AI Commercial", "Hindi", "Brand Storytelling"]
  },
  {
    id: 8,
    title: "Doctor Avatar",
    category: "AI Avatar · Content Creation · Personal Branding · Demo",
    videoUrl: "https://www.youtube.com/embed/tsJdkbgk7W4",
    thumbnail: "https://img.youtube.com/vi/tsJdkbgk7W4/maxresdefault.jpg",
    description: "A doctor records once. We do the rest.\n\nWe built an AI avatar demo that clones a doctor's likeness and voice, turning a single recording session into an unlimited content engine. The avatar delivers medical tips, clinic updates and health awareness videos, all without the doctor needing to show up on camera again.\n\nThe result is a personal brand that stays active and consistent, driving both the doctor's online presence and clinic footfall, powered entirely by AI.",
    tags: ["AI Avatar", "Content Creation", "Personal Branding", "Demo"]
  },
  {
    id: 9,
    title: "Real Estate Agent Avatar",
    category: "AI Avatar · Content Creation · Personal Branding · Demo",
    videoUrl: "https://www.youtube.com/embed/2_1zoeWOBn4",
    thumbnail: "https://img.youtube.com/vi/2_1zoeWOBn4/maxresdefault.jpg",
    description: "A real estate agent records once. We build a content engine that never stops.\n\nWe created an AI avatar that clones the agent's likeness and voice from a single recording session, producing unlimited content while he is out closing deals and meeting clients. Property walkthroughs, market updates, client testimonials and neighbourhood guides, all delivered in his voice, on his behalf, every single day.\n\nThe result is a personal brand that works around the clock, building trust with potential buyers and driving sales without the agent ever stepping in front of a camera again.",
    tags: ["AI Avatar", "Content Creation", "Personal Branding", "Demo"]
  },
  {
    id: 6,
    title: "Suryodaya Secondary School",
    category: "AI Anime Commercial · Batch of 1994-1995 · Nostalgia Storytelling",
    videoUrl: "https://www.youtube.com/embed/zXzrkBPJrsM",
    thumbnail: "https://img.youtube.com/vi/zXzrkBPJrsM/maxresdefault.jpg",
    description: "Some memories never fade. They just wait to be relived.\n\nWe produced an AI-generated anime-style commercial for Suryodaya Secondary School, crafted exclusively for the batch of 1994-1995. The film reimagines the everyday moments of school life from that era, morning assemblies, chalk-dusted classrooms, lunch breaks on the playground and friendships that lasted a lifetime, all brought back to life through warm, hand-drawn anime visuals.\n\nEvery frame was designed to feel familiar, transporting former students back to the corridors and classrooms where their fondest memories were made.\n\nThe result is not just a commercial. It is a time capsule, animated by AI and built for a generation that deserves to see their childhood on screen.",
    tags: ["AI Anime", "Batch of 1994-1995", "Nostalgia Storytelling"]
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
      <SEO 
        title="Our Work"
        description="Witness the convergence of AI and human creativity. Explore our portfolio of AI-generated commercials, avatars, and brand stories."
      />
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
              className={`flex flex-col gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="w-full lg:w-3/5 aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl">
                <LazyVideo video={video} />
              </div>
              
              <div className={`w-full lg:w-2/5 ${idx % 2 === 1 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 block">{video.category}</span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">{video.title}</h3>
                <p className="text-xl text-zinc-400 leading-relaxed font-light whitespace-pre-line">
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
