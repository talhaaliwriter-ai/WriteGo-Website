import { motion } from "framer-motion";
import { ArrowUpRight, Code2, FileEdit, FileText, Globe2, Languages, Newspaper, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  ["SEO Content Writing", Search],
  ["Blog Writing", FileText],
  ["Website Copywriting", Globe2],
  ["Product Descriptions", ShoppingBag],
  ["Technical Writing", Code2],
  ["News Articles", Newspaper],
  ["Translation", Languages],
  ["Editing & Proofreading", FileEdit],
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold text-blue-600">WHAT WE DO</p>
          <h2 className="mt-2 text-4xl font-black text-gray-950 dark:text-white">Our Services</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Professional writing solutions designed around your goals.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, Icon], index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                <Icon />
              </div>
              <h3 className="mt-5 font-black text-gray-900 dark:text-white">{title}</h3>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                Learn More <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}