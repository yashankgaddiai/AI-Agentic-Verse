import { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const works = [
  {
    id: "01",
    title: "Ether Genesis",
    category: "Motion Design",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4aU3G6FfKNKoGrqPC461FEEIj_U1g5oFQB_sSuKOUIN6llTyVh0OEc6rUPy2F8ZnyDwpHiQhrb8jeKLdn_G_6hlWE3x6v7x3Q1aEqD45aOGK26tRERZEVn8P2vo3-ji-xPAl9_Ah24ZyEPGYUukaPcq6v4MqmKEK1_2PPSzhKuWUCVEKU8TcxsahJdR38fWtF_BS8pIN83TIe05BbEA3LjSboUv44ZU-6FIHj4h4ibSIxJ1rqDs7hCWqZLeuw992YQuRQ6HARcHc"
  },
  {
    id: "02",
    title: "Digital Identity",
    category: "AI Avatar",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4",
    img: "https://picsum.photos/seed/work2/1200/800"
  },
  {
    id: "03",
    title: "Synthetic UGC",
    category: "Ad Production",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4",
    img: "https://picsum.photos/seed/work3/1200/800"
  },
  {
    id: "04",
    title: "Neural Branding",
    category: "AI Studio",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4",
    img: "https://picsum.photos/seed/work4/1200/800"
  }
];

export default function WorksPage() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <div className="bg-surface text-on-surface font-general selection:bg-on-surface selection:text-surface">
      <NavBar />
      <main className="relative pt-48 pb-32">
        <header className="max-w-7xl mx-auto px-[120px] mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="font-bold text-7xl md:text-9xl tracking-tight leading-[0.9] text-on-surface uppercase">
              Selected <br/>
              <span className="opacity-40">Works</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="font-medium text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-xs">
              Exploring the intersection of autonomous agency and cinematic digital experiences.
            </p>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-[120px] grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work) => (
            <WorkItem key={work.id} work={work} onClick={() => setSelectedWork(work)} />
          ))}
        </section>
      </main>

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setSelectedWork(null)}></div>
          <div className="relative z-10 w-full max-w-6xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            <video autoPlay controls className="w-full h-full object-contain">
              <source src={selectedWork.video} type="video/mp4" />
            </video>
            <button 
              onClick={() => setSelectedWork(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

interface WorkItemProps {
  key?: string;
  work: typeof works[0];
  onClick: () => void;
}

function WorkItem({ work, onClick }: WorkItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
      onClick={onClick}
    >
      <div className="aspect-[16/9] w-full bg-black/[0.03] dark:bg-white/[0.03] rounded-[2rem] overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-2xl border border-black/5 dark:border-white/5">
        <img 
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
          src={work.img} 
          alt={work.title} 
          referrerPolicy="no-referrer"
        />
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={work.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
             <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
           </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-start">
        <div className="space-y-2">
          <span className="font-medium text-sm text-black/40 dark:text-white/40 uppercase tracking-[4px]">{work.id} / {work.category}</span>
          <h2 className="font-bold text-4xl tracking-tight text-on-surface uppercase">{work.title}</h2>
        </div>
      </div>
    </div>
  );
}
