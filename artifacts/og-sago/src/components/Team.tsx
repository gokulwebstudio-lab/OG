import { motion } from "framer-motion";

export function Team() {
  const members = [
    { name: "Member 1", initial: "M1", gradient: "var(--accent-cyan), var(--accent-blue)" },
    { name: "Member 2", initial: "M2", gradient: "var(--accent-orange), var(--accent-gold)" },
    { name: "Member 3", initial: "M3", gradient: "var(--accent-blue), var(--accent-cyan)" },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
