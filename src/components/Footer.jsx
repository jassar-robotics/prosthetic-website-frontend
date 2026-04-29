import { Link } from "react-router-dom";
import { Hand, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/50">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex md:justify-between gap-16 flex-wrap mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            
          <Link to="/" className="flex items-center gap-3 group">
            
            <span className="text-2xl font-bold text-white font-liches">
              Open<span className="text-amber-400 font-liches">{" "+"Hand"}</span>
            </span>
          </Link>
            <p className="text-sm text-zinc-500 leading-relaxed text-left mt-4">
              An open-source prosthetic hand project. Built by many, owned by all.
            </p>
          </div>

          {/* Project */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Project
            </h4>
            <div className="space-y-3 flex flex-col justify-center items-start">
              <Link to="/projects" className="block text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                All Projects
              </Link>
              <Link to="/contributors" className="block text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                Contributors
              </Link>
              <a href="https://github.com/OpenHand" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Learn */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Learn
            </h4>
            <div className="space-y-3 text-start">
              <Link to="/about" className="block text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                About Us
              </Link>
              <Link to="/about#philosophy" className="block text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                Philosophy
              </Link>
              <Link to="/policies" className="block text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                Policies
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-start">
              <Link to="/contact" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                <Mail className="w-3.5 h-3.5" /> Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} OpenHand Project. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
