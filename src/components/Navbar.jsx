import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="max-w-6xl mx-auto mt-4 px-4 sm:mt-5 sm:px-5">
      <div className="flex items-center justify-between gap-3 rounded-[99px] border border-gray-800 p-3 sm:p-5 shadow-[0_4px_20px_rgba(255,255,255,0.3)]">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-28 sm:w-[140px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          <li>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-gray-500"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="transition-colors duration-300 hover:text-gray-500"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className="transition-colors duration-300 hover:text-gray-500"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="transition-colors duration-300 hover:text-gray-500"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <a
          className="hidden md:flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-gray-100"
          href="https://www.linkedin.com/in/hawana0911/"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm Here
          <FaLinkedin className="text-lg" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex min-h-11 min-w-11 shrink-0 md:hidden items-center justify-center rounded-full border border-gray-300 p-3 text-gray-800 transition-all bg-white duration-300 hover:bg-gray-100"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        inert={!menuOpen}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setMenuOpen(false);
            event.currentTarget.previousElementSibling.querySelector("button").focus();
          }
        }}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-3xl border border-gray-800 p-5">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center transition-colors duration-300 hover:text-gray-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center transition-colors duration-300 hover:text-gray-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center transition-colors duration-300 hover:text-gray-500"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-11 items-center transition-colors duration-300 hover:text-gray-500"
              >
                Contact
              </Link>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/hawana0911/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
              >
                I'm Here
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
