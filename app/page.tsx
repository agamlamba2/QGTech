import Link from "next/link";

const nav = [
  { label: "Product", href: "#product" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Journal", href: "#journal" },
];

const pillars = [
  {
    kicker: "01",
    title: "Considered systems",
    body:
      "We design software the way a good architect designs a room — the load-bearing decisions first, the ornament last.",
  },
  {
    kicker: "02",
    title: "Compounding outcomes",
    body:
      "Small, well-shaped releases that keep paying rent long after the launch tweet has scrolled past.",
  },
  {
    kicker: "03",
    title: "Human interfaces",
    body:
      "Interfaces that read like a sentence — clear subject, honest verb, no adverbs to hide behind.",
  },
];

const work = [
  { name: "Ledger", tag: "Financial infrastructure", year: "2025" },
  { name: "Fieldnote", tag: "Research operations", year: "2025" },
  { name: "Halcyon", tag: "Internal AI platform", year: "2024" },
  { name: "Cove", tag: "Consumer wellbeing", year: "2024" },
];

const testimonials = [
  {
    quote:
      "They shipped in six weeks what our internal team had chased for a year — and the codebase reads like prose.",
    author: "Head of Product, fintech Series B",
  },
  {
    quote:
      "The rare partner who says less, and means more. Every meeting moved us forward.",
    author: "Founder, health platform",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ambient orbs */}
      <div className="orb h-[520px] w-[520px] -left-40 -top-40 bg-rust/40" />
      <div className="orb h-[480px] w-[480px] right-[-160px] top-[220px] bg-moss/30" />
      <div className="orb h-[600px] w-[600px] left-1/3 top-[1200px] bg-rust/20" />

      {/* Nav */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-rust" />
            <span className="font-display text-2xl leading-none tracking-tight">QuietGrowth</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-cream/70 md:flex">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="transition hover:text-cream">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-sm transition hover:border-cream/40 hover:bg-cream/10"
          >
            Start a conversation →
          </a>
        </div>
      </header>

      {/* Hero — single fold */}
      <section className="relative z-10 flex min-h-[calc(100svh-96px)] items-center">
        <div className="grain relative mx-auto w-full max-w-7xl px-6 py-10">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cream/70">
            <span className="h-1.5 w-1.5 rounded-full bg-moss animate-pulse" />
            Now booking Q1 partnerships
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[0.98] tracking-tight">
            Get <span className="gradient-text animate-shimmer">AI-ready</span> with the team
            <br className="hidden sm:block" /> behind <span className="text-cream/70">QuietGrowth</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-cream/70 md:text-lg">
            We partner with founders and operators to turn AI from a buzzword into shipped,
            durable product infrastructure. A handful of engagements a year — yours could be one.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink-950 transition hover:bg-rust hover:text-cream"
            >
              Start a project
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-6 py-3 text-sm text-cream/80 transition hover:border-cream/40 hover:text-cream"
            >
              See our work
            </a>
          </div>

          {/* compact metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-cream/10 pt-6 md:grid-cols-4 md:gap-6">
            {[
              ["12", "shipped platforms"],
              ["6 wks", "median first release"],
              ["4", "engagements a year"],
              ["100%", "founder referrals"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-2xl tracking-tight text-cream md:text-3xl">{k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-cream/50 md:text-xs">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach / Pillars */}
      <section id="approach" className="relative z-10 border-t border-cream/10 bg-ink-900/50">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cream/50">The approach</p>
              <h2 className="mt-4 max-w-2xl font-display text-5xl leading-tight tracking-tight md:text-6xl">
                Slow is smooth. <span className="text-cream/60">Smooth is fast.</span>
              </h2>
            </div>
            <p className="max-w-md text-cream/70">
              Three principles that show up in every engagement — from first sketch to the fifth
              release six months on.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="glass p-10">
                <div className="font-display text-cream/40">{p.kicker}</div>
                <h3 className="mt-6 font-display text-3xl tracking-tight">{p.title}</h3>
                <p className="mt-4 text-cream/70">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cream/50">Our product</p>
              <h2 className="mt-4 font-display text-5xl leading-tight tracking-tight md:text-6xl">
                <span className="gradient-text">Grove</span> — the calm operating layer for growing teams.
              </h2>
              <p className="mt-6 max-w-xl text-cream/70">
                Grove is the platform we wished existed when we ran our own teams. It weaves your
                data, your rituals, and your writing into one quiet surface — so decisions happen
                where they should, and the noise stays outside.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  "One thread from insight to shipped change",
                  "Composable metrics that read like sentences",
                  "AI that drafts, never decides",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-cream/80">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-rust" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-sm text-cream underline decoration-cream/30 underline-offset-8 transition hover:decoration-rust"
              >
                Request early access →
              </a>
            </div>

            <div className="relative">
              <div className="glass animate-float relative overflow-hidden rounded-3xl p-2">
                <div className="rounded-2xl bg-ink-900 p-6">
                  <div className="flex items-center gap-2 border-b border-cream/10 pb-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                    <span className="ml-3 text-xs text-cream/40">grove / dashboard</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      { k: "Active retention", v: "92.4%", d: "+2.1 this week" },
                      { k: "Weekly rituals shipped", v: "18", d: "on cadence" },
                      { k: "Decisions logged", v: "47", d: "traceable to metrics" },
                    ].map((row) => (
                      <div key={row.k} className="flex items-baseline justify-between border-b border-cream/5 pb-3 last:border-0">
                        <span className="text-sm text-cream/60">{row.k}</span>
                        <span className="font-display text-2xl tracking-tight">{row.v}</span>
                        <span className="text-xs text-moss">{row.d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-24 w-full rounded-lg bg-gradient-to-r from-rust/30 via-cream/10 to-moss/30" />
                </div>
              </div>
              <div className="orb -bottom-16 -right-10 h-64 w-64 bg-moss/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative z-10 border-t border-cream/10 bg-ink-900/60">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-5xl tracking-tight md:text-6xl">Selected work</h2>
            <a href="#" className="hidden text-sm text-cream/60 underline underline-offset-8 md:inline">
              Full archive →
            </a>
          </div>
          <div className="mt-14 divide-y divide-cream/10 border-y border-cream/10">
            {work.map((w) => (
              <a
                key={w.name}
                href="#"
                className="group flex items-baseline justify-between py-8 transition hover:bg-cream/[0.03] hover:px-4"
              >
                <div className="flex items-baseline gap-8">
                  <span className="font-display text-4xl tracking-tight md:text-6xl">{w.name}</span>
                  <span className="text-sm text-cream/50">{w.tag}</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-cream/50">
                  <span>{w.year}</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.author} className="glass rounded-3xl p-10">
                <blockquote className="font-display text-3xl leading-snug tracking-tight text-cream md:text-4xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm uppercase tracking-widest text-cream/50">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-32">
          <div className="glass relative overflow-hidden rounded-3xl px-10 py-20 text-center md:px-20 md:py-28">
            <div className="orb -top-24 left-1/2 h-96 w-96 -translate-x-1/2 bg-rust/40" />
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50">Let’s build something enduring</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-tight tracking-tight md:text-7xl">
              Tell us what you’re making. <span className="gradient-text">We’ll listen first.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@quietgrowthtech.com"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink-950 transition hover:bg-rust hover:text-cream"
              >
                hello@quietgrowthtech.com
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-7 py-3.5 text-sm text-cream/80 transition hover:border-cream/40 hover:text-cream"
              >
                Book an intro call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-rust" />
            <span className="font-display text-xl">QuietGrowth Tech</span>
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-cream/60">
            <a href="#product" className="hover:text-cream">Product</a>
            <a href="#approach" className="hover:text-cream">Approach</a>
            <a href="#work" className="hover:text-cream">Work</a>
            <a href="#contact" className="hover:text-cream">Contact</a>
          </div>
          <p className="text-xs text-cream/40">© {new Date().getFullYear()} QuietGrowth Tech. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
