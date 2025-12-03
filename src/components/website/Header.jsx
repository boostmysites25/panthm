import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import { X, ArrowRight } from "lucide-react";
import { companyDetails, logo } from "../../data/constant";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-lg shadow-slate-200/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="wrapper flex items-center justify-between">
        <Link to="/" className="cursor-pointer z-50">
          <img
            src={logo}
            alt="PANTHM AI Labs"
            className="h-10 md:h-12 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full border border-white/40 shadow-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                pathname === link.path ? "text-primary" : "text-slate-600"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === link.path ? "w-full" : ""}`}></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to={`https://wa.me/${companyDetails.phone}`}
            className="primary-btn text-sm px-6 py-2.5"
          >
            Let's Talk <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden z-50">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="#0F172A"
            rounded
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="!w-full sm:!w-[350px] !bg-white/95 !backdrop-blur-xl"
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="logo" className="h-10 object-contain" />
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} className="text-slate-900" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold transition-colors ${
                  pathname === link.path ? "text-primary" : "text-slate-800 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Link
              to={`https://wa.me/${companyDetails.phone}`}
              className="primary-btn w-full justify-center py-4 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
