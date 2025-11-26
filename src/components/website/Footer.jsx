import React from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { companyDetails, logo } from "../../data/constant";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purpleColor to-secondary"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="wrapper relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="PANTHM" className="h-12 object-contain" />
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Pioneering the future of digital interaction through AI, Blockchain, and immersive design.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="/"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Expertise</h4>
            <ul className="space-y-4">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${service.title}`}
                    className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Our Work", path: "/portfolio" }, // Assuming portfolio exists or links to section
                { name: "Insights", path: "/blogs" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {companyDetails.address}
                </p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <a href={`tel:${companyDetails.phone}`} className="text-slate-600 hover:text-primary transition-colors font-medium">
                  {companyDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <a href={`mailto:${companyDetails.email}`} className="text-slate-600 hover:text-primary transition-colors font-medium">
                  {companyDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} PANTHM AI Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
