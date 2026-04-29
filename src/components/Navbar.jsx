import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Hand } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/contributors", label: "Contributors" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-amber-500/10 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            
            <span className="text-2xl font-bold text-white font-liches">
              Open<span className="text-amber-400 font-liches">{" "+"Hand"}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-amber-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400" />
                  )} */}
                </Link>
              );
            })}
            {/* <Link
              to="/projects"
              className="ml-4 px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 rounded-xl hover:shadow-lg hover:shadow-amber-500/25 active:scale-95 transition-all duration-300"
            >
              Start Building
            </Link> */}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-amber-400/10 text-amber-400"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* <Link
            to="/projects"
            className="block mt-3 px-4 py-3 text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 rounded-xl text-center"
          >
            Start Building
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
