import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-surface text-on-surface">
      <NavBar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] h-screen w-full overflow-hidden flex items-center justify-center text-center px-8 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
        <div className="relative z-10 max-w-5xl w-full">
          <h1 className="font-barlow font-bold text-5xl md:text-8xl tracking-tight-custom text-white leading-[0.9] mb-8 uppercase">
            AI Agentic Verse <br/>
            <span className="font-serif italic font-normal text-6xl md:text-[72px] tracking-normal block mt-4 normal-case">Build. Automate. Scale.</span>
          </h1>
          <div className="space-y-4 mb-12">
            <p className="font-barlow font-medium text-xl md:text-2xl text-white leading-relaxed">
              Your 24/7 AI Workforce for Media, Marketing & Identity
            </p>
            <p className="font-barlow text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed italic">
              "From Content to Conversion — Fully Automated with AI Agents" • "Scale Faster with Autonomous AI Systems That Never Sleep" • "The Future of Digital Growth — Powered by Agentic AI"
            </p>
          </div>
          <a href="https://calendly.com/aiagenticverse/ai-agentic-verse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-white text-zinc-900 px-12 py-6 rounded-full font-headline font-bold text-xl hover:bg-zinc-50 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-500 active:scale-95 group">
            Deploy Your Digital Clone
            <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* New Section: Autonomous Ecosystems */}
      <section className="py-32 px-8 bg-white border-y border-zinc-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-16">
              <span className="font-barlow font-bold text-sm uppercase tracking-[0.3em] text-white bg-zinc-900 px-6 py-2.5 rounded-full inline-block mb-10 border border-zinc-800">Our Mission</span>
              <h2 className="font-headline font-bold text-4xl md:text-6xl tracking-tight leading-tight mb-8 text-zinc-900">
                At AI Agentic Verse, we don’t just use AI — <br/>
                <span className="text-zinc-900">we build autonomous ecosystems</span> that run your business at scale.
              </h2>
              <p className="font-barlow text-xl md:text-2xl text-zinc-600 leading-relaxed">
                We specialize in end-to-end automation of media production, creative testing, and digital identity, enabling brands, creators, and businesses to operate with speed, intelligence, and precision.
              </p>
            </div>

            <div className="mb-24">
              <p className="font-barlow text-xl md:text-2xl text-zinc-600 leading-relaxed">
                Our advanced AI systems act as your 24/7 digital workforce, continuously creating, optimizing, and scaling your presence across platforms.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-zinc-50 rounded-[40px] border border-zinc-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-zinc-200 text-8xl">robot_2</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-24">
          <div className="space-y-12">
            <h3 className="font-headline font-bold text-3xl md:text-4xl tracking-tight text-zinc-900">What We Deliver:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Avatars",
                  desc: "Hyper-realistic, multilingual digital humans that represent your brand, deliver content, and engage audiences globally.",
                  icon: "person_celebrate"
                },
                {
                  title: "AI UGC Ads",
                  desc: "High-converting, data-driven ad creatives generated and tested at scale to maximize ROI.",
                  icon: "ads_click"
                },
                {
                  title: "AI Product Studios",
                  desc: "Fully automated pipelines for product visuals, videos, and branding — from concept to launch.",
                  icon: "camera"
                },
                {
                  title: "AI Coaching Systems",
                  desc: "Intelligent learning and mentoring systems that guide users, clients, or teams with personalized AI-driven insights.",
                  icon: "psychology"
                },
                {
                  title: "AI Chat Agents",
                  desc: "Smart conversational agents for sales, support, onboarding, and engagement — working 24/7 without fatigue.",
                  icon: "chat"
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-primary/30 transition-all hover:shadow-xl">
                  <h4 className="font-headline font-bold text-2xl mb-4 text-zinc-900">{item.title}</h4>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Avatars Section */}
      <section className="py-32 px-8 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.3em] text-white bg-white/5 px-6 py-2.5 rounded-full inline-block mb-10 border border-white/10">AI Avatars</span>
            <h2 className="font-headline font-bold text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              Scale Your Presence <br/>
              <span className="italic font-serif font-normal text-white">Without Showing Up</span>
            </h2>
            <p className="font-barlow text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Create powerful content without ever stepping in front of the camera. At AI Agentic Verse, our AI Avatars enable you to build scalable digital identities that consistently represent your brand across every platform.
            </p>
          </div>

          <div className="my-16 group">
            <img 
              src="/images/1.jpeg" 
              alt="AI Avatar Technology" 
              className="rounded-[40px] w-full aspect-video object-cover border border-white/10 shadow-2xl mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-center">Hyper-realistic digital humans designed to bridge the gap between digital efficiency and human connection.</p>
          </div>

          <div className="mb-24">
            <p className="font-barlow text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12">
              Whether you're a creator, founder, or business, you can produce high-quality videos, messages, and content — all powered by intelligent, human-like avatars. We combine realistic visuals, voice synthesis, and AI-driven scripting to help you maintain a strong, professional presence.
            </p>

            <div className="space-y-8">
              <h3 className="font-headline font-bold text-2xl tracking-tight">What You Get:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Camera-Free Content Creation", desc: "No filming, no setup, no retakes" },
                  { title: "Scalable Digital Identity", desc: "Clone your presence and expand infinitely" },
                  { title: "Multi-Platform Production", desc: "Create content for YouTube, Instagram, ads, and more" },
                  { title: "Consistent Brand Voice", desc: "Stay aligned and visible across all channels" }
                ].map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <h4 className="font-headline font-bold text-lg mb-2 text-white">{feature.title}</h4>
                    <p className="text-sm text-zinc-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI UGC Avatars Section */}
      <section className="py-32 px-8 bg-white text-zinc-900 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.3em] text-white bg-zinc-900 px-6 py-2.5 rounded-full inline-block mb-10 border border-zinc-800">AI UGC Avatars</span>
            <h2 className="font-headline font-bold text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              High-Converting Ads, <br/>
              <span className="italic font-serif font-normal text-zinc-900">Generated & Scaled by AI</span>
            </h2>
            <p className="font-barlow text-xl md:text-2xl text-zinc-600 leading-relaxed">
              At AI AgenticVerse, we redefine user-generated content with AI-powered UGC Avatars — enabling brands to create authentic, high-converting ad creatives without relying on traditional creators.
            </p>
          </div>

          <div className="my-16 group">
            <img 
              src="/images/2.jpeg" 
              alt="AI UGC Avatar Technology" 
              className="rounded-[40px] w-full aspect-video object-cover border border-zinc-200 shadow-2xl mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 text-center">Synthetic UGC creators designed to mimic human-style content for maximum authenticity and engagement.</p>
          </div>

          <div className="mb-24">
            <p className="font-barlow text-xl md:text-2xl text-zinc-600 leading-relaxed mb-12">
              Our system combines synthetic avatars, AI scripting, and performance-driven testing to produce ad content that feels real, relatable, and optimized for conversion. We help you iterate faster and scale top-performing versions automatically.
            </p>

            <div className="space-y-12">
              <h3 className="font-headline font-bold text-2xl tracking-tight">What We Deliver:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { 
                    title: "Synthetic UGC Creators", 
                    desc: "Realistic AI avatars designed to mimic human-style content, delivering authentic-looking product reviews, testimonials, and ad creatives." 
                  },
                  { 
                    title: "High-Converting Ad Generation", 
                    desc: "AI-crafted scripts, hooks, and visuals optimized for engagement, retention, and conversions across platforms." 
                  },
                  { 
                    title: "Rapid Iteration Engine", 
                    desc: "Instantly generate and test multiple variations of ads — headlines, angles, creatives — and scale the top-performing versions automatically." 
                  },
                  { 
                    title: "Performance-Driven Optimization", 
                    desc: "Continuously refine creatives using data insights to improve ROI and reduce ad spend inefficiencies." 
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="group">
                    <h4 className="font-headline font-bold text-xl mb-2 text-zinc-900">{feature.title}</h4>
                    <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-zinc-100">
                <h3 className="font-headline font-bold text-xl tracking-tight mb-6">Built for Modern Ad Platforms:</h3>
                <div className="flex flex-wrap gap-3">
                  {["Meta Ads", "TikTok Ads", "YouTube Ads", "Instagram Reels", "Shorts & More"].map((platform, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-sm font-barlow font-medium text-zinc-600">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Production Studios Section */}
      <section className="py-32 px-8 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.3em] text-white bg-white/5 px-6 py-2.5 rounded-full inline-block mb-10 border border-white/10">AI Production Studios</span>
            <h2 className="font-headline font-bold text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              Create Product Visuals <br/>
              <span className="italic font-serif font-normal text-white">Without Photoshoots</span>
            </h2>
            <p className="font-barlow text-xl md:text-2xl text-white leading-relaxed">
              At AI AgenticVerse, we transform the way brands produce visual content with AI-powered Production Studios — eliminating the need for expensive photoshoots, studios, and long production timelines.
            </p>
          </div>

          <div className="my-16 group">
            <img 
              src="/images/3.jpeg" 
              alt="AI Production Studio Visuals" 
              className="rounded-[40px] w-full aspect-video object-cover border border-white/10 shadow-2xl mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-center">Photorealistic product scenes generated in minutes, tailored for high-impact marketing campaigns.</p>
          </div>

          <div className="mb-24">
            <p className="font-barlow text-xl md:text-2xl text-white leading-relaxed mb-12">
              Create stunning, photorealistic product images and scenes in minutes, tailored for ads, websites, and campaigns — all generated and optimized through advanced AI systems. From concept to final visual in minutes.
            </p>

            <div className="space-y-12">
              <h3 className="font-headline font-bold text-2xl tracking-tight">What We Deliver:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { 
                    title: "No Photoshoots Required", 
                    desc: "Produce high-quality product visuals without cameras, studios, or physical setups — saving time and cost." 
                  },
                  { 
                    title: "Photorealistic Images & Scenes", 
                    desc: "Generate lifelike product images in diverse environments, lighting conditions, and styles that match real-world aesthetics." 
                  },
                  { 
                    title: "Unlimited Creative Variations", 
                    desc: "Instantly create multiple versions of visuals for A/B testing, ads, landing pages, and campaigns — all at scale." 
                  },
                  { 
                    title: "Instant Production Pipeline", 
                    desc: "From concept to final visual in minutes — enabling faster launches, quicker iterations, and real-time marketing execution." 
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="group">
                    <h4 className="font-headline font-bold text-xl mb-2 text-white">{feature.title}</h4>
                    <p className="text-white/80 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-white/10">
                <h3 className="font-headline font-bold text-xl tracking-tight mb-6">Use Cases:</h3>
                <div className="flex flex-wrap gap-3">
                  {["E-commerce", "D2C Brands", "Ad Campaigns", "Landing Pages", "Social Media Creatives", "Product Launches & Branding"].map((useCase, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-barlow font-medium text-white">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Coaching Systems Section */}
      <section className="py-40 px-8 bg-white text-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.3em] text-white bg-zinc-900 px-6 py-2.5 rounded-full inline-block mb-10 border border-zinc-800">AI Coaching Systems</span>
            <h2 className="font-headline font-bold text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              Scale Knowledge <br/>
              <span className="italic font-serif font-normal text-zinc-900">Without Scaling Your Time</span>
            </h2>
            <p className="font-barlow text-xl md:text-2xl text-zinc-600 leading-relaxed">
              At AI AgenticVerse, we empower educators, creators, and businesses to transform their expertise into intelligent, scalable coaching systems powered by AI.
            </p>
          </div>

          <div className="my-16 group">
            <img 
              src="/images/4.jpeg" 
              alt="AI Coaching Systems" 
              className="rounded-[40px] w-full aspect-video object-cover border border-zinc-200 shadow-2xl mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 text-center">Intelligent mentor engines that deliver personalized learning experiences and real-time feedback at scale.</p>
          </div>

          <div className="mb-24">
            <p className="font-barlow text-xl md:text-2xl text-zinc-600 leading-relaxed mb-12">
              Deliver personalized learning experiences, automate guidance, and provide real-time feedback — all without being physically present. Our AI systems act as your digital mentor, ensuring every user receives value, clarity, and direction at scale.
            </p>

            <div className="space-y-12">
              <h3 className="font-headline font-bold text-2xl tracking-tight">What We Deliver:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { 
                    title: "Personalized AI-Driven Learning", 
                    desc: "Tailored learning paths, adaptive content, and intelligent recommendations based on each user’s behavior and progress." 
                  },
                  { 
                    title: "Real-Time Feedback Systems", 
                    desc: "Instant responses, assessments, and guidance — helping users improve faster and stay engaged throughout their journey." 
                  },
                  { 
                    title: "Built for Courses & Training", 
                    desc: "Perfect for online courses, coaching programs, academies, and internal training systems — fully automated and scalable." 
                  },
                  { 
                    title: "Scalable Knowledge Delivery", 
                    desc: "Turn your expertise into a 24/7 AI-powered system that teaches, guides, and supports unlimited users simultaneously." 
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="group">
                    <h4 className="font-headline font-bold text-xl mb-2 text-zinc-900">{feature.title}</h4>
                    <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Agents Section */}
      <section className="py-40 px-8 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="font-barlow font-bold text-sm uppercase tracking-[0.3em] text-white bg-white/5 px-6 py-2.5 rounded-full inline-block mb-10 border border-white/10">AI Chat Agents</span>
            <h2 className="font-headline font-bold text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              Turn Attention Into <br/>
              <span className="italic font-serif font-normal text-white">Revenue Automatically</span>
            </h2>
            <p className="font-barlow text-xl md:text-2xl text-white leading-relaxed">
              At AI AgenticVerse, we build intelligent AI Chat Agents that transform conversations into conversions. From capturing leads to closing clients, our systems work 24/7 to ensure no opportunity is ever missed.
            </p>
          </div>

          <div className="my-16 group">
            <img 
              src="/images/6.png" 
              alt="AI Chat Agents" 
              className="rounded-[40px] w-full aspect-video object-cover border border-white/10 shadow-2xl mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 text-center">Intelligent conversational agents that act as your always-on sales and support team, driving revenue on autopilot.</p>
          </div>

          <div className="mb-24">
            <p className="font-barlow text-xl md:text-2xl text-white leading-relaxed mb-12">
              Whether it's your website, WhatsApp, or social platforms — our AI agents act as your always-on sales and support team, delivering instant responses, nurturing prospects, and driving revenue on autopilot. Seamlessly connect with your CRM and sales funnels.
            </p>

            <div className="space-y-12">
              <h3 className="font-headline font-bold text-2xl tracking-tight">What We Deliver:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { 
                    title: "Conversational Sales & Support", 
                    desc: "Engage visitors with human-like conversations that answer questions, recommend solutions, and guide users toward action." 
                  },
                  { 
                    title: "Automated Follow-Ups", 
                    desc: "Never lose a lead — AI automatically follows up with prospects, nurtures interest, and moves them through your funnel." 
                  },
                  { 
                    title: "CRM & Funnel Integration", 
                    desc: "Seamlessly connect with your CRM, email, and sales funnels to track, manage, and convert leads efficiently." 
                  },
                  { 
                    title: "Multi-Platform AI Agents", 
                    desc: "Deploy across WhatsApp, Instagram, Facebook, Websites, Landing Pages, Telegram & More." 
                  },
                  { 
                    title: "Lead Capture → Conversion System", 
                    desc: "From the first interaction to final conversion, our AI agents handle the entire journey — intelligently and instantly." 
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="group">
                    <h4 className="font-headline font-bold text-xl mb-2 text-white">{feature.title}</h4>
                    <p className="text-white/80 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-48 px-8 bg-zinc-950 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="font-headline font-bold text-5xl md:text-8xl tracking-tight-custom leading-[0.9]">
              Ready to <span className="font-serif italic font-normal tracking-normal text-white">Scale</span> Your Identity?
            </h2>
            <p className="font-barlow text-2xl text-zinc-400 max-w-xl">
              Enter your details to schedule an integration roadmap call.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-barlow font-bold text-xs uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 focus:ring-0 focus:border-white font-barlow text-xl text-white placeholder:text-zinc-700" placeholder="John Doe" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="font-barlow font-bold text-xs uppercase tracking-widest text-zinc-500">Work Email</label>
                  <input className="w-full bg-transparent border-0 border-b border-white/10 px-0 py-4 focus:ring-0 focus:border-white font-barlow text-xl text-white placeholder:text-zinc-700" placeholder="john@company.com" type="email" required />
                </div>
              </div>
              <a href="https://calendly.com/aiagenticverse/ai-agentic-verse" target="_blank" rel="noopener noreferrer" className="w-full py-6 bg-white text-zinc-900 rounded-full font-headline font-bold text-xl uppercase tracking-widest hover:bg-zinc-100 transition-colors active:scale-95 shadow-xl flex items-center justify-center gap-4">
                Book Strategy Call
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
