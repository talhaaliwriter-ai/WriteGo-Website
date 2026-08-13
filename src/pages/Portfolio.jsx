import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  GraduationCap,
  Layout,
  Mail,
  PenTool,
  Search,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

const portfolioItems = [
  {
    category: "SEO Content",
    title: "Search-Focused Content Strategy",
    description:
      "Examples of structured, audience-focused content created around search intent, readability, topical relevance, and clear information architecture.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    link: "/services/seo-content-writing",
  },
  {
    category: "Blog Writing",
    title: "Long-Form Articles & Blog Content",
    description:
      "Professional blog content developed with clear headings, useful explanations, logical flow, and a reader-first approach.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    link: "/services/blog-article-writing",
  },
  {
    category: "Student Support",
    title: "Editing, Proofreading & Academic Support",
    description:
      "Support for improving clarity, grammar, structure, formatting, citations, and presentation while keeping the student's own work and ideas central.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    link: "/services/editing-proofreading",
  },
  {
    category: "Website Content",
    title: "Business & Website Copy",
    description:
      "Clear website messaging designed to explain services, strengthen brand communication, and guide visitors toward the next step.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    link: "/services/website-content-writing",
  },
  {
    category: "Research Content",
    title: "Research-Based Information Content",
    description:
      "Well-organized informational content developed through careful research, source review, planning, and audience-focused presentation.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    link: "/services/research-based-content",
  },
  {
    category: "Marketing",
    title: "Marketing & Brand Communication",
    description:
      "Content concepts for campaigns, service pages, promotional messaging, and digital communication across different audiences.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    link: "/services/marketing-content",
  },
];

const services = [
  {
    icon: Search,
    title: "SEO Content Writing",
    text: "Search-focused articles and website content structured around useful information and audience intent.",
    link: "/services/seo-content-writing",
  },
  {
    icon: FileText,
    title: "Blog & Article Writing",
    text: "Well-organized blog posts and articles created for readers, brands, websites, and content platforms.",
    link: "/services/blog-article-writing",
  },
  {
    icon: Globe2,
    title: "Website Content",
    text: "Professional copy for business websites, service pages, landing pages, and brand communication.",
    link: "/services/website-content-writing",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    text: "Clear and persuasive copy designed to communicate an offer, explain value, and encourage action.",
    link: "/services/copywriting",
  },
  {
    icon: GraduationCap,
    title: "Student Content Support",
    text: "Editing, proofreading, formatting, language improvement, research guidance, and presentation support.",
    link: "/services/editing-proofreading",
  },
  {
    icon: ClipboardCheck,
    title: "Content Optimization",
    text: "Improving existing content for clarity, structure, readability, consistency, and overall presentation.",
    link: "/services/content-optimization",
  },
];

const websiteLinks = [
  { title: "Home", description: "Explore our main website and writing solutions.", link: "/" },
  { title: "About Us", description: "Learn about WriteGo and our approach to professional writing.", link: "/about" },
  { title: "Services", description: "View our complete range of professional writing services.", link: "/services" },
  { title: "Portfolio", description: "Explore content categories and portfolio highlights.", link: "/portfolio" },
  { title: "Blog", description: "Read useful content, writing insights, and updates.", link: "/blog" },
  { title: "Contact", description: "Discuss your project and writing requirements with us.", link: "/contact" },
];

