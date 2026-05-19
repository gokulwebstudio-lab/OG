import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const headline = "Fun • Chill • Timepass".split(" ");

  return (
    <div id="top" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#050A14]">
      {/* Backgrounds */}
      <div className="absolute inset-0 mesh-bg" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
          }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6"
        >
          {headline.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-baloo font-bold text-white drop-shadow-lg"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-2xl text-[#A0ADB8] font-poppins max-w-2xl mb-10"
        >
          Tamil-la comedy, chill vibes, real friendships — OG Sago da 🔥
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full bg-[#FF6B2B] text-white font-semibold glow-orange hover:scale-105 transition-all"
          >
            Watch Videos
          </button>
          <a
            href="https://youtube.com/@ogsago"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#00F5FF] text-[#00F5FF] font-semibold hover:bg-[#00F5FF]/10 hover:scale-105 transition-all"
          >
            Subscribe
          </a>
          <a
            href="https://chat.whatsapp.com/E65qNuhS68NFacmpE8y3oS"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[#00F5FF] text-[#00F5FF] font-semibold hover:bg-[#00F5FF]/10 hover:scale-105 transition-all"
          >
            Join Community
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>
    </div>
  );
}
