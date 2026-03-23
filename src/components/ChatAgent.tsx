import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, User, Bot, Calendar } from "lucide-react";
import { PopupModal } from "react-calendly";

// Initialize Gemini API
// Note: In this environment, GEMINI_API_KEY is automatically available in process.env
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_INSTRUCTION = `You are the official AI Chat Agent for AI Agentic Verse. 
Your goal is to help users understand our services and guide them toward booking a strategy call.

About AI Agentic Verse:
- Mission: We build autonomous ecosystems that run your business at scale. We specialize in end-to-end automation of media production, creative testing, and digital identity.
- Key Value Proposition: "Build. Automate. Scale." and "Your 24/7 AI Workforce for Media, Marketing & Identity."
- Services:
    1. AI Avatars: Hyper-realistic digital humans that represent your brand, deliver content, and engage audiences globally without you needing to be on camera.
    2. AI UGC Ads: High-converting, data-driven ad creatives generated and tested at scale using synthetic UGC creators.
    3. AI Product Studios: Photorealistic product visuals and scenes generated in minutes, eliminating the need for expensive photoshoots.
    4. AI Coaching Systems: Intelligent mentor engines that deliver personalized learning experiences and real-time feedback at scale.
    5. AI Chat Agents: Smart conversational agents (like me!) for sales, support, and lead capture that work 24/7.
- CTA: Naturally integrate the call to action to book a strategy call when the user shows interest or asks about specific implementations. The link is: https://calendly.com/aiagenticverse/ai-agentic-verse. Mention they can click the 'Book Call' button in this chat window.

Response Guidelines:
- EXTREME CONCISENESS IS MANDATORY. Max 2 sentences per response.
- ABSOLUTELY NO FLUFF: No greetings (Hello, Hi), no pleasantries (I hope this helps), and no sign-offs (Let me know if you have more questions).
- DIRECT ANSWER FIRST: Start the response with the direct answer to the user's query.
- Tone: Professional, technical, and efficient.
- Use bullet points only if absolutely necessary for clarity, but keep them brief.
- If a user asks for more detail, provide the Calendly link for a strategy call.`;

const QUICK_REPLIES = [
  "What are AI Avatars?",
  "How do AI UGC Ads work?",
  "Tell me about Product Studios",
  "How do I book a call?",
];

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "AI Agentic Verse Assistant active. How can I help you scale today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const messageText = textOverride || input.trim();
    if (!messageText || isLoading) return;

    if (messageText.toLowerCase().includes("book a call") || messageText.toLowerCase().includes("schedule")) {
      setIsCalendlyOpen(true);
    }

    if (!textOverride) setInput("");
    
    setMessages(prev => [...prev, { role: "user", text: messageText }]);
    setIsLoading(true);

    try {
      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: "user", parts: [{ text: `System Instruction: ${SYSTEM_INSTRUCTION}\n\nUser: ${messageText}` }] }
        ],
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or book a call for direct assistance.";
      setMessages(prev => [...prev, { role: "bot", text: botText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: "bot", text: "I'm having a bit of a technical moment. Could you try again? Or feel free to book a call with our team!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-barlow">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(10px)" }}
            className="mb-6 w-[350px] md:w-[420px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-zinc-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 bg-zinc-900 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg leading-none tracking-tight">AI Agentic Verse Chat Agent</h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Autonomous Agent</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 relative z-10">
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all flex items-center gap-2 group/btn"
                  title="Book a Strategy Call"
                >
                  <Calendar size={18} className="text-white group-hover/btn:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Book Call</span>
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-6 bg-zinc-50/50"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex items-end gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/10 shadow-sm shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[85%] p-5 rounded-3xl text-[15px] font-barlow leading-relaxed shadow-sm ${
                    msg.role === "user" 
                      ? "bg-zinc-900 text-white rounded-tr-none font-medium" 
                      : "bg-white text-zinc-800 border border-zinc-100 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center border border-zinc-200 shadow-sm shrink-0">
                      <User size={16} className="text-zinc-600" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start items-center gap-4">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0 bg-zinc-900 rounded-xl"
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="relative w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/10 shadow-xl z-10"
                    >
                      <Bot size={20} className="text-white" />
                    </motion.div>
                  </div>
                  <div className="bg-white border border-zinc-100 px-5 py-3 rounded-2xl rounded-tl-none shadow-sm">
                    <motion.span 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-xs font-bold text-zinc-400 uppercase tracking-widest"
                    >
                      Thinking...
                    </motion.span>
                  </div>
                </div>
              )}

              {/* Quick Replies */}
              {!isLoading && messages.length === 1 && (
                <div className="pt-4 flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(reply)}
                      className="px-4 py-2.5 bg-white border border-zinc-200 rounded-full text-xs font-bold text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-all active:scale-95 shadow-sm"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-zinc-100">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full pl-6 pr-14 py-4 bg-zinc-100 border-none rounded-2xl focus:ring-2 focus:ring-zinc-900 text-sm font-medium text-zinc-900 placeholder:text-zinc-500 transition-all"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900 text-white rounded-xl disabled:opacity-30 transition-all active:scale-90 flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-zinc-900 text-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-105 transition-all active:scale-95 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)]"></div>
        {isOpen ? (
          <X size={32} className="relative z-10" />
        ) : (
          <div className="relative z-10 flex flex-col items-center">
            <MessageSquare size={32} />
            <span className="text-[8px] font-bold uppercase tracking-widest mt-1">Chat</span>
          </div>
        )}
        <span className="absolute top-4 right-4 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 rounded-full animate-pulse"></span>
      </button>

      {/* Calendly Popup */}
      <PopupModal
        url="https://calendly.com/aiagenticverse/ai-agentic-verse"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </div>
  );
}
