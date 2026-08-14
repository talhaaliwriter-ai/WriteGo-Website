import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    title: "SEO Content Writing",
    category: "SEO & Content Strategy",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    text: `Our SEO content writing service is designed for businesses, websites, students, professionals, and organizations that need useful content with a clear purpose. We create structured articles around a topic, audience, search intent, and communication goal rather than simply producing paragraphs filled with keywords. A professional SEO article should be readable, informative, logically organized, and valuable to the person searching for the information. Our approach focuses on strong introductions, meaningful headings, natural keyword placement, useful explanations, relevant examples, and clear conclusions. We can prepare blog posts, informational articles, website content, guides, service pages, and other forms of search-friendly writing. For students, this service can also help with educational content, research-based writing, summaries, explanatory articles, and presentation material where original and understandable wording is required. For businesses, we can create content that explains products, services, industries, and solutions in a professional tone. Each project can be adapted to the intended audience and brand voice. We also pay attention to readability, sentence structure, consistency, and overall presentation so the final content feels professionally prepared rather than mechanically written. Our objective is to help clients build a stronger content presence through useful, well-organized writing that communicates information clearly and supports long-term website growth.`,
  },
  {
    title: "Blog & Article Writing",
    category: "Blogs, Articles & Editorial Content",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    text: `Professional blog and article writing is one of the core services presented in our portfolio. A successful article needs more than a large number of words; it needs a clear subject, logical flow, useful information, engaging presentation, and an appropriate tone for its readers. We develop articles around the client's topic and intended audience and can structure them with introductions, headings, subheadings, examples, practical explanations, conclusions, and frequently asked questions where appropriate. Students can use professional writing support for educational topics, study-related articles, informational resources, career content, and other legitimate writing projects that require clear communication. Businesses can use our service for company blogs, educational resources, industry articles, customer guides, website publications, and informational marketing content. We aim to make every article easy to read while maintaining a professional standard of writing. Research-based topics can be organized into sections so readers can quickly understand the important points without becoming overwhelmed by unnecessary information. We can also adapt the writing style depending on whether the project requires an academic, business, conversational, informative, promotional, or general editorial tone. Our portfolio reflects a service-oriented approach: the content should not only look polished but should also serve a specific communication objective. From a short blog post to a detailed long-form article, we can build content around the client's requirements, preferred word count, structure, audience, and publishing needs.`,
  },
  {
    title: "Website Content Writing",
    category: "Business & Website Copy",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    text: `Website content plays an important role in explaining who a business is, what it offers, and why visitors should continue exploring the website. Our website content writing service focuses on creating clear and professional copy for important pages such as Home, About Us, Services, Portfolio, Contact, Pricing, Privacy Policy, and other informational sections. We understand that website visitors usually scan information before deciding whether to contact a business, so content should be organized in a way that makes important information easy to understand. Our writing can be adapted for freelancers, agencies, service providers, small businesses, professional organizations, educational projects, and online brands. For students and new professionals building a personal or academic presence, we can also help structure biography, profile, project, and portfolio content in a professional manner. For businesses, we can develop service descriptions that explain the benefits and purpose of each offering without making the page unnecessarily complicated. We also focus on consistency across the website so headings, descriptions, calls to action, and brand messaging feel connected. The goal is to create content that gives visitors confidence and helps them understand the business quickly. A professionally written website should communicate expertise without using unnecessarily complicated language. Every page should have a reason to exist, and its content should support the visitor's journey. That is the standard we aim to maintain across our website-content projects.`,
  },
  {
    title: "Academic & Student Writing Support",
    category: "Student-Focused Writing Services",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    text: `Students often need professional assistance with communicating their ideas clearly, organizing information, improving drafts, and preparing educational content. Our student-focused writing support is designed around legitimate academic and educational needs while keeping clarity and originality at the center. We can assist with proofreading, editing, formatting, explanatory writing, research organization, summaries, presentation text, personal statements, study resources, and other appropriate writing tasks. The purpose is to help students understand and present their own ideas more effectively rather than replacing their learning process. We can improve grammar, sentence structure, readability, organization, and overall presentation while maintaining the student's intended meaning. For international students, clear English writing can be particularly important when preparing professional or educational documents. We can also provide English-to-Urdu and Urdu-to-English translation support when language accessibility is required. Our portfolio imagery represents the type of audience we aim to serve: students, learners, young professionals, and people developing their communication skills. We believe good writing should be understandable, organized, and appropriate for its purpose. A student preparing a presentation may need concise and structured language, while someone preparing a longer research-based document may require a more formal structure. We therefore adapt the writing approach according to the project. The result should be polished enough to present professionally while remaining faithful to the client's own ideas and requirements.`,
  },
  {
    title: "Business & Marketing Content",
    category: "Business Communication",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    text: `Businesses need content that communicates their value clearly and professionally. Our business and marketing writing service covers a wide range of content including service descriptions, promotional copy, business articles, email content, social media copy, landing-page messaging, product descriptions, company profiles, and other forms of professional communication. We focus on understanding the purpose of the content before writing it. A marketing page may need persuasive language, while a company profile may require a more formal and trustworthy tone. Similarly, an email should be direct and easy to understand, while a detailed business article can provide deeper information and establish authority around a subject. Our writing can be tailored for small businesses, freelancers, agencies, startups, professionals, and established brands. We also understand that consistency matters: the tone used on a website should not feel completely disconnected from the tone used in other business communications. For this reason, we can follow an existing brand voice or help establish a suitable professional style. Strong business content should explain the offer, communicate benefits, address the audience's needs, and guide readers toward an appropriate next step without making unrealistic promises. Our objective is to produce practical content that businesses can actually use across their digital presence. From a single service description to a complete collection of website and marketing copy, we can organize the content according to the client's goals and communication requirements.`,
  },
  {
    title: "Editing, Proofreading & Content Optimization",
    category: "Editing & Quality Improvement",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",
    text: `Good content does not always require complete rewriting. Sometimes an existing document simply needs careful editing, proofreading, restructuring, or optimization. Our editing and proofreading service focuses on improving the quality of existing content while preserving its original purpose and meaning. We can review grammar, spelling, punctuation, sentence structure, repetition, clarity, consistency, headings, paragraph flow, and general readability. Content optimization can also involve reorganizing sections so readers can find important information more easily. This service can be useful for students, professionals, businesses, bloggers, website owners, and organizations that already have content but want it presented more professionally. Students may need help polishing a draft, improving a personal statement, correcting language issues, or making educational material easier to understand. Businesses may have existing website pages, service descriptions, articles, or marketing content that needs refinement before publication. Instead of changing content unnecessarily, we focus on identifying areas where improvement provides genuine value. We can also help make long paragraphs more readable, improve transitions between sections, and remove unnecessary repetition. When appropriate, we can recommend structural changes so the final document communicates its main message more effectively. The result is content that feels cleaner, more consistent, and easier for the intended audience to read. This service is especially useful when clients already have valuable information but need professional writing expertise to transform that information into a polished final document.`,
  },
];

