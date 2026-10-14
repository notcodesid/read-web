import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPost, posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found", robots: { index: false, follow: false } };
  const selfUrl = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: selfUrl },
    openGraph: {
      title: post.title,
      description: post.dek,
      url: selfUrl,
      siteName: "Read",
      locale: "en_US",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.dek,
      images: ["https://read.notcodesid.com/og.png"],
    },
  };
}

const imgClass =
  "w-full max-w-[420px] mx-auto rounded-3xl border border-black/[0.06] shadow-sm";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const siteUrl = "https://read.notcodesid.com";
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.dek,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { "@type": "Person", name: post.author, url: siteUrl },
    publisher: { "@type": "Organization", name: "Read", url: siteUrl, logo: `${siteUrl}/icon.png` },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main
        id="main-content"
        className="px-6 sm:px-10 lg:px-14 pt-32 sm:pt-40 pb-20 sm:pb-28"
      >
        <article className="max-w-[720px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-950 mb-10"
          >
            ← all posts
          </Link>

          <p className="text-xs font-mono tracking-widest text-zinc-600 mb-5">
            / introducing read 1.0 · <time dateTime={post.datePublished}>{post.date}</time> · {post.readingTime}
          </p>
          <h1 className="text-[40px] sm:text-[60px] font-normal tracking-[-0.045em] leading-[1.05] text-[#111b14]">
            {post.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-600">
            {post.dek}
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            by {post.author} · originally published on{" "}
            <a
              href={post.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-zinc-800"
            >
              substack
            </a>
          </p>

          <img
            src="https://substackcdn.com/image/fetch/$s_!TkO5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa99bf977-5eb0-46e8-9d71-c049af1055fc_1250x1392.png"
            alt="Read minimalist essay reader app — save, read, finish overview"
            width={840}
            height={935}
            decoding="async"
            className={`${imgClass} mt-12`}
            loading="eager"
            fetchPriority="high"
          />

          <div className="info-copy mt-12 text-[17px] leading-[1.85] text-zinc-600 space-y-6">
            <p>let me tell you a story.</p>
            <p>
              every morning, a guy opens his phone to read something. almost an
              hour later, he has been scrolling reels, and the article is still
              there. unread. he does this every day.
            </p>
            <p>
              that guy was me. and i believe most of you are the same as me.
            </p>
            <p>
              your phone has two kinds of apps. apps that steal your time and
              attention. and apps that give it back. almost all of them steal.
              your phone is a casino with a library inside.
            </p>
            <p>
              so i asked one simple question. what would the other kind look
              like?
            </p>
            <p>it looks like this. three things.</p>

            <h2 className="text-2xl sm:text-[28px] font-normal tracking-tight text-[#111b14] pt-4">
              one — save anything with one tap.
            </h2>
            <p>articles, essays, newsletters. anything you like in the internet.</p>
            <img
              src="https://substackcdn.com/image/fetch/$s_!vvtq!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6186c493-8475-4d58-8857-05ba7a4a5228_1232x1546.png"
              alt="Saving a public article link to Read collection shelf on iPhone"
              width={820}
              height={1029}
              decoding="async"
              className={imgClass}
              loading="lazy"
            />

            <h2 className="text-2xl sm:text-[28px] font-normal tracking-tight text-[#111b14] pt-4">
              two — read it clean.
            </h2>
            <p>
              nice text. see how far you&apos;ve come. keep the lines you love.
              works offline. no ads. no noise. nothing.
            </p>
            <img
              src="https://substackcdn.com/image/fetch/$s_!1DKf!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c15782a-deb2-4ae2-b665-99caa269a084_1232x1546.png"
              alt="Read clean paperback typography reading view with progress on iPhone"
              width={820}
              height={1029}
              decoding="async"
              className={imgClass}
              loading="lazy"
            />

            <h2 className="text-2xl sm:text-[28px] font-normal tracking-tight text-[#111b14] pt-4">
              three — finish.
            </h2>
            <p>
              this is the big one. locked in mode. you start reading, the noisy
              apps go away till you&apos;re done.
            </p>
            <img
              src="https://substackcdn.com/image/fetch/$s_!WG7Y!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3433e6c4-ba08-4a92-bebe-5bb00d0e6e2c_1232x1546.png"
              alt="Read Locked In focus mode blocking distracting apps on iPhone"
              width={820}
              height={1029}
              decoding="async"
              className={imgClass}
              loading="lazy"
            />

            <p className="text-[#111b14] font-medium">save. read. finish.</p>

            <h2 className="text-2xl sm:text-[28px] font-normal tracking-tight text-[#111b14] pt-4">
              now, where does this go?
            </h2>
            <p>
              today, read is a quiet home for all your articles, blogs, or
              anything you find interesting on the internet.
            </p>
            <p>
              you finish a little every week. your notes and saved lines pile
              up. the app starts to see what you like, say, startups. so one
              morning it hands you a great startup essay, right when you want
              to read.
            </p>
            <p>
              that&apos;s something i always wanted. to read a lot, based on
              what i&apos;m into and how i spend my time. not a feed shouting
              suggestions at you but more like a reader friend who knows your
              taste, sharing something good with you.
            </p>
            <p>that&apos;s it. your shelf becomes proof of everything you love.</p>
            <p>
              imagine tomorrow. where you pick up your phone. one essay you want
              to read. twenty quiet minutes. no reels. no noise. just you and
              the words. that&apos;s the whole point.
            </p>
            <img
              src="https://substackcdn.com/image/fetch/$s_!93GS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbee77980-ab51-4023-ace7-3ec2824082d6_1232x1546.png"
              alt="Read personal shelf of saved essays and articles on iPhone"
              width={820}
              height={1029}
              decoding="async"
              className={imgClass}
              loading="lazy"
            />
            <p className="text-[#111b14] font-medium">that&apos;s read 1.0.</p>
          </div>

          <div className="mt-14 rounded-3xl bg-[#18181b] text-[#f5f4ef] p-8 sm:p-10 space-y-4">
            <p className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
              / try it
            </p>
            <p className="text-xl sm:text-2xl font-normal tracking-tight">
              twenty quiet minutes. just you and the words.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://testflight.apple.com/join/cmbsq8e5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f5f4ef] text-[#18181b] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors"
              >
                try read on testflight
              </a>
              <a
                href="https://read.notcodesid.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                visit the website
              </a>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between text-sm text-zinc-600">
            <Link href="/blog" className="hover:text-zinc-950">
              ← all posts
            </Link>
            <a
              href={post.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-zinc-950"
            >
              read on substack →
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