export default function Portfolio() {
  return (
    <PageShell>
      <main className="bg-gray-50 dark:bg-gray-950">
        {/* HERO */}
        <section className="border-b border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
                <Sparkles size={16} />
                OUR PORTFOLIO
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                Professional Writing Built Around
                <span className="block text-blue-600"> Real Content Needs</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                Explore the types of writing projects, content categories, editorial
                support, research-based work, and communication solutions that WriteGo
                can support. This portfolio presents the range of work and content
                approaches we can provide for students, professionals, businesses,
                website owners, brands, and growing digital projects.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
                >
                  Explore Services
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                >
                  Discuss a Project
                  <Mail size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO INTRO */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  OUR APPROACH
                </p>

                <h2 className="mt-4 text-4xl font-black text-gray-950 dark:text-white">
                  More Than Just Words on a Page
                </h2>

                <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                  At WriteGo, a strong content project begins with understanding what
                  the reader needs, what the client wants to communicate, and what
                  action the content should support. Our portfolio approach is built
                  around practical writing categories rather than presenting every
                  project as identical. A blog article requires a different structure
                  from a service page, a research-based piece requires a different
                  level of planning from marketing copy, and student support often
                  requires careful attention to language, formatting, clarity, and
                  presentation. We focus on creating organized, readable, and
                  purpose-driven content that can be adapted to different audiences
                  and project requirements. For businesses, this may include website
                  copy, service descriptions, SEO-focused articles, blogs, marketing
                  content, product descriptions, and professional communication. For
                  students, our support can include proofreading, grammar improvement,
                  structural feedback, formatting assistance, citation guidance,
                  research organization, and language polishing while respecting
                  academic integrity and keeping the student's own ideas and work at
                  the center. Every category shown in this portfolio represents a
                  content direction that can be discussed and tailored according to
                  the scope, audience, goals, instructions, and requirements of an
                  individual project.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
                  alt="Students and professionals collaborating on a writing project"
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section className="bg-white py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                PORTFOLIO HIGHLIGHTS
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-950 dark:text-white">
                Content Categories We Can Support
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Browse key writing categories and explore the relevant services
                available through WriteGo.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                      {item.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-gray-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>

                    <Link
                      to={item.link}
                      className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-3"
                    >
                      Explore This Service
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED SERVICES */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  SERVICES IN FOCUS
                </p>

                <h2 className="mt-4 text-4xl font-black text-gray-950 dark:text-white">
                  Writing Support for Different Goals
                </h2>

                <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                  Different projects require different writing strategies. Our service
                  categories are designed to make it easier to identify the type of
                  support you need before discussing the full project scope.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                        <Icon size={22} />
                      </div>

                      <h3 className="mt-5 text-xl font-black text-gray-950 dark:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                        {service.text}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600">
                        Learn More
                        <ArrowUpRight size={17} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT SUPPORT */}
        <section className="bg-gray-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Students collaborating and receiving professional support"
                  className="h-[430px] w-full object-cover"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 text-blue-300">
                  <GraduationCap size={20} />
                  <span className="font-bold uppercase tracking-widest">
                    Student Support
                  </span>
                </div>

                <h2 className="mt-4 text-4xl font-black">
                  Clear, Ethical Support for Student Content
                </h2>

                <p className="mt-6 leading-8 text-gray-300">
                  Students often need support at different stages of preparing their
                  own work. A draft may need better grammar and sentence structure,
                  an existing document may require proofreading, a report may need
                  clearer headings and formatting, or research material may need to
                  be organized into a more understandable structure. WriteGo can
                  provide support in these areas through language editing,
                  proofreading, formatting assistance, clarity improvements, citation
                  and reference guidance, research organization, document
                  presentation, and constructive feedback on structure and
                  readability. The purpose of this support is to help students
                  improve and present their own work more clearly rather than replace
                  their learning or misrepresent authorship. Each request can be
                  reviewed according to the type of document, required style,
                  instructions, deadline, and the level of support needed. This makes
                  the service useful for students who want an extra level of editorial
                  review before submitting work that they have prepared themselves.
                  Clear communication is important, so clients can explain exactly
                  what they want improved and which areas should remain unchanged.
                  Whether the focus is grammar, readability, structure, formatting,
                  presentation, or general editorial feedback, the goal is to provide
                  practical writing support while maintaining academic integrity and
                  respecting the student's original contribution.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Proofreading & grammar review",
                    "Formatting & presentation support",
                    "Clarity and readability improvement",
                    "Structure and organization feedback",
                    "Citation and reference guidance",
                    "Research organization support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900 p-4"
                    >
                      <CheckCircle2 size={19} className="text-blue-400" />
                      <span className="font-medium text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS CONTENT */}
        <section className="bg-white py-20 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                FOR BUSINESSES & BRANDS
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-950 dark:text-white">
                Content That Supports Your Website, Brand, and Communication Goals
              </h2>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                Businesses and digital projects often require content across multiple
                pages and platforms, which is why a portfolio should demonstrate more
                than a single writing format. WriteGo can support content planning and
                writing for websites, service pages, blogs, articles, SEO-focused
                content, landing pages, business communication, product descriptions,
                marketing content, newsletters, social media content, editing, and
                content optimization. The right approach depends on the audience and
                purpose of the page. A homepage may need concise messaging that
                introduces a business quickly, while a detailed service page may need
                stronger explanations, benefits, frequently asked questions, and
                clear calls to action. Blog content may require deeper research and
                educational value, while marketing content may need to communicate an
                offer more directly. Before work begins, clients can provide details
                such as their business information, target audience, keywords,
                preferred tone, word count, existing website pages, examples, and
                specific objectives. This information helps create a more focused
                content direction. Our portfolio categories represent the types of
                writing challenges we can help address, from building new content to
                improving existing material. The objective is always to create
                professional, organized, and audience-appropriate communication that
                fits the project rather than applying exactly the same template to
                every client.
              </p>
            </div>
          </div>
        </section>

        {/* WEBSITE NAVIGATION */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                EXPLORE WRITEGO
              </p>

              <h2 className="mt-4 text-4xl font-black text-gray-950 dark:text-white">
                Visit Every Important Section
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {websiteLinks.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  <h3 className="text-xl font-black text-gray-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600">
                    Visit Page
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL LINKS */}
        <section className="border-y border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <Share2 className="mx-auto text-blue-600" size={28} />

            <p className="mt-4 font-bold uppercase tracking-widest text-blue-600">
              CONNECT WITH US
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white">
              Follow Our Professional Content Journey
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600 dark:text-gray-300">
              Connect through our available professional platforms to explore more
              content, updates, and writing-related activity.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/talha-freelancer-369240396/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              >
                LinkedIn Profile
              </a>

              <a
                href="https://medium.com/@talhafreelancr109"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              >
                Medium Profile
              </a>

              <a
                href="https://uk.pinterest.com/talhafreelancr109/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-900 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              >
                Pinterest Profile
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-3xl bg-blue-600 px-6 py-14 text-center text-white sm:px-10">
              <Users className="mx-auto" size={32} />

              <h2 className="mt-5 text-4xl font-black">
                Have a Writing Project in Mind?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                Tell us about your project, audience, content requirements, preferred
                style, and goals. We can discuss the most suitable writing or
                editorial support for your needs.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Contact WriteGo
                <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
