import React from "react";

export function Marquee() {
  const row1 = ["Comedy 😂", "Friendship 🤝", "Timepass 😎", "Chill Vibes 🌊", "Tamil Energy ⚡", "Real Moments 🎬", "Fun Always 🎉", "No Script 🎯"];
  const row2 = ["OG Gang 🔥", "Entertainment 🎭", "Authentic 💯", "Gen-Z Culture 🚀", "Good Times ✨", "Tamil Nadu 🌟", "Unfiltered 🎤", "Always Trending 📈"];

  return (
    <div className="w-full py-16 bg-[#050A14] overflow-hidden flex flex-col gap-6">
      {/* Row 1 (Right to Left technically, or left to right. Spec says Row 1 (→), meaning moves right.
          Wait, marqueeLeft means it moves left. Let's make one left, one right. */}
      
      <div className="flex w-[200vw] animate-marquee-left">
        {[...row1, ...row1, ...row1].map((text, i) => (
          <div key={i} className="flex-shrink-0 px-4">
            <div className="glass-card px-6 py-3 rounded-full text-white font-medium text-lg whitespace-nowrap hover:glow-cyan transition-shadow cursor-default">
              {text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-[200vw] animate-marquee-right" style={{ transform: "translateX(-50%)" }}>
        {[...row2, ...row2, ...row2].map((text, i) => (
          <div key={i} className="flex-shrink-0 px-4">
            <div className="glass-card px-6 py-3 rounded-full text-white font-medium text-lg whitespace-nowrap hover:glow-orange transition-shadow cursor-default">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
