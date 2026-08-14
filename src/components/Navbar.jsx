import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Search, X } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/pricing", "Pricing"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((value) => !value);
    document.documentElement.classList.toggle("dark");
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            WRITEGO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="hidden rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 md:block dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Search size={19} />
          </button>

          {/* Dark Mode */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Moon size={19} />
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-gray-700 transition hover:bg-gray-100 md:hidden dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-5 py-5 shadow-lg md:hidden dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col gap-1">

            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-semibold transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-900"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-orange-500 px-5 py-3 text-center font-bold text-white transition hover:bg-orange-600"
            >
              Get Free Quote
            </Link>

            {/* Legal Links */}
            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
              <div className="flex flex-wrap gap-x-5 gap-y-2 px-4 text-sm">
                <Link
                  to="/privacy-policy"
                  onClick={closeMenu}
                  className="text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  onClick={closeMenu}
                  className="text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
