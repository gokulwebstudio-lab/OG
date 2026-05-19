import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("top")}>
            <img src="/og-sago-logo.png" alt="OG SAGO Logo" className="h-10 md:h-12 w-auto object-contain rounded-full" />
            <span className="font-baloo text-xl md:text-2xl font-bold tracking-wide" style={{ textShadow: '0 0 10px rgba(0, 245, 255, 0.5)' }}>
              OG SAGO
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("videos")} className="text-sm font-medium hover:text-[#00F5FF] transition-colors">Videos</button>
            <button onClick={() => scrollTo("about")} className="text-sm font-medium hover:text-[#00F5FF] transition-colors">About</button>
            <button onClick={() => scrollTo("team")} className="text-sm font-medium hover:text-[#00F5FF] transition-colors">Team</button>
            <button onClick={() => scrollTo("community")} className="text-sm font-medium hover:text-[#00F5FF] transition-colors">Community</button>
            <a 
              href="https://youtube.com/@ogsago" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-[#FF6B2B] text-white font-semibold text-sm transition-all hover:scale-105 glow-orange"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#050A14] flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-6 right-6 p-2" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-white" />
            </button>
            <button onClick={() => scrollTo("videos")} className="text-3xl font-baloo font-bold hover:text-[#00F5FF]">Videos</button>
            <button onClick={() => scrollTo("about")} className="text-3xl font-baloo font-bold hover:text-[#00F5FF]">About</button>
            <button onClick={() => scrollTo("team")} className="text-3xl font-baloo font-bold hover:text-[#00F5FF]">Team</button>
            <button onClick={() => scrollTo("community")} className="text-3xl font-baloo font-bold hover:text-[#00F5FF]">Community</button>
            <a 
              href="https://youtube.com/@ogsago" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-[#FF6B2B] text-white font-bold text-xl glow-orange"
            >
              Subscribe
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
