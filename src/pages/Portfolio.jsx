import PageShell from "../components/PageShell";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle,
  FileEdit,
  FileText,
  Globe2,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  PenTool,
  Pinterest,
  Search,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    title: "SEO Content Writing",
    category: "SEO & Content",
    icon: Search,
    description:
      "Search-focused articles and website content created around audience intent, readability, structure, and long-term organic visibility.",
    tags: ["SEO", "Research", "Articles"],
    link: "/services/seo-content-writing",
  },
  {
    title: "Blog & Article Writing",
    category: "Blog Content",
    icon: FileText,
    description:
      "Professional blog posts and articles written with clear structure, engaging introductions, useful information, and reader-friendly formatting.",
    tags: ["Blogs", "Articles", "Research"],
    link: "/services/blog-article-writing",
  },
  {
    title: "Website Content Writing",
    category: "Web Content",
    icon: Globe2,
    description:
      "Professional website copy designed to communicate your services, expertise, value proposition, and brand message clearly.",
    tags: ["Web Copy", "Brand", "UX"],
    link: "/services/website-content-writing",
  },
  {
    title: "Copywriting",
    category: "Marketing",
    icon: PenTool,
    description:
      "Persuasive copy designed to communicate benefits, strengthen your message, and encourage visitors to take meaningful action.",
    tags: ["Copywriting", "Marketing", "Sales"],
    link: "/services/copywriting",
  },
  {
    title: "Academic & Student Content",
    category: "Education",
    icon: GraduationCap,
    description:
      "Clear and structured educational content for students and learners, with an emphasis on organization, readability, and useful information.",
    tags: ["Education", "Research", "Editing"],
    link: "/services/research-based-content",
  },
  {
    title: "Business & Corporate Writing",
    category: "Business",
    icon: BriefcaseBusiness,
    description:
      "Professional content for businesses, organizations, entrepreneurs, and professionals who need clear and credible written communication.",
    tags: ["Business", "Corporate", "Professional"],
    link: "/services/business-corporate-writing",
  },
  {
    title: "Editing & Proofreading",
    category: "Content Quality",
    icon: FileEdit,
    description:
      "Existing content refined for grammar, clarity, consistency, structure, readability, and professional presentation.",
    tags: ["Editing", "Proofreading", "Quality"],
    link: "/services/editing-proofreading",
  },
  {
    title: "Content Optimization",
    category: "Optimization",
    icon: CheckCircle,
    description:
      "Existing content improved for structure, readability, clarity, search performance, and overall content quality.",
    tags: ["Optimization", "SEO", "Editing"],
    link: "/services/content-optimization",
  },
];

const websiteLinks = [
  {
    title: "Home",
    description: "Discover WriteGo and our overall content-writing approach.",
    link: "/",
  },
  {
    title: "About Us",
    description: "Learn about WriteGo, our mission, and our professional standards.",
    link: "/about",
  },
  {
    title: "Services",
    description: "Explore the complete range of writing services.",
    link: "/services",
  },
  {
    title: "Blog",
    description: "Read useful articles, resources, and writing insights.",
    link: "/blog",
  },
  {
    title: "Pricing",
    description: "Explore available packages and project options.",
    link: "/pricing",
  },
  {
    title: "Contact",
    description: "Discuss your requirements and start a project.",
    link: "/contact",
  },
];

