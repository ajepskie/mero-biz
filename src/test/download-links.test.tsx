import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { DownloadButtons, PLAY_URL, STORE_URL, faqs } from "@/components/site";

describe("Download links", () => {
  it("offers both the Microsoft Store and Google Play", () => {
    render(<DownloadButtons />);

    expect(screen.getByRole("link", { name: /Microsoft Store/i })).toHaveAttribute("href", STORE_URL);
    expect(screen.getByRole("link", { name: /Google Play/i })).toHaveAttribute("href", PLAY_URL);
    expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument();
  });

  it("tells searchers the app is on both stores", () => {
    const downloadFaq = faqs.find(([q]) => /download/i.test(q));

    expect(downloadFaq?.[1]).toContain("Microsoft Store");
    expect(downloadFaq?.[1]).toContain("Google Play");
  });
});
