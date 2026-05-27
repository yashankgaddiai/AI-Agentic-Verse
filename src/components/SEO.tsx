import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: object;
}

export default function SEO({ 
  title = "AI Agentic Verse | Build. Automate. Scale.", 
  description = "Your 24/7 AI Workforce for Media, Marketing & Identity. We build autonomous ecosystems that run your business at scale.",
  keywords = "AI, Automation, Media Production, AI Avatars, UGC Ads, Digital Identity",
  image = "https://res.cloudinary.com/dsqmjneyd/image/upload/v1775484147/be44d117-6a09-4c5a-a56e-533a3672b3c8_isjvmg.jpg",
  url = "https://aiagenticverse.com/",
  schema
}: SEOProps) {
  const siteTitle = title.includes("AI Agentic Verse") ? title : `${title} | AI Agentic Verse`;
  const canonicalUrl = url.endsWith("/") ? url : `${url}/`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
