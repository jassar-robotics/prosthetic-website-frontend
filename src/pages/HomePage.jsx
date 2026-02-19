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

  return (
    <div className="relative">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.05)_0%,_transparent_60%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
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
                <h1 className=" font-liches text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 text-left">
                  A hand that{" "}
                  <span className="relative">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400  font-liches">
                      grows
                    </span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-amber-400/10 rounded-full -z-0  font-liches" />
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
                    className="group inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-bold rounded-2xl hover:shadow-2xl hover:shadow-amber-500/25 active:scale-[0.98] transition-all duration-300"
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

            {/* Right: Visual */}
            <AnimatedSection delay={200} direction="left">
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-black/40">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                    alt="Prosthetic hand prototype"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
                      <Hand className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white text-left">
                        Hand Prosthetic v2
                      </div>
                      <div className="text-xs text-zinc-500 text-left">
                        Currently in active development
                      </div>
                    </div>
                    <span className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                     
                      ONGOING
                    </span>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl border border-amber-500/10 rotate-12" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-amber-500/5 border border-amber-500/10" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-zinc-700 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== MISSION VALUES ===== */}
      <section className="relative py-24 md:py-32 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.03)_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why We Build"
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
            label="Get Involved"
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
            label="Projects"
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
            label="Impact"
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
                  <h3 className="text-lg font-bold text-white mb-3">
                    {story.name}
                  </h3>
                  <div
                    className="text-sm text-zinc-500 leading-relaxed"
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
            label="People"
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
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber-500/20">
              <Heart className="w-8 h-8 text-zinc-950" />
            </div>
          </AnimatedSection>
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
                className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-bold rounded-2xl hover:shadow-2xl hover:shadow-amber-500/25 active:scale-[0.98] transition-all duration-300"
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