import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

interface LegalPageProps {
  type: "privacy" | "terms";
}

const content = {
  privacy: {
    title: "Privacy Policy",
    description: "How AI Agentic Verse handles contact inquiries, scheduling information, and website analytics.",
    sections: [
      ["Information We Collect", "We collect the details you submit through forms, scheduling tools, or direct email, such as name, email address, company, and project message."],
      ["How We Use Information", "We use submitted information to respond to inquiries, schedule strategy calls, improve our services, and maintain operational records."],
      ["Third-Party Services", "The website may use Firebase, Calendly, Cloudinary, Vercel Blob, and hosting analytics to operate forms, scheduling, assets, and performance monitoring."],
      ["Data Requests", "To request correction or deletion of submitted information, email hello@aiagenticverse.com."],
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "Website terms for AI Agentic Verse visitors and prospective clients.",
    sections: [
      ["Website Use", "This website is provided for informational and inquiry purposes. Do not misuse forms, APIs, or hosting resources."],
      ["Service Discussions", "Submitting a form or booking a call does not create a client relationship or guarantee service availability."],
      ["Intellectual Property", "Brand assets, copy, visuals, and website content belong to AI Agentic Verse or their respective licensors."],
      ["Contact", "Questions about these terms can be sent to hello@aiagenticverse.com."],
    ],
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const page = content[type];

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <SEO title={page.title} description={page.description} url={`https://aiagenticverse.com/${type}`} />
      <NavBar />
      <main className="pt-32 sm:pt-44 pb-24 px-5 sm:px-8 max-w-4xl mx-auto">
        <h1 className="font-headline font-bold text-4xl sm:text-6xl uppercase tracking-tight mb-6">{page.title}</h1>
        <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed mb-14">{page.description}</p>
        <div className="space-y-10">
          {page.sections.map(([heading, body]) => (
            <section key={heading} className="border-t border-outline pt-8">
              <h2 className="font-headline font-bold text-2xl mb-4">{heading}</h2>
              <p className="text-zinc-600 leading-relaxed">{body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
