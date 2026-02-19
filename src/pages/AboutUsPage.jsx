import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Eye,
  Compass,
  Shield,
  Lightbulb,
  ArrowRight,
  RefreshCw,
  Users,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { coreTeam } from "@/data/dummyData";

export default function AboutUsPage() {
  const [showAllTeam, setShowAllTeam] = useState(false);
  const [activePhilosophy, setActivePhilosophy] = useState(null);
  const displayedTeam = showAllTeam ? coreTeam : coreTeam.slice(0, 6);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="About Us"
            title="Why we exist."
            description="We're not a company. We're a group of engineers, designers, makers, and families who believe assistive technology should be open, repairable, and accessible to everyone."
          />
        </div>
      </div>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-zinc-800/50">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                alt="Community workshop"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="flex flex-col ">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-6 text-left w-fit">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight text-left">
                Prosthetics should not depend on cost, location, or closed supply chains.
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p className="text-left">
                  Many prosthetic hands are expensive, difficult to repair, and tightly locked into proprietary systems. For children, this creates a repeating cycle of replacements, delays, and loss of independence as they grow.
                </p>
                <p className="text-left">
                  Our answer is an open, modular hand that can be rebuilt, repaired, and improved by anyone with basic tools and a printer. The goal is not only a device, but a shared process that helps more people build, learn, and regain agency.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design Principles */}
      <section className="bg-zinc-900/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Design Principles"
            title="How we make decisions."
            description="Every design choice is guided by these principles. They're non-negotiable."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Human-Centered",
                desc: "Design decisions start with real human use: comfort, natural motion, and everyday tasks. Dignity matters - the hand should feel like support, not a reminder of loss.",
                color: "from-rose-500 to-pink-600",
              },
              {
                icon: RefreshCw,
                title: "Growth-Ready",
                desc: "Growth is expected, so parts are modular and replaceable. A child outgrowing a hand should mean a new palm piece, not a new device.",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Compass,
                title: "Repairable Anywhere",
                desc: "Repair should be possible anywhere, which makes clear documentation essential. No special tools, no proprietary parts, no locked firmware.",
                color: "from-emerald-500 to-green-600",
              },
              {
                icon: Eye,
                title: "Progress in the Open",
                desc: "Tests, mistakes, and fixes are shared honestly. Progress happens in the open so others can learn from what worked and what didn't.",
                color: "from-amber-500 to-orange-600",
              },
              {
                icon: BookOpen,
                title: "Document Everything",
                desc: "Every decision is explained. Every stage is logged. Documentation is not an afterthought - it's a core deliverable.",
                color: "from-purple-500 to-violet-600",
              },
              {
                icon: Shield,
                title: "Honest About Limits",
                desc: "This is an open hardware project in active development, not a certified medical device. Clinical use should be evaluated with qualified professionals.",
                color: "from-teal-500 to-cyan-600",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div className="h-full p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 text-left">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed  text-left">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Open Source - Interactive */}
      <section id="philosophy" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Philosophy"
            title="What we believe in."
          />

          {/* Interactive bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[180px]">
            {/* 1 - Knowledge, not money (wide) */}
            <AnimatedSection className="md:col-span-4 lg:col-span-7 row-span-2">
              <div
                className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setActivePhilosophy(activePhilosophy === 0 ? null : 0)}
              >
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                  alt="Knowledge sharing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${activePhilosophy === 0 ? "bg-zinc-950/85" : "bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent group-hover:via-zinc-950/50"}`} />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Core Belief</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-left">
                    Knowledge, not money.
                  </h3>
                  <p className={`text-sm text-zinc-300 leading-relaxed max-w-md transition-all duration-500 text-left ${activePhilosophy === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-70 group-hover:translate-y-0"}`}>
                    A better finger joint design, a clearer wiring diagram, a translated manual - these compound over time in ways that donations alone cannot.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 2 - Failures are progress (tall right) */}
            <AnimatedSection delay={100} className="md:col-span-2 lg:col-span-5 row-span-2">
              <div
                className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setActivePhilosophy(activePhilosophy === 1 ? null : 1)}
              >
                <img
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
                  alt="Iterating on failures"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${activePhilosophy === 1 ? "bg-zinc-950/85" : "bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent group-hover:via-zinc-950/50"}`} />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="w-4 h-4 text-rose-400" />
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Mindset</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-left">
                    Failures are progress.
                  </h3>
                  <p className={`text-sm text-left text-zinc-300 leading-relaxed transition-all duration-500 ${activePhilosophy === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-70 group-hover:translate-y-0"}`}>
                    We document what didn't work as carefully as what did. A failed prototype is a lesson for the next builder.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 3 - Make it easier (bottom left) */}
            <AnimatedSection delay={200} className="md:col-span-3 lg:col-span-5 row-span-2">
              <div
                className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setActivePhilosophy(activePhilosophy === 2 ? null : 2)}
              >
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                  alt="Helping the next person"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${activePhilosophy === 2 ? "bg-zinc-950/85" : "bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent group-hover:via-zinc-950/50"}`} />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Promise</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-left">
                    Leave it easier for the next person.
                  </h3>
                  <p className={`text-sm text-left text-zinc-300 leading-relaxed max-w-sm transition-all duration-500 ${activePhilosophy === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-70 group-hover:translate-y-0"}`}>
                    You benefit from those who came before. Leave something better for those who come after.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 4 - Ownership without possession (bottom middle) */}
            <AnimatedSection delay={250} className="md:col-span-3 lg:col-span-4 row-span-2">
              <div
                className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setActivePhilosophy(activePhilosophy === 3 ? null : 3)}
              >
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
                  alt="Shared ownership"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${activePhilosophy === 3 ? "bg-zinc-950/85" : "bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent group-hover:via-zinc-950/50"}`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Ethos</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-left">
                    Ownership without possession.
                  </h3>
                  <p className={`text-sm text-left text-zinc-300 leading-relaxed transition-all duration-500 ${activePhilosophy === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-70 group-hover:translate-y-0"}`}>
                    When a design is complete, it belongs to everyone. Open source means the community owns the process.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* 5 - Build bridges (bottom right) */}
            <AnimatedSection delay={300} className="md:col-span-6 lg:col-span-3 row-span-2">
              <div
                className="group relative h-full rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setActivePhilosophy(activePhilosophy === 4 ? null : 4)}
              >
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Building bridges"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${activePhilosophy === 4 ? "bg-zinc-950/85" : "bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent group-hover:via-zinc-950/50"}`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Vision</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 text-left">
                    Build bridges, not walls.
                  </h3>
                  <p className={`text-sm text-left text-zinc-300 leading-relaxed transition-all duration-500 ${activePhilosophy === 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-70 group-hover:translate-y-0"}`}>
                    Where improvements are shared and progress is never starting from zero.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Core Team"
            title="The people driving this forward."
            description="A small, dedicated team working across continents to make open-source prosthetics a reality."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTeam.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 80}>
                <div className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-14 h-14 rounded-xl object-cover ring-2 ring-zinc-800 group-hover:ring-amber-500/30 transition-all duration-300"
                    />
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors truncate text-left">
                        {member.name}
                      </h3>
                      <p className="text-sm text-zinc-500 truncate text-left">
                        {member.work}
                      </p>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/50">
                    {member.social.x && (
                      <a
                        href={member.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Toggle */}
          {coreTeam.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllTeam(!showAllTeam)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-700 transition-all"
              >
                {showAllTeam ? (
                  <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
                ) : (
                  <>Show {coreTeam.length - 6} more <ChevronDown className="w-3.5 h-3.5" /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900/30 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to be part of this?
            </h2>
            <p className="text-zinc-400 mb-8">
              Whether you write code, design parts, or translate guides - there's a place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/20 transition-all"
              >
                See Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-xl hover:border-zinc-700 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}