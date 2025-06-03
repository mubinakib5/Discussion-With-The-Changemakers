import { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Why from "../components/sections/Why";
import Timeline from "../components/sections/Timeline";
import Participate from "../components/sections/Participate";
import Sponsors from "../components/sections/Sponsors";
import Team from "../components/sections/Team";
import Gallery from "../components/sections/Gallery";
import News from "../components/sections/News";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import SEO from "../components/common/SEO";
import StructuredData from "../components/common/StructuredData";

const HomePage = () => {
  const [currentUrl, setCurrentUrl] = useState("https://discussionwiththechangemakers.com");
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);
  return (
    <>
      <SEO 
        title="Home"
        description="Discussion with the Changemakers is a youth-driven platform empowering Chattogram's youth to collaborate with city leaders on urban challenges."
        keywords="DWC, Changemakers, youth empowerment, urban development, Chattogram, city leaders, innovation, collaboration"
      />
      <StructuredData 
        type="event"
        data={{
          name: "Discussion with the Changemakers Chapter 02",
          startDate: "2025-07-01",
          endDate: "2025-07-17",
          location: {
            name: "Hotel Agrabad",
            addressLocality: "Chattogram",
            addressRegion: "Chattogram",
            addressCountry: "Bangladesh"
          },
          image: "/images/dwc-event.jpg",
          description: "Discussion with the Changemakers Chapter 02 is a youth-driven platform that empowers young people to address real-world urban challenges through innovation, dialogue, and collaboration with city leaders.",
          organizer: {
            name: "Decor's Digital",
            url: "https://discussionwiththechangemakers.com"
          }
        }}
      />
      <Hero />
      <About />
      <Why />
      <Timeline />
      <Participate />
      <Sponsors />
      <Team />
      <Gallery />
      <News />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
