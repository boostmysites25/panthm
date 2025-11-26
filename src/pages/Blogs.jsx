import React from "react";
import blog1 from "../assets/images/blogs/1.png";
import blog2 from "../assets/images/blogs/2.png";
import blog3 from "../assets/images/blogs/3.png";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const Blogs = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 data-aos="fade-up" className="heading">
            Our <span className="text-primary">Journal</span>
          </h1>
          <p data-aos="fade-up" className="text-slate-600 text-lg">
            Insights, trends, and strategies from the forefront of digital innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[blog1, blog2, blog3, blog1, blog2, blog3].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Link to={`/blogs/${i + 1}`} className="relative overflow-hidden aspect-video block">
                <img
                  src={item}
                  alt="Blog Cover"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                  Technology
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Oct 24, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>Admin</span>
                  </div>
                </div>

                <Link
                  to={`/blogs/${i + 1}`}
                  className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors"
                >
                  The Future of AI in Enterprise Software Development
                </Link>
                
                <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">
                  Discover how artificial intelligence is reshaping the landscape of software engineering, from automated testing to intelligent code generation.
                </p>

                <Link
                  to={`/blogs/${i + 1}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
