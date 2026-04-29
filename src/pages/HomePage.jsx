import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Hand,
  Users,
  Wrench,
  BookOpen,
  Heart,
  Globe,
  GitBranch,
  Zap,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ContributorCard from "@/components/ContributorCard";
import { projects, getAllContributors, stories } from "@/data/dummyData";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => !p.is_hidden).slice(0, 3);
  const visibleContributors = getAllContributors().slice(0, 4);

  // All visible projects to orbit around the center (cap at 8 so it doesn't get crowded)
  const orbitProjects = projects.filter((p) => !p.is_hidden).slice(0, 8);

  const heroRef = useRef(null);
  const orbitSceneRef = useRef(null);
  const parallaxRef = useRef(null);

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    heroRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  // Mouse parallax on orbit scene
  useEffect(() => {
    const scene = orbitSceneRef.current;
    const parallax = parallaxRef.current;
    if (!scene || !parallax) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const onMove = (e) => {
      const rect = scene.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };
    const animate = () => {
      currentX += (mouseX - currentX) * 0.07;
      currentY += (mouseY - currentY) * 0.07;
      const moveX = currentX * 12;
      const moveY = currentY * 10;
      const rotX = currentY * -6;
      const rotY = currentX * 6;
      parallax.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      rafId = requestAnimationFrame(animate);
    };

    scene.addEventListener("mousemove", onMove);
    scene.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      scene.removeEventListener("mousemove", onMove);
      scene.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative">
      {/* Animations + 3D transforms */}
      <style>{`
        @keyframes orbit3D {
          0%   { transform: rotateX(65deg) rotateZ(0deg); }
          100% { transform: rotateX(65deg) rotateZ(360deg); }
        }
        @keyframes tileCounterSpin {
          0%   { transform: rotateZ(0deg) rotateX(-65deg); }
          100% { transform: rotateZ(-360deg) rotateX(-65deg); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: .3;  transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: .06; transform: translate(-50%, -50%) scale(1.03); }
        }
        @keyframes profileGlow {
          0%, 100% { opacity: .6; transform: scale(1); }
          50%      { opacity: 1;  transform: scale(1.15); }
        }
        @keyframes orbitGlow {
          0%, 100% { opacity: .5; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 1;  transform: translate(-50%, -50%) scale(1.12); }
        }
        .hero-orbit-scene { perspective: 900px; transform-style: preserve-3d; }
        .hero-orbit-parallax { transform-style: preserve-3d; transition: transform .12s ease-out; }
        .hero-orbit-track { transform-style: preserve-3d; animation: orbit3D 25s linear infinite; }
        .orbit-tile { transform-style: preserve-3d; backface-visibility: hidden; }
        .orbit-tile-inner { animation: tileCounterSpin 25s linear infinite; transform-style: preserve-3d; }
        .ring-pulse-1 { animation: ringPulse 4s ease-in-out infinite; }
        .ring-pulse-2 { animation: ringPulse 4s ease-in-out .8s infinite; }
        .ring-pulse-3 { animation: ringPulse 4s ease-in-out 1.6s infinite; }
        .profile-glow-anim { animation: profileGlow 4s ease-in-out infinite; }
        .orbit-glow-anim   { animation: orbitGlow 5s ease-in-out infinite; }
      `}</style>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-screen flex items-center overflow-hidden group/hero"
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/screen.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/screen.mp4" type="video/mp4" />
          <source src="/screen.mp4" type="video/webm" />
        </video>

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/30 to-zinc-950" />

        {/* Color glows on top of dimmed video */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.05)_0%,_transparent_60%)]" />

        {/* Base grid - always visible, dim */}
        <div
          className="absolute inset-0 opacity-[0.2] transition-opacity duration-500"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Spotlight grid - amber, revealed near cursor */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage:
              "radial-gradient(circle 220px at var(--mx, -200px) var(--my, -200px), black 0%, transparent 70%)",
            maskImage:
              "radial-gradient(circle 220px at var(--mx, -200px) var(--my, -200px), black 0%, transparent 70%)",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <AnimatedSection delay={100}>
                <h1 className=" font-liches text-5xl sm:text-6xl lg:text-7xl tracking-normal font-bold text-white leading-[1.05]  mb-6 text-left">
                  Prosthetic that{" "}
                  <span className="relative">
                    <span className="relative z-10 text-transparent bg-clip-text bg-amber-300  to-orange-400  font-liches">
                      grows
                    </span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-amber-400/50 rounded-full -z-0  font-liches" />
                  </span>{" "}
                  with you.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg font-liches text-left">
                  An open, modular prosthetic hand that can be built, repaired,
                  and improved by anyone with basic tools and a 3D printer. Not a
                  product - a shared process.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="group inline-flex items-center gap-3 px-7 py-4 bg-amber-400  text-zinc-950 font-bold rounded-2xl hover:shadow-2xl hover:shadow-amber-500/25 active:scale-[0.98] transition-all duration-300"
                  >
                    I want to build
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-3 px-7 py-4 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-2xl hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
                  >
                    Learn more
                  </Link>
                </div>
              </AnimatedSection>

              {/* Stats row */}
              <AnimatedSection delay={400}>
                <div className="flex gap-8 pt-8 border-t border-zinc-800/50">
                  {[
                    { value: "3", label: "Active Projects" },
                    { value: "6+", label: "Contributors" },
                    { value: "5", label: "Countries Reached" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col justify-start items-start">
                      <h1 className="text-4xl font-bold text-amber-400 ">
                        {stat.value}
                      </h1>
                      <div className="text-xs text-zinc-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right: 3D ORBIT of projects */}
            <AnimatedSection delay={200} direction="left">
              <div className="relative hidden lg:flex items-center justify-center h-[600px]">
                <div
                  ref={orbitSceneRef}
                  className="hero-orbit-scene relative w-[600px] h-[600px]"
                >
                  <div ref={parallaxRef} className="hero-orbit-parallax relative w-full h-full">
                    {/* Glow behind orbit */}
                    <div
                      className="orbit-glow-anim absolute top-1/2 left-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
                      style={{
                        transform: "translate(-50%, -50%)",
                        background:
                          "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
                        filter: "blur(60px)",
                      }}
                    />

                    {/* Pulsing rings */}
                    <div
                      className="ring-pulse-1 absolute top-1/2 left-1/2 w-[420px] h-[420px] rounded-full border border-amber-500/10 pointer-events-none"
                      style={{ transform: "translate(-50%, -50%)" }}
                    />
                    <div
                      className="ring-pulse-2 absolute top-1/2 left-1/2 w-[510px] h-[510px] rounded-full border border-amber-500/10 pointer-events-none"
                      style={{ transform: "translate(-50%, -50%)" }}
                    />
                    <div
                      className="ring-pulse-3 absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-amber-500/10 pointer-events-none"
                      style={{ transform: "translate(-50%, -50%)" }}
                    />

                    {/* Orbit track with project tiles */}
                    <div
                      className="hero-orbit-track absolute top-1/2 left-1/2"
                      style={{ width: 0, height: 0 }}
                    >
                      {orbitProjects.map((project, i) => {
                        const angle = (360 / orbitProjects.length) * i;
                        const radius = 260;
                        // Adjust these field names if your project schema differs
                        const img =
                          project.image ||
                          project.thumbnail ||
                          project.cover_image ||
                          "";
                        const title =
                          project.title || project.name || "Project";
                        return (
                          <Link
                            key={project.id}
                            to={`/projects`}
                            className="orbit-tile group/tile absolute rounded-xl overflow-visible cursor-pointer border border-white/10 hover:border-amber-400/40 transition-all duration-300"
                            style={{
                              width: 110,
                              height: 78,
                              marginLeft: -55,
                              marginTop: -39,
                              transform: `rotateZ(${angle}deg) translateX(${radius}px)`,
                              boxShadow: "0 10px 35px rgba(0,0,0,0.6)",
                            }}
                          >
                            <div className="orbit-tile-inner w-full h-full overflow-hidden rounded-xl relative">
                              {img ? (
                                <img
                                  src={img}
                                  alt={title}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-all duration-300"
                                  style={{ filter: "brightness(0.65) saturate(0.75)" }}
                                />
                              ) : (
                                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                  <Hand className="w-5 h-5 text-amber-400/50" />
                                </div>
                              )}
                              <span
                                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-amber-400 whitespace-nowrap opacity-0 group-hover/tile:opacity-100 transition-opacity pointer-events-none"
                                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}
                              >
                                {title.split(" ").slice(0, 3).join(" ")}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Profile (center) */}
                    <div
                      className="absolute top-1/2 left-1/2 z-10 w-[300px] h-[300px] rounded-full overflow-hidden border border-amber-500/20"
                      style={{
                        transform: "translate(-50%, -50%)",
                        boxShadow:
                          "0 8px 30px rgba(0,0,0,0.5), 0 0 60px rgba(245,158,11,0.1)",
                      }}
                    >
                      <div
                        className="profile-glow-anim absolute -inset-12 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)",
                          zIndex: -1,
                        }}
                      />
                      <img
                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                        alt="Prosthetic hand prototype"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Shadow ellipse under orbit for depth */}
                  <div
                    className="absolute bottom-12 left-1/2 w-[400px] h-[50px] rounded-full pointer-events-none"
                    style={{
                      transform: "translateX(-50%)",
                      background:
                        "radial-gradient(ellipse, rgba(0,0,0,0.3) 0%, transparent 70%)",
                      filter: "blur(12px)",
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-0 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-8 rounded-full border-2 border-zinc-700 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-slate-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== MISSION VALUES ===== */}
      <section className="relative py-24 md:py-32 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Not a product. A shared process."
            description="Many prosthetic hands are expensive, hard to repair, and slow to update. Kids outgrow fittings quickly. We believe assistive technology should be accessible, repairable, and community-driven."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Modular & Repairable",
                desc: "Every part is replaceable. Swap a finger, replace a servo, adjust the fit - all documented with step-by-step guides.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: BookOpen,
                title: "Fully Documented",
                desc: "Circuit diagrams, assembly manuals, BOMs, and testing logs. Every decision explained so the next builder can improve on it.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Globe,
                title: "Globally Accessible",
                desc: "Designed for standard 3D printers and common components. Built in Beirut, assembled in Nairobi, improved in São Paulo.",
                color: "from-emerald-500 to-green-500",
              },
              {
                icon: GitBranch,
                title: "Open Source",
                desc: "All designs, code, and documentation live on GitHub. Fork it, improve it, share it back.",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: Zap,
                title: "Growth-Ready",
                desc: "Children grow. The hand adapts. Modular sizing system means a new palm, not a new device.",
                color: "from-rose-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Community-Governed",
                desc: "Contributors review each other's work. Progress is tracked transparently on the status board.",
                color: "from-teal-500 to-cyan-500",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div className="group relative h-full p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg opacity-90`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 text-left">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed text-left">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TWO PATHS ===== */}
      <section className="relative py-24 md:py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Two paths, one mission."
            description="Whether you want to build a hand or help improve the design, there's a place for you here."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Maker path → /projects?view=maker (no UPCOMING, direct to maker view) */}
            <AnimatedSection delay={0}>
              <div className="group relative h-full p-8 rounded-3xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl translate-x-12 -translate-y-12 group-hover:bg-amber-500/10 transition-colors duration-700" />

                <div className="relative flex flex-col ">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                    <Hand className="w-7 h-7 text-zinc-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-liches text-left">
                    I'm a Maker
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6 text-left">
                    Browse finished projects with complete assembly guides,
                    BOMs, and manuals. Download the files, gather parts, and
                    build a prosthetic hand at home or in a makerspace.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-zinc-400">
                    {[
                      "Full assembly documentation",
                      "Bill of materials with sources",
                      "3D print files and settings",
                      "Video walkthroughs",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/projects?view=maker"
                    className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm hover:gap-3 transition-all duration-300 text-left"
                  >
                    Browse Projects <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Contributor path → /contributors (has project listing + contributor profiles) */}
            <AnimatedSection delay={150}>
              <div className="group relative h-full p-8 rounded-3xl bg-zinc-900 border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl translate-x-12 -translate-y-12 group-hover:bg-emerald-500/10 transition-colors duration-700" />

                <div className="relative flex flex-col ">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                    <Users className="w-7 h-7 text-zinc-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 text-left">
                    I'm a Contributor
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6 text-left">
                    Join ongoing projects - improve mechanical designs, write
                    firmware, design circuits, or help with documentation. Your
                    work gets credited and your edits go live after review.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-zinc-400">
                    {[
                      "GitHub repo access by role",
                      "Status board & task tracking",
                      "Contributor recognition",
                      "Stage-by-stage progress logs",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contributors"
                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:gap-3 transition-all duration-300 "
                  >
                    See Contributors <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="relative py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What we're building."
            description="Every project is documented from concept to completion. Pick one, dive in, and start making."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 100}>
                <ProjectCard project={project} index={i} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
              >
                View all projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STORIES ===== */}
      <section className="relative py-24 md:py-32 bg-zinc-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,158,11,0.04)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Real stories. Real hands."
            description="These aren't marketing testimonials - they're documented cases of how open-source prosthetics change lives."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, i) => (
              <AnimatedSection key={story.id} delay={i * 100}>
                <div className="group relative h-full p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">🌍</span>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      {story.country}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-left">
                    {story.name}
                  </h3>
                  <div
                    className="text-sm text-zinc-500 leading-relaxed text-left"
                    dangerouslySetInnerHTML={{
                      __html: story.story?.replace(/<[^>]*>/g, "") || "",
                    }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTRIBUTORS ===== */}
      <section className="relative py-24 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Built by many."
            description="Open-source means open contribution. Meet some of the people shaping this project."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {visibleContributors.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 80}>
                <ContributorCard contributor={c} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <Link
                to="/contributors"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
              >
                All contributors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 md:py-32 bg-zinc-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08)_0%,_transparent_50%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <AnimatedSection delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Every contribution matters.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Whether you design a better finger joint, fix a wiring diagram, or
              translate a manual into your language - you're helping someone
              regain independence.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-amber-400 text-zinc-950 font-bold rounded-2xl hover:shadow-2xl hover:shadow-amber-500/25 active:scale-[0.98] transition-all duration-300"
              >
                Get in touch
              </Link>
              <a
                href="https://github.com/openhand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-2xl hover:border-zinc-700 transition-all duration-300"
              >
                <GitBranch className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}