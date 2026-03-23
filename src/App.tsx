import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorkInMotionPage from "./pages/WorkInMotionPage";
import ContactPage from "./pages/ContactPage";
import AdminMediaPage from "./pages/AdminMediaPage";
import ChatAgent from "./components/ChatAgent";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work-in-motion" element={<WorkInMotionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/media" element={<AdminMediaPage />} />
      </Routes>
      <ChatAgent />
    </Router>
  );
}
