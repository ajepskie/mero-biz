export type PricingMarket = "NP" | "PH";

export type PricingPlan = {
  term: string;
  price: string;
  perMonth: string;
  discount: string;
  savings: string;
  featured?: boolean;
};

export const pricingPlans: Record<PricingMarket, PricingPlan[]> = {
  NP: [
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
  ],
  PH: [
    { term: "3 months", price: "2,250", perMonth: "750", discount: "0%", savings: "n/a" },
    { term: "6 months", price: "4,200", perMonth: "700", discount: "7% off", savings: "300" },
    {
      term: "1 year",
      price: "7,500",
      perMonth: "625",
      discount: "17% off",
      savings: "1,500",
      featured: true,
    },
    { term: "2 years", price: "13,500", perMonth: "563", discount: "25% off", savings: "4,500" },
    { term: "3 years", price: "18,900", perMonth: "525", discount: "30% off", savings: "8,100" },
    { term: "4 years", price: "23,400", perMonth: "488", discount: "35% off", savings: "12,600" },
    { term: "5 years", price: "27,000", perMonth: "450", discount: "40% off", savings: "18,000" },
  ],
};

export function getPricingMarket(countryCode: string | null | undefined): PricingMarket {
  return countryCode?.trim().toUpperCase() === "NP" ? "NP" : "PH";
}
