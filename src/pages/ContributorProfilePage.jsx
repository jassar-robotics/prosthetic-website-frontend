import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Globe,
  Wrench,
  Cpu,
  Code,
  Users,
  Heart,
  Send,
  Quote,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react";
import {
  getContributorById,
  getContributorProjects,
  getThankYouNotes,
} from "@/data/dummyData";
import AnimatedSection from "@/components/AnimatedSection";
import StatusBadge from "@/components/StatusBadge";

const typeConfig = {
  MECHANIC: { icon: Wrench, label: "Mechanical Engineer", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  ELECTRIC: { icon: Cpu, label: "Electrical Engineer", color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/20" },
  SOFTWARE: { icon: Code, label: "Software Developer", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
  OTHERS: { icon: Users, label: "Contributor", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
};

export default function ContributorProfilePage() {
  const { id } = useParams();
  const contributor = useMemo(() => getContributorById(id), [id]);
  const projects = useMemo(() => getContributorProjects(id), [id]);
  const notes = useMemo(() => getThankYouNotes(id), [id]);

  const [showAllNotes, setShowAllNotes] = useState(false);
  const [formData, setFormData] = useState({ message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!contributor) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Contributor not found</h2>
          <Link to="/contributors" className="inline-flex items-center gap-2 text-amber-400 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to contributors
          </Link>
        </div>
      </div>
    );
  }

  const config = typeConfig[contributor.type] || typeConfig.OTHERS;
  const Icon = config.icon;
  const displayedNotes = showAllNotes ? notes : notes.slice(0, 4);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, POST to Django backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ message: "" });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero section */}
      <div className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/contributors"
            className="gap-2 text-sm text-zinc-500 hover:text-amber-400 transition-colors mb-10 items-center flex justify-start"
          >
            <ArrowLeft className="w-4 h-4" /> All Contributors
          </Link>

          {/* Profile header */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
              {/* Avatar */}
              <div className="relative shrink-0">
                <img
                  src={contributor.image}
                  alt={contributor.fullName}
                  className="w-28 h-28 rounded-3xl object-cover ring-4 ring-zinc-800"
                />
                <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center border ${config.bg}`}>
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-left">
                  {contributor.fullName}
                </h1>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${config.color}`}>
                    <Icon className="w-4 h-4" /> {config.label}
                  </span>
                  {contributor.location && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
                      <MapPin className="w-3.5 h-3.5" /> {contributor.location}
                    </span>
                  )}
                </div>

                {/* Quote */}
                {contributor.quote && (
                  <blockquote className="text-base text-zinc-400 italic leading-relaxed mb-5 text-left">
                    "{contributor.quote}"
                  </blockquote>
                )}

                {/* Bio */}
                {contributor.bio && (
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5 max-w-2xl text-left">
                    {contributor.bio}
                  </p>
                )}

                {/* Social links */}
                <div className="flex items-center gap-2">
                  {contributor.social?.x && (
                    <a href={contributor.social.x} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {contributor.social?.linkedin && (
                    <a href={contributor.social.linkedin} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.social?.github && (
                    <a href={contributor.social.github} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.social?.website && (
                    <a href={contributor.social.website} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                  {contributor.email && (
                    <a href={`mailto:${contributor.email}`}
                      className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {/* ===== PROJECTS ===== */}
        <section>
          <AnimatedSection>
            <h2 className="text-xl font-bold text-white mb-2 text-left">Projects</h2>
            <p className="text-sm text-zinc-500 mb-6 text-left">
              Projects {contributor.fullName.split(" ")[0]} has contributed to.
            </p>
          </AnimatedSection>

          {projects.length === 0 ? (
            <p className="text-zinc-600">No projects listed.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <AnimatedSection key={project.id} delay={i * 80}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="group block rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <StatusBadge status={project.status} />
                      </div>
                    </div>
                    <div className="p-5 flex flex-col">
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mb-1 text-left">
                        {project.name}
                      </h3>
                      <span className="text-xs text-zinc-600 font-mono text-left">v{project.version}</span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </section>

        {/* ===== THANK YOU NOTES + FORM ===== */}
        <section>
          <AnimatedSection>
            <h2 className="text-xl font-bold text-white mb-2 text-left">
              Thank You Wall
            </h2>
            <p className="text-sm text-zinc-500 mb-8 text-left">
              Anonymous notes of appreciation from the community. Reviewed by the core team before publishing.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* LEFT - Notes */}
            <div className="lg:col-span-3">
              {notes.length === 0 ? (
                <AnimatedSection>
                  <div className="p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800/30 text-center">
                    <Heart className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
                    <p className="text-sm text-zinc-500 mb-1">No notes yet.</p>
                    <p className="text-xs text-zinc-600">
                      Be the first to leave a thank you note for {contributor.fullName.split(" ")[0]}!
                    </p>
                  </div>
                </AnimatedSection>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {displayedNotes.map((note, i) => (
                      <AnimatedSection key={note.id} delay={i * 60}>
                        <div className="group p-5 rounded-2xl bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/10 transition-all duration-300 h-full flex flex-col">
                          <Quote className="w-5 h-5 text-amber-400/30 mb-3 shrink-0" />
                          <p className="text-sm text-zinc-400 leading-relaxed flex-1 text-left">
                            {note.message}
                          </p>
                          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-800/30">
                            <Heart className="w-3 h-3 text-rose-400/50" />
                            <span className="text-[11px] text-zinc-600">Anonymous</span>
                            <span className="text-[11px] text-zinc-700 ml-auto flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(note.created_at).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>

                  {notes.length > 4 && (
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => setShowAllNotes(!showAllNotes)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-700 transition-all"
                      >
                        {showAllNotes ? (
                          <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <>Show {notes.length - 4} more <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* RIGHT - Thank you form */}
            <AnimatedSection delay={100} className="lg:col-span-2">
              <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800/50 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-1">
                  <Heart className="w-5 h-5 text-rose-400" />
                  <h3 className="text-lg font-bold text-white">Say Thank You</h3>
                </div>
                <p className="text-xs text-zinc-500 mb-6 text-left">
                  Leave an anonymous note of appreciation. A core team member will review it before it appears on this page.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider text-left">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
                      placeholder={`Write something kind for ${contributor.fullName.split(" ")[0]}...`}
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/30">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-md bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] text-amber-400">i</span>
                      </div>
                      <p className="text-[11px] text-zinc-600 leading-relaxed text-left">
                        Your note is <span className="text-zinc-400 font-medium">completely anonymous</span>. No personal data is collected. A core team member will review it before publishing to ensure the safety of our contributors.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 font-bold rounded-xl transition-all duration-300 ${
                      submitted
                        ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 cursor-default"
                        : "bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-950 hover:shadow-lg hover:shadow-amber-500/20 active:scale-[0.98]"
                    }`}
                  >
                    {submitted ? (
                      <>Submitted! Under review.</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Thank You
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
}