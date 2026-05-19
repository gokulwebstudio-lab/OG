import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ to, label, suffix = "" }: { to: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = to;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <div className="text-3xl md:text-4xl font-baloo font-bold text-[#00F5FF] mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-[#A0ADB8] font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="w-full py-12 bg-[#0A0A0A] relative z-20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter to={4} label="Videos" suffix="" />
          <div className="flex flex-col items-center justify-center p-4">
            <div className="text-3xl md:text-4xl font-baloo font-bold text-[#00F5FF] mb-1">
              Growing 🚀
            </div>
            <div className="text-sm md:text-base text-[#A0ADB8] font-medium uppercase tracking-wider">
              Subscribers
            </div>
          </div>
          <Counter to={1000} label="Community" suffix="+" />
          <Counter to={100} label="Vibes" suffix="/100" />
        </div>
      </div>
    </div>
  );
}
