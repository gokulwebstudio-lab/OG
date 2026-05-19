import { FaYoutube } from "react-icons/fa";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#03060C] py-12 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-6 text-center">
          <img src="/og-sago-logo.png" alt="OG SAGO Logo" className="h-16 w-auto mx-auto rounded-full mb-4 opacity-80 hover:opacity-100 transition-opacity" />
          <p className="text-[#A0ADB8] font-poppins italic">Entertainment padikama paarunga 😂</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-[#A0ADB8]">
          <button onClick={() => scrollTo("videos")} className="hover:text-white transition-colors">Videos</button>
          <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo("team")} className="hover:text-white transition-colors">Team</button>
          <button onClick={() => scrollTo("community")} className="hover:text-white transition-colors">Community</button>
        </div>

        <div className="mb-8">
          <a href="https://youtube.com/@ogsago" target="_blank" rel="noopener noreferrer" className="text-[#A0ADB8] hover:text-[#FF0000] transition-colors text-2xl">
            <FaYoutube />
          </a>
        </div>

        <div className="text-xs text-[#A0ADB8]/50">
          © {new Date().getFullYear()} OG Sago. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