export default function Portfolio() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-center sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-xl">
            <BriefcaseBusiness size={30} />
          </div>

          <p className="mt-7 font-bold uppercase tracking-[0.25em] text-purple-300">
            OUR PORTFOLIO
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Professional Content
            <span className="block text-purple-400">
              Built for Real Goals
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore the professional writing categories, content solutions,
            and digital services available through WriteGo for students,
            professionals, businesses, brands, and online platforms.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-500"
            >
              Explore Services
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Start a Project
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-purple-600">
              OUR APPROACH
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Writing solutions designed around the purpose of your content.
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
              WriteGo provides professional writing solutions across a range
              of content categories. Each project can be structured according
              to its audience, subject, platform, tone, and communication
              objective.
            </p>

            <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">
              From SEO articles and website pages to business writing,
              educational content, copywriting, editing, and optimization, our
              portfolio reflects the different types of writing support
              available through WriteGo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Clear and structured writing",
                "Audience-focused content",
                "Professional presentation",
                "SEO-friendly content",
                "Editing and optimization",
                "Business-focused communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle
                    size={19}
                    className="shrink-0 text-purple-600"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-purple-50 p-8 dark:bg-purple-950/30 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-white">
              <BookOpen size={27} />
            </div>

            <h3 className="mt-6 text-2xl font-black text-gray-950 dark:text-white">
              A growing professional portfolio
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              This portfolio presents our writing capabilities and service
              categories. Verified client projects can be added here as the
              portfolio grows and whenever appropriate permission is available
              to publicly display the work.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-purple-600"
            >
              Learn About WriteGo
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-gray-900 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-purple-600">
              OUR EXPERTISE
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Writing Services & Content Categories
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
              Explore the different types of professional content we can
              provide.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-purple-950 dark:via-gray-950 dark:to-blue-950">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-purple-600 shadow-lg dark:bg-gray-900">
                      <Icon size={35} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-600">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-gray-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={item.link}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-purple-600 transition group-hover:gap-3"
                    >
                      View Service
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student & Business Section */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:from-blue-950/30 dark:to-purple-950/30 sm:p-10">
            <GraduationCap size={40} className="text-purple-600" />

            <h2 className="mt-6 text-3xl font-black text-gray-950 dark:text-white">
              For Students & Learners
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              We provide clear and structured writing support for educational
              and learning-focused projects, including research-based content,
              editing, proofreading, and educational writing.
            </p>

            <Link
              to="/services/research-based-content"
              className="mt-7 inline-flex items-center gap-2 font-bold text-purple-600"
            >
              Explore Research Content
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <BriefcaseBusiness size={40} className="text-purple-400" />

            <h2 className="mt-6 text-3xl font-black">
              For Businesses & Brands
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Businesses can use professional website content, SEO articles,
              copywriting, product descriptions, business writing, marketing
              content, and other services to strengthen their digital
              communication.
            </p>

            <Link
              to="/services/business-corporate-writing"
              className="mt-7 inline-flex items-center gap-2 font-bold text-purple-400"
            >
              Explore Business Writing
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Website Navigation */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-gray-900 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-purple-600">
              EXPLORE WRITEGO
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Explore Our Website
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
              Visit the different sections of our website to learn more about
              WriteGo and our services.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {websiteLinks.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="font-black text-gray-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-purple-600">
                  Visit Page
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950/40">
            <Share2 size={27} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-gray-950 dark:text-white">
            Connect With WriteGo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
            Follow our professional platforms for writing resources, updates,
            articles, and new content.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/talha-freelancer-369240396/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:border-purple-500 hover:text-purple-600 dark:border-gray-700 dark:text-gray-300"
            >
              <Linkedin size={19} />
              LinkedIn
            </a>

            <a
              href="https://medium.com/@talhafreelancr109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:border-purple-500 hover:text-purple-600 dark:border-gray-700 dark:text-gray-300"
            >
              <BookOpen size={19} />
              Medium
            </a>

            <a
              href="https://uk.pinterest.com/talhafreelancr109/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:border-purple-500 hover:text-purple-600 dark:border-gray-700 dark:text-gray-300"
            >
              <Pinterest size={19} />
              Pinterest
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-950 px-5 py-20 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Have a Writing Project in Mind?
          </h2>

          <p className="mt-5 leading-8 text-purple-100">
            Tell us about your project, audience, requirements, and goals.
            We can help you choose the right writing solution.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-bold text-purple-950 transition hover:bg-purple-50"
          >
            Contact WriteGo
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
