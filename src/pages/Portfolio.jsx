import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";

const portfolioImages = {
  studentWriting:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",

  femaleStudent:
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",

  maleStudent:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",

  laptopWork:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",

  research:
    "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80",

  business:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
};

const services = [
  {
    title: "SEO Content Writing",
    text: "Search-focused articles and website content created around real user intent, clear structure, useful information and natural keyword placement.",
    link: "/services",
  },
  {
    title: "Blog & Article Writing",
    text: "Well-researched long-form articles designed to educate readers, answer important questions and strengthen a website's authority.",
    link: "/services",
  },
  {
    title: "Website Content",
    text: "Professional homepage, service-page, about-page and supporting website copy created to communicate a business clearly.",
    link: "/services",
  },
  {
    title: "Academic & Student Content",
    text: "Structured writing support for students who need help with research-based content, reports, essays, presentations and written projects.",
    link: "/services",
  },
  {
    title: "Copywriting",
    text: "Persuasive website and marketing copy designed to communicate benefits clearly and encourage visitors to take the next step.",
    link: "/services",
  },
  {
    title: "Editing & Proofreading",
    text: "Detailed editing focused on grammar, clarity, readability, structure, consistency and professional presentation.",
    link: "/services",
  },
];

const workTypes = [
  "SEO Articles",
  "Website Content",
  "Blog Posts",
  "Business Writing",
  "Academic Writing Support",
  "Product Descriptions",
  "Landing Page Copy",
  "Social Media Content",
  "Email Content",
  "Research-Based Writing",
  "Editing & Proofreading",
  "Content Optimization",
];

