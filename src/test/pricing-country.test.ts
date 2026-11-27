import { describe, expect, it } from "vitest";

import { getPricingMarket, pricingWhatsappUrls } from "@/lib/pricing";

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

  it("uses the Nepal sales number only for the Nepal market", () => {
    expect(pricingWhatsappUrls.NP).toBe("https://wa.me/971543810741");
    expect(pricingWhatsappUrls.PH).toBe("https://wa.me/639974988958");
  });
});
