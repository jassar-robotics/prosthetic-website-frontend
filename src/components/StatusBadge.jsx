const statusConfig = {
  UPCOMING: {
    bg: "bg-blue-500/10 border-blue-500/20",
    text: "text-blue-400",
    dot: "bg-blue-400",
  },
  ONGOING: {
    bg: "bg-amber-500/10 border-amber-500/20",
    text: "text-amber-400",
    dot: "bg-amber-400 animate-pulse",
  },
  FINAL: {
    bg: "bg-emerald-500/10 border-emerald-500/20",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  TODO: {
    bg: "bg-zinc-500/10 border-zinc-500/20",
    text: "text-zinc-400",
    dot: "bg-zinc-400",
  },
  TESTING: {
    bg: "bg-purple-500/10 border-purple-500/20",
    text: "text-purple-400",
    dot: "bg-purple-400 animate-pulse",
  },
  REVIEW: {
    bg: "bg-orange-500/10 border-orange-500/20",
    text: "text-orange-400",
    dot: "bg-orange-400",
  },
  ACCEPTED: {
    bg: "bg-emerald-500/10 border-emerald-500/20",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.TODO;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${config.bg} ${config.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status}
    </span>
  );
}
