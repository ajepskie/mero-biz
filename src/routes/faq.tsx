import { createFileRoute } from "@tanstack/react-router";
import { CTASection, faqs } from "@/components/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Mero Biz Offline ERP & POS" },
      { name: "description", content: "Answers about Mero Biz: offline use, fees, supported businesses, Nepal VAT and Philippines BIR compliance, and downloads." },
      { property: "og:title", content: "Mero Biz FAQ" },
      { property: "og:description", content: "Common questions about the offline-first ERP & POS." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-5xl font-bold">Frequently asked questions</h1>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border bg-card p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold">{q}</summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