export default function Portfolio() {
  return (
    <PageShell>
      <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

        {/* HERO */}
        <section className="px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-blue-600">
                OUR PORTFOLIO
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Writing That Turns Ideas Into Clear, Professional Content.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                WriteGo is a professional writing service platform built to
                support students, professionals, businesses, brands and
                website owners with clear, useful and purpose-driven content.
                Our portfolio represents the different types of writing,
                editing, research and content-development support that can be
                delivered through our services.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                From search-friendly blog articles and website pages to
                business communication, academic writing support, product
                descriptions and marketing copy, our approach is centered on
                understanding the reader first and then creating content that
                communicates the intended message with clarity.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Explore Services
                </Link>

                <Link
                  to="/contact"
                  className="rounded-xl border border-gray-300 px-6 py-3 font-bold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={portfolioImages.studentWriting}
                alt="Students working together on writing and research"
                className="h-[520px] w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* STATS */}
        <section className="bg-gray-50 px-5 py-16 dark:bg-gray-900">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-gray-950">
              <div className="text-4xl font-black text-blue-600">12+</div>
              <p className="mt-2 font-semibold text-gray-600 dark:text-gray-300">
                Content Categories
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-gray-950">
              <div className="text-4xl font-black text-blue-600">6+</div>
              <p className="mt-2 font-semibold text-gray-600 dark:text-gray-300">
                Core Writing Services
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-gray-950">
              <div className="text-4xl font-black text-blue-600">24/7</div>
              <p className="mt-2 font-semibold text-gray-600 dark:text-gray-300">
                Online Project Access
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-gray-950">
              <div className="text-4xl font-black text-blue-600">100%</div>
              <p className="mt-2 font-semibold text-gray-600 dark:text-gray-300">
                Focus on Quality
              </p>
            </div>

          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">

            <p className="text-center font-bold uppercase tracking-[0.2em] text-blue-600">
              ABOUT OUR WORK
            </p>

            <h2 className="mt-4 text-center text-4xl font-black sm:text-5xl">
              A Portfolio Built Around Real Writing Needs
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-300">
              A professional writing portfolio should do more than display
              attractive cards or a collection of generic service names. It
              should help a potential client understand what the writer can
              actually deliver, who the service is designed for, what type of
              problems the service can solve, and how the final content can
              support a wider objective. That is the purpose of the WriteGo
              portfolio. Our work covers multiple content formats because
              different clients have different communication requirements.
              Students may need structured research support and carefully
              edited written material. Website owners may need informative
              articles that answer search queries and establish topical
              authority. Businesses may need website pages, corporate
              communication and marketing copy that explains their value
              proposition. Brands may require product descriptions, landing
              pages or social content that communicates benefits in a direct
              and engaging way. Instead of treating all writing projects as
              identical, we approach each project according to its audience,
              purpose, format and desired outcome. This allows the writing to
              remain useful rather than becoming generic filler. The portfolio
              therefore represents a broad professional writing environment
              where research, structure, readability, tone, editing and
              communication work together. Every category shown below is
              designed to demonstrate the type of support a client can expect
              when working with WriteGo.
            </p>

          </div>
        </section>

        {/* FEATURED IMAGE SECTION */}
        <section className="px-5 pb-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">

            <div className="overflow-hidden rounded-3xl lg:col-span-2">
              <img
                src={portfolioImages.femaleStudent}
                alt="Female student working on a writing project"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-gray-950 p-8 text-white dark:bg-gray-900">
              <p className="font-bold uppercase tracking-widest text-blue-400">
                FOR STUDENTS
              </p>

              <h2 className="mt-4 text-3xl font-black">
                Clear Support for Research, Writing & Presentation
              </h2>

              <p className="mt-5 leading-8 text-gray-300">
                Students often need content that is structured, readable and
                properly organized. WriteGo provides writing and editing
                support that can help students improve the quality and
                presentation of their written projects.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex w-fit rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500"
              >
                Discuss Your Project
              </Link>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50 px-5 py-20 dark:bg-gray-900 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                WHAT WE CREATE
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Our Writing Services
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Explore the main categories of professional writing support
                available through WriteGo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                >
                  <h3 className="text-2xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                    {service.text}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-6 inline-block font-bold text-blue-600"
                  >
                    View Services →
                  </Link>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* LONG FORM SEO CONTENT */}
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

            <div>
              <img
                src={portfolioImages.laptopWork}
                alt="Professional content writing and digital work"
                className="h-[520px] w-full rounded-3xl object-cover"
              />
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                CONTENT WRITING
              </p>

              <h2 className="mt-4 text-4xl font-black">
                SEO Articles, Blogs and Website Content
              </h2>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                Content writing is one of the central areas of the WriteGo
                portfolio. Modern websites require more than pages filled
                with keywords. They need content that answers genuine
                questions, communicates expertise and provides a useful
                experience to the person reading it. Our SEO articles and
                blog-writing services are designed around this principle. A
                strong article begins with understanding the topic and the
                intended reader. Research is then used to organize the subject
                into a logical structure, with headings, supporting
                information and useful explanations that make the material
                easier to consume. Website content follows a similar
                principle but focuses more directly on communicating a
                company's services, advantages and positioning. Homepage copy
                should immediately tell visitors what a business does.
                Service pages should explain what is offered and why it
                matters. Supporting content should answer questions that may
                prevent a visitor from making a decision. This portfolio
                category demonstrates our ability to work across these
                different formats while maintaining a consistent focus on
                clarity, structure and audience intent. Whether the project is
                a single article, a collection of blog posts or a complete
                website-content requirement, the objective remains the same:
                create writing that has a clear purpose and provides genuine
                value to the reader.
              </p>

              <Link
                to="/services"
                className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
              >
                Explore Writing Services
              </Link>
            </div>

          </div>
        </section>

        {/* RESEARCH */}
        <section className="bg-gray-950 px-5 py-20 text-white dark:bg-black lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="font-bold uppercase tracking-widest text-blue-400">
                RESEARCH & QUALITY
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Research Comes Before Strong Writing
              </h2>

              <p className="mt-6 leading-8 text-gray-300">
                Quality writing depends on the quality of the information
                behind it. For research-based projects, our approach focuses
                on understanding the subject, identifying the intended
                audience and organizing information before the writing stage.
                This is particularly important for students, businesses and
                websites that publish educational or informational content.
                Research-based writing should not simply increase word count.
                It should help the reader understand something. For a student,
                this may mean presenting information in a logical academic
                structure. For a business, it may mean explaining an industry
                topic in a way that demonstrates expertise. For a website, it
                may mean creating a comprehensive resource around a particular
                search intent. We therefore treat research as part of the
                writing process rather than an optional extra. Information is
                reviewed, organized and converted into readable sections so
                that the final piece feels coherent. The result is content
                that is easier to understand, easier to navigate and more
                appropriate for its intended audience.
              </p>
            </div>

            <img
              src={portfolioImages.research}
              alt="Research and writing materials"
              className="h-[480px] w-full rounded-3xl object-cover"
            />

          </div>
        </section>

        {/* WORK TYPES */}
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                CONTENT FORMATS
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                What We Can Help You Create
              </h2>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {workTypes.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-gray-50 px-5 py-3 font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* BUSINESS CONTENT */}
        <section className="px-5 pb-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

            <div className="order-2 lg:order-1">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                FOR BUSINESSES
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Professional Content for Brands and Businesses
              </h2>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                Businesses need content that represents them professionally.
                A website visitor may judge a company within seconds based on
                how clearly its website communicates its services and value.
                This is why business writing is an important part of our
                portfolio. We can support companies with website pages,
                service descriptions, business articles, marketing content,
                product descriptions and other written materials that require
                a professional tone. The writing can be adapted according to
                the industry, target audience and purpose of the page. A
                technology company may require precise and informative
                language, while an ecommerce brand may need persuasive product
                descriptions focused on benefits. A professional service
                provider may require clear explanations that help potential
                customers understand the value of its offer. The common
                requirement is clarity. Visitors should not have to struggle
                to understand what a company offers. Good business content
                creates a bridge between the company and its audience, helping
                people understand the service, recognize its value and decide
                what action to take next. Our portfolio therefore includes
                multiple business-content formats rather than treating
                corporate writing as one single category.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
              >
                Request a Writing Solution
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={portfolioImages.business}
                alt="Business professionals collaborating"
                className="h-[500px] w-full rounded-3xl object-cover"
              />
            </div>

          </div>
        </section>

        {/* STUDENT SECTION */}
        <section className="bg-gray-50 px-5 py-20 dark:bg-gray-900 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

            <img
              src={portfolioImages.maleStudent}
              alt="Student working on a project"
              className="h-[500px] w-full rounded-3xl object-cover"
            />

            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                STUDENT SUPPORT
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Writing Support Designed Around Student Needs
              </h2>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                Students frequently work with demanding deadlines and
                complicated written assignments. They may need help
                organizing information, improving grammar, making a document
                easier to read or developing research-based written material.
                WriteGo can provide professional writing and editing support
                for appropriate student projects while keeping the focus on
                quality, structure and clarity. The objective is to help
                students communicate their ideas more effectively. Our
                services can include research-based writing support, editing,
                proofreading, article writing, presentation content and other
                legitimate written-content requirements. We understand that a
                student audience may require a different tone and structure
                from a corporate client. Academic and educational content
                should be organized carefully, use clear explanations and
                maintain an appropriate level of formality. That is why our
                approach begins by understanding the project requirements
                before deciding how the content should be structured. Students
                can also use our general writing services for blogs,
                portfolios, personal projects and professional profiles. The
                goal is not simply to provide more words. The goal is to help
                create content that is organized, understandable and
                professionally presented.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
              >
                Discuss Your Requirements
              </Link>
            </div>

          </div>
        </section>

        {/* PROCESS */}
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                OUR APPROACH
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                From Requirement to Final Content
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-3xl border border-gray-200 p-7 dark:border-gray-800">
                <div className="text-3xl font-black text-blue-600">01</div>
                <h3 className="mt-5 text-xl font-black">Understand</h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  We first understand the project, audience, format,
                  requirements and intended purpose.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 p-7 dark:border-gray-800">
                <div className="text-3xl font-black text-blue-600">02</div>
                <h3 className="mt-5 text-xl font-black">Research</h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Relevant information is organized before writing begins.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 p-7 dark:border-gray-800">
                <div className="text-3xl font-black text-blue-600">03</div>
                <h3 className="mt-5 text-xl font-black">Create</h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  The content is developed according to the agreed structure,
                  tone and objectives.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 p-7 dark:border-gray-800">
                <div className="text-3xl font-black text-blue-600">04</div>
                <h3 className="mt-5 text-xl font-black">Refine</h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  The final material is reviewed for clarity, grammar,
                  structure and presentation.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* INTERNAL WEBSITE LINKS */}
        <section className="bg-gray-50 px-5 py-20 dark:bg-gray-900 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                EXPLORE WRITEGO
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Continue Exploring Our Website
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
                Explore our services, learn more about WriteGo, read our
                content and contact us to discuss your project.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

              <Link
                to="/"
                className="rounded-2xl bg-white p-6 text-center font-black shadow-sm hover:shadow-md dark:bg-gray-950"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="rounded-2xl bg-white p-6 text-center font-black shadow-sm hover:shadow-md dark:bg-gray-950"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="rounded-2xl bg-white p-6 text-center font-black shadow-sm hover:shadow-md dark:bg-gray-950"
              >
                Services
              </Link>

              <Link
                to="/blog"
                className="rounded-2xl bg-white p-6 text-center font-black shadow-sm hover:shadow-md dark:bg-gray-950"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="rounded-2xl bg-white p-6 text-center font-black shadow-sm hover:shadow-md dark:bg-gray-950"
              >
                Contact
              </Link>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-7 py-14 text-center text-white sm:px-12">

            <p className="font-bold uppercase tracking-widest text-blue-100">
              READY TO GET STARTED?
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Let's Create Content That Works for You
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">
              Whether you need an article, website content, business writing,
              editing support or a larger content project, tell us what you
              need and we can discuss the right solution for your project.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                to="/contact"
                className="rounded-xl bg-white px-7 py-3 font-black text-blue-600 hover:bg-gray-100"
              >
                Contact Us
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-white/60 px-7 py-3 font-black text-white hover:bg-white/10"
              >
                View Services
              </Link>

            </div>

          </div>
        </section>

      </main>
    </PageShell>
  );
}
