import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
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
} from "lucide-react";
import {
  projects,
  getBOM,
  getStages,
  getStatusBoard,
  getStories,
  getUseCases,
  getContributors,
} from "@/data/dummyData";
import AnimatedSection from "@/components/AnimatedSection";
import StatusBadge from "@/components/StatusBadge";
import ContributorCard from "@/components/ContributorCard";

const TAB_CONFIG = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "stages", label: "Stages", icon: CircleDot },
  { id: "status", label: "Status Board", icon: ClipboardList },
  { id: "assembly", label: "Assembly", icon: Wrench },
  { id: "bom", label: "BOM", icon: Package },
  { id: "stories", label: "Stories", icon: Globe },
  { id: "team", label: "Team", icon: Users },
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const project = useMemo(
    () => projects.find((p) => p.id === Number(id)),
    [id]
  );

  const bom = useMemo(() => getBOM(Number(id)), [id]);
  const stages = useMemo(() => getStages(Number(id)), [id]);
  const statusItems = useMemo(() => getStatusBoard(Number(id)), [id]);
  const storyList = useMemo(() => getStories(Number(id)), [id]);
  const useCaseList = useMemo(() => getUseCases(Number(id)), [id]);
  const team = useMemo(() => getContributors(Number(id)), [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Project not found
          </h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-amber-400 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <div className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

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
                <span className="text-xs font-mono text-zinc-600">
                  v{project.version}
                </span>
                {project.whichHand && (
                  <span className="text-xs text-zinc-600 bg-zinc-900 px-2 py-1 rounded-md border border-zinc-800">
                    {project.whichHand} hand
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {project.name}
              </h1>

              <div
                className="text-base text-zinc-400 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: project.description || "",
                }}
              />

              {project.vision && (
                <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/10 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Vision
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed italic">
                    {project.vision}
                  </p>
                </div>
              )}

              {/* Quick links */}
              <div className="flex flex-wrap gap-3">
                {project.software_githubLink && (
                  <a
                    href={project.software_githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 border border-zinc-800 text-white rounded-xl hover:border-zinc-700 transition-all"
                  >
                    <GitBranch className="w-4 h-4" /> Software Repo
                  </a>
                )}
                {project.mechanical_github_repo && (
                  <a
                    href={project.mechanical_github_repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 border border-zinc-800 text-white rounded-xl hover:border-zinc-700 transition-all"
                  >
                    <Wrench className="w-4 h-4" /> Mechanical Repo
                  </a>
                )}
                {project.electrical_github_repo && (
                  <a
                    href={project.electrical_github_repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-zinc-900 border border-zinc-800 text-white rounded-xl hover:border-zinc-700 transition-all"
                  >
                    <Cpu className="w-4 h-4" /> Electrical Repo
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-xl hover:bg-amber-400/15 transition-all"
                  >
                    <Play className="w-4 h-4" /> Watch Video
                  </a>
                )}
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
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
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
                className="prose prose-invert prose-zinc max-w-none text-zinc-400"
                dangerouslySetInnerHTML={{
                  __html: project.description || "",
                }}
              />
            </AnimatedSection>

            {/* Use Cases */}
            {useCaseList.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Use Cases
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {useCaseList.map((uc, i) => (
                    <AnimatedSection key={uc.id} delay={i * 80}>
                      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full">
                        <h4 className="font-bold text-white mb-3">
                          {uc.heading}
                        </h4>
                        <div
                          className="text-sm text-zinc-500 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: uc.description?.replace(/<[^>]*>/g, "") || "",
                          }}
                        />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Stages", value: stages.length, icon: CircleDot },
                { label: "Tasks", value: statusItems.length, icon: ClipboardList },
                { label: "Components", value: bom.length, icon: Package },
                { label: "Contributors", value: team.length, icon: Users },
              ].map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 60}>
                  <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800/50 text-center">
                    <stat.icon className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* STAGES */}
        {activeTab === "stages" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-8">
              Development Stages
            </h3>
            {stages.length === 0 ? (
              <p className="text-zinc-500">No stages recorded yet.</p>
            ) : (
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/50 via-zinc-800 to-zinc-800/0 hidden md:block" />

                <div className="space-y-8">
                  {stages.map((stage, i) => (
                    <AnimatedSection key={stage.id} delay={i * 100}>
                      <div className="relative md:pl-16">
                        {/* Timeline dot */}
                        <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-zinc-900 border-2 border-amber-400/30 items-center justify-center">
                          <span className="text-sm font-bold text-amber-400">
                            {stage.stage_no}
                          </span>
                        </div>

                        <div className="group rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-500 overflow-hidden">
                          <div className="grid md:grid-cols-5 gap-0">
                            {stage.image && (
                              <div className="md:col-span-2">
                                <img
                                  src={stage.image}
                                  alt={stage.heading}
                                  className="w-full h-full min-h-[200px] object-cover"
                                />
                              </div>
                            )}
                            <div
                              className={`p-6 ${
                                stage.image ? "md:col-span-3" : "md:col-span-5"
                              }`}
                            >
                              <div className="flex items-center gap-2 mb-2 md:hidden">
                                <span className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center text-sm font-bold text-amber-400">
                                  {stage.stage_no}
                                </span>
                              </div>
                              <h4 className="text-lg font-bold text-white mb-3">
                                {stage.heading}
                              </h4>
                              <div
                                className="text-sm text-zinc-500 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    stage.description?.replace(/<[^>]*>/g, "") ||
                                    "",
                                }}
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

        {/* STATUS BOARD */}
        {activeTab === "status" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Status Board</h3>
            {statusItems.length === 0 ? (
              <p className="text-zinc-500">No tasks on the board yet.</p>
            ) : (
              <div className="grid gap-4">
                {statusItems.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 50}>
                    <div className="group p-5 rounded-xl bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 flex items-start gap-4">
                      <div className="shrink-0 mt-0.5">
                        <StatusBadge status={item.status} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-white mb-1">
                          {item.heading}
                        </h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ASSEMBLY */}
        {activeTab === "assembly" && (
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Assembly Guide
            </h3>
            <p className="text-zinc-500 mb-8">
              Complete instructions for building this project from start to
              finish.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Project Steps */}
              <AnimatedSection>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <ClipboardList className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Project Steps</h4>
                  <p className="text-sm text-zinc-500 mb-4">
                    Step-by-step build instructions covering mechanical
                    assembly, wiring, and firmware upload.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-400">
                    View steps <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </AnimatedSection>

              {/* Video Description */}
              <AnimatedSection delay={100}>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                    <Play className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">
                    Video Walkthrough
                  </h4>
                  <p className="text-sm text-zinc-500 mb-4">
                    Watch the full assembly process. Each video covers a
                    specific sub-assembly.
                  </p>
                  {project.video_description_link ? (
                    <a
                      href={project.video_description_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-red-400"
                    >
                      Watch <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600">Coming soon</span>
                  )}
                </div>
              </AnimatedSection>

              {/* Manuals */}
              <AnimatedSection delay={200}>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Manuals</h4>
                  <p className="text-sm text-zinc-500 mb-4">
                    User manual and maintenance guide. Covers daily use, care,
                    and common repairs.
                  </p>
                  {project.manuals ? (
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm text-amber-400"
                    >
                      Download PDF <Download className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600">Coming soon</span>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Electronics / Circuit Section */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-400" /> Electronics
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50">
                  <h5 className="font-semibold text-white mb-2">
                    Circuit Diagrams
                  </h5>
                  <p className="text-sm text-zinc-500 mb-3">
                    Full schematic files (.sch) for the control board, sensor
                    breakout, and power management circuit.
                  </p>
                  {project.circuitDiagram ? (
                    <a
                      href="#"
                      className="text-sm text-amber-400 inline-flex items-center gap-1"
                    >
                      Download schematic <Download className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600">
                      No schematic uploaded yet
                    </span>
                  )}
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50">
                  <h5 className="font-semibold text-white mb-2">
                    Software / Firmware
                  </h5>
                  <p className="text-sm text-zinc-500 mb-3">
                    Arduino firmware, calibration scripts, and mobile app source
                    code.
                  </p>
                  {project.software_github_repo ? (
                    <a
                      href={project.software_github_repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-400 inline-flex items-center gap-1"
                    >
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
            <h3 className="text-xl font-bold text-white mb-2">
              Bill of Materials
            </h3>
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
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          Part No.
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          Component
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          Specs
                        </th>
                        <th className="text-center px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          Qty
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/50">
                      {bom.map((item, i) => (
                        <tr
                          key={item.id}
                          className="bg-zinc-950 hover:bg-zinc-900/50 transition-colors"
                        >
                          <td className="px-6 py-4 text-xs font-mono text-zinc-600">
                            {item.part_no}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-white">
                              {item.name}
                            </div>
                            <div className="text-xs text-zinc-600 mt-0.5">
                              {item.description}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                                item.type === "MECHANICAL"
                                  ? "text-blue-400"
                                  : "text-amber-400"
                              }`}
                            >
                              {item.type === "MECHANICAL" ? (
                                <Wrench className="w-3 h-3" />
                              ) : (
                                <Cpu className="w-3 h-3" />
                              )}
                              {item.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-zinc-500">
                            {item.specs}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 text-sm font-bold text-white border border-zinc-800">
                              {item.quantity}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            {item.resource ? (
                              <a
                                href={item.resource}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1"
                              >
                                Link <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="text-xs text-zinc-700">—</span>
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

        {/* STORIES */}
        {activeTab === "stories" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Use Cases & Success Stories
            </h3>
            <p className="text-zinc-500 mb-8">
              Real-world applications and documented outcomes from this project.
            </p>

            {/* Use Cases */}
            {useCaseList.length > 0 && (
              <div className="mb-12">
                <h4 className="text-lg font-semibold text-zinc-300 mb-6">
                  Use Cases
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {useCaseList.map((uc, i) => (
                    <AnimatedSection key={uc.id} delay={i * 80}>
                      <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50 h-full">
                        <h5 className="font-bold text-white mb-3">
                          {uc.heading}
                        </h5>
                        <div
                          className="text-sm text-zinc-500 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html:
                              uc.description?.replace(/<[^>]*>/g, "") || "",
                          }}
                        />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}

            {/* Stories */}
            {storyList.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-zinc-300 mb-6">
                  Success Stories
                </h4>
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
                        <h5 className="text-lg font-bold text-white mb-3">
                          {story.name}
                        </h5>
                        <div
                          className="text-sm text-zinc-500 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html:
                              story.story?.replace(/<[^>]*>/g, "") || "",
                          }}
                        />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            )}

            {storyList.length === 0 && useCaseList.length === 0 && (
              <p className="text-zinc-500">
                No stories or use cases documented yet.
              </p>
            )}
          </div>
        )}

        {/* TEAM */}
        {activeTab === "team" && (
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Project Contributors
            </h3>
            <p className="text-zinc-500 mb-8">
              The people who designed, built, tested, and documented this
              project.
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
      </div>
    </div>
  );
}
