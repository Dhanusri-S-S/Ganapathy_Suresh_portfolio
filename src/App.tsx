import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "properties", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Trigger threshold
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-ivory flex flex-col justify-between selection:bg-forest selection:text-ivory">
      {/* Floating Sticky Navigation Bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {/* Hero Banner with Integrated Interactive 3D constellation */}
        <Hero
          onExploreProperties={() => handleNavigate("properties")}
          onContact={() => handleNavigate("contact")}
        />
        
        {/* Narrative & Profile Section */}
        <About />
        
        {/* Domain Offerings Bento-Grid */}
        <Services />
        
        {/* Premium DTCP Approved Layout Inventories */}
        <Properties />
        
        {/* Endorsements Carousel */}
        <Testimonials />
        
        {/* Mailto Contact Forms & Direct Connection Buttons */}
        <Contact />
      </main>

      {/* Corporate footer details */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
