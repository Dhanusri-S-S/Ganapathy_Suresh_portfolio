import { PROPERTIES } from "../data";
import { MapPin, Phone, MessageSquare, Compass, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Properties() {
  const handleCall = () => {
    window.location.href = "tel:+918870014248";
  };

  const handleWhatsApp = (message: string) => {
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/918870014248?text=${encodedText}`, "_blank");
  };

  const handleGoogleMaps = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="properties" className="py-24 bg-ivory relative border-t border-gold/15">
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
            Premium Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest tracking-tight">
            DTCP Approved Residential Plots
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
          <p className="font-sans text-sm text-forest/75 max-w-xl mx-auto font-light leading-relaxed">
            Acquire pristine residential layouts in Coimbatore's premium growth zones. Verified titles, excellent road access, and clear planning permissions.
          </p>
        </div>

        {/* Properties Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          id="properties-grid"
        >
          {PROPERTIES.map((prop) => (
            <motion.div
              key={prop.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.025, y: -4 }}
              className="bg-white rounded-2xl overflow-hidden border border-gold/20 shadow-sm hover:shadow-lg hover:border-forest/40 transition-all duration-300 flex flex-col h-full group"
              id={`property-card-${prop.id}`}
            >
              {/* Image Frame with zoom hover and absolute badge */}
              <div className="h-60 sm:h-64 overflow-hidden relative bg-forest/5 shrink-0">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* DTCP Approved Badge (Gold / Forest Green) */}
                {prop.isDtcpApproved && (
                  <div className="absolute top-4 right-4 bg-forest/95 backdrop-blur-md border border-gold text-ivory px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest flex items-center space-x-1 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>DTCP Approved</span>
                  </div>
                )}
                
                {/* Location Pill Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-forest border border-gold/30 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                  <MapPin className="w-3 h-3 text-gold" />
                  <span>{prop.location.split(",")[1]?.trim() || "Coimbatore"}</span>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  {/* Property Title */}
                  <h3 className="font-serif text-xl font-bold text-forest tracking-wide text-left">
                    {prop.title}
                  </h3>
                  
                  {/* Detailed Description */}
                  <p className="font-sans text-xs sm:text-sm text-forest/75 leading-relaxed text-left font-light min-h-[72px]">
                    {prop.description}
                  </p>

                  {/* Metadata Specs Panel */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-gold/15 bg-ivory/30 px-2 rounded-lg">
                    <div className="text-left">
                      <span className="font-sans text-[10px] uppercase text-gold-dark tracking-widest block">Available Sizes</span>
                      <span className="font-sans text-xs font-semibold text-forest">{prop.size || "1200+ Sq.Ft"}</span>
                    </div>
                    <div className="text-left">
                      <span className="font-sans text-[10px] uppercase text-gold-dark tracking-widest block">Investment Tier</span>
                      <span className="font-sans text-xs font-semibold text-forest">{prop.price || "Contact for Quote"}</span>
                    </div>
                  </div>
                </div>

                {/* Integrated Action Buttons */}
                <div className="pt-6 space-y-2.5">
                  {/* Top action: Google Maps */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleGoogleMaps(prop.googleMapsUrl)}
                    className="w-full flex items-center justify-center space-x-2 bg-ivory hover:bg-forest text-forest hover:text-white border border-gold/30 hover:border-forest py-2.5 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-200 cursor-pointer"
                    aria-label={`View ${prop.title} on Google Maps`}
                  >
                    <Compass className="w-4 h-4 shrink-0" />
                    <span>View Layout Location</span>
                  </motion.button>

                  {/* Bottom double actions: Call & WhatsApp */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleCall}
                      className="flex items-center justify-center space-x-1.5 bg-forest hover:bg-forest-dark text-ivory py-2.5 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-colors duration-200 cursor-pointer"
                      aria-label="Call Ganapathy Suresh"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Advisor</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleWhatsApp(prop.whatsappMessage)}
                      className="flex items-center justify-center space-x-1.5 bg-white border border-forest hover:bg-forest hover:text-ivory text-forest py-2.5 rounded-lg font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-200 cursor-pointer"
                      aria-label="Message on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-gold" />
                      <span>WhatsApp</span>
                    </motion.button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
