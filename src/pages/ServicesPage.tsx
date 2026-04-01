import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useBlobAssets } from "../hooks/useBlobAssets";
import OptimizedImage from "../components/OptimizedImage";
import Card from "../components/ui/Card";
import { CheckCircle2, Bot } from "lucide-react";

export default function ServicesPage() {
  const { getBlobUrl } = useBlobAssets();

  return (
    <div className="bg-white text-black font-sans selection:bg-zinc-900 selection:text-white">
      <NavBar />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white">
        <header className="max-w-7xl mx-auto px-6 sm:px-12 md:px-[120px] mb-16 sm:mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 mt-8 sm:mt-12 uppercase tracking-tight text-black">Our <span className="opacity-40">Intelligence</span></h1>
            <p className="max-w-2xl text-lg sm:text-xl text-black/60 leading-relaxed">
              Elevating brands through the invisible power of AI. Cinematic production meets algorithmic precision.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm aspect-square bg-zinc-50 rounded-[32px] sm:rounded-[40px] border border-zinc-100 flex items-center justify-center">
              <Bot size={80} className="text-zinc-200" />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-[120px] space-y-24 sm:space-y-40">
          {[
            {
              id: "01",
              title: "AI Avatars",
              tagline: "Your Digital Identity, Always On",
              desc: "Create a photorealistic AI version of yourself or your brand spokesperson.",
              get: ["Custom AI avatar", "Multi-platform use", "Consistent identity", "No filming required"],
              for: "Founders, creators, enterprise teams",
              img: "/images/1.jpeg"
            },
            {
              id: "02",
              title: "AI UGC Ads",
              tagline: "High-Converting Ads. No Film Crews",
              desc: "Scalable user-generated content that converts. Infinite variations, zero burnout.",
              get: ["Hundreds of variants", "Built-in conversion hooks", "Optimization loop", "Ad integrations"],
              img: "/images/2.jpeg"
            },
            {
              id: "03",
              title: "AI Product Studios",
              tagline: "Studio-Quality Images. Without Studio",
              desc: "Create studio-quality product visuals from prompts.",
              get: ["Unlimited environments", "8K output", "Fast generation", "Direct ad integration"],
              img: "/images/3.jpeg"
            },
            {
              id: "04",
              title: "AI Coaching Systems",
              tagline: "Your Knowledge. Teaching 24/7",
              desc: "Deploy AI avatars that teach and train 24/7.",
              get: ["Adaptive learning", "Real-time feedback", "50+ languages", "LMS integration"],
              img: "/images/4.jpeg"
            },
            {
              id: "05",
              title: "AI Chat Agents",
              tagline: "Your Sales Team. Automated",
              desc: "Automate conversations, bookings, and sales.",
              get: ["Intent-aware AI", "Automated follow-ups", "CRM integration", "Multi-channel support"],
              img: "/images/6.png"
            }
          ].map((service, i) => (
            <Card key={i} variant="none" padding="none" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-none rounded-none hover:translate-y-0">
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative w-full aspect-video overflow-hidden rounded-[2rem] mb-8 shadow-2xl border border-black/10 group">
                  <OptimizedImage 
                    filename={service.img.split('/').pop() || ''} 
                    fallback={service.img}
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Bot size={60} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <span className="uppercase tracking-[4px] text-xs text-black/40 mb-4 block">Service {service.id}</span>
                  <h2 className="text-5xl md:text-7xl font-bold mb-4 text-black">{service.title}</h2>
                  <p className="text-2xl text-black/60 italic">{service.tagline}</p>
                </div>
                <p className="text-xl text-black/50 leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-widest text-sm text-black/40">What You Get:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.get.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 font-medium text-black/70">
                        <CheckCircle2 size={18} className="text-zinc-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {service.for && (
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm text-black/40 mb-2">Who It's For:</h4>
                    <p className="font-bold text-lg text-black/80">{service.for}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
