import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import FocusSection from "@/components/FocusSection";
import AuthorsSection from "@/components/AuthorsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PlansSection from "@/components/PlansSection";

export const metadata: Metadata = {
  title: "Read — A Minimalist Long-Form Essay & Article Reader",
  description:
    "Save anything, read it clean, and finish with Locked In mode. Read is a quiet home for essays, articles, and ideas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Read — A Minimalist Long-Form Essay & Article Reader",
    description:
      "Save anything, read it clean, and finish with Locked In mode. Read is a quiet home for essays, articles, and ideas.",
    url: "/",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Read — every essay you saved, finally read" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Read — A Minimalist Long-Form Essay & Article Reader",
    description:
      "Save anything, read it clean, and finish with Locked In mode. Read is a quiet home for essays, articles, and ideas.",
    images: ["https://read.notcodesid.com/og.png"],
  },
};

export default function Home() {
  const siteUrl = "https://read.notcodesid.com";
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Read",
    url: siteUrl,
  };
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Read",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
  };
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Read",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    url: siteUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I import articles from the web, Substack, or Medium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste a public article link and Read will try to extract a clean reading view. Some websites, private pages, and paywalled articles are not supported.",
        },
      },
      {
        "@type": "Question",
        name: "How does Lock In work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose how long you want to read. If you allow Screen Time access and pick apps, categories, or websites, Read pauses them until the timer ends; otherwise it is a plain reading timer. It does not silence every notification, and you can end the session early in Read.",
        },
      },
      {
        "@type": "Question",
        name: "Does Read work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saved text can be read offline after importing. You need internet access to import new articles or back up your library.",
        },
      },
      {
        "@type": "Question",
        name: "Can I export my highlights and notes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Read exports highlights and notes as a Markdown file through the iOS share sheet. You can import the file into apps such as Notion or Obsidian; it does not connect automatically to those accounts.",
        },
      },
    ],
  };
  return (
    <div className="relative min-h-screen bg-[#f5f4ef] text-[#111b14] overflow-x-hidden selection:bg-zinc-300 selection:text-[#111b14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      {/* 1. Nav */}
      <Header />

      <main id="main-content">
      {/* 2. Hero */}
      <Hero />

      {/* 3. How it works */}
      <FeaturesSection />

      {/* 4. Lock In */}
      <FocusSection />

      {/* 5. The personal shelf */}
      <AuthorsSection />

      {/* 6. FAQ */}
      <PlansSection />
      <FaqSection />

      {/* 8. Final CTA */}
      <CtaSection />

      </main>
      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
