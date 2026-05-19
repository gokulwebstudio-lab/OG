import { motion } from "framer-motion";

export function Team() {
  const members = [
    { name: "Ganeshan", initial: "G", gradient: "var(--accent-cyan), var(--accent-blue)" },
    { name: "Ganesh Raja Kumaran", initial: "GR", gradient: "var(--accent-orange), var(--accent-gold)" },
    { name: "Gokul", initial: "GK", gradient: "var(--accent-blue), var(--accent-cyan)" },
    { name: "Kutty Siva Kumar", initial: "KS", gradient: "var(--accent-gold), var(--accent-orange)" },
    { name: "Siva Kumar", initial: "SK", gradient: "var(--accent-cyan), var(--accent-orange)" },
    { name: "Mari Kamalesh", initial: "MK", gradient: "var(--accent-blue), var(--accent-gold)" },
    { name: "Sukul", initial: "SU", gradient: "var(--accent-orange), var(--accent-blue)" },
  ];

  return (
    <div id="team" className="w-full py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white">The OG Gang</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center group hover:scale-[1.03] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform"
                style={{ background: `linear-gradient(135deg, ${member.gradient})` }}
              >
                {member.initial}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
