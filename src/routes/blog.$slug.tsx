import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTASection, posts } from "@/components/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [
    { title: `${loaderData.title} — Mero Biz` },
    { name: "description", content: loaderData.excerpt },
    { property: "og:title", content: loaderData.title },
    { property: "og:description", content: loaderData.excerpt },
    { property: "og:type", content: "article" },
  ] : [{ title: "Post not found — Mero Biz" }, { name: "robots", content: "noindex" }] }),
  component: Post,
});

function Post() {
  const p = Route.useLoaderData();
  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <Link to="/blog" className="text-sm font-semibold text-primary">← Blog</Link>
        <div className="mt-6 text-sm text-muted-foreground">{p.date}</div>
        <h1 className="mt-2 font-display text-5xl font-bold leading-tight">{p.title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">{p.body.map((b) => <p key={b}>{b}</p>)}</div>
      </article>
      <CTASection />
    </>
  );
}
