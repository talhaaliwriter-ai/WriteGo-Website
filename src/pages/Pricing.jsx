import PageShell from "../components/PageShell";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Globe2,
  PenTool,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    label: "For focused projects",
    description:
      "A practical option for individuals, students, startups, and small businesses that need high-quality content for a specific project.",
    icon: FileText,
    features: [
      "SEO-friendly content",
      "Blog posts & articles",
      "Website content",
      "Basic keyword integration",
      "Research-based writing",
      "Grammar & readability review",
      "Professional formatting",
      "Clear communication",
    ],
    button: "Request Starter Quote",
    style:
      "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",
    buttonStyle:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
  },
  {
    name: "Professional",
    label: "Most popular",
    description:
      "Designed for growing brands, businesses, websites, and professionals who need consistent, polished content that supports long-term growth.",
    icon: Sparkles,
    features: [
      "Everything in Starter",
      "Advanced SEO content",
      "Long-form blog articles",
      "Website & landing page copy",
      "Search-intent focused writing",
      "Detailed content research",
      "Content structure & optimization",
      "Editing & proofreading",
      "Priority communication",
    ],
    button: "Choose Professional",
    style:
      "border-blue-500 bg-white shadow-2xl shadow-blue-100 dark:border-blue-500 dark:bg-gray-950 dark:shadow-blue-950/30",
    buttonStyle:
      "bg-blue-600 text-white hover:bg-blue-700",
    popular: true,
  },
  {
    name: "Business",
    label: "For ongoing content",
    description:
      "A flexible solution for agencies, established businesses, publishers, and organizations managing larger or recurring content requirements.",
    icon: Globe2,
    features: [
      "Everything in Professional",
      "High-volume content support",
      "Business & corporate writing",
      "Marketing content",
      "Product descriptions",
      "Technical & specialized writing",
      "Content optimization",
      "Ongoing project support",
      "Custom content workflow",
    ],
    button: "Discuss Your Project",
    style:
      "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",
    buttonStyle:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800",
  },
];

const comparisonRows = [
  {
    category: "Core Content",
    items: [
      ["SEO Content Writing", true, true, true],
      ["Blog & Article Writing", true, true, true],
      ["Website Content", true, true, true],
      ["Copywriting", false, true, true],
      ["Landing Page Copy", false, true, true],
      ["Product Descriptions", false, false, true],
    ],
  },
  {
    category: "Research & Optimization",
    items: [
      ["Content Research", true, true, true],
      ["Keyword Integration", true, true, true],
      ["Search Intent Optimization", false, true, true],
      ["Content Optimization", false, true, true],
      ["Editing & Proofreading", true, true, true],
    ],
  },
  {
    category: "Business Support",
    items: [
      ["Business Writing", false, true, true],
      ["Marketing Content", false, true, true],
      ["Technical Writing", false, false, true],
      ["Recurring Content Support", false, false, true],
      ["Custom Content Workflow", false, false, true],
    ],
  },
];

const faqs = [
  {
    question: "Do you offer fixed prices for every project?",
    answer:
      "No. Writing projects can vary significantly in word count, research requirements, subject complexity, number of pages, turnaround time, and level of optimization. That is why WriteGo provides customized quotations based on the actual project requirements.",
  },
  {
    question: "Can I request a single article or blog post?",
    answer:
      "Yes. You can request a single article, blog post, website page, product description, landing page, or another individual piece of content. Smaller projects can be handled independently without requiring a long-term package.",
  },
  {
    question: "Can businesses order content on a recurring basis?",
    answer:
      "Yes. Businesses, agencies, publishers, and website owners can discuss recurring content requirements. Larger projects can be structured around monthly article volumes, website content requirements, campaigns, or other ongoing needs.",
  },
  {
    question: "Can you work with my keywords and content brief?",
    answer:
      "Absolutely. You can provide your keywords, content brief, brand guidelines, references, preferred tone, target audience, or other instructions. We can also help structure the content requirements when you do not have a complete brief.",
  },
  {
    question: "What information is needed before receiving a quotation?",
    answer:
      "The most useful information includes the type of content, approximate word count, number of pieces, topic or niche, target audience, keywords if available, deadline, and any specific requirements. This allows the project to be evaluated accurately.",
  },
];

