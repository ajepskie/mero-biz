import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createFileRoute } from "@tanstack/react-router";
import { getPricingMarket, pricingPlans, pricingWhatsappUrls } from "@/lib/pricing";

const getVisitorPricingMarket = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest() as Request & { cf?: { country?: string } };
  return getPricingMarket(request.cf?.country ?? request.headers.get("cf-ipcountry"));
});

export const Route = createFileRoute("/pricing")({
  loader: async () => ({ market: await getVisitorPricingMarket() }),
  head: () => ({
    meta: [
      { title: "Pricing — Mero Biz" },
      {
        name: "description",
        content:
          "Explore Mero Biz subscription plans, pricing in Nepalese rupees and Philippine pesos.",
      },
      { property: "og:title", content: "Mero Biz Pricing" },
      {
        property: "og:description",
        content: "Choose a Mero Biz plan that works for your business, with local pricing.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  const { market } = Route.useLoaderData();
  const plans = pricingPlans[market];
  const currencyPrefix = market === "NP" ? "NPR " : "₱";
  const currencyName = market === "NP" ? "Nepalese rupees (NPR)" : "Philippine pesos (PHP)";

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
        <p className="mt-3 text-sm font-medium text-primary">
          Showing prices in {market === "NP" ? "Nepal" : "Philippines"}
        </p>
      </div>

      <div className="mt-12 overflow-x-auto rounded-2xl border bg-card shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <caption className="sr-only">
            Mero Biz subscription plans priced in {currencyName}
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
                <td className="whitespace-nowrap px-6 py-5">
                  {currencyPrefix}
                  {plan.price}
                </td>
                <td className="whitespace-nowrap px-6 py-5">
                  {currencyPrefix}
                  {plan.perMonth}
                </td>
                <td className="whitespace-nowrap px-6 py-5">{plan.discount}</td>
                <td className="whitespace-nowrap px-6 py-5">
                  {plan.savings === "n/a" ? "n/a" : `${currencyPrefix}${plan.savings}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground">
          Need help choosing a plan? Our team is happy to help.
        </p>
        <a
          href={pricingWhatsappUrls[market]}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:scale-105"
        >
          Talk to a salesperson{" "}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
