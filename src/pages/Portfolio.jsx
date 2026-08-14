import PageShell from "../components/PageShell";

const projects = [
  {
    number: "01",
    category: "SEO & Blog Content",
    title: "Content That Builds Visibility and Authority",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
    text: "Strong SEO content is not simply about inserting keywords into an article. It is about understanding what an audience is looking for, structuring information clearly, answering genuine questions, and creating a useful reading experience. At WriteGo, we approach blog and article projects with a balance of search visibility and human readability. Content can be planned around a topic, audience, search intent, brand voice, and business objective before the writing begins. This makes the final article easier to read, easier to navigate, and more useful to the people who discover it through search engines. Our writing support can include blog posts, informational articles, long-form content, website resources, and other editorial material. Each project can be adapted to the required tone, industry, audience, and publishing format.",
  },
  {
    number: "02",
    category: "Website Content",
    title: "Words That Make a Website Feel Professional",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    text: "A professional website needs more than attractive design. Visitors also need clear information that explains who the business is, what it offers, why it matters, and what they should do next. WriteGo provides website content designed around these communication needs. We can help develop service descriptions, About pages, landing page copy, business introductions, FAQs, supporting website sections, and other written material required for a professional online presence. The writing is structured to make important information easy to understand while maintaining a consistent voice throughout the website. Whether the audience is made up of customers, businesses, professionals, students, or general readers, the content can be adapted to the purpose of the website. The goal is simple: make every important page communicate clearly and represent the brand with confidence.",
  },
  {
    number: "03",
    category: "Business & Marketing Content",
    title: "Professional Communication for Modern Brands",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    text: "Businesses communicate with their audiences through many different formats, and every format requires a slightly different approach. Marketing copy needs to be persuasive without becoming difficult to understand. Business content needs to sound professional while remaining accessible. Social media content needs to be concise, relevant, and suitable for its platform. WriteGo supports these different communication needs through tailored writing services. We can create marketing content, promotional copy, business descriptions, social media text, email content, newsletters, product descriptions, and other written assets. Rather than treating every project in exactly the same way, we consider the audience, purpose, tone, and desired action before preparing the content. This approach allows businesses and professionals to maintain a more consistent written identity across their digital channels while communicating their ideas in a clear and credible manner.",
  },
  {
    number: "04",
    category: "Student & Academic Support",
    title: "Clear, Structured Content for Students",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    text: "Students often need help presenting information in a clear, organized, and professional form. WriteGo can provide writing, editing, proofreading, research-based content support, formatting assistance, and language services depending on the project requirements. The emphasis is on clarity, structure, readability, and accurate communication. Students may need assistance preparing written material, improving drafts, refining language, organizing information, or presenting ideas in a more polished way. Our service can be adapted to different subjects and communication requirements, while the student's own ideas and academic responsibility remain central to the work. We aim to make complicated information easier to communicate and help written material achieve a more professional presentation. Every project can be discussed according to its requirements, length, audience, language, and deadline before work begins.",
  },
];

const expertise = [
  "SEO Content Writing",
  "Blog & Article Writing",
  "Website Content",
  "Copywriting",
  "Landing Page Copy",
  "Product Descriptions",
  "Business & Corporate Writing",
  "Technical Writing",
  "Social Media Content",
  "Email & Newsletter Writing",
  "Translation Services",
  "Editing & Proofreading",
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding the project, audience, purpose, tone, requirements, and desired outcome.",
  },
  {
    number: "02",
    title: "Research",
    text: "Relevant information, topics, competitors, terminology, and content requirements are reviewed before writing.",
  },
  {
    number: "03",
    title: "Create",
    text: "The content is written with a clear structure, appropriate tone, strong readability, and the intended audience in mind.",
  },
  {
    number: "04",
    title: "Refine",
    text: "The finished material is reviewed for clarity, consistency, grammar, structure, and overall presentation.",
  },
];

