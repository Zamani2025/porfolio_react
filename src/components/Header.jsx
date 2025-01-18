import React, { useState, useCallback, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAngleRight, FaThList } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/service", name: "Service" },
    { url: "/portfolio", name: "Portfolio" },
    { url: "/skills", name: "Skills" },
    { url: "/contact", name: "Contact" },
  ];

  return (
    <header
      className={`${
        isSticky
          ? "sticky top-0 z-50 bg-white shadow-lg transform animate-fade-in-up"
          : "relative transform scale-100"
      } lg:h-24 h-20 w-[100%] z-50 border-b transition-all duration-500`}
    >
      <div className="w-full container mx-auto h-full flex px-4 items-center justify-between gap-2">
        {/* Logo */}
        <Link to="/" className="lg:text-5xl text-4xl font-bold">
          <span className="text-primary-200">S</span>aani.
        </Link>

        {/* Desktop Navigation */}
        <nav className="w-full hidden lg:flex h-full items-center justify-center gap-12 uppercase">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={`${item.url}`}
              className={({ isActive }) =>
                `font-semibold duration-300 transition-all ${
                  isActive
                    ? "text-primary-200 animate-fade-in-up"
                    : "hover:text-primary-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <Link to={"/contact"} className="bg-gradient-to-tr from-primary-200 to-primary-300 cursor-pointer hover:bg-primary-200 hidden lg:flex items-center overflow-hidden justify-center font-bold text-md px-8 shadow-lg shadow-gray-300 duration-300 relative transition-all uppercase text-white rounded-full py-4 lg:w-[250px] text-center group">
          <span className="z-50">Contact Us</span>
          <FaAngleRight className="z-50 text-white" />
          <div className="absolute inset-0 -translate-x-80 group-hover:translate-x-0 duration-700 transition-all bg-primary-300 rounded-full"></div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="group relative md:hidden">
          <FaThList
            onClick={toggleMenu}
            className="text-2xl cursor-pointer"
            aria-label="Open navigation menu"
          />
          {open && (
            <div
              ref={menuRef}
              className={`fixed top-0 right-0 h-screen w-[300px] bg-primary-300 text-white flex flex-col items-center justify-start gap-12 uppercase transform ${
                open ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-[1.5s] ease-in-out z-50 pt-10`}
            >
              <IoCloseCircle
                onClick={toggleMenu}
                className="text-3xl cursor-pointer absolute top-2 left-4"
                aria-label="Close navigation menu"
              />
              {navItems.map((item, index) => (
                <NavLink
                  key={item + index}
                  to={`${item.url}`}
                  className={({ isActive }) =>
                    `font-semibold duration-300 transition-all ${
                      isActive
                        ? "text-primary-200 animate-fade-in-up"
                        : "hover:text-primary-200"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
