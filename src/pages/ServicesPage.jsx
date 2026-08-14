import PageShell from "../components/PageShell";
import Services from "../components/Services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-5 pb-16 pt-28 dark:from-gray-950 dark:via-gray-950 dark:to-purple-950/20 sm:pb-20">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-600 shadow-sm dark:border-blue-900 dark:bg-gray-900 dark:text-blue-400">
            WHAT WE OFFER
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
            Professional Writing Services
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Built Around Your Goals
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            From SEO articles and business content to website copy,
            product descriptions, and professional editing, WriteGo provides
            clear, engaging, and purpose-driven writing solutions for
            businesses, brands, professionals, and individuals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "SEO Content",
              "Blog Writing",
              "Website Copy",
              "Copywriting",
              "Product Content",
              "Editing & Proofreading",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              OUR EXPERTISE
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl dark:text-white">
              Writing solutions for different content needs
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Every project has a different purpose. Whether you are building
              a website, publishing articles, promoting a product, or
              strengthening your brand communication, our services are
              structured to give you practical and professional content.
            </p>
          </div>

          <Services />
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gray-50 px-5 py-16 dark:bg-gray-900/50 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-purple-600">
              WHY WRITEGO
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl dark:text-white">
              Content created with purpose, clarity and consistency
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              Good content should do more than fill a page. It should
              communicate an idea, answer a question, support a business
              objective, and give readers a reason to keep engaging with your
              brand.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Audience-focused writing",
                "Clear structure and professional formatting",
                "Research-driven content development",
                "SEO-friendly content organization",
                "Careful editing and proofreading",
                "Flexible solutions for different industries",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-200"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-950 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              A SIMPLE APPROACH
            </p>

            <h3 className="mt-4 text-2xl font-black text-gray-950 dark:text-white">
              Tell us what you need. We handle the writing.
            </h3>

            <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">
              Share your topic, requirements, audience, preferred tone,
              word count, and deadline. We can then shape the content around
              the purpose of your project and the people you want to reach.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5 dark:bg-blue-950/30">
                <p className="font-black text-blue-700 dark:text-blue-400">
                  Businesses
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Website copy, blogs, marketing content and business
                  communications.
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-5 dark:bg-purple-950/30">
                <p className="font-black text-purple-700 dark:text-purple-400">
                  Individuals
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Articles, editing, translation and other professional
                  writing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-purple-700 px-7 py-14 text-center text-white shadow-2xl sm:px-12">
          <p className="font-bold uppercase tracking-widest text-blue-100">
            LET'S WORK TOGETHER
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Have a writing project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Tell us about your project and requirements. We will help you
            choose the right writing solution for your needs.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