export default function Pricing() {
  return (
    <PageShell>
      <main className="bg-gray-50 dark:bg-gray-900">

        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:pt-20">
          <div className="absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
              <Sparkles size={16} />
              FLEXIBLE CONTENT PACKAGES
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-950 dark:text-white sm:text-6xl">
              Choose the right content solution for your goals.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Whether you need one high-quality article or ongoing content
              support for your business, WriteGo offers flexible solutions
              built around your project, audience, and objectives.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Clear project scope
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Customized quotations
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-600" />
                Professional content
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-5 pb-20">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.name}
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${plan.style}`}
                >
                  {plan.popular && (
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                        <Sparkles size={14} />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      {plan.label}
                    </span>
                  </div>

                  <h2 className="mt-7 text-3xl font-black text-gray-950 dark:text-white">
                    {plan.name}
                  </h2>

                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>

                  <div className="mt-7 border-y border-gray-100 py-6 dark:border-gray-800">
                    <div className="text-sm font-bold uppercase tracking-wider text-gray-400">
                      Project-based pricing
                    </div>

                    <div className="mt-2 text-3xl font-black text-gray-950 dark:text-white">
                      Custom Quote
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Based on scope, word count, research, complexity and
                      turnaround.
                    </p>
                  </div>

                  <div className="mt-7 flex-1">
                    <p className="text-sm font-black uppercase tracking-widest text-gray-400">
                      What&apos;s included
                    </p>

                    <ul className="mt-5 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300"
                        >
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-black transition ${plan.buttonStyle}`}
                  >
                    {plan.button}
                    <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* How Pricing Works */}
        <section className="border-y border-gray-200 bg-white px-5 py-20 dark:border-gray-800 dark:bg-gray-950">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                SIMPLE & TRANSPARENT
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
                Your project determines your quote.
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400">
                Instead of forcing every client into the same package, we
                evaluate the actual requirements of the project and recommend
                the most suitable approach.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50">
                  <FileText size={21} />
                </div>
                <h3 className="mt-5 text-xl font-black text-gray-950 dark:text-white">
                  01. Tell us what you need
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  Share your content type, topic, word count, number of
                  pieces, audience, keywords and any project instructions.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50">
                  <Zap size={21} />
                </div>
                <h3 className="mt-5 text-xl font-black text-gray-950 dark:text-white">
                  02. We define the scope
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  We review the requirements and determine the research,
                  writing, editing and optimization work involved.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50">
                  <PenTool size={21} />
                </div>
                <h3 className="mt-5 text-xl font-black text-gray-950 dark:text-white">
                  03. You receive a quote
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  You receive a project-specific quotation based on the
                  agreed scope, requirements and turnaround.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                COMPARE YOUR OPTIONS
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
                What can each package support?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                Use this quick comparison to understand which level is most
                suitable for your content requirements.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="min-w-[760px]">
                <div className="grid grid-cols-4 border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                  <div className="p-5 text-sm font-black text-gray-900 dark:text-white">
                    CONTENT & SUPPORT
                  </div>

                  <div className="p-5 text-center text-sm font-black text-gray-900 dark:text-white">
                    Starter
                  </div>

                  <div className="bg-blue-50 p-5 text-center text-sm font-black text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                    Professional
                  </div>

                  <div className="p-5 text-center text-sm font-black text-gray-900 dark:text-white">
                    Business
                  </div>
                </div>

                {comparisonRows.map((group) => (
                  <div key={group.category}>
                    <div className="border-b border-gray-100 bg-gray-50/70 px-5 py-3 text-xs font-black uppercase tracking-widest text-gray-500 dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-400">
                      {group.category}
                    </div>

                    {group.items.map(([name, starter, professional, business]) => (
                      <div
                        key={name}
                        className="grid grid-cols-4 border-b border-gray-100 last:border-b-0 dark:border-gray-800"
                      >
                        <div className="p-5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {name}
                        </div>

                        {[starter, professional, business].map((included, index) => (
                          <div
                            key={`${name}-${index}`}
                            className={`flex items-center justify-center p-5 ${
                              index === 1
                                ? "bg-blue-50/50 dark:bg-blue-950/10"
                                : ""
                            }`}
                          >
                            {included ? (
                              <Check
                                size={18}
                                className="text-blue-600"
                              />
                            ) : (
                              <span className="text-gray-300 dark:text-gray-700">
                                —
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gray-950 px-7 py-10 text-white dark:bg-black sm:px-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                  <ShieldCheck size={19} />
                  BUILT AROUND YOUR PROJECT
                </div>

                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Not sure which package is right for you?
                </h2>

                <p className="mt-4 leading-7 text-gray-300">
                  You do not need to choose the perfect package before
                  contacting us. Tell us what you are trying to achieve and
                  we can help define the right content solution for your
                  project.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
              >
                Get a Custom Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-gray-200 bg-white px-5 py-20 dark:border-gray-800 dark:bg-gray-950">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                QUESTIONS
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
                Pricing questions, answered.
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <summary className="cursor-pointer list-none pr-8 text-base font-black text-gray-900 marker:hidden dark:text-white">
                    {faq.question}
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
              <PenTool size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-gray-950 dark:text-white sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Tell us what you need, and we&apos;ll help you choose a content
              solution that fits your goals, audience and project scope.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
