const statusConfig = {
  UPCOMING: {
    bg: "bg-blue-500/10 ",
    text: "text-blue-400",
  },
  ONGOING: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
  },
  FINAL: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
  TODO: {
    bg: "bg-zinc-500/10",
    text: "text-zinc-400",
  },
  TESTING: {
    bg: "bg-purple-500/10 ",
    text: "text-purple-400",
  },
  REVIEW: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
  },
  ACCEPTED: {
    bg: "bg-emerald-500/10 ",
    text: "text-emerald-400",
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.TODO;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${config.bg} ${config.text}`}
    >
      {status}
    </span>
  );
}
