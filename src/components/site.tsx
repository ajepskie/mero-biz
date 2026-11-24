import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const STORE_URL = "https://apps.microsoft.com/detail/9P5QGP9P0R6T?hl=en-us&gl=AE&ocid=pdpshare";

export function CTAButton({ children = "Get it on Microsoft Store", light = false }: { children?: ReactNode; light?: boolean }) {
  return (
    <a href={STORE_URL} target="_blank" rel="noreferrer"
      className={`inline-flex items-center rounded-full px-6 py-3 font-semibold transition hover:scale-105 ${light ? "bg-background text-primary" : "bg-accent text-accent-foreground"}`}>
      {children} →
    </a>
  );
}

export function Header() {
  const l = "text-sm font-medium text-muted-foreground hover:text-foreground [&.active]:text-foreground";
  return (
    <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl font-bold text-primary">Mero Biz</Link>
        <nav className="flex items-center gap-5">
          <Link to="/features" className={l}>Features</Link>
          <Link to="/blog" className={l}>Blog</Link>
          <Link to="/contact" className={l}>Contact</Link>
          <a href={STORE_URL} target="_blank" rel="noreferrer" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground sm:inline">Download</a>
        </nav>
      </div>
    </header>
  );
}

export function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="hero-gradient rounded-3xl p-10 text-center text-primary-foreground md:p-16">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Run your whole business — offline.</h2>
        <p className="mx-auto mt-4 max-w-xl opacity-85">No mandatory internet. No recurring cloud fees. Install Mero Biz on Windows today.</p>
        <div className="mt-8"><CTAButton /></div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      © 2026 Mero Biz (मेरो बिज) · Offline-first ERP & POS
    </footer>
  );
}

export const features = [
  ["🛒", "Retail & Grocery", "Barcode scanning, GRN purchases, FEFO batch tracking, expiry protection and fast counter POS billing."],
  ["🍽️", "Restaurant & Cafe", "Visual table tabs, 1-click KOT, local Wi-Fi kitchen display, split bills and takeaway tracking."],
  ["🏨", "Hotel PMS", "Room availability grid, guest KYC register, in-stay folio posting and daily night audits."],
  ["💇", "Salon, Beauty & Spa", "Workstation floor, live service timers, waiting lounge and advance deposit deductions."],
  ["📦", "Wholesale & Distribution", "Bulk unpacking, tiered pricing, B2B credit terms and route dispatch manifests with COD."],
  ["🏛️", "Cooperative Banking", "Member passbooks, reducing-balance EMI loans and statutory reserve fund allocations."],
] as const;

export const posts = [
  { slug: "why-offline-first", title: "Why offline-first beats the cloud for small businesses", date: "Nov 20, 2026", excerpt: "Internet outages shouldn't stop your counter. Here's how local data keeps you fast and fee-free.", body: ["Most POS systems stop working the moment the internet drops. For a busy shop or restaurant, that means lost sales and angry queues.", "Mero Biz stores all financial, inventory and customer data locally on your device. Billing stays instant, and you never pay a monthly cloud database fee.", "When you do connect, features like IRD CBMS sync run in the background — your business never waits on the network."] },
  { slug: "nepal-vat-compliance", title: "Staying compliant with the Nepal VAT Act", date: "Nov 12, 2026", excerpt: "Annex 5 & 6 books, tax invoices, credit notes and BS/AD calendars — handled automatically.", body: ["Nepal's VAT rules require proper sales and purchase books, correctly formatted tax invoices, and credit notes.", "Mero Biz generates Annex 5 Sales and Annex 6 Purchase Books, Schedule 5 invoices and Schedule 7 credit notes, with a trailing 12-month VAT threshold meter.", "Dual Bikram Sambat and AD calendars mean your reports always match what the tax office expects."] },
  { slug: "one-app-six-industries", title: "One app, six industries", date: "Nov 3, 2026", excerpt: "From grocery to hotels to cooperatives — how Mero Biz adapts to the way you work.", body: ["Every business is different. A salon needs service timers; a hotel needs a room grid; a cooperative needs passbooks.", "Mero Biz ships six industry verticals in a single install, so you only see the tools your business needs.", "Growing into a new line of business? Switch on another vertical — no new software required."] },
];
