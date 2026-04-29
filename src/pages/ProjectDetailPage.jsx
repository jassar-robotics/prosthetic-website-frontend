import { useParams, Link, useSearchParams, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Play,
  FileText,
  Download,
  ChevronRight,
  Wrench,
  Cpu,
  Code,
  CircleDot,
  Package,
  ClipboardList,
  BookOpen,
  Users,
  Globe,
  Lightbulb,
  Hand,
  Hammer,
  Images,
  X,
  ChevronLeft,
  Upload,
  Send,
  Star,
  GitFork,
  Eye,
  AlertCircle,
  Paperclip,
} from "lucide-react";
import {
  projects,
  getBOM,
  getStages,
  getStatusBoard,
  getStories,
  getUseCases,
  getContributors,
  getGallery,
} from "@/data/dummyData";
import AnimatedSection from "@/components/AnimatedSection";
import StatusBadge from "@/components/StatusBadge";
import ContributorCard from "@/components/ContributorCard";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const viewMode = searchParams.get("view"); // "maker" | "contributor" | null

  const project = useMemo(
    () => projects.find((p) => p.id === Number(id)),
    [id]
  );

  // If no project found
  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center  pt-20 ">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
          <Link to="/projects" className="inline-flex items-center gap-2 text-amber-400 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
        </div>
      </div>
    );
  }

  // ========================================
  // BRIDGE PAGE - no view param selected
  // ========================================
  if (!viewMode) {
    return <BridgePage project={project} />;
  }

  // ========================================
  // PROJECT DETAIL - maker or contributor
  // ========================================
  return (
    <ProjectDetail
      project={project}
      viewMode={viewMode}
    />
  );
}

