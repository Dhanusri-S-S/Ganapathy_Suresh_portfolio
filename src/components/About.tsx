import { motion } from "motion/react";
import { Shield, Eye, Target, Award, CheckCircle2 } from "lucide-react";
import { CORE_VALUES } from "../data";

export default function About() {
  const highlights = [
    "DTCP & Local Planning Authority Regulations Expert",
    "Flawless Parent Document History & Legal Verifications",
    "Structural Engineering & Raw Material Selection Guidance",
    "High-Yield Residential Plot Capital Advisory",
  ];

  return (
    <section id="about" className="py-24 bg-ivory relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs font-semibold tracking-widest text-gold-dark uppercase block">
            Executive Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest tracking-tight">
            About Ganapathy Suresh
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Polished profile image framing & direct impact stats */}
          <div className="lg:col-span-5 relative" id="about-image-column">
            <div className="relative w-full max-w-[360px] mx-auto aspect-square">
              {/* Gold backing border box */}
              <div className="absolute inset-0 border-2 border-gold rounded-2xl transform translate-x-4 translate-y-4 pointer-events-none" />
              
              {/* Main image container */}
              <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg border border-gold/10 p-3">
                <img
                  src="/profile.jpg"
                  alt="Ganapathy Suresh Professional Consultation"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Floating Award Certificate Widget */}
              <div className="absolute -left-6 -bottom-6 bg-forest border border-gold text-ivory p-4 rounded-xl shadow-xl flex items-center space-x-3 max-w-[210px]">
                <Award className="w-10 h-10 text-gold shrink-0" />
                <div className="text-left">
                  <span className="font-serif text-lg font-bold text-white block">15+ Years</span>
                  <span className="font-sans text-[10px] text-[#DFCDAF] tracking-wider uppercase font-semibold block">Professional Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6 text-left" id="about-narrative">
            <h3 className="text-2xl font-serif font-bold text-forest tracking-wide">
              Dedicated Advisory Built On Transparency &amp; Market Intelligence
            </h3>
            
            <p className="text-forest/80 font-sans text-base leading-relaxed font-light">
              Ganapathy Suresh is a highly respected property and construction consultant based in Coimbatore, Tamil Nadu. Over the past fifteen years, he has successfully guided private individuals, business owners, and corporate investors through the complexities of real estate acquisition, layout planning, and custom building development.
            </p>

            <p className="text-forest/80 font-sans text-base leading-relaxed font-light">
              His core focus is eliminating transaction risk. By conducting deep, multi-generational verifications of parent deeds, checking land classification registries, and securing absolute town-planning approvals (DTCP), he ensures that every asset acquired under his guidance represents a rock-solid investment.
            </p>

            {/* Checkmark lists of highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4" id="about-highlights">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="font-sans text-sm font-medium text-forest/90">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, and Core Values Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
          id="about-mission-vision-values"
        >
          
          {/* Mission Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-white border border-gold/20 rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-forest/5 border border-gold/30 flex items-center justify-center text-forest mb-5">
              <Target className="w-6 h-6 text-gold" />
            </div>
            <h4 className="text-xl font-serif font-bold text-forest mb-3 text-left">
              Our Mission
            </h4>
            <p className="font-sans text-sm text-forest/75 leading-relaxed text-left font-light">
              To empower clients with deeply researched property solutions, flawless legal titles, and precise construction intelligence that turns capital investments into enduring generational wealth.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-white border border-gold/20 rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-forest/5 border border-gold/30 flex items-center justify-center text-forest mb-5">
              <Eye className="w-6 h-6 text-gold" />
            </div>
            <h4 className="text-xl font-serif font-bold text-forest mb-3 text-left">
              Our Vision
            </h4>
            <p className="font-sans text-sm text-forest/75 leading-relaxed text-left font-light">
              To be the gold standard of real estate advisory in Tamil Nadu, recognized for our absolute integrity, regulatory precision, and commitment to transparent, client-aligned transactions.
            </p>
          </motion.div>

          {/* Core Values Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-white border border-gold/20 rounded-2xl p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl bg-forest/5 border border-gold/30 flex items-center justify-center text-forest mb-5">
              <Shield className="w-6 h-6 text-gold" />
            </div>
            <h4 className="text-xl font-serif font-bold text-forest mb-3 text-left">
              Core Principles
            </h4>
            <ul className="space-y-2.5 text-left">
              {CORE_VALUES.map((val, idx) => (
                <li key={idx} className="text-xs">
                  <span className="font-sans font-bold text-forest block">{val.title}</span>
                  <span className="font-sans text-forest/70 font-light block leading-relaxed mt-0.5">{val.description}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}
