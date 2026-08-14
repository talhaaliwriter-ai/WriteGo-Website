import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";

const featuredPost = {
  category: "Content Strategy",
  title: "How to Build a Content Strategy That Actually Supports Business Growth",
  description:
    "A strong content strategy is more than publishing articles regularly. It connects audience needs, search intent, brand positioning, useful information, and measurable business objectives into one consistent publishing system.",
  image:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
};

const latestPosts = [
  {
    category: "SEO Writing",
    title: "SEO Writing in 2026: From Keywords to Search Intent",
    description:
      "Modern SEO writing is increasingly focused on usefulness, relevance, topical depth, clarity, and satisfying the reason behind a search.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Website Content",
    title: "How Professional Website Copy Builds Trust",
    description:
      "Your website is often the first serious interaction a potential customer has with your business. Clear and persuasive copy can make that experience significantly stronger.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Copywriting",
    title: "The Difference Between Writing and Conversion-Focused Copy",
    description:
      "Good copy does more than communicate information. It guides attention, explains value, addresses concerns, and encourages the reader to take the next step.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Product Content",
    title: "How to Write Product Descriptions That Sell",
    description:
      "Effective product descriptions turn specifications into meaningful benefits while helping customers understand why a product is worth considering.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Business Writing",
    title: "Why Professional Business Content Matters",
    description:
      "Business websites, company profiles, proposals, presentations, and professional communications all depend on clear writing that represents the organization properly.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Content Optimization",
    title: "How to Improve Existing Website Content",
    description:
      "Not every website needs to start again from zero. Strategic editing and optimization can improve clarity, structure, readability, and overall content quality.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
];

const categories = [
  {
    title: "SEO Content Writing",
    description:
      "Learn how useful, search-focused content can support visibility, authority, and long-term organic growth.",
  },
  {
    title: "Blog & Article Writing",
    description:
      "Explore research, structure, readability, storytelling, and the principles behind valuable long-form articles.",
  },
  {
    title: "Website Content",
    description:
      "Discover how homepage, service, about, landing page, and other website copy can communicate value clearly.",
  },
  {
    title: "Copywriting",
    description:
      "Understand persuasive writing techniques used to communicate offers, benefits, positioning, and calls to action.",
  },
  {
    title: "Product Descriptions",
    description:
      "Learn how to transform product features into clear benefits that help potential customers make informed decisions.",
  },
  {
    title: "Business Writing",
    description:
      "Explore professional writing for companies, organizations, entrepreneurs, and modern digital businesses.",
  },
];

const futureTopics = [
  "How to Create a Professional Content Calendar",
  "SEO Content vs. Traditional Blog Writing",
  "How Search Intent Changes the Way You Write",
  "Homepage Copywriting: What Every Business Website Needs",
  "How to Structure a High-Converting Service Page",
  "The Complete Guide to Writing Product Descriptions",
  "How Editing Can Improve Weak Website Content",
  "Content Writing Mistakes Businesses Should Avoid",
  "How to Write Better Blog Introductions",
  "How Professional Copy Builds Brand Authority",
  "Content Ideas for Startups and Small Businesses",
  "How Research Improves the Quality of Online Content",
];

export default function Blog() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="bg-white px-5 py-20 dark:bg-gray-950 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
              WRITEGO INSIGHTS
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight text-gray-950 dark:text-white sm:text-6xl">
              Ideas, strategies and insights for better content.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore practical insights about SEO writing, blog content,
              website copy, copywriting, product descriptions, business
              writing, content strategy, editing, and digital communication.
              The WriteGo Blog is designed to help businesses, professionals,
              students, creators, and organizations understand how better
              content can improve communication and create stronger digital
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Explore Our Services
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-gray-300 px-6 py-3 font-bold text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="bg-gray-50 px-5 py-16 dark:bg-gray-900 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              FEATURED INSIGHT
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Start with the fundamentals
            </h2>
          </div>

          <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="grid lg:grid-cols-2">
              <div className="min-h-[320px]">
                <img
                  src={featuredPost.image}
                  alt="Content strategy workspace"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-sm font-black uppercase tracking-widest text-blue-600">
                  {featuredPost.category}
                </span>

                <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950 dark:text-white sm:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                  {featuredPost.description}
                </p>

                <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                  Whether you are building a new website, developing a brand,
                  publishing educational resources, or trying to improve
                  organic visibility, content works best when every piece has
                  a clear purpose. A professional strategy helps determine
                  what to publish, who it is for, what problem it solves, and
                  what action the reader should take next.
                </p>

                <Link
                  to="/services"
                  className="mt-7 inline-flex w-fit rounded-xl bg-gray-950 px-6 py-3 font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  Explore Content Services
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="bg-white px-5 py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                LATEST ARTICLES
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
                Practical ideas for better content
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
              Our editorial topics cover the areas where professional writing
              can make the biggest difference to websites, businesses,
              products, brands, and online communication.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                    {post.category}
                  </span>

                  <h3 className="mt-4 text-xl font-black leading-7 text-gray-950 dark:text-white">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex font-bold text-blue-600 hover:text-blue-500"
                  >
                    Explore related services →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT CATEGORIES */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              EXPLORE BY TOPIC
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Content topics built around real business needs
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              Different types of content require different approaches. A
              search-focused article, a homepage, a product description, and
              a business profile should not all be written in the same way.
              Our blog explores these differences so readers can understand
              what professional content should achieve in each situation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-600 dark:bg-blue-950/40">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-950 dark:text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>

                <Link
                  to="/services"
                  className="mt-5 inline-block font-bold text-blue-600"
                >
                  View services →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CONTENT MATTERS */}
      <section className="bg-white px-5 py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                THE WRITEGO APPROACH
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950 dark:text-white sm:text-4xl">
                Content should inform, communicate, persuade and create value.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-300">
                Professional content is not simply about putting words on a
                page. Strong content begins with understanding the audience,
                the subject, the purpose of the page, the brand voice, and the
                desired outcome. It should be easy to understand while still
                providing enough depth to answer genuine questions.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                For businesses, this can mean clearer website messaging,
                stronger service pages, better product communication, more
                useful blog content, or a more professional brand presence.
                For students and professionals, well-structured writing can
                make complex ideas easier to communicate and understand.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500"
              >
                Learn About WriteGo
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="People collaborating on content"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE TOPICS */}
      <section className="bg-gray-50 px-5 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              COMING NEXT
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              More insights are being prepared
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300">
              This section gives the blog room to grow. As new articles are
              published, these planned topics can be replaced with complete
              articles, guides, case studies, and practical resources.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {futureTopics.map((topic, index) => (
              <div
                key={topic}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950"
              >
                <span className="text-sm font-black text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-bold text-gray-800 dark:text-gray-200">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL NAVIGATION */}
      <section className="bg-white px-5 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900 sm:p-10">
            <h2 className="text-2xl font-black text-gray-950 dark:text-white">
              Explore WriteGo
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Continue exploring our website to learn more about our services,
              work, company, and ways to get in touch.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/"
                className="rounded-xl border border-gray-300 px-5 py-3 font-bold text-gray-800 hover:bg-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-950"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-gray-300 px-5 py-3 font-bold text-gray-800 hover:bg-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-950"
              >
                Services
              </Link>

              <Link
                to="/portfolio"
                className="rounded-xl border border-gray-300 px-5 py-3 font-bold text-gray-800 hover:bg-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-950"
              >
                Portfolio
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-gray-300 px-5 py-3 font-bold text-gray-800 hover:bg-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-950"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-gray-300 px-5 py-3 font-bold text-gray-800 hover:bg-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-950"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-950 px-5 py-20 dark:bg-black">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-widest text-blue-400">
            READY TO CREATE BETTER CONTENT?
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Turn your ideas into professional content.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300">
            Whether you need SEO articles, website content, blog posts,
            product descriptions, copywriting, business writing, editing, or
            another professional writing solution, WriteGo can help you turn
            your requirements into clear and useful content.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-black text-white transition hover:bg-blue-500"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
