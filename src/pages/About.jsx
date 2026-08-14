import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  HeartHandshake,
  Lightbulb,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "SEO Content Writing",
  "Blog & Article Writing",
  "Website Content Writing",
  "Copywriting",
  "Landing Page Copy",
  "Product Descriptions",
  "Business & Corporate Writing",
  "Social Media Content",
  "Email & Newsletter Writing",
  "Translation Services",
  "Editing & Proofreading",
  "Content Optimization",
];

const values = [
  {
    icon: Target,
    title: "Purpose-Driven Content",
    text: "We begin with the purpose behind every project. Whether the goal is to educate an audience, explain a service, strengthen a website, support search visibility, or communicate a business idea, the content is structured around a clear objective.",
  },
  {
    icon: Award,
    title: "Quality & Attention to Detail",
    text: "Professional content needs more than correct grammar. We focus on structure, clarity, readability, consistency, useful information, appropriate tone, and a polished presentation so the final piece feels complete and professional.",
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    text: "Every client has different requirements. We consider the audience, subject, tone, format, objectives, and project requirements before shaping the content around the specific brief.",
  },
  {
    icon: Globe2,
    title: "Digital-First Thinking",
    text: "Modern content is created for real digital environments. Our approach considers websites, search engines, blogs, landing pages, product pages, social platforms, and other places where people discover and consume information.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We first understand your project, audience, subject, requirements, preferred tone, and intended outcome.",
  },
  {
    number: "02",
    title: "Research",
    text: "Relevant information, topics, search intent, competitors, and audience needs are considered before the writing takes shape.",
  },
  {
    number: "03",
    title: "Create",
    text: "The content is developed with a clear structure, natural flow, useful information, and a tone appropriate for the intended audience.",
  },
  {
    number: "04",
    title: "Refine",
    text: "The draft is reviewed for clarity, structure, readability, consistency, and overall presentation before delivery.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 dark:from-gray-950 dark:via-gray-950 dark:to-purple-950/30 sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                <Sparkles size={16} />
                About WriteGo
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-gray-950 dark:text-white sm:text-6xl lg:text-[4.5rem]">
                Writing with
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  purpose, clarity
                </span>
                and direction.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                WriteGo is a professional writing service platform created to
                help students, professionals, startups, businesses, and digital
                brands communicate their ideas through clear, useful, and
                professionally structured content.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
                From an individual article to a complete website content
                project, our focus is on understanding what needs to be
                communicated and presenting it in a way that makes sense to
                the people reading it.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Explore Our Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-blue-500"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:p-7">

                <div className="flex items-center justify-between border-b border-gray-100 pb-5 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                      <PenLine size={24} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-gray-900 dark:text-white">
                        WriteGo
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Professional Writing
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                    Writing Support
                  </div>
                </div>

                <div className="py-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Our Approach
                  </p>

                  <h2 className="mt-3 text-2xl font-black leading-tight text-gray-950 dark:text-white">
                    Understand the idea. Shape the message. Deliver with
                    clarity.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Good writing starts with understanding. We consider the
                    audience, purpose, subject, tone, structure, and intended
                    outcome before turning an idea into finished content.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-blue-50 p-4 dark:bg-blue-950/30">
                    <Search size={20} className="text-blue-600" />
                    <p className="mt-3 text-sm font-black text-gray-900 dark:text-white">
                      Research
                    </p>
                  </div>

                  <div className="rounded-2xl bg-purple-50 p-4 dark:bg-purple-950/30">
                    <FileText size={20} className="text-purple-600" />
                    <p className="mt-3 text-sm font-black text-gray-900 dark:text-white">
                      Structure
                    </p>
                  </div>

                  <div className="rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
                    <Lightbulb size={20} className="text-indigo-600" />
                    <p className="mt-3 text-sm font-black text-gray-900 dark:text-white">
                      Ideas
                    </p>
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-4 dark:bg-orange-950/30">
                    <CheckCircle2 size={20} className="text-orange-600" />
                    <p className="mt-3 text-sm font-black text-gray-900 dark:text-white">
                      Refine
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
              A writing partner for ideas that deserve to be communicated
              properly.
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600 dark:text-gray-300">
              WriteGo is built around a simple idea: professional content
              should make communication easier. A website visitor should
              understand what a business offers. A reader should understand
              the point of an article. A potential customer should be able to
              see the value of a product or service. A student or professional
              should be able to present an idea clearly and confidently.
              Writing plays an important role in each of these situations.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              Our work covers a broad range of digital and professional writing
              needs. This includes SEO content, blogs and articles, website
              pages, copywriting, landing page content, product descriptions,
              business writing, social media content, editing, proofreading,
              content optimization, and translation. Each type of content has
              a different purpose, and we believe it should be approached
              accordingly rather than treating every project as the same.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              We also understand that not every client arrives with a complete
              content strategy or a perfectly written brief. Sometimes a
              client has only an idea, a list of services, a rough draft, a
              subject, or a few points that need to be developed. Our role is
              to turn that starting point into organised, readable, and
              purposeful content while keeping the intended audience and
              objective in view.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
              <HeartHandshake size={27} />
            </div>

            <h3 className="mt-6 text-2xl font-black text-gray-950 dark:text-white">
              Built around the client and the audience.
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              Strong content is not simply about using impressive words. It is
              about choosing the right information, organising it properly,
              using an appropriate voice, and making the message easy for the
              intended audience to understand.
            </p>

            <div className="mt-8 space-y-4 border-t border-gray-200 pt-7 dark:border-gray-800">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={20} />
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Clear and purposeful communication
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={20} />
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Structured and reader-friendly content
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={20} />
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Content adapted to different digital formats
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={20} />
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Professional presentation and attention to detail
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 dark:bg-gray-900/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Writing solutions for different stages of your digital journey.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              From a single article to ongoing website and marketing content,
              WriteGo brings different writing requirements together in one
              professional service environment.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                    <FileText size={21} />
                  </div>

                  <span className="text-xs font-black text-gray-300 dark:text-gray-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-black text-gray-900 dark:text-white">
                  {service}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Professional content developed around the subject, audience,
                  format, and purpose of the project.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOR WHOM */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <Users size={26} className="text-blue-600" />
            <h3 className="mt-5 text-xl font-black dark:text-white">
              Students
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Support with clear, organised, and professionally presented
              writing for appropriate academic and educational needs.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <BriefcaseBusiness size={26} className="text-purple-600" />
            <h3 className="mt-5 text-xl font-black dark:text-white">
              Professionals
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Professional writing support for personal brands, profiles,
              business communication, and digital projects.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <Globe2 size={26} className="text-indigo-600" />
            <h3 className="mt-5 text-xl font-black dark:text-white">
              Startups
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Website, product, marketing, and brand content designed to help
              communicate a new business clearly.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <Target size={26} className="text-orange-500" />
            <h3 className="mt-5 text-xl font-black dark:text-white">
              Businesses
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Ongoing content support for companies that need consistent,
              useful, and professionally structured digital content.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-24">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <Target size={27} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
            Our Mission
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Make professional communication clearer, more useful, and more
            accessible.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Our mission is to help people and organisations communicate ideas
            with greater clarity. We want every piece of content to have a
            reason for being there, a clear audience, and a message that can
            actually be understood.
          </p>

        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            What We Stand For
          </p>

          <h2 className="mt-4 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
            Principles that shape the way we approach every project.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A professional writing service should be reliable not only in what
            it writes, but also in how it approaches the work. These principles
            guide the way we think about content and client requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-xl font-black text-gray-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 dark:bg-gray-900/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              A straightforward approach from brief to finished content.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Good results start with understanding the assignment. Our process
              keeps the project focused from the initial requirements through
              research, writing, review, and delivery.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="relative rounded-3xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950"
              >
                <span className="text-4xl font-black text-blue-100 dark:text-blue-950">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-black text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* QUALITY PROMISE */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Our Commitment
            </p>

            <h2 className="mt-4 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Content should be useful before it is impressive.
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
              We believe professional content should serve the person reading
              it. That means avoiding unnecessary complexity, organising ideas
              logically, keeping the language appropriate for the audience,
              and making sure the content contributes something meaningful to
              the project.
            </p>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              Whether the assignment is short or extensive, our goal is to
              maintain the same attention to structure, clarity, tone, and
              overall quality. Content may appear on a website, inside a blog,
              on a product page, in a marketing campaign, or within a
              professional document, but the underlying principle remains the
              same: communicate the message properly.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-10">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 dark:bg-green-950/30">
                <ShieldCheck size={27} />
              </div>

              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                  Professional Standards
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Applied throughout the writing process
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={20} />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    Clear Structure
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Information is organised so readers can follow the message
                    naturally.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={20} />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    Appropriate Tone
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    The writing style is considered according to the audience
                    and purpose.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={20} />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    Careful Review
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Content is reviewed for clarity, consistency, readability,
                    and presentation.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 px-7 py-14 text-center shadow-2xl sm:px-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <PenLine size={27} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Tell us what you need, what you are trying to communicate, and who
            you are trying to reach. We can then shape the right writing
            solution around your project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              Contact WriteGo
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white transition hover:bg-white/20"
            >
              View Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