export default function Portfolio() {
  return (
    <PageShell>
      <main className="bg-white text-gray-950 dark:bg-gray-950 dark:text-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gray-950 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />

          <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                WriteGo / Portfolio
              </p>

              <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
                Writing that gives
                <span className="block text-blue-400">
                  ideas a stronger voice.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 sm:text-xl">
                A closer look at the content disciplines, writing solutions,
                and professional communication services we provide for
                businesses, brands, professionals, and students.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/WriteGo-Website/services"
                  className="rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:bg-blue-500"
                >
                  Explore Services
                </a>

                <a
                  href="/WriteGo-Website/contact"
                  className="rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                The Work
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                More than a collection of services.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-gray-700 dark:text-gray-300">
                A strong portfolio should help a potential client understand
                not only what a service is, but why the work matters. WriteGo
                brings together writing, research, editing, communication, and
                digital content expertise to create material that is designed
                around a real purpose.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                The sections below represent the main areas in which we can
                support a project. They are presented as examples of our
                capabilities rather than claims about specific confidential
                client projects.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Featured Work
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-6xl">
                Our content disciplines.
              </h2>
            </div>

            <p className="max-w-md text-gray-600 dark:text-gray-400">
              Each section presents a different area of writing expertise and
              the value it can bring to a professional project.
            </p>
          </div>

          <div className="space-y-28">
            {projects.map((project, index) => (
              <article key={project.number}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-black text-blue-600">
                        {project.number}
                      </span>

                      <span className="h-px w-12 bg-gray-300 dark:bg-gray-700" />

                      <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                      {project.text}
                    </p>

                    <a
                      href="/WriteGo-Website/services"
                      className="mt-7 inline-flex font-bold text-blue-600 hover:text-blue-500"
                    >
                      Explore related services →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="bg-gray-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  Expertise
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                  Built around the way modern businesses communicate.
                </h2>
              </div>

              <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                {expertise.map((item, index) => (
                  <a
                    key={item}
                    href="/WriteGo-Website/services"
                    className="group flex items-center justify-between border-b border-white/10 py-5"
                  >
                    <span className="text-lg font-semibold text-gray-200 group-hover:text-white">
                      {item}
                    </span>

                    <span className="text-blue-400">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-6xl">
              A clear process from brief to final content.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Professional content becomes stronger when the process behind it
              is organized. Our workflow is designed to keep the project
              focused, understandable, and aligned with its purpose.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="border-t-2 border-gray-950 pt-6 dark:border-white"
              >
                <span className="text-sm font-black text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-4 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WEBSITE LINKS */}
        <section className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Explore WriteGo
                </p>

                <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                  See the rest of the experience.
                </h2>
              </div>

              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                Explore our main pages to learn more about WriteGo, our
                services, pricing, content approach, and ways to get in touch.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Home", "/WriteGo-Website/"],
                ["About Us", "/WriteGo-Website/about"],
                ["Services", "/WriteGo-Website/services"],
                ["Blog", "/WriteGo-Website/blog"],
                ["Pricing", "/WriteGo-Website/pricing"],
                ["Contact Us", "/WriteGo-Website/contact"],
                ["Privacy Policy", "/WriteGo-Website/privacy-policy"],
                ["Terms", "/WriteGo-Website/terms"],
              ].map(([title, href]) => (
                <a
                  key={title}
                  href={href}
                  className="rounded-2xl border border-gray-200 bg-white p-5 font-bold transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
                >
                  {title}
                  <span className="ml-2 text-blue-600">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-blue-600 py-24 text-white">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Have a project in mind?
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Let's turn your ideas into professional content.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              Whether you need an article, website content, business copy,
              editing, translation, or a complete content solution, tell us
              what you are working on.
            </p>

            <a
              href="/WriteGo-Website/contact"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-black text-blue-700 transition hover:bg-gray-100"
            >
              Contact WriteGo
            </a>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
