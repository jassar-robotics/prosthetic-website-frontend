import AnimatedSection from "./AnimatedSection";

export default function SectionHeader({ label, title, description, light = false, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${alignClass} mb-12 md:mb-16 max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {label && (
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-4">
            {label}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={100}>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4 ${
            light ? "text-zinc-900" : "text-white"
          }`}
        >
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={200}>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              light ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
