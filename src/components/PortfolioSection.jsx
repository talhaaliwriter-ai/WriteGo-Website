import { Link } from "react-router-dom";

const items = ["SEO Articles","Landing Pages","Business Websites","Affiliate Blogs","News Articles","Product Descriptions"];

export default function PortfolioSection() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-bold text-blue-600">SELECTED WORK</p>
            <h2 className="mt-2 text-4xl font-black dark:text-white">Portfolio</h2>
          </div>
          <Link to="/portfolio" className="font-bold text-blue-600">View all work →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={item} className="group flex h-48 items-end rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-7 text-white shadow-lg transition hover:-translate-y-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Project {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl font-black">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}