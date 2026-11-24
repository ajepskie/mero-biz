import { createFileRoute } from "@tanstack/react-router";
import { CTASection, features } from "@/components/site";

export const Route = createFileRoute("/features")({
  head: () => ({ meta: [
    { title: "Features — Mero Biz" },
    { name: "description", content: "Retail POS, restaurant KOT, hotel PMS, salon, wholesale and cooperative banking plus Nepal & Philippines tax compliance." },
    { property: "og:title", content: "Mero Biz Features" },
    { property: "og:description", content: "Six industry verticals and multi-country tax compliance in one offline app." },
    { property: "og:url", content: "/features" },
  ], links: [{ rel: "canonical", href: "/features" }] }),
  component: Features,
});

function Features() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="font-display text-5xl font-bold">Everything your business needs</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Six industry verticals in one install, all working fully offline.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([i, t, d]) => (
            <div key={t} className="rounded-2xl border bg-card p-7"><div className="text-4xl">{i}</div><h2 className="mt-4 text-xl font-semibold">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <h2 className="mt-20 font-display text-4xl font-bold">Tax compliance, built in</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-secondary p-7"><h3 className="text-xl font-semibold">🇳🇵 Nepal</h3><p className="mt-2 text-muted-foreground">VAT Act Annex 5 & 6 books, Schedule 5 tax invoices, Schedule 7 credit notes, VAT threshold meter, BS & AD calendars, FY 2083/84 income tax slabs and live IRD CBMS sync.</p></div>
          <div className="rounded-2xl bg-secondary p-7"><h3 className="text-xl font-semibold">🇵🇭 Philippines</h3><p className="mt-2 text-muted-foreground">EOPT Act (RA 11976) ready: 12% VAT and non-VAT invoices, 3% percentage tax, 8% gross income option, and graduated individual & corporate slabs.</p></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
