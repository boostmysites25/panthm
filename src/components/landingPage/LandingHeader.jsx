import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import { X, MessageCircle } from "lucide-react";
import { companyDetails, logo } from "../../data/constant";

const links = [
  {
    name: "Home",
    path: "/",
    scroll: false,
  },
  {
    name: "Services",
    path: "services",
    scroll: true,
  },
  {
    name: "Contact Us",
    path: "contact",
    scroll: true,
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="wrapper flex items-center justify-between">
        <Scroll
          to="banner"
          spy
          smooth
          duration={1000}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="PANTHM AI Labs"
            className="h-10 md:h-12 object-contain"
          />
        </Scroll>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) =>
            link.scroll ? (
              <Scroll
                key={link.name}
                to={link.path}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-primary"
                }`}
                spy={true}
                smooth={true}
                offset={-90}
                duration={1000}
                activeClass="!text-primary font-semibold"
              >
                {link.name}
              </Scroll>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-primary"
                } ${pathname === link.path && "!text-primary font-semibold"}`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to={`https://wa.me/${companyDetails.phone}`}
            className="primary-btn px-6 py-2.5 rounded-full flex items-center gap-2 text-sm"
          >
            Let's Chat <MessageCircle size={18} />
          </Link>
        </div>

        <div className="lg:hidden">
          <Hamburger
            color={scrolled ? "#000000" : "#ffffff"}
            size={24}
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="!w-[80%] sm:!w-[350px] p-6"
      >
        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt="logo" className="h-8 object-contain" />
          <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-900">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {links.map((link) =>
            link.scroll ? (
              <Scroll
                onClick={() => setIsOpen(false)}
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-slate-700 hover:text-primary transition-colors cursor-pointer"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1000}
              >
                {link.name}
              </Scroll>
            ) : (
              <Link
                onClick={() => setIsOpen(false)}
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-slate-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to={`https://wa.me/${companyDetails.phone}`}
            className="primary-btn w-full justify-center py-3 rounded-xl flex items-center gap-2 mt-4"
          >
            Let's Chat <MessageCircle size={20} />
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default LandingHeader;
