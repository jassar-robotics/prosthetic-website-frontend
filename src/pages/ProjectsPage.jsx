import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { projects } from "@/data/dummyData";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const viewMode = searchParams.get("view"); // "maker" | null
  const isMakerEntry = viewMode === "maker";

  // Maker mode: no UPCOMING tab
  const availableStatuses = isMakerEntry
    ? ["ALL", "ONGOING", "FINAL"]
    : ["ALL", "ONGOING", "FINAL", "UPCOMING"];

  const [activeFilter, setActiveFilter] = useState("ALL");

  const baseProjects = useMemo(
    () =>
      projects.filter((p) => {
        if (p.is_hidden) return false;
        if (isMakerEntry && p.status === "UPCOMING") return false;
        return true;
      }),
    [isMakerEntry]
  );

  const filtered = useMemo(
    () =>
      activeFilter === "ALL"
        ? baseProjects
        : baseProjects.filter((p) => p.status === activeFilter),
    [activeFilter, baseProjects]
  );

  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={isMakerEntry ? "I'm a Maker" : "Projects"}
            title={isMakerEntry ? "Find a project to build." : "Explore our projects."}
            description={
              isMakerEntry
                ? "Browse completed and in-progress projects with full assembly guides, BOMs, and manuals. Pick one and start building."
                : "Browse ongoing work, completed designs, and upcoming research. Click a project to choose your perspective."
            }
          />

          {/* Maker mode indicator */}
          {isMakerEntry && (
            <AnimatedSection delay={200}>
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold text-amber-400">
                    Maker Mode — Only buildable projects shown
                  </span>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Filter tabs */}
          <AnimatedSection delay={250}>
            <div className="flex justify-center gap-2 flex-wrap">
              {availableStatuses.map((status) => (
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
            <p className="text-zinc-500 text-lg">No projects found with this filter.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 80}>
                {/*
                  Maker entry (from "I'm a Maker" button) → skip bridge, open directly as maker
                  Default entry (from nav "Projects") → go to bridge page (no view param)
                */}
                <ProjectCard
                  project={project}
                  index={i}
                  linkTo={
                    isMakerEntry
                      ? `/projects/${project.id}?view=maker`
                      : `/projects/${project.id}`
                  }
                />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}