import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917868992281?text=Hello%20Ganapathy%20Suresh,%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20consulting%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ganapathy Suresh on WhatsApp"
      title="Chat with Ganapathy Suresh"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: [1, 1.08, 1],
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 2,
      }}
      whileHover={{
        scale: 1.15,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-all duration-300"
    >
      <MessageCircle
        className="w-8 h-8 text-white"
        strokeWidth={2.3}
      />
    </motion.a>
  );
}