function PortfolioCard({ item }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
      <img
        src={item.image}
        alt={item.title}
        className="h-64 w-full object-cover"
        loading="lazy"
      />

      <div className="p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          {item.category}
        </p>

        <h2 className="mt-3 text-2xl font-black text-gray-950 dark:text-white">
          {item.title}
        </h2>

        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
          {item.text}
        </p>

        <Link
          to="/services"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500"
        >
          Explore Services
        </Link>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-white px-5 py-16 text-center dark:bg-gray-950">
        <p className="font-bold uppercase tracking-widest text-blue-600">
          OUR PORTFOLIO
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black text-gray-950 dark:text-white sm:text-6xl">
          Professional Writing Portfolio
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Explore our professional writing, editing, SEO, website content,
          student support, business communication, and marketing content
          services.
        </p>
      </section>

      {/* Navigation */}
      <section className="border-y border-gray-200 bg-gray-50 px-5 py-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm dark:bg-gray-950 dark:text-white">
            Home
          </Link>

          <Link to="/about" className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm dark:bg-gray-950 dark:text-white">
            About Us
          </Link>

          <Link to="/services" className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm dark:bg-gray-950 dark:text-white">
            Services
          </Link>

          <Link to="/portfolio" className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm">
            Portfolio
          </Link>

          <Link to="/blog" className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm dark:bg-gray-950 dark:text-white">
            Blog
          </Link>

          <Link to="/pricing" className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm dark:bg-gray-950 dark:text-white">
            Pricing
          </Link>

          <Link to="/contact" className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm dark:bg-gray-950 dark:text-white">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Portfolio Content */}
      <main className="bg-gray-50 px-5 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl space-y-10">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </main>

      {/* Services Links */}
      <section className="bg-white px-5 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            WORK WITH US
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-5xl">
            Explore Our Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Whether you need SEO content, blog writing, website copy,
            proofreading, student writing support, translation, or business
            content, explore our complete services page to learn more.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="rounded-lg bg-blue-600 px-7 py-3 font-bold text-white hover:bg-blue-500"
            >
              View All Services
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-gray-300 px-7 py-3 font-bold text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Social / Professional Presence */}
      <section className="bg-gray-950 px-5 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-widest text-blue-400">
            CONNECT WITH US
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Follow Our Professional Content
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-300">
            Visit our professional profiles to explore our writing work,
            articles, business updates, professional discussions, and visual
            content.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/talha-freelancer-369240396/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-6 py-3 font-bold text-gray-900 hover:bg-gray-200"
            >
              LinkedIn
            </a>

            <a
              href="https://medium.com/@talhafreelancr109"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-6 py-3 font-bold text-gray-900 hover:bg-gray-200"
            >
              Medium
            </a>

            <a
              href="https://uk.pinterest.com/talhafreelancr109/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-6 py-3 font-bold text-gray-900 hover:bg-gray-200"
            >
              Pinterest
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 px-5 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-white sm:text-5xl">
            Have a Writing Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">
            Tell us what you need and let us create clear, professional,
            audience-focused content for your project.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-lg bg-white px-7 py-3 font-bold text-blue-600 shadow-lg hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
