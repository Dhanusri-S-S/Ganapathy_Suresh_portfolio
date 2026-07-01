import { useState, ChangeEvent, FormEvent } from "react";
import { Phone, MessageSquare, Mail, Map, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ContactFormData } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = formData.subject || `Inquiry from ${formData.fullName}`;
    const emailBody = `Full Name: ${formData.fullName}\nPhone Number: ${formData.phone}\nEmail Address: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoUrl = `mailto:baakisundaram999@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  const contactChannels = [
    {
      icon: Phone,
      label: "Direct Phone Call",
      value: "+91 88700 14248",
      href: "tel:+918870014248",
      cta: "Call Now"
    },
    {
      icon: MessageSquare,
      label: "Instant WhatsApp Chat",
      value: "+91 88700 14248",
      href: "https://wa.me/918870014248",
      cta: "WhatsApp Chat"
    },
    {
      icon: Mail,
      label: "Professional Email",
      value: "baakisundaram999@gmail.com",
      href: "mailto:baakisundaram999@gmail.com",
      cta: "Send Email"
    },
    {
      icon: Map,
      label: "Office Location",
      value: "Coimbatore, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India",
      cta: "Open Map"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-ivory relative border-t border-gold/15">
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
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest tracking-tight">
            Consult With Ganapathy Suresh
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-3" />
          <p className="font-sans text-sm text-forest/75 max-w-xl mx-auto font-light leading-relaxed">
            Reach out directly for property verifications, layout queries, construction counseling, or investment discussions.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contact Info Channels */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between" id="contact-channels-panel">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-forest text-left">
                Direct Inquiry Lines
              </h3>
              <p className="font-sans text-sm text-forest/80 leading-relaxed text-left font-light">
                Feel free to utilize any of the following professional channels to reach Ganapathy Suresh. Most direct calls and WhatsApp messages receive a response within an hour.
              </p>

              {/* Channels list */}
              <div className="space-y-4" id="contact-methods-list">
                {contactChannels.map((channel, idx) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-gold/20 rounded-xl p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-2 hover:border-forest/30 transition-all group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-forest/5 border border-gold/15 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5 text-gold group-hover:text-white" />
                        </div>
                        <div className="text-left">
                          <span className="font-sans text-[10px] uppercase text-gold-dark tracking-wider block font-semibold">
                            {channel.label}
                          </span>
                          <span className="font-sans text-sm font-bold text-forest block mt-0.5 select-all">
                            {channel.value}
                          </span>
                        </div>
                      </div>

                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center space-x-1 border border-forest/25 hover:bg-forest hover:text-white text-forest px-3.5 py-1.5 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 w-full sm:w-auto"
                      >
                        <span>{channel.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Note Widget with mini profile photo */}
            <div className="bg-white border border-gold/20 rounded-2xl p-6 shadow-2xs mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gold">
                  <img
                    src="/profile.jpg"
                    alt="Ganapathy Suresh Profile Small"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-forest">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>Business Hours</span>
                  </div>
                  <span className="font-sans text-xs text-forest/70 leading-relaxed block font-light">
                    Monday to Saturday, 9:00 AM to 7:00 PM IST.<br />
                    Available across Coimbatore &amp; wider Tamil Nadu.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Responsive Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-sm" id="contact-form-panel">
            <h3 className="font-serif text-2xl font-bold text-forest text-left mb-6">
              Write an Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
              {/* Row 1: Full Name */}
              <div className="text-left">
                <label htmlFor="fullName" className="font-sans text-xs uppercase font-semibold text-gold-dark tracking-widest block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Swaminathan Krishnan"
                  className="w-full bg-ivory/40 border border-gold/30 rounded-lg px-4 py-3 text-sm text-forest placeholder-forest/40 outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all font-sans"
                />
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label htmlFor="phone" className="font-sans text-xs uppercase font-semibold text-gold-dark tracking-widest block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-ivory/40 border border-gold/30 rounded-lg px-4 py-3 text-sm text-forest placeholder-forest/40 outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all font-sans"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="email" className="font-sans text-xs uppercase font-semibold text-gold-dark tracking-widest block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. client@example.com"
                    className="w-full bg-ivory/40 border border-gold/30 rounded-lg px-4 py-3 text-sm text-forest placeholder-forest/40 outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all font-sans"
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="text-left">
                <label htmlFor="subject" className="font-sans text-xs uppercase font-semibold text-gold-dark tracking-widest block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Plot Purchase Inquiry at Karanampettai"
                  className="w-full bg-ivory/40 border border-gold/30 rounded-lg px-4 py-3 text-sm text-forest placeholder-forest/40 outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all font-sans"
                />
              </div>

              {/* Row 4: Message */}
              <div className="text-left">
                <label htmlFor="message" className="font-sans text-xs uppercase font-semibold text-gold-dark tracking-widest block mb-2">
                  Detailed Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your requirements, preferred locations, budget, or consulting needs..."
                  className="w-full bg-ivory/40 border border-gold/30 rounded-lg px-4 py-3 text-sm text-forest placeholder-forest/40 outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-all font-sans resize-none"
                />
              </div>

              {/* Submission Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest hover:bg-forest-dark disabled:bg-forest/50 text-ivory py-3.5 rounded-lg font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center space-x-2"
                id="submit-form-button"
              >
                <span>{isSubmitting ? "Drafting Mail..." : "Submit Inquiry via Email"}</span>
              </motion.button>
            </form>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
