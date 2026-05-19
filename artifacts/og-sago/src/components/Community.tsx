import { motion } from "framer-motion";
import { FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";

export function Community() {
  return (
    <div id="community" className="w-full py-24 bg-[#050A14] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-pulse opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">Join the OG Sago Gang 🤝</h2>
          <p className="text-[#A0ADB8] font-poppins text-lg md:text-xl mb-10">WhatsApp community for real ones only.</p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <SocialIcon icon={<FaYoutube />} href="https://youtube.com/@ogsago" color="#FF0000" />
            <SocialIcon icon={<FaWhatsapp />} href="https://chat.whatsapp.com/E65qNuhS68NFacmpE8y3oS" color="#25D366" />
            <SocialIcon icon={<FaInstagram />} href="#" color="#E1306C" />
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://chat.whatsapp.com/E65qNuhS68NFacmpE8y3oS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-[#FF6B2B] text-white font-bold text-xl glow-orange"
          >
            Join WhatsApp Community
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

function SocialIcon({ icon, href, color }: { icon: React.ReactNode, href: string, color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
      style={{ boxShadow: `0 0 0 0 ${color}` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${color}80`;
        e.currentTarget.style.color = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.color = 'white';
      }}
    >
      {icon}
    </a>
  );
}
