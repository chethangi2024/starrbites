import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
  Article,
} from "@/lib/articles";
import { ArticleDetailClient } from "@/components/blog/ArticleDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Starrbites Journal",
    };
  }

  const imageUrl = `https://starrbites.com${article.featuredImage}`;

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: article.canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: article.canonicalUrl,
      siteName: "Starrbites Developments",
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: article.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : undefined;
  const nextArticle =
    currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : undefined;

  const relatedArticles = getRelatedArticles(slug, article.category, 3);

  // Generate verified BlogPosting JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription,
    image: [`https://starrbites.com${article.featuredImage}`],
    datePublished: article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Starrbites Developments",
      url: "https://starrbites.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://starrbites.com/images/logo/starrbites-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.canonicalUrl,
    },
  };

  return (
    <>
      {/* Schema.org BlogPosting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleDetailClient
        article={article}
        relatedArticles={relatedArticles}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
      />
    </>
  );
}
