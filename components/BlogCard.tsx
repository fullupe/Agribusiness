////import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { format } from "date-fns";
import Link from "next/link";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block card-elevated overflow-hidden ${
        featured ? "md:flex" : ""
      }`}
    >
      {/* Thumbnail placeholder */}
      <div
        className={`bg-primary/10 flex items-center justify-center ${
          featured ? "md:w-2/5 h-48 md:h-auto" : "h-48"
        }`}
      >
        <span className="text-primary/30 font-display text-lg">{post.category}</span>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? "md:w-3/5" : ""}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">
            {post.category}
          </span>
          {post.featured && (
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-accent/20 text-accent-foreground">
              Featured
            </span>
          )}
        </div>

        <h3
          className={`font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 ${
            featured ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {post.summary}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {format(new Date(post.publishedAt), "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min read
            </span>
          </div>

          <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
