
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params.slug as string;
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    router.replace("/blog");
    return null;
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const publishDate = new Date(post.publishedAt);
  const canonicalUrl = `https://arcltd.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Agribusiness and Research Consultancy Ltd",
      url: "https://arcltd.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <Head>
        <title>{post.title} | ARC Ltd Blog</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>

      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-foreground/10 text-primary-foreground mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author.name}, {post.author.role}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(publishDate, "MMMM d, yyyy")}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-slate max-w-none">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: formatMarkdown(post.content),
                }}
              />
            </article>

            {/* Author Box */}
            <div className="mt-12 p-6 rounded-xl bg-muted flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">
                  {post.author.name}
                </div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-wide mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Related Articles
              </h2>
              <Button asChild variant="outline" size="sm">
                <Link href="/blog">
                  View All
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function formatMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl font-semibold text-foreground mt-8 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl font-semibold text-foreground mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="text-muted-foreground ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc space-y-2 my-4">$&</ul>')
    .replace(/^\d+\. (.+)$/gm, '<li class="text-muted-foreground ml-4">$1</li>')
    .replace(/^(?!<[hlu])(.+)$/gm, (match) => {
      if (match.trim() && !match.startsWith("<")) {
        return `<p class="text-muted-foreground leading-relaxed mb-4">${match}</p>`;
      }
      return match;
    })
    .replace(/<p class="[^"]*"><\/p>/g, "");
}