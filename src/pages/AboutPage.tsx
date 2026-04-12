import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <div className="bg-white text-black font-sans selection:bg-zinc-900 selection:text-white">
      <SEO 
        title="About Us"
        description="Learn about AI Agentic Verse, a forward-thinking AI company dedicated to transforming businesses through intelligent, agent-based solutions."
      />
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
              AI Agentic Verse is a <span className="font-headline font-bold text-zinc-400">forward-thinking</span> AI Company.
            </h1>
            <p className="font-barlow text-xl sm:text-2xl md:text-4xl text-zinc-600 max-w-4xl leading-tight">
              Dedicated to transforming businesses through intelligent, agent-based solutions.
            </p>
          </motion.div>
        </section>

        {/* Founders Section */}
        <section className="py-32 px-6 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              {/* Yahgenesh */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10 group"
              >
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-5xl sm:text-6xl tracking-tight group-hover:text-zinc-600 transition-colors duration-500">Yahgenesh</h3>
                  <div className="inline-block px-4 py-1.5 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    Founder & CEO
                  </div>
                </div>
                <div className="space-y-6 border-l-2 border-zinc-100 pl-8">
                  <p className="font-barlow text-xl text-zinc-600 leading-relaxed">
                    Yahgenesh is a visionary leader and technology innovator, serving as the Founder and Chief Executive Officer of AI Agentic Verse. He is responsible for defining the company’s strategic direction while leading the development of advanced AI-driven solutions. His expertise lies in building AI systems and infrastructure that enable businesses to operate with greater efficiency and intelligence.
                  </p>
                  <p className="font-barlow text-xl text-zinc-600 leading-relaxed">
                    With a strong commitment to innovation, precision, and performance, Yahgenesh ensures that all products meet the highest standards of reliability, scalability, and real-world impact. His leadership integrates deep technical knowledge with a forward-looking vision, positioning the company at the forefront of intelligent automation in India.
                  </p>
                </div>
              </motion.div>

              {/* Yashank */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-10 group"
              >
                <div className="space-y-4">
                  <h3 className="font-headline font-bold text-5xl sm:text-6xl tracking-tight group-hover:text-zinc-600 transition-colors duration-500">Yashank</h3>
                  <div className="inline-block px-4 py-1.5 bg-zinc-100 text-zinc-900 text-xs font-bold uppercase tracking-widest rounded-full border border-zinc-200">
                    Co-Founder & COO
                  </div>
                </div>
                <div className="space-y-6 border-l-2 border-zinc-100 pl-8">
                  <p className="font-barlow text-xl text-zinc-600 leading-relaxed">
                    Yashank serves as the Co-Founder and Chief Operating Officer of AI Agentic Verse, where he oversees business operations and drives organizational execution. He plays a pivotal role in translating strategic vision into actionable initiatives, ensuring operational efficiency, and delivering consistent business outcomes.
                  </p>
                  <p className="font-barlow text-xl text-zinc-600 leading-relaxed">
                    With a strong acumen for market analysis, customer behavior, and monetization strategies, Yashank focuses on identifying high-growth opportunities and building sustainable revenue models. He is instrumental in strengthening client relationships, optimizing internal processes, and aligning the company’s offerings with evolving market demands. His operational leadership ensures scalability, consistency, and long-term business success.
                  </p>
                </div>
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
