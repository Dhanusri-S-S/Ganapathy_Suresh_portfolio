import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-forest text-ivory relative overflow-hidden">
      
      {/* Visual background textures */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-ivory/5 rounded-full blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        
        {/* Quote Marker icon */}
        <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-ivory/5 text-gold mx-auto mb-8">
          <Quote className="w-5 h-5" />
        </div>

        {/* Section Heading */}
        <div className="space-y-3 mb-12">
          <span className="font-sans text-xs font-semibold tracking-widest text-gold uppercase block">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ivory tracking-tight">
            Trusted by Landowners &amp; Investors
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto rounded-full mt-3" />
        </div>

        {/* Carousel Frame */}
        <div className="relative min-h-[260px] flex flex-col justify-center items-center px-4 md:px-12" id="testimonial-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star Rating Grid (Lucide stars, no emojis) */}
              <div className="flex justify-center space-x-1" id="testimonial-stars">
                {Array.from({ length: activeTestimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Comment text */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-ivory/90 leading-relaxed font-light italic max-w-2xl mx-auto">
                "{activeTestimonial.comment}"
              </blockquote>

              {/* Author Credits */}
              <div>
                <cite className="font-serif text-base sm:text-lg font-bold text-gold not-italic block">
                  {activeTestimonial.name}
                </cite>
                <span className="font-sans text-[11px] text-ivory/70 tracking-widest uppercase font-medium mt-1 block">
                  {activeTestimonial.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons (Left/Right Arrows) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 sm:px-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-ivory/20 hover:border-gold bg-ivory/5 hover:bg-ivory/10 flex items-center justify-center text-ivory pointer-events-auto transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-ivory/20 hover:border-gold bg-ivory/5 hover:bg-ivory/10 flex items-center justify-center text-ivory pointer-events-auto transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center space-x-2 mt-8" id="testimonial-indicators">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? "bg-gold w-6" : "bg-ivory/30 hover:bg-ivory/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
