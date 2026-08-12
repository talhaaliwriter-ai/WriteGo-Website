import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  PenTool,
} from "lucide-react";

const serviceData = {
  "seo-content-writing": {
    title: "SEO Content Writing",
    description:
      "Professional SEO-focused content designed to attract your target audience, communicate your expertise, and support long-term organic growth.",
    points: [
      "Keyword-focused content structure",
      "Clear and engaging writing",
      "Reader-focused headings and formatting",
      "Search-friendly content organization",
      "Professional editing and proofreading",
    ],
  },

  "blog-article-writing": {
    title: "Blog & Article Writing",
    description:
      "Well-researched and engaging blog posts and articles created around your audience, industry, and content objectives.",
    points: [
      "Research-based articles",
      "Engaging introductions and conclusions",
      "Clear heading structure",
      "Reader-friendly formatting",
      "Professional editing",
    ],
  },

  "website-content-writing": {
    title: "Website Content Writing",
    description:
      "Professional website copy that communicates your brand, services, value proposition, and expertise clearly.",
    points: [
      "Homepage content",
      "About Us pages",
      "Service pages",
      "Landing pages",
      "Conversion-focused website copy",
    ],
  },

  copywriting: {
    title: "Copywriting",
    description:
      "Persuasive and professional copy designed to communicate your message clearly and encourage your audience to take action.",
    points: [
      "Marketing copy",
      "Sales copy",
      "Brand messaging",
      "Call-to-action content",
      "Promotional copy",
    ],
  },

  "landing-page-copy": {
    title: "Landing Page Copy",
    description:
      "Focused landing page content designed around your offer, audience, and conversion objectives.",
    points: [
      "Strong headlines",
      "Clear value propositions",
      "Persuasive sections",
      "Call-to-action copy",
      "Audience-focused messaging",
    ],
  },

  "product-descriptions": {
    title: "Product Descriptions",
    description:
      "Clear, informative, and persuasive product descriptions that highlight features, benefits, and value.",
    points: [
      "Feature-focused descriptions",
      "Benefit-driven copy",
      "E-commerce friendly structure",
      "Readable product information",
      "Professional tone",
    ],
  },

  "technical-writing": {
    title: "Technical Writing",
    description:
      "Structured technical content that explains complex information in a clear and accessible way.",
    points: [
      "Technical articles",
      "Documentation",
      "Guides and tutorials",
      "Process explanations",
      "Structured technical content",
    ],
  },

  "business-corporate-writing": {
    title: "Business & Corporate Writing",
    description:
      "Professional business content created for companies, organizations, professionals, and corporate brands.",
    points: [
      "Business articles",
      "Corporate website content",
      "Company profiles",
      "Professional reports",
      "Business communications",
    ],
  },

  "social-media-content": {
    title: "Social Media Content",
    description:
      "Engaging social media content designed to communicate your message and strengthen your digital presence.",
    points: [
      "Social media posts",
      "Captions",
      "Promotional content",
      "Educational posts",
      "Brand-focused messaging",
    ],
  },

  "email-newsletter-writing": {
    title: "Email & Newsletter Writing",
    description:
      "Professional email and newsletter content designed for clear communication and audience engagement.",
    points: [
      "Marketing emails",
      "Newsletters",
      "Promotional emails",
      "Business emails",
      "Audience-focused messaging",
    ],
  },

  "news-press-release-writing": {
    title: "News & Press Release Writing",
    description:
      "Professional news articles and press releases written with clarity, structure, and credibility.",
    points: [
      "Press releases",
      "News articles",
      "Announcements",
      "Company news",
      "Media-focused writing",
    ],
  },

  "translation-services": {
    title: "Translation Services",
    description:
      "Professional translation support across multiple languages while preserving meaning, tone, context, and readability.",
    points: [
      "General translation",
      "Website translation",
      "Business translation",
      "Document translation",
      "Content localization",
    ],
  },

  "editing-proofreading": {
    title: "Editing & Proofreading",
    description:
      "Careful editing and proofreading to improve grammar, clarity, structure, readability, and consistency.",
    points: [
      "Grammar correction",
      "Spelling correction",
      "Sentence improvement",
      "Content structure",
      "Final proofreading",
    ],
  },

  "content-optimization": {
    title: "Content Optimization",
    description:
      "Existing content refined for clarity, readability, structure, search performance, and overall quality.",
    points: [
      "Content restructuring",
      "Readability improvement",
      "SEO optimization",
      "Heading optimization",
      "Content refinement",
    ],
  },

  "research-based-content": {
    title: "Research-Based Content",
    description:
      "Thoughtfully researched content created to provide useful, credible, and audience-focused information.",
    points: [
      "Topic research",
      "Information organization",
      "Industry-focused writing",
      "Educational content",
      "Fact-focused presentation",
    ],
  },

  "marketing-content": {
    title: "Marketing Content",
    description:
      "Strategic marketing content designed to communicate your offer, strengthen your brand message, and connect with your audience.",
    points: [
      "Marketing articles",
      "Promotional content",
      "Campaign copy",
      "Brand messaging",
      "Audience-focused content",
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white px-6 py-24 text-center">
        <h1 className="text-4xl font-black text-gray-900">
          Service Not Found
        </h1>

        <p className="mt-4 text-gray-600">
          The service you are looking for does not exist.
        </p>

        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
        >
          <ArrowLeft size={18} />
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Hero */}
      <section className="bg-gray-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={17} />
            Back to Services
          </Link>

          <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <PenTool size={26} />
          </div>

          <p className="mt-8 font-bold uppercase tracking-widest text-blue-400">
            WriteGo Services
          </p>

          <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">
              What We Provide
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              Our service is designed to provide professional, clear, and
              audience-focused content that fits your project requirements
              and business objectives.
            </p>

            <div className="mt-8 space-y-4">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />

                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
            <h3 className="text-2xl font-black">
              Ready to get started?
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              Tell us about your project, requirements, audience, and goals.
              We can discuss the right content solution for you.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
