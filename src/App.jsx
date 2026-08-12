import { Link } from "react-router-dom";
import {
  CheckCircle,
  PenTool,
  Search,
  Globe,
  FileText,
  Users,
  Target,
  Award,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Results-Focused",
      text: "We create content with a clear purpose — helping brands communicate better, reach the right audience, and achieve their digital goals.",
    },
    {
      icon: Award,
      title: "Quality First",
      text: "Every piece of content is carefully structured, researched, edited, and optimized to maintain a professional standard.",
    },
    {
      icon: Users,
      title: "Client-Centered",
      text: "We work around your goals, audience, tone, and requirements to deliver content that genuinely fits your brand.",
    },
    {
      icon: Globe,
      title: "Built for Digital",
      text: "From websites and blogs to SEO content and marketing copy, our writing is designed for today's digital platforms.",
    },
  ];

  const services = [
    "SEO Content Writing",
    "Blog & Article Writing",
    "Website Content",
    "Copywriting",
    "English ↔ Urdu Translation",
    "Content Editing & Optimization",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-200">
              <PenTool size={16} />
              About WriteGo
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Content That
              <span className="block text-indigo-400">
                Moves Your Business Forward.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              WriteGo is a professional writing agency providing SEO content,
              blog articles, website copy, copywriting, and translation
              solutions for businesses, professionals, and digital brands.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
              >
                Explore Our Services
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-600">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Writing designed to make your message clear, credible, and
              valuable.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              At WriteGo, we believe great content is more than words on a
              page. It should communicate your message clearly, connect with
              your audience, and support your wider business objectives.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you need an SEO-focused article, engaging website
              content, persuasive copy, or professional translation, our goal
              is to provide reliable writing solutions that represent your
              brand professionally.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle
                    size={19}
                    className="shrink-0 text-indigo-600"
                  />
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 sm:p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
              <FileText size={27} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Content with purpose
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Our approach combines clear communication, thoughtful
              research, structured writing, and digital best practices to
              create content that is useful for readers and valuable for
              brands.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <Search className="text-indigo-600" size={22} />

                <div>
                  <p className="font-semibold text-slate-900">
                    Strategy + Quality
                  </p>

                  <p className="text-sm text-slate-500">
                    Every project starts with your goals and audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Helping businesses communicate with confidence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is simple: to make professional content accessible,
              effective, and useful for businesses and individuals who want to
              build a stronger digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            What We Stand For
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Professional standards in every project.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={23} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to improve your content?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Tell us what you need, and let's create content that communicates
            your ideas clearly and represents your brand professionally.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              Contact WriteGo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
