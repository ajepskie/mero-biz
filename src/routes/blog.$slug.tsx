import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Byline, CTASection, posts } from "@/components/site";

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
    { property: "og:url", content: `/blog/${loaderData.slug}` },
    { name: "author", content: loaderData.author },
  ] : [{ title: "Post not found — Mero Biz" }, { name: "robots", content: "noindex" }],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.slug}` }] : [],
    scripts: loaderData ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: loaderData.title, description: loaderData.excerpt, datePublished: new Date(loaderData.date).toISOString().slice(0, 10), author: { "@type": "Person", name: loaderData.author, url: "/about" }, publisher: { "@type": "Organization", name: "Mero Biz" } }) }] : [] }),
  component: Post,
});

function Post() {
  const p = Route.useLoaderData();
  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <Link to="/blog" className="text-sm font-semibold text-primary">← Blog</Link>
        <h1 className="mt-6 font-display text-5xl font-bold leading-tight">{p.title}</h1>
        <Byline author={p.author} date={p.date} />
        <div className="mt-8 space-y-5 text-lg leading-relaxed">{p.body.map((b) => <p key={b}>{b}</p>)}</div>
      </article>
      <CTASection />
    </>
  );
}
