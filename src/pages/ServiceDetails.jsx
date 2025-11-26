import React, { lazy } from "react";
import { Navigate, useParams } from "react-router-dom";
import { services } from "../data/services";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const ServiceDetails = () => {
  const { name } = useParams();
  const data = services.find((service) => service.title === name);
  if (!data) return <Navigate to="/" />;
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-20 text-white">
        <div className="wrapper">
          <h1 className="heading max-w-4xl text-white">{data.title}</h1>
        </div>
      </div>
      
      <div className="wrapper py-20 space-y-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="prose prose-lg prose-slate"
              dangerouslySetInnerHTML={{ __html: data.html.firstSection }}
            ></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={data.detailsPageImages.first}
              className="w-full h-full object-cover"
              alt={data.title}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={data.detailsPageImages.second}
              className="w-full h-full object-cover"
              alt={data.title}
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div
              className="prose prose-lg prose-slate"
              dangerouslySetInnerHTML={{ __html: data.html.secondSection }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className="prose prose-lg prose-slate"
              dangerouslySetInnerHTML={{ __html: data.html.thirdSection }}
            ></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={data.detailsPageImages.third}
              className="w-full h-full object-cover"
              alt={data.title}
            />
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 py-20">
        <BlogsSection />
      </div>
    </div>
  );
};

export default ServiceDetails;
