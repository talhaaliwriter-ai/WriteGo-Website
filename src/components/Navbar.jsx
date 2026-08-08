import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Search, X } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((value) => !value);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="text-2xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WRITEGO</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600 dark:text-gray-300"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">
            Get Free Quote
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hidden rounded-full p-2 text-gray-600 hover:bg-gray-100 md:block dark:text-gray-200 dark:hover:bg-gray-800">
            <Search size={19} />
          </button>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
            <Moon size={19} />
          </button>
          <button onClick={() => setOpen((v) => !v)} aria-label="Menu" className="rounded-full p-2 md:hidden">
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col gap-4">
            {links.map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="font-semibold text-gray-700 dark:text-gray-200">
                {label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded-full bg-orange-500 px-5 py-3 text-center font-bold text-white">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}