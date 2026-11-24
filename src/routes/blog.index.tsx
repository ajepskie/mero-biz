import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/components/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Blog — Mero Biz" },
    { name: "description", content: "Tips on offline-first business software, tax compliance and growing your shop." },
    { property: "og:title", content: "Mero Biz Blog" },
    { property: "og:description", content: "Guides and news from the Mero Biz team." },
  ] }),
  component: Blog,
});

function Blog() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="font-display text-5xl font-bold">Blog</h1>
      <div className="mt-10 space-y-5">
        {posts.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block rounded-2xl border bg-card p-7 transition hover:border-primary">
            <div className="text-sm text-muted-foreground">{p.date}</div>
            <h2 className="mt-2 font-display text-2xl font-bold">{p.title}</h2>
            <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
