import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Videos() {
  const featured = {
    url: "https://youtu.be/Kse8wO0J7Jc",
    thumb: "/featured-thumbnail.png",
    title: "Thirukkurungudi Nambi Kovil — First Vlog"
  };

  const shorts = [
    { url: "https://youtube.com/shorts/1W5hfagrItw", thumb: "https://img.youtube.com/vi/1W5hfagrItw/maxresdefault.jpg", title: "OG Moment #1" },
    { url: "https://youtube.com/shorts/mCC9oYBNW5E", thumb: "https://img.youtube.com/vi/mCC9oYBNW5E/maxresdefault.jpg", title: "OG Moment #2" },
    { url: "https://youtube.com/shorts/MKbfFexvjqc", thumb: "https://img.youtube.com/vi/MKbfFexvjqc/maxresdefault.jpg", title: "OG Moment #3" },
  ];

  return (
    <div id="videos" className="w-full py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">Latest Vibes 🎬</h2>
          <p className="text-[#A0ADB8] font-poppins text-lg">Catch up on the latest from OG Sago</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Featured Video */}
          <a 
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative lg:w-[60%] rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
          >
            <div className="aspect-video relative">
              <img src={featured.thumb} alt={featured.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FF6B2B] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-white/10">
              <h3 className="text-xl font-bold text-white">{featured.title}</h3>
            </div>
          </a>

          {/* Shorts */}
          <div className="lg:w-[40%] flex flex-col gap-6">
            <div className="grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-4 h-full">
              {shorts.map((short, i) => (
                <a 
                  key={i}
                  href={short.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-xl overflow-hidden glass-card transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                >
                  <div className="aspect-[9/16] lg:aspect-[21/9] relative">
                    <img src={short.thumb} alt={short.title} loading="lazy" className="w-full h-full object-cover lg:object-[center_20%]" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF6B2B] flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 lg:p-3 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-sm font-bold text-white truncate">{short.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com/@ogsago"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full border border-[#00F5FF] text-[#00F5FF] font-semibold hover:bg-[#00F5FF]/10 transition-colors"
          >
            View All Videos
          </a>
        </div>
      </div>
    </div>
  );
}
