import PageShell from "../components/PageShell";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Clock3,
  LockKeyhole,
  AlertCircle,
  Scale,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: FileText,
    title: "1. About These Terms",
    content: (
      <>
        <p>
          These Terms & Conditions govern your use of the WriteGo website and
          the purchase or use of writing, editing, translation, and related
          content services provided through WriteGo.
        </p>
        <p>
          By accessing our website, submitting a project request, or placing an
          order, you acknowledge that you have read and understood these terms
          and agree to be bound by them.
        </p>
      </>
    ),
  },
  {
    icon: CheckCircle2,
    title: "2. Our Services",
    content: (
      <>
        <p>
          WriteGo provides professional content and writing services for
          individuals, students, professionals, businesses, organizations,
          websites, and digital brands.
        </p>

        <p>
          Depending on the selected service, this may include SEO content,
          blog and article writing, website content, copywriting, landing-page
          copy, product descriptions, business writing, technical writing,
          social media content, email and newsletter writing, translation,
          editing, proofreading, content optimization, and research-based
          content.
        </p>

        <p>
          The exact scope of a project will depend on the requirements agreed
          upon before work begins.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: "3. Project Requirements",
    content: (
      <>
        <p>
          Clients are responsible for providing accurate and complete project
          information, including relevant instructions, keywords, reference
          materials, brand guidelines, preferred tone, target audience,
          deadlines, and other requirements where applicable.
        </p>

        <p>
          Delays caused by missing, incomplete, or inaccurate information may
          affect the agreed delivery timeline.
        </p>
      </>
    ),
  },
  {
    icon: CreditCard,
    title: "4. Pricing & Payments",
    content: (
      <>
        <p>
          Project pricing may vary depending on the service, word count,
          complexity, research requirements, turnaround time, and other
          project-specific factors.
        </p>

        <p>
          Where payment is required before work begins, production may start
          after the required payment or agreed deposit has been received.
        </p>

        <p>
          Any additional work outside the originally agreed scope may require
          a revised quotation or additional payment.
        </p>
      </>
    ),
  },
  {
    icon: RefreshCw,
    title: "5. Revisions",
    content: (
      <>
        <p>
          Revisions are intended to bring the delivered work in line with the
          original project requirements.
        </p>

        <p>
          The number and scope of revisions may depend on the service or
          package selected. Requests that substantially change the original
          brief, topic, structure, purpose, or scope may be treated as new
          work and may incur an additional charge.
        </p>
      </>
    ),
  },
  {
    icon: Clock3,
    title: "6. Delivery & Turnaround",
    content: (
      <>
        <p>
          Delivery timelines are based on the project requirements and the
          turnaround time agreed with the client.
        </p>

        <p>
          We make reasonable efforts to meet agreed deadlines. However,
          delivery may be affected by delays in receiving client information,
          revisions, approvals, technical issues, or circumstances beyond our
          reasonable control.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "7. Client Responsibilities",
    content: (
      <>
        <p>
          Clients must ensure that all information, documents, images,
          trademarks, data, and other materials supplied to WriteGo may
          lawfully be used for the requested project.
        </p>

        <p>
          Clients are responsible for reviewing delivered content before
          publishing or using it commercially and for ensuring that it meets
          their specific legal, regulatory, industry, or organizational
          requirements.
        </p>
      </>
    ),
  },
  {
    icon: LockKeyhole,
    title: "8. Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, the rights associated with
          completed original work will transfer to the client after full
          payment for the applicable project has been received.
        </p>

        <p>
          WriteGo may retain limited rights to materials created specifically
          for internal records, quality control, or portfolio purposes where
          this does not conflict with a confidentiality agreement or a
          specific client request.
        </p>

        <p>
          Third-party materials, trademarks, references, or licensed assets
          remain subject to their respective owners' rights and terms.
        </p>
      </>
    ),
  },
  {
    icon: LockKeyhole,
    title: "9. Confidentiality",
    content: (
      <>
        <p>
          We respect the confidentiality of information provided to us for the
          purpose of completing a project.
        </p>

        <p>
          We will not knowingly disclose confidential project information to
          unrelated third parties except where disclosure is required by law,
          necessary to provide an agreed service, or reasonably required to
          protect our legal rights.
        </p>
      </>
    ),
  },
  {
    icon: AlertCircle,
    title: "10. Prohibited Use",
    content: (
      <>
        <p>
          Our services must not be used for unlawful, fraudulent, deceptive,
          abusive, defamatory, or otherwise prohibited activities.
        </p>

        <p>
          WriteGo reserves the right to decline or discontinue a project where
          the requested work appears to violate applicable law, third-party
          rights, or these Terms & Conditions.
        </p>
      </>
    ),
  },
  {
    icon: CreditCard,
    title: "11. Cancellations & Refunds",
    content: (
      <>
        <p>
          Cancellation and refund eligibility may depend on the stage of the
          project, the amount of work already completed, and the specific
          agreement or platform through which the service was purchased.
        </p>

        <p>
          Where work has already been completed or substantially performed,
          refunds may not be available for the completed portion of the
          service, subject to any mandatory consumer rights or applicable
          platform policies.
        </p>
      </>
    ),
  },
  {
    icon: Scale,
    title: "12. Disclaimer",
    content: (
      <>
        <p>
          WriteGo aims to provide accurate, useful, and professionally
          prepared content. However, we do not guarantee specific search
          rankings, traffic levels, sales, conversions, academic results,
          advertising performance, or other particular business outcomes.
        </p>

        <p>
          Clients remain responsible for determining whether delivered
          content is appropriate for their intended use and for obtaining
          professional legal, financial, medical, academic, or other
          specialist advice where required.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "13. Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, WriteGo will not be
          responsible for indirect, incidental, special, consequential, or
          business losses arising from the use of our website or services.
        </p>

        <p>
          Nothing in these Terms is intended to exclude or limit any liability
          that cannot lawfully be excluded or limited under applicable law.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: "14. Third-Party Services & Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms, or
          services. These third parties operate independently from WriteGo and
          may have their own terms, privacy policies, and practices.
        </p>

        <p>
          We are not responsible for the content, availability, security, or
          practices of third-party websites or services.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: "15. Changes to These Terms",
    content: (
      <p>
        We may update these Terms & Conditions from time to time to reflect
        changes to our services, business practices, legal requirements, or
        website functionality. Updated terms will become effective when
        published on this page unless otherwise stated.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <PageShell>
      <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-5 pb-16 pt-32 dark:from-gray-950 dark:via-gray-950 dark:to-purple-950/30 sm:pb-20">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm dark:border-blue-900 dark:bg-gray-900 dark:text-blue-300">
              <FileText size={16} />
              Legal Information
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              Terms &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              These terms explain the general conditions that apply when you
              use the WriteGo website or purchase our writing, content,
              translation, editing, and related services.
            </p>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Last updated: August 2026
            </p>
          </div>
        </section>

        {/* Introduction Notice */}
        <section className="px-5 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50/70 p-6 dark:border-blue-900/50 dark:bg-blue-950/20 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white">
                  Please read these terms carefully
                </h2>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  These Terms & Conditions are intended to provide a clear
                  framework for our client relationships and services. They
                  should be read together with our Privacy Policy and any
                  project-specific agreement, quotation, or service terms that
                  may apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-5xl space-y-6">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-9"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-black text-gray-900 dark:text-white sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-purple-700 px-7 py-12 text-white shadow-2xl sm:px-12 sm:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Mail size={27} />
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Have a question about our terms?
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                If you have questions about a project, service, payment,
                delivery, or any part of these Terms & Conditions, please
                contact us before placing an order.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Contact WriteGo
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Policies */}
        <section className="border-t border-gray-200 bg-gray-50 px-5 py-14 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">
              Related Information
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                to="/privacy-policy"
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="font-black text-gray-900 dark:text-white">
                  Privacy Policy
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Learn how WriteGo handles information submitted through the
                  website and our services.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Read Privacy Policy
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/services"
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <h3 className="font-black text-gray-900 dark:text-white">
                  Our Services
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Explore the writing, content, translation, editing, and
                  business services available through WriteGo.
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Explore Services
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
