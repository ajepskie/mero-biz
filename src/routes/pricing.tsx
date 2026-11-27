import { createFileRoute, Link } from "@tanstack/react-router";

const plans = [
  { term: "3 months", price: "5,275", perMonth: "1,758", discount: "5% off", savings: "275" },
  { term: "6 months", price: "9,450", perMonth: "1,575", discount: "15% off", savings: "1,650" },
  {
    term: "1 year",
    price: "16,650",
    perMonth: "1,388",
    discount: "25% off",
    savings: "5,550",
    featured: true,
  },
  { term: "2 years", price: "28,850", perMonth: "1,202", discount: "35% off", savings: "15,550" },
  { term: "3 years", price: "38,650", perMonth: "1,074", discount: "42% off", savings: "27,950" },
  { term: "4 years", price: "46,150", perMonth: "962", discount: "48% off", savings: "42,650" },
  { term: "5 years", price: "49,950", perMonth: "833", discount: "55% off", savings: "61,050" },
] as const;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Mero Biz" },
      {
        name: "description",
        content:
          "Explore Mero Biz subscription plans, pricing in Nepalese rupees, and long-term savings.",
      },
      { property: "og:title", content: "Mero Biz Pricing" },
      {
        property: "og:description",
        content: "Choose a Mero Biz plan that works for your business.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-semibold uppercase tracking-[0.18em] text-primary">
          Simple, transparent plans
        </p>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
          Pricing that grows with you
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Choose a plan for your business. Pay once, and save more with a longer subscription.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto rounded-2xl border bg-card shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <caption className="sr-only">
            Mero Biz subscription plans priced in Nepalese rupees
          </caption>
          <thead>
            <tr className="border-b bg-secondary/60 text-sm text-muted-foreground">
              <th scope="col" className="px-6 py-4 font-semibold">
                Plan
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                Per month
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                Discount
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                You save
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr
                key={plan.term}
                className={`border-b last:border-b-0 ${plan.featured ? "bg-primary/5 font-semibold text-foreground" : ""}`}
              >
                <th scope="row" className="whitespace-nowrap px-6 py-5 text-base">
                  {plan.term}
                  {plan.featured && (
                    <span className="ml-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      Best value
                    </span>
                  )}
                </th>
                <td className="whitespace-nowrap px-6 py-5">NPR {plan.price}</td>
                <td className="whitespace-nowrap px-6 py-5">NPR {plan.perMonth}</td>
                <td className="whitespace-nowrap px-6 py-5">{plan.discount}</td>
                <td className="whitespace-nowrap px-6 py-5">NPR {plan.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground">
          Need help choosing a plan? Our team is happy to help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-105"
        >
          Talk to a salesperson{" "}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
