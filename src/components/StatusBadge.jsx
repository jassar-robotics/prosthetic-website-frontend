const statusConfig = {
  UPCOMING: {
    bg: "bg-blue-500/40 ",
    text: "text-white",
  },
  ONGOING: {
    bg: "bg-amber-500/40",
    text: "text-white",
  },
  FINAL: {
    bg: "bg-emerald-500/40",
    text: "text-white",
  },
  TODO: {
    bg: "bg-zinc-500/40",
    text: "text-white",
  },
  TESTING: {
    bg: "bg-purple-500/40 ",
    text: "text-white",
  },
  REVIEW: {
    bg: "bg-orange-500/40",
    text: "text-white",
  },
  ACCEPTED: {
    bg: "bg-emerald-500/40 ",
    text: "text-white",
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
