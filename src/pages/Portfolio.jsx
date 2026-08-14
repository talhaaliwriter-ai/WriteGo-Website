import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  Lightbulb,
  Megaphone,
  PenTool,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const featuredArticle = {
  category: "CONTENT STRATEGY",
  title: "How to Build a Content Strategy That Actually Supports Business Growth",
  excerpt:
    "A practical guide to planning useful, audience-focused content that supports visibility, trust, engagement, and long-term business goals.",
  date: "Editorial Guide",
  readTime: "8 min read",
  image:
    "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=85",
};

const latestArticles = [
  {
    category: "SEO WRITING",
    title: "SEO Writing: From Keywords to Search Intent",
    excerpt:
      "Learn how professional content writers move beyond keywords and create useful content around what readers actually want to find.",
    date: "SEO & Content",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "WEBSITE CONTENT",
    title: "Website Copy That Builds Trust and Converts Visitors",
    excerpt:
      "Your website needs more than attractive design. Strong copy explains your value, answers questions, and gives visitors a reason to take action.",
    date: "Website Writing",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "COPYWRITING",
    title: "What Makes Professional Copywriting More Persuasive?",
    excerpt:
      "Discover the principles behind clear, persuasive copy for landing pages, campaigns, products, services, and digital brands.",
    date: "Copywriting",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "BLOG WRITING",
    title: "How to Plan a Better Business Blog in 2026",
    excerpt:
      "A modern business blog should educate, demonstrate expertise, answer real questions, and support the wider customer journey.",
    date: "Blog Strategy",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "PRODUCT CONTENT",
    title: "Product Descriptions That Explain Benefits Instead of Just Features",
    excerpt:
      "Good product descriptions make information easier to understand while helping potential customers see the value behind a product.",
    date: "Product Writing",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "BUSINESS WRITING",
    title: "Why Clear Business Writing Matters for Modern Brands",
    excerpt:
      "From company profiles to proposals and professional communications, clear writing helps businesses communicate with confidence.",
    date: "Business Content",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
];

const experienceTypes = [
  {
    icon: Search,
    title: "SEO Content",
    text:
      "Research-driven content designed around search intent, audience needs, readability, and sustainable organic visibility.",
  },
  {
    icon: FileText,
    title: "Blog & Articles",
    text:
      "Structured articles that educate readers, communicate expertise, and provide useful information in an accessible format.",
  },
  {
    icon: Globe2,
    title: "Website Content",
    text:
      "Professional website copy for homepages, service pages, about pages, landing pages, and other important website sections.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    text:
      "Persuasive content designed to communicate a clear message and encourage visitors, prospects, and customers to take action.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Writing",
    text:
      "Professional writing for companies, professionals, organizations, brands, proposals, profiles, and business communications.",
  },
  {
    icon: BookOpen,
    title: "Research-Based Content",
    text:
      "Well-organized informational content built around research, useful explanations, logical structure, and reader-focused presentation.",
  },
];

const futureTopics = [
  "How to Create an SEO Content Calendar",
  "The Difference Between SEO Writing and Copywriting",
  "How a Strong About Page Builds Brand Trust",
  "Writing Better Service Pages for Professional Websites",
  "How to Write Product Descriptions That Sell",
  "Content Optimization: Improving Existing Website Pages",
  "How Businesses Can Use Educational Blog Content",
  "A Practical Guide to Writing Better Landing Pages",
  "What Makes a Professional Website Homepage Effective",
  "How to Build Authority Through Consistent Content",
  "Common Website Content Mistakes Businesses Should Avoid",
  "How Research Improves the Quality of Online Content",
];

const categories = [
  "All Insights",
  "SEO Writing",
  "Blog Writing",
  "Website Content",
  "Copywriting",
  "Business Writing",
  "Content Strategy",
];

export default function Blog() {
  return (
    <PageShell>
      <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-gray-100 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-950 dark:to-blue-950/20" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
                  <Sparkles size={16} />
                  WRITEGO INSIGHTS
                </div>

                <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
                  Ideas, insights & strategies for better content.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Explore practical insights about SEO writing, blog content,
                  website copy, copywriting, business communication, content
                  strategy, and the changing world of digital content.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#latest"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Explore Articles
                    <ArrowRight size={18} />
                  </a>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-bold text-gray-900 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  >
                    Explore Services
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                  <img
                    src={featuredArticle.image}
                    alt="Content strategy workspace"
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300">
                      <TrendingUp size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        Focus
                      </p>
                      <p className="font-black">Useful Content. Better Results.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                FEATURED INSIGHT
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Start with a strong content foundation.
              </h2>
            </div>

            <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
              {featuredArticle.readTime}
            </span>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
            <div className="grid lg:grid-cols-2">

              <div className="min-h-[380px] overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full min-h-[380px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <span className="text-sm font-black tracking-widest text-blue-600">
                  {featuredArticle.category}
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  {featuredArticle.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-950">
                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Professional content should do more than fill a page.
                    It should answer questions, communicate value, support
                    trust, and give the reader a clear next step.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 font-black text-blue-600"
                >
                  Discuss Your Content Project
                  <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          </article>
        </section>

        {/* CATEGORIES */}
        <section className="border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST ARTICLES */}
        <section id="latest" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              LATEST ARTICLES
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Practical content insights for modern businesses.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our editorial topics are built around the questions businesses,
              professionals, brands, creators, and students regularly face
              when they need better written communication.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-black tracking-widest text-blue-600">
                      {article.category}
                    </span>

                    <span className="text-xs font-semibold text-gray-400">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    {article.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                      {article.date}
                    </span>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm font-black text-blue-600"
                    >
                      Read More
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE BY TYPE */}
        <section className="bg-gray-950 px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-blue-400">
                  EXPERIENCE BY TYPE
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                  Content for every stage of your communication journey.
                </h2>

                <p className="mt-6 leading-8 text-gray-400">
                  Different goals require different forms of writing. From
                  search-focused articles to persuasive website copy, the
                  right structure helps your message reach the right audience.
                </p>

                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500"
                >
                  View All Services
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {experienceTypes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-800 bg-gray-900 p-6"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-blue-400">
                        <Icon size={21} />
                      </div>

                      <h3 className="mt-5 text-xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* CONTENT PHILOSOPHY */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85"
                alt="Professional content planning"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                OUR CONTENT PHILOSOPHY
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Good content starts with understanding the reader.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Whether the goal is to explain a service, publish a useful
                article, present a product, communicate a business message,
                or build a stronger online presence, content should always
                begin with the audience.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                Professional writing combines research, structure, clarity,
                tone, relevance, and purpose. Instead of simply adding words
                to a page, a strong content process considers what the reader
                needs to know, what questions they may have, and what action
                should logically follow.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Audience-focused writing",
                  "Clear and logical structure",
                  "Search-friendly content planning",
                  "Professional tone and readability",
                  "Content aligned with business objectives",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 font-semibold"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-blue-600"
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FUTURE TOPICS */}
        <section className="border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

            <div className="text-center">
              <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
                UPCOMING EDITORIAL TOPICS
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                More useful guides are on the way.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                These editorial topics can be developed into full articles
                as the WriteGo knowledge library grows.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {futureTopics.map((topic, index) => (
                <div
                  key={topic}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-black text-blue-600 dark:bg-blue-950">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                      Planned Article
                    </p>

                    <h3 className="mt-1 font-bold leading-6">
                      {topic}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* STUDENTS / PROFESSIONALS */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8 dark:border-blue-950 dark:bg-blue-950/20 sm:p-12">

            <div className="grid gap-10 lg:grid-cols-3">

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Users size={23} />
                </div>

                <h2 className="mt-6 text-3xl font-black">
                  Who can benefit from better content?
                </h2>
              </div>

              <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">

                <div>
                  <h3 className="text-xl font-black">
                    Students & Researchers
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    Students and researchers can benefit from clearer
                    informational writing, editing, proofreading, research
                    support, and professionally structured content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black">
                    Businesses & Brands
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    Businesses can use professional website content, blogs,
                    product descriptions, landing-page copy, marketing
                    content, and business writing to communicate more clearly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black">
                    Professionals & Creators
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    Professionals and creators can strengthen their online
                    presence with articles, personal-brand content, social
                    media writing, newsletters, and other digital content.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black">
                    Organizations
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    Organizations can benefit from structured communications,
                    reports, educational content, announcements, profiles,
                    and audience-focused informational material.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-16 text-center text-white sm:px-12">

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <Megaphone size={25} />
              </div>

              <p className="mt-6 font-bold uppercase tracking-[0.2em] text-blue-400">
                HAVE A CONTENT PROJECT?
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Let’s turn your ideas into professional content.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Whether you need SEO articles, website content, copywriting,
                product descriptions, business writing, editing, or another
                writing solution, tell us what you are working on.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  Start a Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-7 py-3.5 font-black text-white transition hover:border-blue-500 hover:text-blue-400"
                >
                  View Services
                  <ArrowUpRight size={18} />
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL NAVIGATION */}
        <section className="border-t border-gray-100 dark:border-gray-800">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-5 py-8 text-sm font-bold lg:px-8">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-600">
              About Us
            </Link>

            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>

            <Link to="/portfolio" className="hover:text-blue-600">
              Portfolio
            </Link>

            <Link to="/blog" className="text-blue-600">
              Blog
            </Link>

            <Link to="/contact" className="hover:text-blue-600">
              Contact Us
            </Link>

            <Link to="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-blue-600">
              Terms
            </Link>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
