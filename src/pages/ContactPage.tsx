import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { Send, CheckCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setLoading(true);
    const path = 'contacts';
    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({ fullName: "", email: "", company: "", message: "" });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setLoading(false);
    }
  };

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
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold">Message Received!</h4>
                  <p className="text-zinc-600">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <Input 
                      label="Full Name" 
                      placeholder="John Doe" 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <Input 
                      label="Email Address" 
                      placeholder="john@company.com" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Input 
                      label="Company" 
                      placeholder="Company Name" 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    <Textarea 
                      label="Message" 
                      placeholder="Tell us about your project..." 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full py-6 shadow-xl" 
                    isLoading={loading}
                  >
                    Submit Inquiry
                    <Send size={20} />
                  </Button>
                </form>
              )}
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
