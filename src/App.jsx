import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BackToTop from "./components/common/BackToTop";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import Gallery from "./components/sections/Gallery";
import Hero from "./components/sections/Hero";
import News from "./components/sections/News";
import Participate from "./components/sections/Participate";
import Sponsors from "./components/sections/Sponsors";
import Team from "./components/sections/Team";
import Timeline from "./components/sections/Timeline";
import Why from "./components/sections/Why";
import HomePage from "./pages/HomePage";
import DetailedOverview from "./pages/DetailedOverview";
import WhyParticipate from "./pages/WhyParticipate";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailed-overview" element={<DetailedOverview />} />
          <Route path="/why-participate" element={<WhyParticipate />} />
        </Routes>
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
