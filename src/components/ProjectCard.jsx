import { Link } from "react-router-dom";
import { ArrowUpRight, GitBranch } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function ProjectCard({ project, index = 0, linkTo }) {
  // Default link: bridge page (no view param)
  const to = linkTo || `/projects/${project.B}`;

  return (
    <Link
      to={to}
      className="group relative block rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <StatusBadge status={project.status} />
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
            {project.name}
          </h3>
          <span className="shrink-0 text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded-md">
            v{project.version}
          </span>
        </div>

        <div
          className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-4 text-left"
          dangerouslySetInnerHTML={{
            __html: project.description?.replace(/<[^>]*>/g, "") || "",
          }}
        />

        <div className="flex items-center gap-4 text-xs text-zinc-600">
          {project.software_githubLink && (
            <span className="flex items-center gap-1.5">
              <GitBranch className="w-3 h-3" /> Source Available
            </span>
          )}
          {project.whichSide && (
            <span className="px-2 py-0.5 bg-zinc-800 rounded text-zinc-500">
              {project.whichSide} hand
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}