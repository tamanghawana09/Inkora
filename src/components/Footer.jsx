import { Link } from "react-router-dom";
import { FaFacebook,FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-12 sm:mt-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-5 sm:py-12">

        {/* Top Section */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-white">
              Inkora<span className="text-gray-500">.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              A space for developers to explore ideas, share knowledge,
              and discover something worth reading.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Explore
            </h3>

            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>
                <Link
                  to="/"
                  className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex gap-3">

              <a
                href="https://github.com/tamanghawana09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FaceBook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-white hover:text-gray-900"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com/tamanghawana09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-white hover:text-gray-900"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hawana0911/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-800 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-white hover:text-gray-900"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Inkora. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS by Hawana ❤️
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
