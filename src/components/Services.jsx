import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileEdit,
  FileText,
  Globe2,
  Languages,
  Megaphone,
  Newspaper,
  Search,
  ShoppingBag,
  Mail,
  PenTool,
  BookOpen,
  ClipboardCheck,
  Layout,
  Share2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SEO Content Writing",
    icon: Search,
    slug: "seo-content-writing",
    description:
      "Search-focused content created to improve visibility, answer audience questions, and support sustainable organic growth.",
  },
  {
    title: "Blog & Article Writing",
    icon: FileText,
    slug: "blog-article-writing",
    description:
      "Well-researched articles and blog posts written to inform readers, build authority, and support your content strategy.",
  },
  {
    title: "Website Content Writing",
    icon: Globe2,
    slug: "website-content-writing",
    description:
      "Clear, professional website copy that communicates your brand, services, expertise, and value proposition.",
  },
  {
    title: "Copywriting",
    icon: PenTool,
    slug: "copywriting",
    description:
      "Persuasive copy that communicates your message clearly and guides the right audience toward meaningful action.",
  },
  {
    title: "Landing Page Copy",
    icon: Layout,
    slug: "landing-page-copy",
    description:
      "Focused landing page messaging built around your offer, audience, positioning, and conversion objectives.",
  },
  {
    title: "Product Descriptions",
    icon: ShoppingBag,
    slug: "product-descriptions",
    description:
      "Clear and benefit-focused product descriptions that present important features while helping customers make informed decisions.",
  },
  {
    title: "Technical Writing",
    icon: Code2,
    slug: "technical-writing",
    description:
      "Structured technical content that turns complex information into clear, useful, and easy-to-follow material.",
  },
  {
    title: "Business & Corporate Writing",
    icon: BriefcaseBusiness,
    slug: "business-corporate-writing",
    description:
      "Professional business content for companies, organizations, professionals, and corporate communication needs.",
  },
  {
    title: "Social Media Content",
    icon: Share2,
    slug: "social-media-content",
    description:
      "Purpose-driven social content designed to communicate your message, strengthen your brand voice, and engage your audience.",
  },
  {
    title: "Email & Newsletter Writing",
    icon: Mail,
    slug: "email-newsletter-writing",
    description:
      "Professional email and newsletter content designed for clear communication, engagement, and consistent brand messaging.",
  },
  {
    title: "News & Press Release Writing",
    icon: Newspaper,
    slug: "news-press-release-writing",
    description:
      "Structured news and press release content written with clarity, professionalism, and a strong focus on key information.",
  },
  {
    title: "Translation Services",
    icon: Languages,
    slug: "translation-services",
    description:
      "Careful translation that preserves meaning, tone, context, and readability across the source and target languages.",
  },
  {
    title: "Editing & Proofreading",
    icon: FileEdit,
    slug: "editing-proofreading",
    description:
      "Detailed editing and proofreading to improve grammar, clarity, consistency, structure, and overall readability.",
  },
  {
    title: "Content Optimization",
    icon: ClipboardCheck,
    slug: "content-optimization",
    description:
      "Existing content refined for stronger structure, readability, clarity, search relevance, and overall quality.",
  },
  {
    title: "Research-Based Content",
    icon: BookOpen,
    slug: "research-based-content",
    description:
      "Research-driven content organized around reliable information, audience needs, industry context, and clear communication.",
  },
  {
    title: "Marketing Content",
    icon: Megaphone,
    slug: "marketing-content",
    description:
      "Strategic marketing content designed to communicate your offer, reinforce your positioning, and connect with your audience.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-purple-50/30 py-24 dark:from-gray-950 dark:via-gray-950 dark:to-purple-950/20">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-[40%] h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-600 shadow-sm dark:border-blue-900/50 dark:bg-gray-900 dark:text-blue-400"
          >
            <Sparkles size={16} />
            WHAT WE DO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 text-4xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Professional Writing Services
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Built Around Your Goals
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            From SEO content and website copy to business writing,
            translation, editing, and marketing content, WriteGo provides
            practical writing solutions for businesses, professionals,
            students, and digital brands.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.035, 0.35),
                }}
                className="group flex h-full flex-col rounded-3xl border border-gray-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 dark:border-gray-800 dark:bg-gray-900/80 dark:hover:border-blue-800"
              >
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:ring-transparent dark:from-blue-950/50 dark:to-purple-950/40 dark:ring-blue-900/50 dark:group-hover:from-blue-600 dark:group-hover:to-purple-600">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs font-bold text-gray-300 transition group-hover:text-blue-200 dark:text-gray-700 dark:group-hover:text-blue-900">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-black leading-tight text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-600 transition-all duration-300 group-hover:gap-3 dark:text-blue-400"
                >
                  Explore Service
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Service support strip */}
        <div className="mt-16 rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/70 sm:p-8">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                One Writing Partner
              </p>

              <h3 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
                From idea to final draft.
              </h3>
            </div>

            <div className="md:col-span-2 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Clear Communication
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Content shaped around your audience and objectives.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Flexible Support
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Suitable for one-off projects and ongoing content needs.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  Professional Quality
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Structured, edited, and polished content for your project.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-7 py-14 text-center shadow-2xl shadow-blue-900/15 sm:px-12"
        >
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
              Need Something Different?
            </p>

            <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Not sure which service fits your project?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Tell us about your project, audience, requirements, and
              objectives. We can help you identify the right writing solution
              and discuss a suitable approach.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Discuss Your Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
              >
                View Our Work
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
