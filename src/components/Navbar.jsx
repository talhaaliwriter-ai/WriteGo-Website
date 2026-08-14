import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  Moon,
  Search,
  X,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
} from "lucide-react";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/pricing", "Pricing"],
  ["/contact", "Contact"],
];

const legalLinks = [
  ["/privacy-policy", "Privacy Policy"],
  ["/terms", "Terms & Conditions"],
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/talha-freelancer-369240396/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "#",
    icon: Instagram,
  },
  {
    name: "Facebook",
    url: "#",
    icon: Facebook,
  },
];

const searchItems = [
  {
    title: "SEO Content Writing",
    description: "Search-friendly professional content.",
    path: "/services/seo-content-writing",
    keywords: "seo content writing seo articles search",
  },
  {
    title: "Blog & Article Writing",
    description: "Professional blogs and long-form articles.",
    path: "/services/blog-article-writing",
    keywords: "blog article writing blogs articles",
  },
  {
    title: "Website Content Writing",
    description: "Clear content for business websites.",
    path: "/services/website-content-writing",
    keywords: "website content web content website",
  },
  {
    title: "Copywriting",
    description: "Persuasive copy for brands and businesses.",
    path: "/services/copywriting",
    keywords: "copywriting copy sales marketing",
  },
  {
    title: "Product Descriptions",
    description: "Clear and persuasive product copy.",
    path: "/services/product-descriptions",
    keywords: "product descriptions ecommerce products",
  },
  {
    title: "Services",
    description: "Explore all WriteGo writing services.",
    path: "/services",
    keywords: "services writing service",
  },
  {
    title: "About WriteGo",
    description: "Learn more about WriteGo.",
    path: "/about",
    keywords: "about about us writego company",
  },
  {
    title: "Portfolio",
    description: "Explore our content and writing work.",
    path: "/portfolio",
    keywords: "portfolio work projects",
  },
  {
    title: "Blog",
    description: "Read writing, SEO and content insights.",
    path: "/blog",
    keywords: "blog articles insights content",
  },
  {
    title: "Pricing",
    description: "Explore our flexible content packages.",
    path: "/pricing",
    keywords: "pricing price packages quote",
  },
  {
    title: "Contact Us",
    description: "Discuss your project with WriteGo.",
    path: "/contact",
    keywords: "contact contact us quote project",
  },
  {
    title: "Privacy Policy",
    description: "Read our privacy policy.",
    path: "/privacy-policy",
    keywords: "privacy policy privacy",
  },
  {
    title: "Terms & Conditions",
    description: "Read our terms and conditions.",
    path: "/terms",
    keywords: "terms conditions terms",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    setDark((value) => !value);
    document.documentElement.classList.toggle("dark");
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const filteredResults = searchItems.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return true;

    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-white/95 shadow-sm backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 text-2xl font-black tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              WRITEGO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 xl:flex">

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

            {/* Legal Links */}
            {legalLinks.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-1 border-l border-gray-200 pl-3 dark:border-gray-800">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="rounded-full p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            {/* Quote Button */}
            <Link
              to="/contact"
              className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">

            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="rounded-full p-2 text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              <Search size={19} />
            </button>

            {/* Dark Mode */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="rounded-full p-2 text-gray-600 transition hover:bg-purple-50 hover:text-purple-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-purple-400"
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

        {/* Tablet / Mobile Navigation */}
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

              {/* Legal */}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-gray-200 pt-3 dark:border-gray-800">
                {legalLinks.map(([to, label]) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                          : "text-gray-500 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-900"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>

              {/* Social */}
              <div className="mt-3 flex items-center gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">
                <span className="mr-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  Follow
                </span>

                {socialLinks.map(({ name, url, icon: Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-3 rounded-full bg-orange-500 px-5 py-3 text-center font-bold text-white transition hover:bg-orange-600"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-gray-950/60 px-5 pt-24 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900">

            {/* Search Header */}
            <div className="flex items-center gap-3 border-b border-gray-200 px-5 py-4 dark:border-gray-800">
              <Search size={21} className="text-blue-600" />

              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search services, pages, content writing..."
                className="min-w-0 flex-1 bg-transparent text-base font-medium text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
              />

              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-[65vh] overflow-y-auto p-3">

              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeSearch}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 transition hover:bg-blue-50 dark:hover:bg-gray-800"
                  >
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>

                    <ExternalLink
                      size={17}
                      className="ml-4 shrink-0 text-gray-400 transition group-hover:text-blue-600"
                    />
                  </Link>
                ))
              ) : (
                <div className="px-5 py-12 text-center">
                  <Search
                    size={32}
                    className="mx-auto text-gray-300 dark:text-gray-600"
                  />

                  <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                    No results found
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Try searching for Services, Blog, Contact, About or
                    Content Writing.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
