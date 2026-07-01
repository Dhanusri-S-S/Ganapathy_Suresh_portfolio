import { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "properties", label: "Properties" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F2]/95 backdrop-blur-md shadow-md border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Lockup */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
            id="brand-logo"
          >
            <Logo size={42} className="group-hover:scale-105 shadow-sm shrink-0" />
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#1F4D3A] block leading-tight">
                Ganapathy Suresh
              </span>
              <span className="font-sans text-[10px] tracking-widest text-gold-dark uppercase block font-medium">
                Real Estate &amp; Construction Consultant
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm tracking-wider uppercase font-medium transition-colors duration-200 relative py-1 cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#1F4D3A] font-semibold"
                    : "text-[#1F4D3A]/75 hover:text-[#1F4D3A]"
                }`}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Call-to-Action Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918870014248"
              className="flex items-center space-x-2 border border-[#1F4D3A] hover:bg-[#1F4D3A] hover:text-[#FAF8F2] text-[#1F4D3A] px-4 py-2 rounded-full font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm"
              id="header-cta-phone"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 88700 14248</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1F4D3A] hover:text-gold-dark p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[#FAF8F2]/98 border-t border-gold/10 shadow-lg absolute top-full left-0 w-full transition-all duration-300 py-4 px-6 space-y-3 z-40 backdrop-blur-lg"
          id="mobile-dropdown-menu"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left font-sans text-base tracking-wider uppercase font-medium py-2 px-3 rounded-md transition-all ${
                activeSection === item.id
                  ? "bg-[#1F4D3A] text-[#FAF8F2] font-semibold shadow-sm"
                  : "text-[#1F4D3A] hover:bg-[#FAF8F2]/60 hover:text-gold-dark"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-gold/20 space-y-3">
            <a
              href="tel:+918870014248"
              className="flex items-center justify-center space-x-2 bg-[#1F4D3A] hover:bg-[#123023] text-[#FAF8F2] w-full py-3 rounded-lg font-sans text-sm tracking-wider uppercase font-semibold transition-colors duration-200 shadow-md"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call +91 88700 14248</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
