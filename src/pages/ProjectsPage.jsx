import { useState, useMemo } from "react";
import { projects } from "@/data/dummyData";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const STATUSES = ["ALL", "ONGOING", "FINAL", "UPCOMING"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          !p.is_hidden && (activeFilter === "ALL" || p.status === activeFilter)
      ),
    [activeFilter]
  );

  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Hero header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Projects"
            title="Explore our projects."
            description="Browse ongoing work, completed designs, and upcoming research. Each project is fully documented — pick one and start building or contributing."
          />

          {/* Filter tabs */}
          <AnimatedSection delay={250}>
            <div className="flex justify-center gap-2 flex-wrap">
              {STATUSES.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveFilter(status)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeFilter === status
                      ? "bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20"
                      : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  {status === "ALL" ? "All Projects" : status}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Project grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">
              No projects found with this filter.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 80}>
                <ProjectCard project={project} index={i} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
