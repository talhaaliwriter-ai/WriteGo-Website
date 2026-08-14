import { ArrowRight, CheckCircle, MessageSquare, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  const benefits = [
    "SEO content and blog writing",
    "Website and business content",
    "Copywriting and product descriptions",
    "Editing, proofreading and translation",
  ];

  return (
    <section className="relative overflow-hidden bg-gray-950 px-5 py-24 dark:bg-black">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main CTA */}
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700 via-blue-800 to-purple-800 shadow-2xl">

          <div className="grid gap-12 px-7 py-14 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-20">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                <MessageSquare size={16} />
                Let's discuss your project
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Have a project in mind?
                <span className="mt-2 block text-blue-200">
                  Let's turn your ideas into content that works.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Whether you need a single article, complete website content,
                ongoing blog support, persuasive copy, or professional editing,
                WriteGo can help you build clear and purposeful content around
                your goals.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 font-bold text-white transition duration-200 hover:bg-white/15"
                >
                  Explore Services
                  <FileText size={18} />
                </Link>

              </div>
            </div>

            {/* Right Content */}
            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm sm:p-8">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
                What can we help with?
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Writing support built around your needs.
              </h3>

              <p className="mt-3 leading-7 text-blue-100">
                Tell us what you are working on, who your audience is, and
                what you want to achieve. We can then recommend the right
                writing solution for your project.
              </p>

              <div className="mt-7 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-200"
                    />

                    <span className="text-sm font-medium leading-6 text-white">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-blue-200">
                  Students, professionals, startups, organizations and
                  established businesses are welcome to discuss their content
                  requirements.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Small supporting links */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">

          <Link
            to="/portfolio"
            className="text-sm font-semibold text-gray-300 transition hover:text-white"
          >
            View our portfolio →
          </Link>

          <span className="hidden text-gray-700 sm:block">•</span>

          <Link
            to="/about"
            className="text-sm font-semibold text-gray-300 transition hover:text-white"
          >
            Learn about WriteGo →
          </Link>

          <span className="hidden text-gray-700 sm:block">•</span>

          <Link
            to="/pricing"
            className="text-sm font-semibold text-gray-300 transition hover:text-white"
          >
            View pricing →
          </Link>

        </div>

      </div>
    </section>
  );
}
