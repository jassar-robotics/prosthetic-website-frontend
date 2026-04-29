import { useState } from "react";
import { Mail, Github, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would POST to your Django backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Let's talk."
            description="Have a question, want to contribute, or interested in sponsoring? We'd love to hear from you."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "hello@OpenHand.org",
                href: "mailto:hello@OpenHand.org",
              },
              {
                icon: Github,
                title: "GitHub",
                value: "github.com/OpenHand",
                href: "https://github.com/OpenHand",
              },
              {
                icon: MapPin,
                title: "Based in",
                value: "Open & distributed globally",
                href: null,
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="text-xs text-zinc-600 font-medium uppercase tracking-wider mb-0.5">
                        {item.title}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-white hover:text-amber-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-white">{item.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Sponsorship note */}
            <AnimatedSection delay={300}>
              <div className="p-6 rounded-2xl bg-amber-400/5 border border-amber-400/10">
                <h4 className="font-bold text-amber-400 mb-2 text-left">
                  Sponsorships & Grants
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed text-left">
                  If you represent an organization interested in sponsoring,
                  donating, or providing grants for open-source assistive
                  technology, please reach out. We're always looking for
                  partners who share our mission.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={150} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800/50"
            >

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col items-start justify-start">
                  <label className="block text-xs font-medium text-zinc-500 mb-2 pl-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div  className="flex flex-col items-start justify-start">
                  <label className="block text-xs font-medium text-zinc-500 mb-2 pl-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div  className="flex flex-col items-start justify-start mb-4">
                <label className="block text-xs font-medium text-zinc-500 mb-2 pl-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div className="flex flex-col items-start justify-start mb-6">
                <label className="block text-xs font-medium pl-2 text-zinc-500 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400  text-zinc-950 font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/20 active:scale-[0.98] transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <p className="mt-4 text-sm text-emerald-400">
                  Message sent! We'll get back to you soon.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
