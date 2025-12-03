import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchPublishedBlogs } from "../api/blogApi";
import { LoadingSpinner } from "../components/LoadingSpinner";
import SEO from "../components/SEO";

const Blogs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "PANTHM AI Labs Blog",
    "description": "Insights, trends, and strategies from the forefront of digital innovation. Expert articles on web development, app development, AI, and technology.",
    "publisher": {
      "@type": "Organization",
      "name": "PANTHM AI Labs"
    }
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["publishedBlogs"],
    queryFn: fetchPublishedBlogs,
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="pt-32 pb-20 bg-slate-50 min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="wrapper">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading mb-4">Error Loading Blogs</h1>
            <p className="text-slate-600 text-lg">
              {error?.message || "Failed to load blogs. Please try again later."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const blogs = data?.blogs || [];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <SEO
        title="Blogs"
        description="Read insights, trends, and strategies from PANTHM AI Labs. Expert articles on web development, mobile app development, AI solutions, blockchain, and technology innovation."
        keywords="technology blog, web development blog, app development blog, AI blog, software development articles, tech insights, digital innovation blog"
        structuredData={structuredData}
      />
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 data-aos="fade-up" className="heading">
            Our <span className="text-primary">Journal</span>
          </h1>
          <p data-aos="fade-up" className="text-slate-600 text-lg">
            Insights, trends, and strategies from the forefront of digital innovation.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-600 text-lg">No blogs available at the moment.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <div
                key={blog._id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="relative overflow-hidden aspect-video block"
                >
                  <img
                    src={blog.imageUrl || "https://via.placeholder.com/800x450"}
                    alt={blog.imageAlt || blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  {blog.categoryId && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                      {blog.categoryId.name}
                    </div>
                  )}
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(blog.publishDate || blog.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{blog.author?.name || blog.authorId?.name || "Admin"}</span>
                    </div>
                  </div>

                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors"
                  >
                    {blog.title}
                  </Link>

                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">
                    {blog.excerpt || "Read more about this article..."}
                  </p>

                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
