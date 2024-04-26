"use client";
import { useRef, useState } from "react";
import logoDash from "@/src/assets/images/logos/logo-black.svg";
import Image from "next/image";
import { Link } from "../navigation";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { LangSwitcher } from "./LangSwitcher";
import { LangSwitcherTwo } from "./LangSwitcherTwo";

const Header = ({ links }) => {
  // Use useState to manage the menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Language Switcher
  const themeSwitcherRef = useRef(null);

  return (
    <>
      {/* MOBILE MENU */}
      <section className={`overflow-hidden  ${isMenuOpen ? "open " : ""}`}>
        <div
          className={`navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
            onClick={toggleMenu}
          />
          <nav className="relative z-10 px-6 pt-8 bg-white h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between">
              {/* D&D Logo + Close Mobile Nagiation Menu */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-12">
                  {/* D&D Logo */}
                  <Link href="/">
                    <Image
                      src={logoDash}
                      width={150}
                      height={150}
                      alt="Logo Of Dash & Dry"
                    />
                  </Link>
                  {/* X ICONN */}
                  <XMarkIcon
                    onClick={toggleMenu}
                    className="w-6 h-6 text-black"
                  />
                </div>
              </div>
              {/* Navigation */}
              <ul>
                {links.map((link) => (
                  <li key={link.text} className="mb-8">
                    <Link
                      className="font-medium hover:text-gray-700"
                      href={link.to}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="block">
                      <button
                        className="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-black  transition ease-in-out duration-200"
                        type="button"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      {/* DESKTOP MENU */}
      <div ref={themeSwitcherRef}>
        <LangSwitcherTwo />
        {/* <LangSwitcher /> */}
      </div>
      <div className="header-outer-container">
        <div className="flex justify-between items-center py-4">
          <div className="w-full">
            <div className="header-inner-container">
              <div className="header-logo-container">
                <Link href="/">
                  <Image
                    src={logoDash}
                    width={140}
                    height={140}
                    alt="Dash & Dry Logo"
                  />
                </Link>
              </div>
              <div className="nav-links-container">
                <ul>
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link className="nav-links" href={link.to}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mobile-menu-icon-container">
            <Bars3BottomRightIcon
              onClick={toggleMenu}
              className="mobile-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
