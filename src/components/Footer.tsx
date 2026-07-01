import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, Send, Globe, MessageSquare } from "lucide-react";
import Logo from "./Logo";
import { motion } from "motion/react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-ivory border-t border-gold/20 pt-16 pb-8 relative" id="main-footer">
      
      {/* Scroll to Top Floater Button */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScrollTop}
          className="w-10 h-10 rounded-full bg-gold text-forest hover:bg-ivory flex items-center justify-center shadow-lg transition-transform cursor-pointer border border-gold/10"
          aria-label="Scroll back to top of the page"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left mb-12">
          
          {/* Brand Presentation Column */}
          <div className="space-y-4" id="footer-brand">
            <div className="flex items-center space-x-3">
              <Logo size={36} className="shrink-0" />
              <span className="font-serif text-lg font-bold tracking-wide text-white block">
                Ganapathy Suresh
              </span>
            </div>
            
            <p className="font-sans text-xs text-gold-light leading-relaxed font-light">
              Senior property, layout development, and construction consultant with fifteen years of experience delivering secure, DTCP compliant advisory services across Coimbatore and Tamil Nadu.
            </p>

            <div className="flex items-center space-x-3.5 pt-2" id="footer-social-media">
              <a
                href="https://wa.me/918870014248"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-white/10 flex items-center justify-center text-gold transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:baakisundaram999@gmail.com"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-white/10 flex items-center justify-center text-gold transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+918870014248"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:bg-white/10 flex items-center justify-center text-gold transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-4" id="footer-quick-links">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: "home", label: "Home Base" },
                { id: "about", label: "Executive Profile" },
                { id: "services", label: "Our Services" },
                { id: "properties", label: "Premium Layouts" },
                { id: "contact", label: "Connect Offline" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="font-sans text-xs text-ivory/75 hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Offerings Column */}
          <div className="space-y-4" id="footer-services-list">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold">
              Consulting Expertise
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-ivory/75">
              <li>Real Estate Acquisition Guidance</li>
              <li>Civil &amp; Construction Advisory</li>
              <li>Financial Portfolio &amp; Investment Planning</li>
              <li>DTCP Layout Mapping &amp; Compliance</li>
              <li>Parent Deed Verification &amp; Registration</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4" id="footer-contact-info">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold">
              Contact Details
            </h4>
            <ul className="space-y-3 font-sans text-xs text-ivory/75">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="tel:+918870014248" className="hover:text-gold select-all">+91 88700 14248</a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:baakisundaram999@gmail.com" className="hover:text-gold select-all">baakisundaram999@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Globe className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Serving Statewide Tamil Nadu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator and copyright bottom bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[11px] text-ivory/65">
          <div className="text-center md:text-left">
            &copy; {currentYear} Ganapathy Suresh. All Rights Reserved. Fully Certified Property &amp; Legal Consultations.
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-gold">Privacy Policy</span>
            <span>&middot;</span>
            <span className="hover:text-gold">Terms of Engagement</span>
            <span>&middot;</span>
            <span className="hover:text-gold">Local Business Schema</span>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
