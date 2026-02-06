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
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

export default function AboutUsPage() {
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
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-6">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                Prosthetics should not depend on cost, location, or closed supply chains.
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Many prosthetic hands are expensive, difficult to repair, and tightly locked into proprietary systems. For children, this creates a repeating cycle of replacements, delays, and loss of independence as they grow.
                </p>
                <p>
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
                desc: "Design decisions start with real human use: comfort, natural motion, and everyday tasks. Dignity matters — the hand should feel like support, not a reminder of loss.",
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
                desc: "Every decision is explained. Every stage is logged. Documentation is not an afterthought — it's a core deliverable.",
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
                    className={`w-11 h-11 rounded-xl m-auto bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Open Source */}
      <section id="philosophy" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              label="Philosophy"
              title="The philosophy of open source hardware."
            />

            <div className="space-y-6">
              {[
                {
                  title: "Knowledge, not money",
                  text: "We believe the most valuable contribution is knowledge. A better finger joint design, a clearer wiring diagram, a translated manual — these compound over time in ways that donations alone cannot.",
                },
                {
                  title: "Failures are progress",
                  text: "We document what didn't work as carefully as what did. A failed prototype is a lesson for the next builder. Hiding failures means someone else repeats them.",
                },
                {
                  title: "The next person should have it easier",
                  text: "Every improvement, every document, every fix should make it easier for the next person. That's the contract. You benefit from those who came before, and you leave something better for those who come after.",
                },
                {
                  title: "Ownership without possession",
                  text: "When a child outgrows a prosthetic hand, that hand should go to someone else. When a design reaches completion, it belongs to everyone. Open source means the community owns the process.",
                },
                {
                  title: "Build bridges, not walls",
                  text: "We imagine a future where families, clinicians, students, and makers learn from each other openly. Where improvements are shared, and progress becomes easier for the next person instead of starting from zero.",
                },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
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
              Whether you write code, design parts, or translate guides — there's a place for you.
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
