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
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "SEO Content Writing",
    icon: Search,
    slug: "seo-content-writing",
    description:
      "Search-friendly content designed to attract the right audience and support long-term organic growth.",
  },
  {
    title: "Blog & Article Writing",
    icon: FileText,
    slug: "blog-article-writing",
    description:
      "Well-researched, engaging articles and blog posts created around your audience and content goals.",
  },
  {
    title: "Website Content Writing",
    icon: Globe2,
    slug: "website-content-writing",
    description:
      "Professional website content that clearly communicates your brand, services, value, and expertise.",
  },
  {
    title: "Copywriting",
    icon: PenTool,
    slug: "copywriting",
    description:
      "Persuasive copy created to communicate your message and encourage readers to take action.",
  },
  {
    title: "Landing Page Copy",
    icon: Layout,
    slug: "landing-page-copy",
    description:
      "Conversion-focused landing page content built around your offer, audience, and business objectives.",
  },
  {
    title: "Product Descriptions",
    icon: ShoppingBag,
    slug: "product-descriptions",
    description:
      "Clear and persuasive product descriptions designed to present features, benefits, and value.",
  },
  {
    title: "Technical Writing",
    icon: Code2,
    slug: "technical-writing",
    description:
      "Structured technical content that explains complex information in a clear and accessible way.",
  },
  {
    title: "Business & Corporate Writing",
    icon: BriefcaseBusiness,
    slug: "business-corporate-writing",
    description:
      "Professional business content for companies, organizations, professionals, and corporate brands.",
  },
  {
    title: "Social Media Content",
    icon: Share2,
    slug: "social-media-content",
    description:
      "Engaging social media copy created to strengthen your online presence and connect with your audience.",
  },
  {
    title: "Email & Newsletter Writing",
    icon: Mail,
    slug: "email-newsletter-writing",
    description:
      "Professional email and newsletter content designed for clear communication and audience engagement.",
  },
  {
    title: "News & Press Release Writing",
    icon: Newspaper,
    slug: "news-press-release-writing",
    description:
      "Professional news articles and press releases written with clarity, structure, and credibility.",
  },
  {
    title: "Translation Services",
    icon: Languages,
    slug: "translation-services",
    description:
      "Professional translation support across multiple languages while preserving meaning, tone, and context.",
  },
  {
    title: "Editing & Proofreading",
    icon: FileEdit,
    slug: "editing-proofreading",
    description:
      "Careful editing and proofreading to improve grammar, clarity, structure, readability, and consistency.",
  },
  {
    title: "Content Optimization",
    icon: ClipboardCheck,
    slug: "content-optimization",
    description:
      "Existing content refined for clarity, readability, structure, search performance, and overall quality.",
  },
  {
    title: "Research-Based Content",
    icon: BookOpen,
    slug: "research-based-content",
    description:
      "Thoughtfully researched content created to provide useful, credible, and audience-focused information.",
  },
  {
    title: "Marketing Content",
    icon: Megaphone,
    slug: "marketing-content",
    description:
      "Strategic marketing content designed to communicate your offer and strengthen your brand message.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            WHAT WE DO
          </p>

          <h2 className="mt-3 text-4xl font-black text-gray-950 dark:text-white sm:text-5xl">
            Professional Writing Services
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From SEO content and website copy to translation, editing,
            business writing, and marketing content, WriteGo provides
            professional writing solutions tailored to your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-black text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gray-950 px-6 py-12 text-center dark:bg-black sm:px-10">
          <h3 className="text-3xl font-black text-white">
            Need a custom writing solution?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Tell us what you need and we can create a professional content
            solution around your project, audience, and goals.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
          >
            Discuss Your Project
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
