import { describe, expect, it } from "vitest";

import { getPricingMarket } from "@/lib/pricing";

describe("pricing market detection", () => {
  it.each([
    ["NP", "NP"],
    ["np", "NP"],
    [" PH ", "PH"],
    ["US", "PH"],
    [undefined, "PH"],
  ])("maps country code %s to market %s", (countryCode, expectedMarket) => {
    expect(getPricingMarket(countryCode)).toBe(expectedMarket);
  });
});
