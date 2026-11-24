import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — Mero Biz" },
    { name: "description", content: "Questions about Mero Biz? Get in touch with our team." },
    { property: "og:title", content: "Contact Mero Biz" },
    { property: "og:description", content: "Talk to the Mero Biz team about your business." },
  ] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-xl border bg-card px-4 py-3 outline-none focus:border-primary";
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
      <div>
        <h1 className="font-display text-5xl font-bold">Let's talk</h1>
        <p className="mt-4 text-lg text-muted-foreground">Need a demo, help choosing a plan, or support with your setup? Send us a message and we'll get back within one business day.</p>
      </div>
      {sent ? (
        <div className="rounded-2xl bg-secondary p-10 text-center"><h2 className="font-display text-3xl font-bold">Thank you!</h2><p className="mt-2 text-muted-foreground">We've received your message.</p></div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
          <input required placeholder="Your name" className={input} />
          <input required type="email" placeholder="Email" className={input} />
          <select className={input} defaultValue=""><option value="" disabled>Business type</option>{["Retail", "Restaurant", "Hotel", "Salon", "Wholesale", "Cooperative"].map((o) => <option key={o}>{o}</option>)}</select>
          <textarea required rows={5} placeholder="Message" className={input} />
          <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Send message</button>
        </form>
      )}
    </section>
  );
}
