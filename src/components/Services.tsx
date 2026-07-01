import { ComponentType } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import {
  Compass,
  Hammer,
  TrendingUp,
  CheckSquare,
  ShieldAlert,
  FileText,
  MapPin,
  DollarSign,
  Scale,
  Users,
  Map,
  ArrowRight
} from "lucide-react";

// Icon mapping dictionary
const iconMap: Record<string, ComponentType<any>> = {
  Compass,
  Hammer,
  TrendingUp,
  CheckSquare,
  ShieldAlert,
  FileText,
  MapPin,
  DollarSign,
  Scale,
  Users
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ivory relative border-t border-gold/15">
      
      {/* Decorative side accent lines */}
      <div className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-gold/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-32 h-[1px] bg-gradient-to-l from-gold/30 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs font-semibold tracking-widest text-gold-dark uppercase block">
            Expert Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest tracking-tight">
            Consulting &amp; Advisory Services
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
          <p className="font-sans text-sm text-forest/75 max-w-xl mx-auto font-light leading-relaxed">
            Delivering structured, reliable, and expert-level consultations to simplify property acquisitions, architectural development, and regulatory approvals.
          </p>
        </div>

        {/* Bento-like Grid of Services */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          id="services-grid"
        >
          {SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Compass;
            return (
              <motion.div
                key={srv.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white border border-gold/20 rounded-xl p-6 shadow-2xs hover:shadow-md hover:border-forest/40 transition-all duration-300 flex flex-col justify-between group"
                id={`service-card-${srv.id}`}
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-lg bg-forest/5 border border-gold/20 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-ivory transition-colors duration-300 mb-4 shrink-0">
                    <IconComponent className="w-5 h-5 text-gold group-hover:text-ivory transition-colors duration-300" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="font-serif text-lg font-bold text-forest tracking-wide mb-2 group-hover:text-forest text-left">
                    {srv.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="font-sans text-xs text-forest/70 leading-relaxed text-left font-light">
                    {srv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium Tamil Nadu Coverage Banner (Replacing the card requested) */}
        <div className="mt-16 w-full" id="tamilnadu-services-banner">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-forest to-forest-dark border border-gold p-8 sm:p-10 shadow-lg">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ivory/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 z-10 text-left">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center space-x-1.5 bg-gold/15 border border-gold/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gold">
                  <Map className="w-3.5 h-3.5" />
                  <span>Statewide Coverage</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-ivory tracking-wide leading-tight">
                  Our professional services are available across Tamil Nadu.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gold-light leading-relaxed font-light">
                  Whether you are planning a residential development in Chennai, acquiring agricultural land in Trichy, or investing in layouts in Coimbatore, our professional consulting services extend statewide.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gold hover:bg-gold-dark text-forest hover:text-white px-6 py-3 rounded-lg font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-md w-full md:w-auto animate-none"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}
