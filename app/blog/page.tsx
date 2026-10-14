import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on reading, attention, and Read 1.0 — essays and updates from the people making Read.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Read",
    description:
      "Notes on reading, attention, and Read 1.0 — essays and updates from the people making Read.",
    url: "/blog",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Read blog — notes on reading" }],
  },
};

export default function BlogIndex() {
  const siteUrl = "https://read.notcodesid.com";
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Read Blog — Notes on reading",
    url: `${siteUrl}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.dek,
      url: `${siteUrl}/blog/${p.slug}`,
      datePublished: p.datePublished,
      author: { "@type": "Person", name: p.author },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main
        id="main-content"
        className="px-6 sm:px-10 lg:px-14 pt-32 sm:pt-40 pb-20 sm:pb-28"
      >
        <div className="max-w-[1120px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-950 mb-10"
          >
            ← back to read
          </Link>
          <div className="max-w-[760px] mb-12 sm:mb-16">
            <p className="text-xs font-mono tracking-widest text-zinc-600 mb-5">
              / blog
            </p>
            <h1 className="text-[42px] sm:text-[64px] font-normal tracking-[-0.045em] leading-[1.05] text-[#111b14]">
              notes on reading.
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-600 max-w-[660px]">
              essays and updates from the people making read. first up: why we
              save everything and finish nothing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                aria-label={`Read post: ${post.title}`}
                className="group rounded-3xl bg-[#edeae1] p-8 border border-black/[0.04] hover:bg-[#e6e2d6] transition-colors flex flex-col justify-between gap-8"
              >
                <div className="space-y-4">
                  <p className="text-[11px] font-mono tracking-widest text-[#71717a] uppercase">
                    <time dateTime={post.datePublished}>{post.date}</time> · {post.readingTime}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#111b14] leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[15px] text-[#52525b] leading-relaxed">
                    {post.dek}
                  </p>
                </div>
                <span className="text-sm text-zinc-600 group-hover:text-zinc-950">
                  read the post →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
