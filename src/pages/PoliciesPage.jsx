import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const sections = [
  {
    title: "Open Source License",
    content: `All hardware designs, firmware, and documentation in this project are released under open-source licenses. Mechanical designs and documentation use the CERN Open Hardware Licence v2 (CERN-OHL-S-2.0). Software and firmware are released under the MIT License. This means you are free to use, modify, and distribute the designs for any purpose, including commercial use, as long as you share modifications under the same license terms.`,
  },
  {
    title: "Medical Disclaimer",
    content: `This is an open hardware project in active development. It is not a certified medical device. The designs, guides, and documentation provided are for educational and maker purposes. Any use as an assistive device should be evaluated in consultation with qualified medical professionals and in accordance with local regulations. The contributors and maintainers of this project accept no liability for injury, loss, or damage arising from the use or misuse of these designs.`,
  },
  {
    title: "Contribution Terms",
    content: `By submitting contributions (designs, code, documentation, or other materials) to this project, you agree that your contributions will be licensed under the same open-source licenses as the rest of the project. You confirm that you have the right to submit the contribution and that it does not infringe on any third-party intellectual property rights. All contributions go through a review process before being accepted.`,
  },
  {
    title: "Data & Privacy",
    content: `We collect minimal data. Contributor profiles include name, contact information, and contribution type — all provided voluntarily. We do not sell, share, or monetize personal data. Website analytics, if any, are used solely to improve the user experience. If you wish to have your data removed, contact us and we will process the request promptly.`,
  },
  {
    title: "Community Standards",
    content: `We expect all participants — contributors, users, and visitors — to engage respectfully and constructively. Harassment, discrimination, and disruptive behavior are not tolerated. We value honest feedback, documented learning, and collaborative improvement. If you witness or experience any violation of these standards, please contact the project maintainers.`,
  },
  {
    title: "Sponsorship & Donations",
    content: `Sponsorships, donations, and grants are used exclusively to support the project's mission: developing open-source assistive technology. Funds may be used for materials, tools, hosting costs, and community workshops. Financial records are maintained transparently and are available upon request to sponsors and donors.`,
  },
];

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Legal"
            title="Policies & Conditions"
            description="Transparency is a design principle. Here's how we handle licensing, data, contributions, and community standards."
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6">
          {sections.map((section, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50">
                <h3 className="text-lg font-bold text-white mb-3">
                  {section.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <p className="text-center text-xs text-zinc-600 mt-12">
            Last updated: February 2026. For questions about these policies,
            contact us at{" "}
            <a
              href="mailto:legal@openhand.org"
              className="text-amber-400 hover:underline"
            >
              legal@openhand.org
            </a>
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
