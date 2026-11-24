import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mero Biz — Who Builds It and Why" },
      { name: "description", content: "Meet Sadiksha Rana, the developer behind Mero Biz, and learn why we built an offline-first ERP & POS for local businesses." },
      { property: "og:title", content: "About Mero Biz" },
      { property: "og:description", content: "The people and mission behind the offline-first business app." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Mero Biz", founder: { "@type": "Person", name: "Sadiksha Rana" }, sameAs: ["https://apps.microsoft.com/detail/9P5QGP9P0R6T"] }) }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-5xl font-bold">Built for real businesses</h1>
        <p className="mt-6 text-lg leading-relaxed">Mero Biz (मेरो बिज / Karobar Ghar) was created by <strong>Sadiksha Rana</strong> to give shops, restaurants, hotels, salons, wholesalers and cooperatives software that keeps working when the internet doesn't.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[["Experience", "Designed around everyday workflows: counter billing, kitchen tickets, room audits and member passbooks."], ["Expertise", "Tax logic follows the Nepal VAT Act and the Philippines EOPT Act, with statutory books and invoices."], ["Trust", "Your data stays on your device. Published on the Microsoft Store and reviewed by Microsoft."]].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-secondary p-6"><h2 className="font-semibold">{t}</h2><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
