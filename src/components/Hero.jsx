import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  PenLine,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "SEO Content Writing",
  "Blog & Article Writing",
  "Website Content",
  "Copywriting",
  "Product Descriptions",
  "Editing & Proofreading",
];

const audiences = [
  "Students",
  "Professionals",
  "Startups",
  "Businesses",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 dark:bg-gray-950 sm:pt-36 sm:pb-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
              <Sparkles size={16} />
              Professional Writing Services
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-gray-950 dark:text-white sm:text-6xl lg:text-[4.5rem]">
              Content that
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                communicates,
              </span>
              connects & converts.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              WriteGo provides professional writing solutions for students,
              professionals, startups and businesses. From SEO articles and
              website content to copywriting, editing and product descriptions,
              we create clear content around your audience and goals.
            </p>

            {/* Audience */}
            <div className="mt-7 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
                >
                  <Users size={15} className="text-blue-600" />
                  {audience}
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-blue-600"
                  />
                  {service}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-800 transition duration-200 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-blue-500"
              >
                Explore Services
              </Link>
            </div>

            {/* Supporting note */}
            <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-green-600"
              />
              <p>
                Clear communication, thoughtful research and professionally
                structured content for digital platforms.
              </p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Main visual card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-950 p-4 shadow-2xl dark:border-gray-800 sm:p-5">

              {/* Top bar */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <span className="text-xs font-semibold text-gray-400">
                  WRITEGO
                </span>
              </div>

              {/* Content preview */}
              <div className="mt-4 rounded-2xl bg-white p-6 sm:p-8">

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <PenLine size={22} />
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                    Content Ready
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Professional Content
                </p>

                <h2 className="mt-3 text-2xl font-black leading-tight text-gray-950 sm:text-3xl">
                  Words shaped around your audience and goals.
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Well-structured writing can make complex ideas easier to
                  understand, strengthen a brand message and give readers a
                  better reason to engage.
                </p>

                {/* Content lines */}
                <div className="mt-7 space-y-3">
                  <div className="h-2.5 w-full rounded-full bg-gray-100" />
                  <div className="h-2.5 w-[92%] rounded-full bg-gray-100" />
                  <div className="h-2.5 w-[78%] rounded-full bg-gray-100" />
                </div>

                {/* Service indicators */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <Search size={18} className="text-blue-600" />
                    <p className="mt-2 text-xs font-bold text-gray-800">
                      SEO
                    </p>
                  </div>

                  <div className="rounded-xl bg-purple-50 p-3">
                    <FileText size={18} className="text-purple-600" />
                    <p className="mt-2 text-xs font-bold text-gray-800">
                      Content
                    </p>
                  </div>

                  <div className="rounded-xl bg-indigo-50 p-3">
                    <Globe size={18} className="text-indigo-600" />
                    <p className="mt-2 text-xs font-bold text-gray-800">
                      Digital
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:block dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/50">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <p className="text-sm font-black text-gray-900 dark:text-white">
                    Clear & Structured
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Built for real readers
                  </p>
                </div>
              </div>
            </div>

            {/* Floating service card */}
            <div className="absolute -right-3 top-20 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl md:block dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600 dark:bg-purple-950/50">
                  <FileText size={19} />
                </div>

                <div>
                  <p className="text-sm font-black text-gray-900 dark:text-white">
                    Writing Support
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    From brief to delivery
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-20 border-t border-gray-200 pt-8 dark:border-gray-800"
        >
          <div className="grid gap-6 text-center sm:grid-cols-3 sm:text-left">

            <div>
              <p className="text-sm font-black text-gray-900 dark:text-white">
                Purposeful Writing
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Content created around a clear objective.
              </p>
            </div>

            <div>
              <p className="text-sm font-black text-gray-900 dark:text-white">
                Multiple Content Needs
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                From blogs and websites to marketing copy.
              </p>
            </div>

            <div>
              <p className="text-sm font-black text-gray-900 dark:text-white">
                Human-Centered Communication
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Clear language designed for real audiences.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
