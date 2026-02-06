import { Wrench, Cpu, Code, Users } from "lucide-react";

const typeConfig = {
  MECHANIC: { icon: Wrench, label: "Mechanical", color: "text-blue-400 bg-blue-400/10" },
  ELECTRIC: { icon: Cpu, label: "Electrical", color: "text-amber-400 bg-amber-400/10" },
  SOFTWARE: { icon: Code, label: "Software", color: "text-emerald-400 bg-emerald-400/10" },
  OTHERS: { icon: Users, label: "Other", color: "text-purple-400 bg-purple-400/10" },
};

export default function ContributorCard({ contributor }) {
  const config = typeConfig[contributor.type] || typeConfig.OTHERS;
  const Icon = config.icon;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-amber-500/20 transition-all duration-500 p-6">
      {/* Avatar and info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative shrink-0">
          <img
            src={contributor.image}
            alt={contributor.fullName}
            className="w-14 h-14 rounded-xl object-cover ring-2 ring-zinc-800 group-hover:ring-amber-500/30 transition-all duration-300"
          />
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-lg flex items-center justify-center ${config.color}`}>
            <Icon className="w-3 h-3" />
          </div>
        </div>
        <div className="min-w-0 flex flex-col items-start">
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors truncate">
            {contributor.fullName}
          </h3>
          <span className={`text-xs text-left font-medium ${config.color.split(" ")[0]}`}>
            {config.label}
          </span>
        </div>
      </div>

      {/* Quote */}
      {contributor.quote && (
        <blockquote className="text-sm text-zinc-500 leading-relaxed italic">
          "{contributor.quote}"
        </blockquote>
      )}
    </div>
  );
}
