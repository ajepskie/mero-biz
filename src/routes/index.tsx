import { createFileRoute, Link } from "@tanstack/react-router";
import { DownloadButtons, CTASection, features, PLAY_URL, STORE_URL } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mero Biz — Offline-First ERP & POS for Windows" },
    { name: "description", content: "Enterprise-grade, 100% offline-first ERP and POS for retail, restaurants, hotels, salons, wholesale and cooperatives." },
    { property: "og:title", content: "Mero Biz — Offline-First ERP & POS" },
    { property: "og:description", content: "Run your whole business offline with zero cloud fees." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "/" },
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Mero Biz", alternateName: ["मेरो बिज", "Karobar Ghar"],
    applicationCategory: "BusinessApplication", operatingSystem: "Windows, Android",
    description: "Offline-first ERP and POS for retail, restaurant, hotel, salon, wholesale and cooperative businesses.",
    downloadUrl: [STORE_URL, PLAY_URL], sameAs: [STORE_URL, PLAY_URL], author: { "@type": "Person", name: "Sadiksha Rana" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  }) }] }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">मेरो बिज · Karobar Ghar</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">The business operating system that works without internet.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">ERP and POS for retail, restaurants, hotels, salons, wholesale and cooperatives. Your data stays on your device — fast, private, and free of cloud fees.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <DownloadButtons light />
            <Link to="/features" className="rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold">See features</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {[["100%", "Offline-first"], ["6-in-1", "Industry verticals"], ["₹0", "Recurring cloud fees"]].map(([a, b]) => (
          <div key={b} className="rounded-2xl border bg-card p-8"><div className="font-display text-4xl font-bold text-primary">{a}</div><div className="mt-1 text-muted-foreground">{b}</div></div>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-bold">Built for how you do business</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.slice(0, 3).map(([i, t, d]) => (
            <div key={t} className="rounded-2xl bg-secondary p-6"><div className="text-3xl">{i}</div><h3 className="mt-3 font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <Link to="/features" className="mt-6 inline-block font-semibold text-primary">All features →</Link>
      </section>
      <CTASection />
    </>
  );
}
