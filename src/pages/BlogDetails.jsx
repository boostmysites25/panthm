import React, { lazy } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "../api/blogApi";
import { Calendar, User, Clock } from "lucide-react";
import { LoadingSpinner } from "../components/LoadingSpinner";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const BlogDetails = () => {
  const { slug } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug),
    enabled: !!slug,
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const calculateReadTime = (content) => {
    if (!content) return "5 min read";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    const readTime = Math.ceil(words / 200);
    return `${readTime} min read`;
  };

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError || !data?.success || !data?.blog) {
    if (error?.message?.includes("404") || !data?.success) {
      return <Navigate to="/blogs" replace />;
    }
    return (
      <div className="pt-20 pb-20 min-h-screen">
        <div className="wrapper">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading mb-4">Error Loading Blog</h1>
            <p className="text-slate-600 text-lg">
              {error?.message || "Failed to load blog. Please try again later."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const blog = data.blog;

  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="wrapper relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-6 text-sm text-slate-300 flex-wrap">
            <span className="flex items-center gap-2">
              <Calendar size={16} />{" "}
              {formatDate(blog.publishDate || blog.createdAt)}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />{" "}
              {blog.author?.name || blog.authorId?.name || "Admin"}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> {calculateReadTime(blog.content)}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      <div className="wrapper py-12 max-w-4xl mx-auto">
        {blog.imageUrl && (
          <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
            <img
              src={blog.imageUrl}
              className="w-full aspect-video object-cover"
              alt={blog.imageAlt || blog.title}
            />
          </div>
        )}

        {blog.content ? (
          <div className="prose prose-lg prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }}  className='reset-html'/>
          </div>
        ) : (
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-slate-600 text-lg">{blog.excerpt}</p>
          </div>
        )}

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-slate-50 py-20">
        <BlogsSection />
      </div>
    </div>
  );
};

export default BlogDetails;
