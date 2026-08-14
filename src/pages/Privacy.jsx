import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Mail,
  UserCheck,
  FileText,
  RefreshCw,
} from "lucide-react";

export default function Privacy() {
  return (
    <PageShell>
      <main className="bg-white dark:bg-gray-950">

        {/* Hero */}
        <section className="border-b border-gray-200 bg-gray-50 px-5 py-16 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
              <ShieldCheck size={28} />
            </div>

            <p className="mt-6 font-bold uppercase tracking-widest text-blue-600">
              YOUR PRIVACY MATTERS
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300">
              This Privacy Policy explains how WriteGo may collect, use,
              protect, store, and manage information when you visit our
              website, contact us, request our services, or otherwise interact
              with our online services.
            </p>

            <p className="mt-5 text-sm font-semibold text-gray-500 dark:text-gray-400">
              Last updated: [Insert Date]
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">

            {/* Introduction */}
            <section className="border-b border-gray-200 pb-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                1. Introduction
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Welcome to WriteGo. We respect your privacy and are committed
                to handling personal information responsibly. This Privacy
                Policy describes the types of information that may be collected
                through this website and explains how that information may be
                used when you contact us, request a quotation, discuss a
                project, or use features available through the website.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                We aim to collect only information that is reasonably necessary
                for providing our services, communicating with visitors and
                clients, improving the website, maintaining website security,
                and fulfilling legitimate business or legal requirements.
                Nothing in this policy is intended to replace professional
                legal advice. Our actual privacy practices should always match
                the tools, forms, services, and technologies used on the live
                website.
              </p>
            </section>

            {/* Information */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Database className="text-blue-600" size={24} />

                <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                  2. Information We May Collect
                </h2>
              </div>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Depending on how you interact with WriteGo, we may receive
                information that you voluntarily provide through contact,
                quotation, service, or project enquiry forms.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="font-black text-gray-900 dark:text-white">
                    Contact Information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Such as your name, email address, and other contact details
                    that you choose to provide.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="font-black text-gray-900 dark:text-white">
                    Project Information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Information about your requested writing project, content
                    requirements, preferred services, deadlines, or brief.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="font-black text-gray-900 dark:text-white">
                    Communication Information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Messages, enquiries, feedback, or other information you
                    voluntarily send to us.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="font-black text-gray-900 dark:text-white">
                    Technical Information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Depending on the website technologies in use, technical
                    information such as browser type, device information,
                    approximate usage information, or IP-related information
                    may be processed.
                  </p>
                </div>
              </div>
            </section>

            {/* How we use data */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                3. How We Use Information
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Information may be used for purposes such as responding to
                enquiries, preparing quotations, discussing requested services,
                communicating about projects, delivering requested services,
                improving our website and services, preventing misuse or
                security incidents, and meeting applicable legal or
                administrative obligations.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Responding to questions and service enquiries",
                  "Preparing or discussing project quotations",
                  "Communicating with prospective and existing clients",
                  "Providing requested writing and content services",
                  "Managing project-related communication",
                  "Improving website functionality and user experience",
                  "Maintaining website security and preventing abuse",
                  "Meeting applicable legal or business obligations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-gray-600 dark:text-gray-300"
                  >
                    <UserCheck
                      size={18}
                      className="mt-1 shrink-0 text-blue-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Legal basis */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                4. Legal Basis for Processing
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Where applicable law requires a specific legal basis for
                processing personal information, the applicable basis may
                include responding to a user's request, performing or
                preparing for a contract, complying with a legal obligation,
                pursuing legitimate business interests where permitted, or
                obtaining consent where consent is required.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                The specific legal basis can depend on the type of information,
                the purpose of processing, and the jurisdiction in which the
                individual is located.
              </p>
            </section>

            {/* Sharing */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                5. When Information May Be Shared
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                WriteGo does not intend to sell personal information to third
                parties. Information may be shared with service providers or
                technical providers only where reasonably necessary to operate
                the website, communicate with users, provide requested
                services, maintain security, process transactions, or comply
                with legal requirements.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Any third-party services actually used by the live website
                should be identified and reviewed before this policy is
                finalized.
              </p>
            </section>

            {/* Cookies */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Cookie className="text-blue-600" size={24} />

                <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                  6. Cookies and Similar Technologies
                </h2>
              </div>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                The website may use cookies or similar technologies that are
                necessary for website functionality, preferences, security, or
                analytics, depending on the technologies enabled on the live
                website.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                If non-essential cookies or analytics technologies are used,
                visitors should be provided with appropriate information and,
                where required by applicable law, an appropriate consent
                mechanism.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/40 dark:bg-blue-950/30">
                <p className="text-sm leading-7 text-blue-900 dark:text-blue-200">
                  <strong>Important:</strong> Only list analytics, advertising,
                  tracking, embedded media, or other third-party technologies
                  here if they are actually installed on the live website.
                </p>
              </div>
            </section>

            {/* Security */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Lock className="text-blue-600" size={24} />

                <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                  7. Data Security
                </h2>
              </div>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                We take reasonable measures designed to protect information
                against unauthorized access, misuse, alteration, disclosure,
                or destruction. However, no internet transmission or electronic
                storage system can be guaranteed to be completely secure.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Appropriate security practices should be maintained across the
                website, hosting environment, forms, accounts, and any
                third-party services used to process information.
              </p>
            </section>

            {/* Retention */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                8. Data Retention
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                We retain personal information only for as long as reasonably
                necessary for the purposes for which it was collected,
                including responding to enquiries, managing client
                relationships, completing requested services, maintaining
                appropriate business records, resolving disputes, and
                complying with legal obligations.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Actual retention periods may vary depending on the type of
                information, the nature of the relationship, applicable legal
                requirements, and legitimate business needs.
              </p>
            </section>

            {/* Rights */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <UserCheck className="text-blue-600" size={24} />

                <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                  9. Your Privacy Rights
                </h2>
              </div>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Depending on your location and applicable privacy laws, you
                may have rights concerning your personal information. These
                may include requesting access to your information, asking for
                inaccurate information to be corrected, requesting deletion
                where applicable, restricting certain processing, objecting to
                certain processing, or withdrawing consent where processing is
                based on consent.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                To make a privacy-related request, please contact us using the
                details provided in the Contact section below. We may need to
                verify the identity of the person making a request before
                completing it.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                10. Children's Privacy
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                WriteGo is intended to provide professional writing and content
                services. We do not knowingly seek to collect personal
                information from children in circumstances where applicable
                law prohibits such collection. If you believe that a child has
                provided personal information through the website, please
                contact us so that the matter can be reviewed appropriately.
              </p>
            </section>

            {/* External Links */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                11. Third-Party Websites and Links
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Our website may contain links to external websites, platforms,
                social media services, or other third-party resources. We are
                not responsible for the privacy practices, security, content,
                or policies of websites that we do not control. Visitors should
                review the privacy policies of those third-party services
                before providing personal information.
              </p>
            </section>

            {/* International Transfers */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                12. International Data Transfers
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Some hosting providers, communication platforms, analytics
                providers, or other service providers may process information
                in countries different from the country in which you live.
                Where applicable laws impose requirements on international
                transfers, appropriate safeguards should be considered and
                implemented.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="border-b border-gray-200 py-10 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <RefreshCw className="text-blue-600" size={24} />

                <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                  13. Changes to This Privacy Policy
                </h2>
              </div>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy when our website, services,
                technologies, business practices, or applicable legal
                requirements change. When changes are made, the updated version
                will be published on this page with a revised “Last updated”
                date.
              </p>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Visitors are encouraged to review this page periodically to
                understand how information is handled.
              </p>
            </section>

            {/* Contact */}
            <section className="py-10">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={24} />

                <h2 className="text-2xl font-black text-gray-950 dark:text-white">
                  14. Contact Us About Privacy
                </h2>
              </div>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                If you have a question about this Privacy Policy, want to
                request information about personal data, or have another
                privacy-related concern, please contact WriteGo using the
                official contact details provided on our website.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Contact WriteGo
              </Link>
            </section>

            {/* Legal note */}
            <div className="mt-8 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/40 dark:bg-amber-950/20">
              <FileText
                size={22}
                className="mt-1 shrink-0 text-amber-600"
              />

              <div>
                <h3 className="font-black text-gray-900 dark:text-white">
                  Important Notice
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-700 dark:text-gray-300">
                  This page is a professional website policy template and
                  should be customized to match WriteGo&apos;s actual data
                  collection, hosting, forms, analytics, cookies, payment
                  providers, email services, and business operations. For
                  legal compliance in the countries where you operate or serve
                  customers, consider obtaining advice from a qualified legal
                  or privacy professional.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </PageShell>
  );
}
