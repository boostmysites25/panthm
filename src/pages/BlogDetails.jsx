import React, { lazy } from "react";
import img from "../assets/images/services/uiux1.jpg";
import { Calendar, User, Clock } from "lucide-react";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const BlogDetails = () => {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="wrapper relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><Calendar size={16} /> Oct 24, 2024</span>
            <span className="flex items-center gap-2"><User size={16} /> Admin</span>
            <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptatem vero aut earum molestias recusandae.
          </h1>
        </div>
      </div>

      <div className="wrapper py-12 max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
          <img
            src={img}
            className="w-full aspect-video object-cover"
            alt="Blog Cover"
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. The Digital-First Consumer Mindset
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            In 2024, more than ever, consumers are turning to digital platforms
            to research products and services before making decisions. Whether
            they’re searching for reviews, comparing prices, or exploring
            options, your online presence is often their first impression of
            your business. A strong digital presence ensures you’re visible,
            credible, and accessible when potential customers are looking for
            solutions you provide.
          </p>
          <div className="bg-slate-50 border-l-4 border-primary p-6 mb-8 rounded-r-xl">
            <p className="text-slate-700 font-medium italic">
              <span className="font-bold not-italic text-primary block mb-2">Key Insight:</span>
              Businesses with optimized websites, active social media profiles, and engaging
              content are more likely to attract and retain customers than those
              without a robust online strategy.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Increased Competition in the Digital Space
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            As more businesses recognize the importance of going digital,
            competition in online markets has become fiercer. Having a
            professional, user-friendly website and an active presence on
            platforms where your target audience spends their time is vital to
            standing out.
          </p>
          <div className="bg-slate-50 border-l-4 border-secondary p-6 mb-8 rounded-r-xl">
            <p className="text-slate-700 font-medium italic">
              <span className="font-bold not-italic text-secondary block mb-2">Actionable Tip:</span>
              Leverage search engine optimization (SEO) strategies, high-quality content, and
              targeted online advertising to ensure your brand remains competitive
              and easily discoverable.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Mobile-First Indexing and User Behavior
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            With the majority of internet traffic coming from mobile devices,
            it’s crucial to have a mobile-optimized website. Mobile-first
            indexing by search engines like Google prioritizes sites that
            deliver excellent experiences on mobile devices, directly impacting
            your visibility and rankings.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            <span className="font-bold text-slate-900">Why It Matters:</span> A seamless mobile
            experience not only boosts your search engine rankings but also
            enhances user satisfaction, leading to higher conversion rates.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            4. The Role of Social Media and Engagement
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Social media continues to be a powerful tool for connecting with
            audiences, building brand loyalty, and driving traffic to your
            website. Platforms like Instagram, LinkedIn, and TikTok offer unique
            opportunities to showcase your products, share your story, and
            engage with customers in meaningful ways.
          </p>
          <div className="bg-slate-50 border-l-4 border-primary p-6 mb-8 rounded-r-xl">
            <p className="text-slate-700 font-medium italic">
              <span className="font-bold not-italic text-primary block mb-2">Pro Tip:</span>
              Use analytics to understand what content resonates most with your audience and tailor
              your social media strategy accordingly. Consistent posting and
              genuine engagement can significantly enhance your brand’s
              visibility.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            5. The Rise of AI and Personalization
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Artificial Intelligence (AI) has transformed how businesses approach
            customer interactions. Personalized experiences, powered by
            AI-driven insights, can significantly enhance customer satisfaction
            and loyalty. From chatbots that provide instant assistance to
            tailored product recommendations, personalization is key in 2024.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            <span className="font-bold text-slate-900">Example:</span> Use AI tools to analyze
            user behavior on your website and deliver personalized offers or
            content that meets their specific needs.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            6. Building Trust Through Authenticity
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Consumers today value authenticity more than ever. A strong digital
            presence isn’t just about being visible—it’s about being relatable
            and trustworthy. Transparent communication, user-generated content,
            and responsive customer service can help build lasting relationships
            with your audience.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            <span className="font-bold text-slate-900">Tip for Success:</span> Showcase
            testimonials, case studies, and behind-the-scenes content to
            humanize your brand and connect with your audience on a deeper
            level.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            7. Future-Proofing Your Business
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            A robust digital presence equips your business to adapt to changing
            trends and technologies. By investing in your online presence now,
            you’re setting the stage for long-term success and resilience in a
            constantly shifting market.
          </p>
          <div className="bg-slate-50 border-l-4 border-secondary p-6 mb-8 rounded-r-xl">
            <p className="text-slate-700 font-medium italic">
              <span className="font-bold not-italic text-secondary block mb-2">Forward-Thinking Strategy:</span>
              Stay updated on emerging technologies like blockchain, the metaverse, and
              voice search to ensure your business remains relevant and
              competitive.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 py-20">
        <BlogsSection />
      </div>
    </div>
  );
};

export default BlogDetails;
