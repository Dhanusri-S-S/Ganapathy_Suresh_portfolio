import { motion } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, MapPin, Award } from "lucide-react";
import InteractiveBackground3D from "./InteractiveBackground3D";

interface HeroProps {
  onExploreProperties: () => void;
  onContact: () => void;
}

export default function Hero({ onExploreProperties, onContact }: HeroProps) {
  const stats = [
    { value: "28+", label: "Years Experience" },
    { value: "230+", label: "Happy Clients" },
    { value: "100%", label: "DTCP Approved" },
    { value: "58+", label: "Premium Layouts" },
  ];

  const servicesBadges = [
    "Real Estate Consultant",
    "Construction Consultant",
    "Financial Services",
    "DTCP Approved Projects",
    "Property Investment",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-ivory"
    >
      {/* 3D Constellation Background */}
      <InteractiveBackground3D />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8"
      >
        
        {/* Left Column: Core Copy */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left" id="hero-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-forest/5 border border-gold/30 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-forest w-fit"
          >
            <ShieldCheck className="w-4.5 h-4.5 text-gold" />
            <span>Trusted Professional Consultant</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-forest tracking-tight leading-tight"
            >
              Ganapathy Suresh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl font-serif text-gold-dark italic tracking-wide font-medium"
            >
              Real Estate Consultant, Construction Consultant &amp; Financial Expert
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-forest/80 font-sans text-base sm:text-lg max-w-2xl leading-relaxed font-light"
          >
            Over 28 years of hand-on expertise in identifying prime DTCP approved plots, providing solid construction advisory, and offering high-yield property investment strategies across Coimbatore and wider Tamil Nadu.
          </motion.p>

          {/* Domain Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-2.5 max-w-xl"
            id="hero-badges"
          >
            {servicesBadges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-white/80 backdrop-blur-xs border border-gold/20 text-forest px-3.5 py-1.5 rounded-md text-xs font-medium shadow-2xs font-sans"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* Action Call buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
            id="hero-actions"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreProperties}
              className="flex items-center justify-center space-x-2 bg-forest hover:bg-forest-dark text-ivory px-7 py-3.5 rounded-full font-sans text-sm tracking-wider uppercase font-semibold transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContact}
              className="flex items-center justify-center space-x-2 bg-white/90 border border-gold hover:bg-ivory hover:border-forest text-forest px-7 py-3.5 rounded-full font-sans text-sm tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Free Consultation</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Premium Double-Frame Profile Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative" id="hero-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-[340px] aspect-[4/5] z-10"
          >
            {/* Elegant Outer Gold Border Layer */}
            <div className="absolute -inset-4 border border-gold/30 rounded-2xl transform rotate-2 pointer-events-none" />
            
            {/* Elegant Inner Forest Border Layer */}
            <div className="absolute -inset-2 border border-forest/10 rounded-2xl transform -rotate-1 pointer-events-none" />

            {/* Principal Card Body */}
            <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gold/20 flex flex-col p-4 relative">
              
              {/* Image Frame */}
              <div className="w-full flex-grow rounded-lg overflow-hidden bg-forest/5 border border-gold/10 relative shadow-inner">
                <img
                  src="\portfolio.jpg"
                  alt="Ganapathy Suresh"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Embedded DTCP Gold Stamp Badge */}
                <div className="absolute bottom-3 left-3 bg-forest/90 backdrop-blur-md border border-gold px-2.5 py-1 rounded-md flex items-center space-x-1 text-[10px] uppercase font-semibold text-ivory tracking-wider">
                  <Award className="w-3 h-3 text-gold" />
                  <span>Tamil Nadu Certified</span>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="pt-3 text-center">
                <span className="font-serif text-lg font-bold text-forest tracking-wide block">
                  Ganapathy Suresh
                </span>
                <span className="font-sans text-[11px] text-gold-dark tracking-widest uppercase font-medium mt-0.5 block">
                  Senior Realty Advisor
                </span>
              </div>
            </div>

            {/* Decorative Floating Overlay Widget: Coimbatore Region */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-1/4 bg-ivory border border-gold p-3 rounded-xl shadow-lg flex items-center space-x-2.5 max-w-[170px]"
            >
              <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-forest shrink-0">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <span className="font-sans text-[10px] font-semibold text-gold-dark uppercase tracking-wider block">Coimbatore</span>
                <span className="font-sans text-[11px] font-bold text-forest block">Primary Service Hub</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Row of Statistics (Desktop layout: integrated, Responsive layout: beautiful grid) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 mt-16 lg:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y-0 md:divide-x divide-gold/20 text-center"
          id="hero-stats"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-center px-4 py-2">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest block tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans text-xs sm:text-sm text-gold-dark tracking-wider uppercase font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
