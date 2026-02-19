import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import AiBotAnimation from "@/data/AiBot.json";

export default function FloatingAskButton() {
  const { pathname } = useLocation();

  // Hide on the /ask page itself
  if (pathname === "/ask") return null;

  return (
    <Link
      to="/ask"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Ask AI about OpenHand"
    >
      <div className="relative w-16 h-16 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/50 hover:border-amber-500/30 shadow-2xl shadow-black/40 hover:shadow-amber-500/10 transition-all duration-500 flex items-center justify-center overflow-hidden cursor-pointer group-hover:scale-105 active:scale-95">
        <div className="w-12 h-12">
          <Lottie
            animationData={AiBotAnimation}
            className="w-full h-full"
            loop={true}
          />
        </div>

        {/* Glow ring on hover */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-amber-400/0 group-hover:ring-amber-400/20 transition-all duration-500" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700/50 text-[11px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        Ask AI
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 border-r border-b border-zinc-700/50 rotate-45 -mt-1" />
      </div>
    </Link>
  );
}