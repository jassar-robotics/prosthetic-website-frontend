import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Lottie from "lottie-react";
import CatAnimation from "@/data/Cat.json";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.04)_0%,_transparent_50%)]" />

      <div className="relative text-center px-4">
        <div className="w-64 h-64 mx-auto mb-2">
          <Lottie animationData={CatAnimation} className="w-full h-full" loop={true} />
        </div>

        <div className="text-6xl font-bold text-zinc-800 select-none mb-3">
          404
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">
          Page not found
        </h1>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/20 transition-all"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-xl hover:border-zinc-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}