import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useBlobAssets } from "../hooks/useBlobAssets";
import OptimizedImage from "../components/OptimizedImage";
import Card from "../components/ui/Card";
import { CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

export default function ServicesPage() {
  const { getBlobUrl } = useBlobAssets();

  return (
    <div className="bg-white text-black font-sans selection:bg-zinc-900 selection:text-white">
      <SEO 
        title="Our Services"
        description="Explore our AI-powered services: AI Avatars, AI UGC Ads, AI Product Studios, AI Coaching Systems, and AI Chat Agents. Elevating brands through the power of AI."
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Business Solutions",
          "provider": {
            "@type": "Organization",
            "name": "AI Agentic Verse",
            "url": "https://aiagenticverse.com/"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Avatars",
                  "description": "Create a photorealistic AI version of yourself or your brand spokesperson."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI UGC Ads",
                  "description": "Scalable user-generated content that converts. Infinite variations, zero burnout."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Product Studios",
                  "description": "Create studio-quality product visuals from prompts."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Coaching Systems",
                  "description": "Your Knowledge. Teaching 24/7. Deploy AI avatars that teach and train 24/7."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Chat Agents",
                  "description": "Automate conversations, bookings, and sales with intent-aware AI."
                }
              }
            ]
          }
        }}
      />
      <NavBar />
      <main className="pt-24 md:pt-32 pb-16 sm:pb-24 bg-white">
        <header className="max-w-7xl mx-auto px-5 sm:px-12 mb-16 sm:mb-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 mt-6 sm:mt-12 uppercase tracking-tight text-black leading-none">Our <span className="opacity-40">Intelligence</span></h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-black/60 leading-relaxed italic">
              Elevating brands through the invisible power of AI. Cinematic production meets algorithmic precision.
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-5 sm:px-12 space-y-24 sm:space-y-40">
          {[
            {
              id: "01",
              title: "AI Avatars",
              tagline: "Your Digital Identity, Always On",
              desc: "Create a photorealistic AI version of yourself or your brand spokesperson.",
              get: ["Custom AI avatar", "Multi-platform use", "Consistent identity", "No filming required"],
              for: "Founders, creators, enterprise teams",
              img: "https://res.cloudinary.com/dsqmjneyd/image/upload/v1775484147/be44d117-6a09-4c5a-a56e-533a3672b3c8_isjvmg.jpg"
            },
            {
              id: "02",
              title: "AI UGC Ads",
              tagline: "High-Converting Ads. No Film Crews",
              desc: "Scalable user-generated content that converts. Infinite variations, zero burnout.",
              get: ["Hundreds of variants", "Built-in conversion hooks", "Optimization loop", "Ad integrations"],
              img: "https://res.cloudinary.com/dsqmjneyd/image/upload/v1775484156/f51d239d-69b4-4984-bb7f-0eadc1a6ed1a_nhwwaw.jpg"
            },
            {
              id: "03",
              title: "AI Product Studios",
              tagline: "Studio-Quality Images. Without Studio",
              desc: "Create studio-quality product visuals from prompts.",
              get: ["Unlimited environments", "8K output", "Fast generation", "Direct ad integration"],
              img: "https://res.cloudinary.com/dsqmjneyd/image/upload/v1775484167/3_fuhjg2.jpg"
            },
            {
              id: "04",
              title: "AI Coaching Systems",
              tagline: "Your Knowledge. Teaching 24/7",
              desc: "Deploy AI avatars that teach and train 24/7.",
              get: ["Adaptive learning", "Real-time feedback", "50+ languages", "LMS integration"],
              img: "https://res.cloudinary.com/dsqmjneyd/image/upload/q_auto/f_auto/v1775484169/4_hexpus.jpg"
            },
            {
              id: "05",
              title: "AI Chat Agents",
              tagline: "Your Sales Team. Automated",
              desc: "Automate conversations, bookings, and sales.",
              get: ["Intent-aware AI", "Automated follow-ups", "CRM integration", "Multi-channel support"],
              img: "https://res.cloudinary.com/dsqmjneyd/image/upload/q_auto/f_auto/v1775484167/6_gtrpqm.png"
            }
          ].map((service, i) => (
            <Card key={i} variant="none" padding="none" className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center border-none rounded-none hover:translate-y-0">
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative w-full aspect-video overflow-hidden rounded-2xl sm:rounded-[2rem] mb-6 sm:mb-8 shadow-2xl border border-black/10 group">
                  <OptimizedImage 
                    filename={service.img.split('/').pop() || ''} 
                    fallback={service.img}
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <span className="uppercase tracking-[4px] text-[10px] sm:text-xs text-black/40 mb-3 sm:mb-4 block">Service {service.id}</span>
                  <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 text-black leading-tight">{service.title}</h2>
                  <p className="text-lg sm:text-2xl text-black/60 italic">{service.tagline}</p>
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
