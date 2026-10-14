export type BlogPostMeta = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  author: string;
  originalUrl: string;
};

export const SITE_URL = "https://read.notcodesid.com";

export const posts: BlogPostMeta[] = [
  {
    slug: "we-save-it-we-never-read-it",
    title: "we save it. we never read it",
    dek: "introducing read 1.0 — save anything, read it clean, and finish with locked in mode.",
    date: "oct 13, 2026",
    datePublished: "2026-10-13T08:00:00+05:30",
    dateModified: "2026-10-13T08:00:00+05:30",
    readingTime: "3 min read",
    author: "Sid",
    originalUrl: "https://substack.com/home/post/p-220204552",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
