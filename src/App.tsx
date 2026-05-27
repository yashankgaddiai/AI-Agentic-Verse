import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorkInMotionPage = lazy(() => import("./pages/WorkInMotionPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AdminMediaPage = lazy(() => import("./pages/AdminMediaPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin" aria-label="Loading page" />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/work-in-motion" element={<WorkInMotionPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin/media" element={<AdminMediaPage />} />
              <Route path="/privacy" element={<LegalPage type="privacy" />} />
              <Route path="/terms" element={<LegalPage type="terms" />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
