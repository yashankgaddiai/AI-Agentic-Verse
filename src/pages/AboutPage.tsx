import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="bg-white text-black font-sans selection:bg-zinc-900 selection:text-white">
      <NavBar />
      <main className="bg-[#fcf9f9]">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-48 pb-24 sm:pb-32 px-6 sm:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.3em] text-zinc-500">About Us</span>
            <h1 className="font-headline font-bold text-4xl sm:text-6xl md:text-9xl tracking-tight leading-[0.9] max-w-5xl">
              AI Agentic Verse is a <span className="italic font-serif font-normal text-zinc-400">forward-thinking</span> AI Company.
            </h1>
            <p className="font-barlow text-xl sm:text-2xl md:text-4xl text-zinc-600 max-w-4xl leading-tight">
              Dedicated to transforming businesses through intelligent, agent-based solutions.
            </p>
          </motion.div>
        </section>

        {/* Founders Section */}
        <section className="py-32 px-8 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Yahgenesh */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-headline font-bold text-5xl tracking-tight">Yahgenesh</h2>
                  <p className="font-barlow font-bold text-sm uppercase tracking-widest text-zinc-500">Founder & Tech Visionary</p>
                </div>
                <p className="font-barlow text-xl text-zinc-600 leading-relaxed">
                  Yahgenesh is a young visionary shaping the future of intelligent automation. As the technical backbone of AI Agentic Verse, he specializes in building advanced agentic workflows, WhatsApp automations, and AI-driven business systems. His passion lies in turning complex technology into simple, powerful solutions that deliver real results for Indian businesses. With a deep focus on innovation, execution, and high-performance systems, Yahgenesh drives the company’s technical direction and ensures every product is fast, reliable, and scalable.
                </p>
              </motion.div>

              {/* Yashank */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="font-headline font-bold text-5xl tracking-tight">Yashank</h2>
                  <p className="font-barlow font-bold text-sm uppercase tracking-widest text-zinc-500">Co-Founder & Business Strategist</p>
                </div>
                <p className="font-barlow text-xl text-zinc-600 leading-relaxed">
                  Where Yahgenesh shapes the tech, Yashank brings the strategy. As the business-focused co-founder of AI Agentic Verse, he is deeply interested in market trends, customer psychology, monetization models, and scalable business growth. With a sharp eye for opportunity, he transforms raw ideas into real-world offerings, builds client relationships, and steers the company toward high-demand niches. His strength lies in packaging AI into products that solve real problems and generate measurable revenue.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-48 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-headline font-bold text-5xl tracking-tight uppercase">Company <br/><span className="opacity-40">Overview</span></h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-barlow text-2xl md:text-3xl text-zinc-700 leading-relaxed">
                We specialize in creating powerful AI agents that automate workflows, enhance customer interactions, and unlock new levels of operational efficiency. At AI Agentic Verse, we harness cutting-edge technologies such as AI Avatars,AI UGC Ads,AI-powered chatagents, smart appointment systems, lead generation tools, and seamless omni-channel messaging (via SMS, email, and websites). Our solutions are designed to empower businesses to scale faster, operate smarter, and deliver exceptional customer experiences—24/7.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
