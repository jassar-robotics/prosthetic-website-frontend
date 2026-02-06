import { useState, useMemo } from "react";
import {
  GitPullRequest,
  FileText,
  MessageSquare,
  ArrowRight,
  Wrench,
  Cpu,
  Code,
  Users,
} from "lucide-react";
import { getAllContributors } from "@/data/dummyData";
import ContributorCard from "@/components/ContributorCard";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const TYPES = ["ALL", "MECHANIC", "ELECTRIC", "SOFTWARE", "OTHERS"];
const typeLabels = {
  ALL: "All",
  MECHANIC: "Mechanical",
  ELECTRIC: "Electrical",
  SOFTWARE: "Software",
  OTHERS: "Other",
};

export default function ContributorsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const contributors = getAllContributors();

  const filtered = useMemo(
    () =>
      activeFilter === "ALL"
        ? contributors
        : contributors.filter((c) => c.type === activeFilter),
    [activeFilter, contributors]
  );

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Contributors"
            title="The people behind the hand."
            description="Every improvement, every fix, every page of documentation — made by someone who cared enough to contribute."
          />
        </div>
      </div>

      {/* How to Contribute */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800/50 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-24 -translate-y-24" />

            <div className="relative flex flex-col items-center gap-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                How to contribute
              </h3>
              <p className="text-zinc-400 mb-8 max-w-2xl">
                We value knowledge over money. Whether you improve a CAD file,
                fix a wiring diagram, write documentation, or test a prototype —
                your contribution matters.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: GitPullRequest,
                    title: "Fork & Build",
                    desc: "Clone a repo, make improvements, submit a pull request.",
                    color: "from-emerald-500 to-green-600",
                  },
                  {
                    icon: FileText,
                    title: "Document",
                    desc: "Write guides, translate manuals, improve READMEs.",
                    color: "from-blue-500 to-cyan-600",
                  },
                  {
                    icon: Wrench,
                    title: "Test & Report",
                    desc: "Build a prototype, test it, log your findings.",
                    color: "from-amber-500 to-orange-600",
                  },
                  {
                    icon: MessageSquare,
                    title: "Review",
                    desc: "Review submissions from other contributors on the status board.",
                    color: "from-purple-500 to-violet-600",
                  },
                ].map((step, i) => (
                  <div
                    key={step.title}
                    className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/30"
                  >
                    <div
                      className={`w-9 h-9 rounded-lg m-auto bg-gradient-to-br ${step.color} flex items-center justify-center mb-3`}
                    >
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Filter & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <div className="flex justify-center gap-2 flex-wrap mb-12">
            {TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === type
                    ? "bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <AnimatedSection key={c.id} delay={i * 60}>
              <ContributorCard contributor={c} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500">
              No contributors found with this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
