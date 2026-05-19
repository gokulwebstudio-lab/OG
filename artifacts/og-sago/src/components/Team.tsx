import { motion } from "framer-motion";

export function Team() {
  const members = [
    { name: "Ganeshan", photo: "/member-ganeshan.png" },
    { name: "Ganesh Raja Kumaran", photo: "/member-ganesh-raja-kumaran.png" },
    { name: "Gokul", photo: "/member-gokul.png" },
    { name: "Kutty Siva Kumar", photo: "/member-kutty-siva-kumar.png" },
    { name: "Siva Kumar", photo: "/member-siva-kumar.png" },
    { name: "Mari Kamalesh", photo: "/member-mari-kamalesh.png" },
    { name: "Sukul", photo: "/member-sukul.png" },
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
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center group hover:scale-[1.03] transition-transform duration-300 hover:shadow-[0_0_24px_rgba(0,245,255,0.2)]"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-[#00F5FF]/30 group-hover:ring-[#00F5FF]/70 transition-all shadow-lg group-hover:scale-105 duration-300">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-base md:text-lg font-poppins font-semibold text-white text-center">{member.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
