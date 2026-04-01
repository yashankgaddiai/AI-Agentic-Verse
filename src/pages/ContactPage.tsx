import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface font-general selection:bg-on-surface selection:text-surface">
      <NavBar />
      <main className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8 md:px-[120px] max-w-7xl mx-auto">
        <header className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8 sm:mt-12">
          <div className="max-w-2xl">
            <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[0.9] text-on-surface uppercase mb-6">
              Connect with <span className="opacity-40">intelligence</span>
            </h1>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-black/[0.02] dark:bg-white/[0.02] rounded-[3rem] p-4 md:p-8 border border-black/5 dark:border-white/5 overflow-hidden">
            <h2 className="font-bold text-3xl uppercase tracking-tight mb-8 px-4">Schedule a Call</h2>
            <div className="rounded-[2rem] overflow-hidden bg-white">
              <InlineWidget 
                url="https://calendly.com/aiagenticverse/ai-agentic-verse" 
                styles={{
                  height: '700px',
                  width: '100%'
                }}
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-[3rem] p-8 md:p-12 border border-black/5 dark:border-white/5">
              <h3 className="font-bold text-2xl uppercase tracking-tight mb-10">Direct Message</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <Input label="Full Name" placeholder="John Doe" type="text" />
                  <Input label="Email Address" placeholder="john@company.com" type="email" />
                  <Input label="Company" placeholder="Company Name" type="text" />
                  <Textarea label="Message" placeholder="Tell us about your project..." />
                </div>
                <Button 
                  className="w-full py-6 shadow-xl" 
                >
                  Submit Inquiry
                  <Send size={20} />
                </Button>
              </form>
            </div>
            <div className="p-12 space-y-8">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Email Us</h4>
                <p className="font-bold text-2xl">hello@aiagenticverse.com</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">Follow Us</h4>
                <div className="flex gap-6">
                  {['Twitter', 'LinkedIn', 'Instagram'].map(s => (
                    <a key={s} href="#" className="font-bold text-sm uppercase tracking-widest text-black/60 dark:text-white/60 hover:text-on-surface transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
