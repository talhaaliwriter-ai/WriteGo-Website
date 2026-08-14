import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  FileText,
  Globe2,
  PenTool,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

const categories = [
  "All",
  "SEO & Content",
  "Blog Writing",
  "Website Content",
  "Copywriting",
  "Business Writing",
];

const articles = [
  {
    title: "How Professional SEO Content Helps Businesses Grow",
    category: "SEO & Content",
    readTime: "7 min read",
    date: "Featured Guide",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Professional SEO content is more than placing keywords inside an article. Strong content connects search intent, useful information, clear structure, readability, and business objectives to create a better experience for both readers and search engines.",
    icon: Search,
  },
  {
    title: "Blog Writing vs. Copywriting: What Does Your Business Need?",
    category: "Blog Writing",
    readTime: "6 min read",
    date: "Writing Guide",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Blog writing and copywriting serve different purposes. Understanding the difference can help businesses choose the right type of content for education, brand awareness, lead generation, sales, and long-term digital growth.",
    icon: PenTool,
  },
  {
    title: "How to Write Website Content That Builds Trust",
    category: "Website Content",
    readTime: "8 min read",
    date: "Website Guide",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Your website is often the first serious interaction a potential customer has with your business. Clear, credible and audience-focused website content can explain your value, answer important questions and guide visitors toward action.",
    icon: Globe2,
  },
  {
    title: "Why Professional Product Descriptions Matter",
    category: "Copywriting",
    readTime: "6 min read",
    date: "Business Guide",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A product description should do more than list features. It should explain benefits, answer customer questions, communicate value and make the product easier to understand before a buying decision is made.",
    icon: BriefcaseBusiness,
  },
];

const topics = [
  {
    title: "SEO Content",
    description:
      "Practical guidance about search-friendly content, content strategy, search intent and organic visibility.",
    icon: Search,
  },
  {
    title: "Blog Writing",
    description:
      "Ideas and techniques for creating useful, readable and engaging blog articles for modern audiences.",
    icon: BookOpen,
  },
  {
    title: "Website Content",
    description:
      "Guides for writing clearer homepages, service pages, landing pages and professional website copy.",
    icon: Globe2,
  },
  {
    title: "Copywriting",
    description:
      "Content ideas focused on persuasive messaging, positioning, calls to action and customer communication.",
    icon: PenTool,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-indigo-200">
              <Sparkles size={16} />
              WriteGo Insights
            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas, strategies and practical
              <span className="block text-indigo-400">
                writing insights for modern businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Explore practical articles about SEO content, blog writing,
              website content, copywriting, business communication and
              professional digital content. Our goal is to make complex
              writing decisions easier to understand and easier to apply.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#latest"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-500"
              >
                Explore Articles
                <ArrowUpRight size={18} />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-6 sm:px-8 lg:px-12">
          {categories.map((category, index) => (
            <a
              key={category}
              href="#latest"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                index === 0
                  ? "bg-slate-950 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600">
            Featured Insight
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Start with our latest guide
          </h2>
        </div>

        <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm lg:grid-cols-2">
          <div className="min-h-[320px] overflow-hidden">
            <img
              src={articles[0].image}
              alt="Professional content strategy workspace"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-indigo-600">
              <span>{articles[0].category}</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock3 size={15} />
                {articles[0].readTime}
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              {articles[0].title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {articles[0].excerpt}
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-indigo-600"
            >
              Explore Content Services
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      {/* Topics */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-indigo-600">
              Explore Topics
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Content built around the questions that matter
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Browse our main content areas and discover practical guidance
              related to the writing services businesses and professionals
              need most.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <a
                  key={topic.title}
                  href="#latest"
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {topic.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-indigo-600">
                    Browse topic
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section
        id="latest"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-indigo-600">
              Latest Articles
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Practical knowledge for better content
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-bold text-indigo-600"
          >
            View our services
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {articles.slice(1).map((article) => {
            const Icon = article.icon;

            return (
              <article
                key={article.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-indigo-700 shadow">
                    <Icon size={14} />
                    {article.category}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black leading-tight text-slate-950">
                    {article.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {article.excerpt}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-indigo-600"
                  >
                    Explore related services
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Content Philosophy */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-indigo-400">
              Why WriteGo Insights?
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Useful content should lead to useful decisions.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Our blog is designed around practical questions businesses,
              professionals and students face when creating digital content.
              Instead of publishing disconnected topics, we can build related
              content around our core services so readers can move naturally
              from an educational article to a relevant service.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              As the library grows, articles can be connected into focused
              topic groups covering SEO content, blogging, website writing,
              copywriting, business communication and other areas. This makes
              the blog easier for visitors to explore and creates a clearer
              internal structure for the website.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-indigo-50"
            >
              Learn About WriteGo
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Target className="text-indigo-400" size={25} />
              <h3 className="mt-4 font-black text-white">
                Audience Focused
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Articles are planned around real reader questions and business
                needs.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <FileText className="text-indigo-400" size={25} />
              <h3 className="mt-4 font-black text-white">
                Practical Guides
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Clear explanations designed to help readers take action.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Search className="text-indigo-400" size={25} />
              <h3 className="mt-4 font-black text-white">
                Search Friendly
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Future articles can be organized into connected topic
                clusters.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <BriefcaseBusiness className="text-indigo-400" size={25} />
              <h3 className="mt-4 font-black text-white">
                Business Relevant
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Content stays connected to the professional services we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-black uppercase tracking-widest text-indigo-600">
            Continue Exploring
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950">
            Explore more from WriteGo
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/about"
              className="rounded-lg border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="rounded-lg border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              Services
            </Link>

            <Link
              to="/portfolio"
              className="rounded-lg border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Need professional content for your next project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-indigo-100">
            Whether you need SEO articles, website content, blog posts,
            copywriting, product descriptions, business writing or editing,
            WriteGo can help you turn your ideas into clear, professional
            content.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="rounded-lg bg-white px-6 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
              View Services
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