// ============================================================
// BRIDGE PAGE - choose Maker or Contributor perspective
// ============================================================
function BridgePage({ project }) {
  const isUpcoming = project.status === "UPCOMING";

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full">
          <Link
            to="/projects"
            className="inline-flex items-start gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-10 "
          >
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
        </div>
          {/* Project preview */}
          <AnimatedSection>
            <div className="flex items-center gap-5 mb-12">
              <img
                src={project.image}
                alt={project.name}
                className="w-32 h32 rounded-2xl object-cover border border-zinc-800/50"
              />
              <div className="flex flex-col gap-2 items-start">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl font-bold text-white">{project.name}</h1>
                  <StatusBadge status={project.status} />

                <p className="text-sm text-zinc-500">v{project.version}</p>
                </div>
                <div
                className="text-base text-zinc-400 leading-relaxed  line-clamp-2"
                dangerouslySetInnerHTML={{ __html: project.description || "" }}
              />
              </div>
            </div>
          </AnimatedSection>

          {/* Choose perspective */}
          <AnimatedSection delay={100}>
            <h2 className="text-xl font-bold text-white mb-2">
              How do you want to explore this project?
            </h2>
            <p className="text-zinc-500 mb-10">
              Choose your perspective to see the most relevant information.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Maker option */}
            <AnimatedSection delay={200}>
              {isUpcoming ? (
                // Disabled card for UPCOMING projects
                <div className="relative h-full p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/30 opacity-50 cursor-not-allowed">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium text-zinc-500">
                    Not available yet
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
                    <Hand className="w-7 h-7 text-zinc-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-600 mb-3">
                    I'm a Maker
                  </h3>
                  <p className="text-zinc-700 leading-relaxed">
                    This project is still in the planning phase. Check back when
                    it reaches the ongoing or final stage.
                  </p>
                </div>
              ) : (
                // Active maker card
                <Link
                  to={`/projects/${project.id}?view=maker`}
                  className="group relative h-full p-8 rounded-3xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 overflow-hidden block"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl translate-x-12 -translate-y-12 group-hover:bg-amber-500/10 transition-colors duration-700" />
                  <div className="relative flex flex-col ">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                      <Hand className="w-7 h-7 text-zinc-950" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors text-left">
                      I'm a Maker
                    </h3>
                    <p className="text-zinc-500 leading-relaxed mb-6 text-left">
                      View assembly guides, bill of materials, manuals, circuit
                      diagrams, and everything you need to build this project
                      from scratch.
                    </p>
                    <ul className="space-y-2 mb-6 text-sm text-zinc-400">
                      {["Assembly instructions", "Bill of materials", "Circuit diagrams & software", "Video walkthroughs", "Success stories"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Enter as Maker <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )}
            </AnimatedSection>

            {/* Contributor option */}
            <AnimatedSection delay={300}>
              <Link
                to={`/projects/${project.id}?view=contributor`}
                className="group relative h-full p-8 rounded-3xl bg-zinc-900 border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden block"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl translate-x-12 -translate-y-12 group-hover:bg-emerald-500/10 transition-colors duration-700" />
                <div className="relative flex flex-col ">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                    <Hammer className="w-7 h-7 text-zinc-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors text-left">
                    I'm a Contributor
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6 text-left">
                    View the full project including the status board, task
                    tracking, GitHub repos, and contributor information to help
                    push this project forward.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-zinc-400">
                    {["Everything in Maker view", "Status board & task tracking", "GitHub repo links by role", "Stage-by-stage development logs", "Contributor recognition"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Enter as Contributor <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PROJECT DETAIL - full project view with perspective-aware tabs
// ============================================================

function ProjectDetail({ project, viewMode }) {
  const isMaker = viewMode === "maker";
  const isContributor = viewMode === "contributor";

  // Build tab list based on perspective
  const TAB_CONFIG = useMemo(() => {
    const tabs = [
      { id: "overview", label: "Overview", icon: BookOpen },
      { id: "stages", label: "Stages", icon: CircleDot },
    ];

    // Status board ONLY for contributors
    if (isContributor) {
      tabs.push({ id: "status", label: "Status Board", icon: ClipboardList });
    }

    tabs.push(
      { id: "assembly", label: "Assembly", icon: Wrench },
      { id: "bom", label: "BOM", icon: Package },
      { id: "gallery", label: "Gallery", icon: Images },
      { id: "stories", label: "Stories", icon: Globe },
      { id: "team", label: "Team", icon: Users }
    );

    // Contribute tab ONLY for contributors
    if (isContributor) {
      tabs.push({ id: "contribute", label: "Contribute", icon: GitBranch });
    }

    return tabs;
  }, [isContributor]);

  const [activeTab, setActiveTab] = useState("overview");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const bom = useMemo(() => getBOM(project.id), [project.id]);
  const stages = useMemo(() => getStages(project.id), [project.id]);
  const gallery = useMemo(() => getGallery(project.id), [project.id]);
  const statusItems = useMemo(() => getStatusBoard(project.id), [project.id]);
  const storyList = useMemo(() => getStories(project.id), [project.id]);
  const useCaseList = useMemo(() => getUseCases(project.id), [project.id]);
  const team = useMemo(() => getContributors(project.id), [project.id]);

  // Back link depends on how user arrived
  const backLink = isMaker ? "/projects?view=maker" : "/projects";
  const backLabel = isMaker ? "Back to projects" : "Back to projects";

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <div className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link
              to={backLink}
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {backLabel}
            </Link>

            {/* Perspective badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold  ${
                isMaker
                  ? "bg-amber-400/10 text-amber-400"
                  : "bg-emerald-400/10  text-emerald-400"
              }`}
            >
              {isMaker ? (
                <>
                  <Hand className="w-3.5 h-3.5" /> Maker View
                </>
              ) : (
                <>
                  <Hammer className="w-3.5 h-3.5" /> Contributor View
                </>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Image */}
            <AnimatedSection className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={100} className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <StatusBadge status={project.status} />
                <span className="text-xs font-mono text-zinc-600">v{project.version}</span>
                {project.whichSide && (
                  <span className="text-xs text-zinc-600 bg-zinc-900 px-2 py-1 rounded-md border border-zinc-800">
                    {project.whichSide} SIDE
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-left">
                {project.name}
              </h1>

              <div
                className="text-base text-zinc-400 leading-relaxed mb-6 text-left"
                dangerouslySetInnerHTML={{ __html: project.description || "" }}
              />

              {project.vision && (
                <div className="p-4 rounded-xl bg-amber-400/5  border-amber-400/10 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Vision
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed italic text-left">
                    {project.vision}
                  </p>
                </div>
              )}

              {/* Quick links - perspective-aware */}
              <div className="flex flex-wrap gap-3">
                {isMaker ? (
                  <>
                    {/* Maker: production resources repo + video */}
                    {project.production_repo && (
                      <a href={project.production_repo} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900  border-zinc-800 text-white rounded-xl hover:border-zinc-700 transition-all">
                        <Download className="w-4 h-4" /> Resources
                      </a>
                    )}
                    {project.video && (
                      <a href={project.video} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-amber-400/10  border-amber-400/20 text-amber-400 rounded-xl hover:bg-amber-400/15 transition-all">
                        <Play className="w-4 h-4" /> Watch Video
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    {/* Contributor: software, mechanical, electrical repos + video */}
                    {project.software_githubLink && (
                      <a href={project.software_githubLink} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900  text-white rounded-xl hover:border-zinc-700 transition-all">
                        <Code className="w-4 h-4" /> Software Repo
                      </a>
                    )}
                    {project.mechanical_github_repo && (
                      <a href={project.mechanical_github_repo} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900  text-white rounded-xl hover:border-zinc-700 transition-all">
                        <Wrench className="w-4 h-4" /> Mechanical Repo
                      </a>
                    )}
                    {project.electrical_github_repo && (
                      <a href={project.electrical_github_repo} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900  text-white rounded-xl hover:border-zinc-700 transition-all">
                        <Cpu className="w-4 h-4" /> Electrical Repo
                      </a>
                    )}
                    {project.video && (
                      <a href={project.video} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-amber-400/10   text-amber-400 rounded-xl hover:bg-amber-400/15 transition-all">
                        <Play className="w-4 h-4" /> Watch Video
                      </a>
                    )}
                  </>
                )}
              </div>

              {/* Switch perspective link */}
              <div className="mt-6 pt-4 border-t border-zinc-800/30 ">
                <Link
                  to={`/projects/${project.id}?view=${isMaker ? "contributor" : "maker"}`}
                  className={`text-xs font-medium transition-colors ${
                    isMaker
                      ? "text-zinc-600 hover:text-emerald-400"
                      : "text-zinc-600 hover:text-amber-400"
                  }`}
                >
                  Switch to {isMaker ? "Contributor" : "Maker"} view →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            {TAB_CONFIG.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setLightboxIndex(null); }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 text-left ${
                    isActive
                      ? "bg-amber-400/10 text-amber-400 "
                      : "text-zinc-500 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <AnimatedSection>
              <div
                className="prose prose-invert prose-zinc max-w-none text-zinc-400 text-left"
                dangerouslySetInnerHTML={{ __html: project.description || "" }}
              />
            </AnimatedSection>

            {useCaseList.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Use Cases</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {useCaseList.map((uc, i) => (
                    <AnimatedSection key={uc.id} delay={i * 80}>
                      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full">
                        <h4 className="font-bold text-white mb-3">{uc.heading}</h4>
                        <div className="text-sm text-zinc-500 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: uc.description?.replace(/<[^>]*>/g, "") || "" }}
                        />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { label: "Stages", value: stages.length, icon: CircleDot },
                ...(isContributor
                  ? [{ label: "Tasks", value: statusItems.length, icon: ClipboardList }]
                  : []),
                { label: "Components", value: bom.length, icon: Package },
                { label: "Photos", value: gallery.length, icon: Images },
                { label: "Contributors", value: team.length, icon: Users },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 60}>
                  <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800/50 text-center">
                    <stat.icon className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-zinc-600 mt-1">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* STAGES */}
        {activeTab === "stages" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Development Stages</h3>
            {stages.length === 0 ? (
              <p className="text-zinc-500">No stages recorded yet.</p>
            ) : (
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/50 via-zinc-800 to-zinc-800/0 hidden md:block" />
                <div className="space-y-8">
                  {stages.map((stage, i) => (
                    <AnimatedSection key={stage.id} delay={i * 100}>
                      <div className="relative md:pl-16">
                        <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-zinc-900 border-2 border-amber-400/30 items-center justify-center">
                          <span className="text-sm font-bold text-amber-400 text-left">{stage.stage_no}</span>
                        </div>
                        <div className="group rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-500 overflow-hidden">
                          <div className="grid md:grid-cols-5 gap-0">
                            {stage.image && (
                              <div className="md:col-span-2">
                                <img src={stage.image} alt={stage.heading} className="w-full h-full min-h-[100px] object-cover" />
                              </div>
                            )}
                            <div className={`p-6 ${stage.image ? "md:col-span-3" : "md:col-span-5"}`}>
                              <div className="flex items-center gap-2 mb-2 md:hidden">
                                <span className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-sm font-bold text-amber-400 text-left">
                                  {stage.stage_no}
                                </span>
                              </div>
                              <h4 className="text-lg font-bold text-white mb-3 text-left">{stage.heading}</h4>
                              <div className="text-sm text-zinc-500 leading-relaxed text-left"
                                dangerouslySetInnerHTML={{ __html: stage.description?.replace(/<[^>]*>/g, "") || "" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* STATUS BOARD - Contributor only */}
        {activeTab === "status" && isContributor && (
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Status Board</h3>
            {statusItems.length === 0 ? (
              <p className="text-zinc-500">No tasks on the board yet.</p>
            ) : (
              <div className="grid gap-8">
                {statusItems.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 50}>
                    <fieldset className="relative group p-5 pt-7 rounded-xl bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 flex flex-col items-start gap-4">
                      <legend className="absolute -top-3 left-4 px-2 bg-zinc-900">
                        <StatusBadge status={item.status} />
                      </legend>

                      <div>
                        <h4 className="text-base font-bold text-white mb-1 text-left">
                          {item.heading}
                        </h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </fieldset>

                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ASSEMBLY */}
        {activeTab === "assembly" && (
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white mb-2">Assembly Guide</h3>
            <p className="text-zinc-500 mb-8">
              Complete instructions for building this project from start to finish.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedSection>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full flex flex-col justify-start items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <ClipboardList className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2  text-left">Project Steps</h4>
                  <p className="text-sm text-zinc-500 mb-4  text-left">
                    Step-by-step build instructions covering mechanical assembly, wiring, and firmware upload.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-400  text-left">
                    View steps <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full flex flex-col justify-start items-start">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                    <Play className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2 text-left">Video Walkthrough</h4>
                  <p className="text-sm text-zinc-500 mb-4  text-left">
                    Watch the full assembly process. Each video covers a specific sub-assembly.
                  </p>
                  {project.video_description_link ? (
                    <a href={project.video_description_link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-red-400 text-left">
                      Watch <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600  text-left">Coming soon</span>
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full flex flex-col justify-start items-start">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2  text-left">Manuals</h4>
                  <p className="text-sm text-zinc-500 mb-4  text-left">
                    User manual and maintenance guide. Covers daily use, care, and common repairs.
                  </p>
                  {project.manuals ? (
                    <a href="#" className="inline-flex items-center gap-1 text-sm text-amber-400  text-left">
                      Download PDF <Download className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600  text-left">Coming soon</span>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Electronics */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 ml-4  gap-2 flex  justify-start items-center">
                <Cpu className="w-5 h-5 text-amber-400" /> Electronics
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 flex flex-col justify-start items-start">
                  <h5 className="font-semibold text-white mb-2">Circuit Diagrams</h5>
                  <p className="text-sm text-zinc-500 mb-3">
                    Full schematic files for control board, sensor breakout, and power management.
                  </p>
                  {project.circuitDiagram ? (
                    <a href="#" className="text-sm text-amber-400  flex flex-col justify-start items-start">
                      Download schematic <Download className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600">No schematic uploaded yet</span>
                  )}
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 flex flex-col justify-start items-start">
                  <h5 className="font-semibold text-white mb-2">Software / Firmware</h5>
                  <p className="text-sm text-zinc-500 mb-3">
                    Arduino firmware, calibration scripts, and mobile app source code.
                  </p>
                  {project.software_github_repo ? (
                    <a href={project.software_github_repo} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-amber-400 inline-flex items-center gap-1">
                      View on GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600">Not yet available</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOM */}
        {activeTab === "bom" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Bill of Materials</h3>
            <p className="text-zinc-500 mb-8">
              Every component needed to build this project, with quantities and specifications.
            </p>
            {bom.length === 0 ? (
              <p className="text-zinc-500">No BOM data available yet.</p>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-zinc-900">
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Part No.</th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Component</th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Type</th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Specs</th>
                        <th className="text-center px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Qty</th>
                        <th className="text-right px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {bom.map((item) => (
                        <tr key={item.id} className="bg-zinc-950 hover:bg-zinc-900/50 transition-colors">
                          <td className="px-6 py-4 text-xs font-mono text-zinc-600 text-left">{item.part_no}</td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-white text-left">{item.name}</div>
                            <div className="text-xs text-zinc-600 mt-0.5 text-left">{item.description}</div>
                          </td>
                          <td className="px-6 py-4 flex items-start">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium text-left ${item.type === "MECHANICAL" ? "text-blue-400" : "text-amber-400"}`}>
                              {item.type === "MECHANICAL" ? <Wrench className="w-3 h-3 text-left" /> : <Cpu className="w-3 h-3 text-left" />}
                              {item.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-zinc-500 text-left">{item.specs}</td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 text-sm font-bold text-white border border-zinc-800 text-left">
                              {item.quantity}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            {item.resource ? (
                              <a href={item.resource} target="_blank" rel="noopener noreferrer"
                                className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 text-left">
                                Link <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="text-xs text-zinc-700 text-left">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* GALLERY */}
        {activeTab === "gallery" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className=" w-full flex flex-col items-center">
                <h3 className="text-xl font-bold text-white mb-2">Project Gallery</h3>
                <p className="text-zinc-500">
                  {gallery.length} photo{gallery.length !== 1 ? "s" : ""} - prototypes, components, testing, and assembly progress.
                </p>
              </div>
            </div>

            {gallery.length === 0 ? (
              <div className="text-center py-20 rounded-2xl bg-zinc-900/50 border border-zinc-800/30">
                <Images className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
                <p className="text-zinc-500">No images uploaded yet.</p>
              </div>
            ) : (
              <>
                {/* Masonry-style grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                  {gallery.map((img, i) => (
                    <AnimatedSection key={img.id} delay={i * 50}>
                      <button
                        onClick={() => setLightboxIndex(i)}
                        className="group relative w-full rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-300 block break-inside-avoid"
                      >
                        <img
                          src={img.image}
                          alt={img.caption || `Project image ${i + 1}`}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-colors duration-300 flex items-end">
                          {img.caption && (
                            <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="text-sm font-medium text-white drop-shadow-lg">
                                {img.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      </button>
                    </AnimatedSection>
                  ))}
                </div>

                {/* Lightbox */}
                {lightboxIndex !== null && (
                  <div
                    className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setLightboxIndex(null)}
                  >
                    {/* Close */}
                    <button
                      onClick={() => setLightboxIndex(null)}
                      className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Prev */}
                    {lightboxIndex > 0 && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}

                    {/* Next */}
                    {lightboxIndex < gallery.length - 1 && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}

                    {/* Image */}
                    <div
                      className="max-w-5xl max-h-[85vh] flex flex-col items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src={gallery[lightboxIndex].image}
                        alt={gallery[lightboxIndex].caption || ""}
                        className="max-w-full max-h-[75vh] object-contain rounded-2xl"
                      />
                      <div className="mt-4 text-center">
                        {gallery[lightboxIndex].caption && (
                          <p className="text-sm text-zinc-300 font-medium">
                            {gallery[lightboxIndex].caption}
                          </p>
                        )}
                        <p className="text-xs text-zinc-600 mt-1">
                          {lightboxIndex + 1} / {gallery.length}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* STORIES */}
        {activeTab === "stories" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Use Cases & Success Stories</h3>
            <p className="text-zinc-500 mb-8">Real-world applications and documented outcomes.</p>

            {useCaseList.length > 0 && (
              <div className="mb-12">
                <h4 className="text-lg font-semibold text-zinc-300 mb-6">Use Cases</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {useCaseList.map((uc, i) => (
                    <AnimatedSection key={uc.id} delay={i * 80}>
                      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full">
                        <h5 className="font-bold text-white mb-3">{uc.heading}</h5>
                        <div className="text-sm text-zinc-500 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: uc.description?.replace(/<[^>]*>/g, "") || "" }}
                        />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}

            {storyList.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-zinc-300 mb-6">Success Stories</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {storyList.map((story, i) => (
                    <AnimatedSection key={story.id} delay={i * 100}>
                      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50">
                        <div className="flex items-center gap-2 mb-4">
                          <Globe className="w-4 h-4 text-amber-400" />
                          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                            {story.country}
                          </span>
                        </div>
                        <h5 className="text-lg font-bold text-white mb-3 text-left">{story.name}</h5>
                        <div className="text-sm text-zinc-500 leading-relaxed  text-left"
                          dangerouslySetInnerHTML={{ __html: story.story?.replace(/<[^>]*>/g, "") || "" }}
                        />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}

            {storyList.length === 0 && useCaseList.length === 0 && (
              <p className="text-zinc-500">No stories or use cases documented yet.</p>
            )}
          </div>
        )}

        {/* TEAM */}
        {activeTab === "team" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Project Contributors</h3>
            <p className="text-zinc-500 mb-8">
              The people who designed, built, tested, and documented this project.
            </p>
            {team.length === 0 ? (
              <p className="text-zinc-500">No contributors listed yet.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((c, i) => (
                  <AnimatedSection key={c.id} delay={i * 80}>
                    <ContributorCard contributor={c} />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CONTRIBUTE */}
        {activeTab === "contribute" && isContributor && (
          <ContributeTab project={project} />
        )}
      </div>
    </div>
  );
}

// ============================================================
// REPO CARD - fetches live data from GitHub API
// ============================================================

function RepoCard({ url, label, icon: Icon, color }) {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) { setLoading(false); return; }
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) { setLoading(false); setError(true); return; }
    const [, owner, repoName] = match;

    fetch(`https://api.github.com/repos/${owner}/${repoName}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => { setRepo(data); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [url]);

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="min-w-0 flex-1 flex items-start flex-col gap-1">
          <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate text-left">
            {label} Repository
          </h4>
          {loading ? (
            <span className="text-xs text-zinc-600 text-left">Fetching...</span>
          ) : error ? (
            <span className="text-xs text-zinc-600 text-left">Could not load repo info</span>
          ) : repo ? (
            <span className="text-xs text-zinc-500 truncate block text-left">{repo.full_name}</span>
          ) : null}
        </div>
        <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 shrink-0 transition-colors" />
      </div>

      {loading ? (
        <div className="flex gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-4 w-16 rounded bg-zinc-800 animate-pulse" />
          ))}
        </div>
      ) : error ? (
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <AlertCircle className="w-3 h-3" /> Repo may be private or unavailable
        </div>
      ) : repo ? (
        <>
          <div className="flex items-center gap-4 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
              <Star className="w-3 h-3 text-amber-400" /> {repo.stargazers_count}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
              <GitFork className="w-3 h-3" /> {repo.forks_count}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
              <Eye className="w-3 h-3" /> {repo.watchers_count}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {repo.language && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded-md">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                {repo.language}
              </span>
            )}
            {repo.open_issues_count > 0 && (
              <span className="text-[11px] font-medium text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded-md">
                {repo.open_issues_count} open issues
              </span>
            )}
            <span className="text-[11px] text-zinc-600">
              Updated {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
          {repo.description && (
            <p className="text-xs text-zinc-600 mt-3 leading-relaxed line-clamp-2">{repo.description}</p>
          )}
        </>
      ) : null}
    </a>
  );
}

// ============================================================
// CONTRIBUTE TAB - repos + file submission form
// ============================================================

function ContributeTab({ project }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "SOFTWARE",
    message: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] || null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", type: "SOFTWARE", message: "", file: null });
  };

  const repos = [
    project.software_github_repo && { url: project.software_github_repo, label: "Software", icon: Code, color: "from-emerald-500 to-green-600" },
    project.mechanical_github_repo && { url: project.mechanical_github_repo, label: "Mechanical", icon: Wrench, color: "from-blue-500 to-cyan-600" },
    project.electrical_github_repo && { url: project.electrical_github_repo, label: "Electrical", icon: Cpu, color: "from-amber-500 to-orange-600" },
  ].filter(Boolean);

  const contributionTypes = [
    { key: "SOFTWARE", icon: Code, label: "Software", desc: "Firmware, calibration apps, embedded code", color: "from-emerald-500 to-green-600" },
    { key: "MECHANIC", icon: Wrench, label: "Mechanical", desc: "CAD files, 3D models, print profiles", color: "from-blue-500 to-cyan-600" },
    { key: "ELECTRIC", icon: Cpu, label: "Electrical", desc: "Schematics, PCB layouts, wiring diagrams", color: "from-amber-500 to-orange-600" },
    { key: "OTHERS", icon: FileText, label: "Other", desc: "Docs, translations, testing logs, photos", color: "from-purple-500 to-violet-600" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">Contribute to {project.name}</h3>
        <p className="text-zinc-500">
          Push directly to GitHub if you're comfortable with version control, or submit files through the form.
        </p>
      </div>

      {/* Contribution type bento tiles */}
      <AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contributionTypes.map((ct) => (
            <div
              key={ct.key}
              className="group p-5 rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ct.color} flex items-center justify-center mb-3 shadow-lg`}>
                <ct.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1 text-left">{ct.label}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-left">{ct.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Bento: Repos left + Form right */}
      <div className="grid lg:grid-cols-5 gap-6 items-start  pt-20">
        {/* LEFT - GitHub repos */}
        <div className="lg:col-span-3 space-y-4">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <GitBranch className="w-5 h-5 text-amber-400" />
              <h4 className="text-lg font-bold text-white">GitHub Repositories</h4>
              <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20 font-semibold  uppercase tracking-wider">
                Live
              </span>
            </div>
            <p className="text-sm text-zinc-500 mb-5  text-left">
              Fork a repo, make changes, and submit a pull request. Stats are fetched live from GitHub.
            </p>
          </AnimatedSection>

          {repos.length === 0 ? (
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/30 text-center">
              <GitBranch className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
              <p className="text-sm text-zinc-500 mb-1 text-left">No repositories linked yet.</p>
              <p className="text-xs text-zinc-600 text-left">Use the form to submit your contribution instead.</p>
            </div>
          ) : (
            <div className="space-y-4 ">
              {repos.map((r, i) => (
                <AnimatedSection key={r.url} delay={i * 100}>
                  <RepoCard url={r.url} label={r.label} icon={r.icon} color={r.color} />
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Quick guide */}
          <AnimatedSection delay={300}>
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-dashed border-zinc-800/50 mt-4">
              <h5 className="text-sm  text-white mb-3 text-left">Quick guide to contributing via GitHub</h5>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { step: "1", title: "Fork", desc: "Fork the repo to your account" },
                  { step: "2", title: "Change", desc: "Make changes on a new branch" },
                  { step: "3", title: "PR", desc: "Submit a pull request for review" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center text-xs font-bold text-amber-400 text-left">
                      {s.step}
                    </span>
                    <div className="flex flex-col ">
                      <span className="text-xs font-semibold text-white text-left w-full">{s.title}</span>
                      <p className="text-[11px] text-zinc-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT - File submission form */}
        <AnimatedSection delay={150} className="lg:col-span-2">
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 lg:sticky lg:top-40">
            <div className="flex items-center gap-3 mb-1">
              <Upload className="w-5 h-5 text-amber-400" />
              <h4 className="text-lg font-bold text-white">Submit Files</h4>
            </div>
            <p className="text-xs text-zinc-500 mb-6">
              Don't use GitHub? Upload your contribution here and the team will review it.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider text-left">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider  text-left">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider  text-left">Contribution Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all appearance-none"
                >
                  <option value="SOFTWARE">Software (.py, .ino, .js)</option>
                  <option value="MECHANIC">Mechanical (.step, .stl, .f3d)</option>
                  <option value="ELECTRIC">Electrical (.sch, .kicad_pcb)</option>
                  <option value="OTHERS">Other (.pdf, .docx, .md)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider  text-left">Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
                  placeholder="Describe what you changed or added..."
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider text-left ">Attach File</label>
                <label className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-950 border border-dashed border-zinc-700 text-sm cursor-pointer hover:border-amber-500/30 transition-all">
                  <Paperclip className="w-4 h-4 text-zinc-500" />
                  <span className={formData.file ? "text-white truncate" : "text-zinc-600"}>
                    {formData.file ? formData.file.name : "Choose a file..."}
                  </span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".py,.ino,.js,.ts,.step,.stl,.f3d,.sch,.kicad_pcb,.pdf,.docx,.md,.zip,.tar.gz"
                  />
                </label>
                <p className="text-[10px] text-zinc-700 mt-1">
                  .py, .ino, .step, .stl, .sch, .pdf, .docx, .zip and more
                </p>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98] transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Submit Contribution
              </button>

              {submitted && (
                <p className="text-sm text-emerald-400 text-center">
                  Submitted! The team will review your contribution.
                </p>
              )}
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}