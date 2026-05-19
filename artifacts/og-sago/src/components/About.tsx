import { motion } from "framer-motion";

export function About() {
  return (
    <div id="about" className="w-full py-24 bg-[#050A14]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/3 flex justify-center">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-[#00F5FF] p-2 glow-cyan bg-[#0A0A0A]"
          >
            <img src="/og-sago-logo.png" alt="OG Sago" className="w-full h-full rounded-full object-cover" />
          </motion.div>
        </div>

        <div className="md:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-6">Who is OG Sago?</h2>
            
            <div className="space-y-4 text-[#A0ADB8] font-poppins text-base md:text-lg mb-8 leading-relaxed">
              <p>OG Sago started as a bunch of friends who just wanted to have fun on camera. No script. No filter. Just real moments, Tamil vibes, and way too much timepass energy.</p>
              <p>We make the kind of content you watch when you want to feel like you're just chilling with your best friends — no agenda, no cringe, just pure entertainment.</p>
              <p>If you're looking for laughs, relatable moments, and that feeling of hanging out with your crew — you found the right channel da. 🔥</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Tamil Entertainment", "Comedy", "Friendship Vibes", "Gen-Z Content", "Real & Unfiltered"].map((tag, i) => (
                <span key={i} className="glass-card px-4 py-1.5 rounded-full text-sm text-white border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard title="Fun Level" color="#00F5FF" delay={0} />
              <StatCard title="Chill Meter" color="#3B82F6" delay={0.2} />
              <StatCard title="Timepass Index" color="#FF6B2B" delay={0.4} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, color, delay }: { title: string, color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card p-4 rounded-xl"
    >
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 4, delay, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-white">{title}</span>
          <span className="text-xs font-bold" style={{ color }}>100%</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
