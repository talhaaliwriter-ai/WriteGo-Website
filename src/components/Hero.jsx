import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "SEO Content Writing",
  "Blog Writing",
  "Website Content",
  "Product Descriptions",
  "Copywriting",
  "Translation",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 dark:from-gray-950 dark:via-gray-950 dark:to-purple-950/30">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm dark:border-blue-900 dark:bg-gray-900">
            <PenLine size={16} /> Professional Writing Studio
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-6xl dark:text-white">
            Your Words.
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Expertise.</span>
            <span className="block">Real Results.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Professional writing solutions for students, businesses and brands — created to inform, engage and convert.
          </p>

          <div className="mt-7 grid gap-2 sm:grid-cols-2">
            {services.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                <CheckCircle2 size={17} className="text-blue-600" /> {item}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="rounded-full border-2 border-blue-600 px-7 py-3.5 font-bold text-blue-600 transition hover:bg-blue-50 dark:hover:bg-blue-950/30">
              View Portfolio
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative h-[360px] w-[360px] rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-5 shadow-2xl shadow-blue-600/20 sm:h-[440px] sm:w-[440px]">
            <div className="flex h-full items-center justify-center rounded-[2rem] bg-white/95 p-10 text-center dark:bg-gray-950/95">
              <div>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-700">
                  <PenLine size={50} />
                </div>
                <h2 className="mt-7 text-2xl font-black text-gray-900 dark:text-white">Creative Content Studio</h2>
                <p className="mt-3 text-gray-500 dark:text-gray-400">Research. Write. Refine. Deliver.</p>
                <div className="mx-auto mt-7 h-2 w-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}