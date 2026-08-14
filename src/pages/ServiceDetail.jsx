import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  PenTool,
  Target,
  Users,
  FileText,
  ShieldCheck,
  Clock3,
  MessageSquare,
  Sparkles,
  HelpCircle,
} from "lucide-react";

const serviceData = {
  "seo-content-writing": {
    title: "SEO Content Writing",
    label: "SEO CONTENT",
    description:
      "Search-focused content written to help your website communicate clearly with readers while supporting a stronger organic search presence.",
    intro:
      "Our SEO content writing service combines useful information, clear structure, natural keyword usage, and reader-focused writing. We create content around the actual purpose of a search query rather than simply filling a page with keywords. The result is content that is easier to read, easier to navigate, and better aligned with the needs of your audience.",
    audience: [
      "Businesses building long-term organic visibility",
      "Websites that need informative search-focused articles",
      "Startups and brands building topical authority",
      "Publishers and blogs requiring consistent content",
    ],
    deliverables: [
      "SEO-focused articles and blog posts",
      "Search-intent aligned content structure",
      "Optimized headings and subheadings",
      "Natural keyword placement",
      "Meta-friendly titles and content organization",
      "Editing and proofreading",
    ],
    benefits: [
      "Clearer communication with your target audience",
      "Better content organization and readability",
      "Content structured around search intent",
      "A stronger foundation for long-term content growth",
    ],
  },

  "blog-article-writing": {
    title: "Blog & Article Writing",
    label: "BLOG & ARTICLES",
    description:
      "Well-researched blog posts and articles written to inform readers, demonstrate expertise, and support your wider content strategy.",
    intro:
      "A strong blog article should do more than fill space on a website. It should answer a real question, provide useful information, maintain the reader's attention, and represent the publication or brand professionally. Our blog and article writing service focuses on research, logical structure, readable paragraphs, engaging introductions, useful headings, and polished conclusions.",
    audience: [
      "Business websites and professional brands",
      "Blogs that require regular publishing",
      "Startups building authority in their industry",
      "Publishers and educational platforms",
    ],
    deliverables: [
      "Research-based blog posts",
      "Long-form informational articles",
      "How-to and educational content",
      "Industry-focused articles",
      "SEO-friendly headings and structure",
      "Editing and proofreading",
    ],
    benefits: [
      "Useful content that answers reader questions",
      "Professional presentation of your expertise",
      "Consistent publishing support",
      "Content that can support broader SEO and marketing goals",
    ],
  },

  "website-content-writing": {
    title: "Website Content Writing",
    label: "WEBSITE CONTENT",
    description:
      "Professional website copy that explains your business clearly, communicates your value, and guides visitors toward taking action.",
    intro:
      "Website content is often the first detailed interaction a potential customer has with a business. Your homepage, About page, service pages, landing pages, and other core sections need to communicate quickly and confidently. We create website content that combines clarity, structure, brand messaging, audience awareness, and persuasive communication.",
    audience: [
      "New businesses launching a website",
      "Companies redesigning outdated website copy",
      "Agencies and brands expanding their online presence",
      "Businesses that need clearer service messaging",
    ],
    deliverables: [
      "Homepage content",
      "About Us content",
      "Service page copy",
      "Landing page content",
      "Business and company profiles",
      "Calls-to-action and supporting copy",
    ],
    benefits: [
      "Clearer explanation of your products or services",
      "More consistent brand communication",
      "Better visitor understanding",
      "Professional copy across important website pages",
    ],
  },

  copywriting: {
    title: "Copywriting",
    label: "COPYWRITING",
    description:
      "Persuasive copy designed to communicate your offer clearly, address customer needs, and encourage meaningful action.",
    intro:
      "Good copywriting is not simply about using impressive words. It is about understanding the audience, identifying the value of an offer, communicating benefits clearly, and creating a natural path toward action. Our copywriting service can support marketing campaigns, sales pages, promotional material, website sections, and other customer-facing communication.",
    audience: [
      "Businesses promoting products or services",
      "Startups developing their brand message",
      "Marketing teams needing additional writing support",
      "Websites that need stronger conversion-focused copy",
    ],
    deliverables: [
      "Sales and promotional copy",
      "Marketing copy",
      "Brand messaging",
      "Value propositions",
      "Call-to-action copy",
      "Campaign content",
    ],
    benefits: [
      "Clearer communication of your offer",
      "More audience-focused messaging",
      "Stronger brand voice",
      "Copy structured around business objectives",
    ],
  },

  "landing-page-copy": {
    title: "Landing Page Copy",
    label: "LANDING PAGES",
    description:
      "Focused landing page content built around your offer, target audience, key benefits, and desired action.",
    intro:
      "Landing pages have a specific job: help visitors understand the offer and decide what to do next. Our landing page copy focuses on clear positioning, strong headlines, useful supporting sections, benefits, objections, trust-building language, and calls to action without unnecessary filler.",
    audience: [
      "Businesses running marketing campaigns",
      "Product and service launches",
      "Lead-generation campaigns",
      "Businesses improving existing landing pages",
    ],
    deliverables: [
      "Hero headline and supporting copy",
      "Value proposition",
      "Benefits sections",
      "Feature explanations",
      "Objection-handling content",
      "Calls-to-action",
    ],
    benefits: [
      "A clearer customer journey",
      "Stronger communication of the offer",
      "Better page structure",
      "More focused conversion messaging",
    ],
  },

  "product-descriptions": {
    title: "Product Descriptions",
    label: "E-COMMERCE CONTENT",
    description:
      "Clear and persuasive product descriptions that explain features, communicate benefits, and help customers understand product value.",
    intro:
      "Product descriptions need to give customers enough information to understand what they are buying while presenting the product in a compelling and readable way. We create descriptions that organize product information logically, emphasize useful benefits, and maintain a consistent brand voice across your store.",
    audience: [
      "E-commerce stores",
      "Online retailers",
      "Product brands",
      "Marketplaces and digital catalogs",
    ],
    deliverables: [
      "Short and long product descriptions",
      "Feature and benefit presentation",
      "E-commerce friendly formatting",
      "Product-focused headings",
      "Brand-consistent descriptions",
      "Editing and refinement",
    ],
    benefits: [
      "Clearer product communication",
      "More consistent store content",
      "Easier customer understanding",
      "Professional presentation of product information",
    ],
  },

  "technical-writing": {
    title: "Technical Writing",
    label: "TECHNICAL CONTENT",
    description:
      "Structured technical content that makes complex information easier to understand, follow, and use.",
    intro:
      "Technical subjects often contain terminology, processes, instructions, and information that can be difficult for general readers to understand. Our technical writing service focuses on organization, clarity, logical sequencing, and appropriate language so technical information can be communicated more effectively.",
    audience: [
      "Technology companies",
      "Software and digital businesses",
      "Professional organizations",
      "Educational and technical platforms",
    ],
    deliverables: [
      "Technical articles",
      "Guides and tutorials",
      "Documentation",
      "Process explanations",
      "Instructional content",
      "Structured technical information",
    ],
    benefits: [
      "Clearer technical communication",
      "Better organization of complex information",
      "Reader-friendly explanations",
      "Professional documentation structure",
    ],
  },

  "business-corporate-writing": {
    title: "Business & Corporate Writing",
    label: "BUSINESS WRITING",
    description:
      "Professional business content for companies, organizations, professionals, and corporate brands.",
    intro:
      "Business communication needs to be clear, credible, and appropriate for its audience. We create professional written material that helps organizations explain their services, communicate ideas, present information, and maintain a consistent professional voice across digital and business documents.",
    audience: [
      "Companies and corporate brands",
      "Startups and growing businesses",
      "Consultants and professionals",
      "Organizations and institutions",
    ],
    deliverables: [
      "Company profiles",
      "Business articles",
      "Corporate website content",
      "Professional reports",
      "Business communications",
      "Executive and informational content",
    ],
    benefits: [
      "More professional business communication",
      "Consistent tone and presentation",
      "Clearer explanation of business information",
      "Content adapted to professional audiences",
    ],
  },

  "social-media-content": {
    title: "Social Media Content",
    label: "SOCIAL CONTENT",
    description:
      "Engaging social media copy designed to communicate your message consistently across your digital channels.",
    intro:
      "Social media content needs to be concise, relevant, recognizable, and appropriate for the platform and audience. We create content that can support educational, promotional, informational, and brand-building communication while maintaining a consistent voice.",
    audience: [
      "Businesses growing their social presence",
      "Personal and professional brands",
      "Startups and online businesses",
      "Marketing teams needing writing support",
    ],
    deliverables: [
      "Social media posts",
      "Captions",
      "Educational content",
      "Promotional posts",
      "Brand messaging",
      "Content ideas and copy variations",
    ],
    benefits: [
      "More consistent publishing",
      "Clearer brand communication",
      "Audience-focused messaging",
      "Professional social media copy",
    ],
  },

  "email-newsletter-writing": {
    title: "Email & Newsletter Writing",
    label: "EMAIL CONTENT",
    description:
      "Professional email and newsletter content created for clear communication, engagement, announcements, and marketing.",
    intro:
      "Email communication has limited space to earn attention, which makes clarity and relevance especially important. We create email and newsletter copy that communicates the main message quickly while maintaining a professional and consistent brand voice.",
    audience: [
      "Businesses communicating with customers",
      "Online stores and digital brands",
      "Organizations sending regular updates",
      "Marketing teams and newsletters",
    ],
    deliverables: [
      "Marketing emails",
      "Newsletters",
      "Promotional emails",
      "Business announcements",
      "Customer communication",
      "Email subject-line options",
    ],
    benefits: [
      "Clearer email communication",
      "More consistent messaging",
      "Professional customer-facing copy",
      "Better organization of email content",
    ],
  },

  "news-press-release-writing": {
    title: "News & Press Release Writing",
    label: "NEWS & PR",
    description:
      "Structured news articles and press releases written with clarity, relevance, and professional presentation.",
    intro:
      "Announcements and news-related content need to communicate important information efficiently while maintaining an appropriate professional tone. We structure press releases and news content around the key information readers and media professionals need to understand.",
    audience: [
      "Companies announcing important updates",
      "Organizations and institutions",
      "Brands launching products or initiatives",
      "Businesses requiring professional announcements",
    ],
    deliverables: [
      "Press releases",
      "Company announcements",
      "News articles",
      "Product launch content",
      "Event announcements",
      "Media-focused writing",
    ],
    benefits: [
      "Clearer presentation of important announcements",
      "Professional news structure",
      "Better organization of key information",
      "Consistent corporate communication",
    ],
  },

  "translation-services": {
    title: "Translation Services",
    label: "TRANSLATION",
    description:
      "Professional translation support focused on preserving meaning, tone, context, and readability.",
    intro:
      "Effective translation is more than replacing words from one language with another. Meaning, context, tone, cultural relevance, and readability all need to be considered. Our translation service focuses on producing natural and understandable translated content while maintaining the purpose of the original material.",
    audience: [
      "Businesses working across languages",
      "Websites serving multilingual audiences",
      "Professionals and organizations",
      "Content creators requiring language support",
    ],
    deliverables: [
      "Website translation",
      "Business content translation",
      "Document translation",
      "General content translation",
      "English ↔ Urdu translation",
      "Content localization support",
    ],
    benefits: [
      "Clearer multilingual communication",
      "Preservation of original meaning",
      "Consistent terminology",
      "Reader-friendly translated content",
    ],
  },

  "editing-proofreading": {
    title: "Editing & Proofreading",
    label: "EDITING",
    description:
      "Detailed editing and proofreading to improve grammar, clarity, structure, readability, and consistency.",
    intro:
      "Even strong content can lose credibility when it contains unnecessary repetition, unclear sentences, inconsistent terminology, or grammatical errors. Our editing and proofreading service reviews content carefully to improve its overall quality while preserving the writer's intended message and voice.",
    audience: [
      "Businesses reviewing website content",
      "Bloggers and publishers",
      "Students and professionals",
      "Organizations preparing documents",
    ],
    deliverables: [
      "Grammar correction",
      "Spelling and punctuation review",
      "Sentence improvement",
      "Structure and flow review",
      "Readability improvement",
      "Final proofreading",
    ],
    benefits: [
      "Cleaner and more polished content",
      "Improved readability",
      "Greater consistency",
      "Professional final presentation",
    ],
  },

  "content-optimization": {
    title: "Content Optimization",
    label: "OPTIMIZATION",
    description:
      "Existing content refined for clarity, structure, readability, search relevance, and overall quality.",
    intro:
      "You do not always need completely new content. Sometimes the existing material has useful information but needs better organization, clearer language, stronger headings, or improved readability. Our content optimization service reviews existing pages and articles and improves them without unnecessarily changing their core purpose.",
    audience: [
      "Websites with existing content",
      "Businesses updating older pages",
      "Blogs with underperforming articles",
      "Brands improving content quality",
    ],
    deliverables: [
      "Content restructuring",
      "Heading improvements",
      "Readability refinement",
      "SEO-focused optimization",
      "Internal content consistency",
      "Editing and polishing",
    ],
    benefits: [
      "Better-organized existing content",
      "Improved readability",
      "Stronger page structure",
      "More useful and focused information",
    ],
  },

  "research-based-content": {
    title: "Research-Based Content",
    label: "RESEARCH CONTENT",
    description:
      "Thoughtfully researched content created to provide useful, credible, organized, and audience-focused information.",
    intro:
      "Research-based content requires more than collecting information. The information needs to be organized, interpreted, and presented in a way that is useful to the intended reader. We focus on structured research and clear writing so the final content is informative without becoming unnecessarily difficult to read.",
    audience: [
      "Educational websites",
      "Industry blogs",
      "Professional publications",
      "Businesses requiring informative content",
    ],
    deliverables: [
      "Research-based articles",
      "Informational blog posts",
      "Industry research content",
      "Educational material",
      "Topic-focused reports",
      "Structured information",
    ],
    benefits: [
      "More informative content",
      "Clearer presentation of research",
      "Better organization of complex topics",
      "Reader-focused explanations",
    ],
  },

  "marketing-content": {
    title: "Marketing Content",
    label: "MARKETING",
    description:
      "Strategic marketing content created to communicate your offer, strengthen your message, and connect with your target audience.",
    intro:
      "Marketing content should have a clear purpose. Whether the goal is awareness, education, engagement, or action, the content needs to communicate the right message to the right audience. We create marketing content that combines clear messaging with a professional brand voice.",
    audience: [
      "Businesses promoting services",
      "Startups and growing brands",
      "Digital marketing teams",
      "Companies launching campaigns",
    ],
    deliverables: [
      "Marketing articles",
      "Promotional content",
      "Campaign copy",
      "Brand messaging",
      "Educational marketing content",
      "Audience-focused copy",
    ],
    benefits: [
      "Clearer marketing communication",
      "More consistent brand messaging",
      "Audience-focused content",
      "Professional promotional material",
    ],
  },
};

const defaultFaqs = [
  {
    question: "Who can use this service?",
    answer:
      "The service can be adapted for businesses, professionals, brands, publishers, students, and other clients depending on the type of project and its requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us your requirements through the Contact page. Include the type of content, approximate word count, topic, deadline, and any specific instructions you already have.",
  },
  {
    question: "Can the content be customized?",
    answer:
      "Yes. Content can be adapted to your preferred audience, tone, structure, subject, formatting requirements, and project objectives.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on factors such as word count, research requirements, complexity, content type, turnaround time, and the overall scope of the project.",
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-white px-6 py-24 text-center text-gray-900 dark:bg-gray-950 dark:text-white">
        <div className="mx-auto max-w-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40">
            <HelpCircle size={30} />
          </div>

          <h1 className="mt-7 text-4xl font-black">
            Service Not Found
          </h1>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            The service page you are looking for could not be found. Please
            return to the services page and select an available service.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-28 dark:from-gray-950 dark:via-gray-950 dark:to-purple-950/30">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
          >
            <ArrowLeft size={17} />
            Back to Services
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
                <PenTool size={15} />
                {service.label}
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-6 py-3 font-bold text-blue-600 transition hover:bg-blue-50 dark:hover:bg-blue-950/30"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white bg-white/80 p-7 shadow-xl backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Target size={26} />
              </div>

              <h2 className="mt-6 text-2xl font-black">
                Content with a clear purpose
              </h2>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                We focus on your audience, project requirements, content
                purpose, and desired outcome before shaping the final copy.
              </p>

              <div className="mt-7 grid gap-3 text-sm font-semibold">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-600" size={19} />
                  Structured and audience-focused
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="text-blue-600" size={19} />
                  Professionally written content
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="text-blue-600" size={19} />
                  Clear project communication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <article>
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              A writing solution built around your project
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {service.intro}
            </p>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              Every project has different requirements. Some clients need
              concise website copy, while others need detailed articles,
              educational content, marketing material, or ongoing publishing
              support. That is why our approach begins with understanding what
              you need rather than forcing every project into the same format.
              The final content can be shaped around your audience, industry,
              tone, structure, deadline, and communication goals.
            </p>
          </article>

          <aside className="h-fit rounded-3xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Users size={23} />
            </div>

            <h3 className="mt-5 text-xl font-black">
              Who is this for?
            </h3>

            <div className="mt-5 space-y-4">
              {service.audience.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  <span className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-gray-50 dark:bg-gray-900/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              What's Included
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              What you receive
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              The exact scope can be adjusted according to your project. The
              following areas represent the core deliverables we can provide
              as part of this service.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-600 dark:bg-blue-950/40">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 font-black">{item}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Carefully structured to match the purpose and requirements
                  of your project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Why It Matters
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              More than words on a page
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              Professional content should make information easier to
              understand and should support the reason the page or document
              exists. We focus on clarity, organization, audience relevance,
              and a professional presentation throughout the writing process.
            </p>

            <div className="mt-8 space-y-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-blue-600"
                  />

                  <span className="leading-7 text-gray-700 dark:text-gray-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white shadow-2xl sm:p-10">
            <Sparkles size={30} />

            <h3 className="mt-6 text-2xl font-black">
              A practical approach to better content
            </h3>

            <p className="mt-4 leading-7 text-blue-50">
              We aim to make the content useful for the people who will
              actually read it. That means avoiding unnecessary complexity,
              organizing information logically, and keeping the final piece
              aligned with its intended purpose.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <Clock3 size={21} />
                <p className="mt-3 font-bold">Clear workflow</p>
                <p className="mt-1 text-sm text-blue-100">
                  Requirements first, writing second.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <ShieldCheck size={21} />
                <p className="mt-3 font-bold">Quality focused</p>
                <p className="mt-1 text-sm text-blue-100">
                  Review and refinement before delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 dark:bg-gray-900/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Simple from brief to delivery
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              A clear process helps keep projects organized and reduces
              unnecessary back-and-forth.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Share Requirements", "Tell us about the topic, audience, scope and deadline."],
              ["02", "Plan & Research", "We organize the information and establish the right content direction."],
              ["03", "Write & Refine", "The content is drafted, structured and reviewed."],
              ["04", "Final Delivery", "The completed work is prepared according to the agreed requirements."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
              >
                <span className="text-sm font-black text-blue-600">
                  {number}
                </span>

                <h3 className="mt-4 font-black">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-widest text-blue-600">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Questions about this service?
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {defaultFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
            >
              <summary className="cursor-pointer list-none font-black">
                {faq.question}
              </summary>

              <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-purple-700 px-7 py-14 text-center text-white shadow-2xl sm:px-12">
          <p className="text-sm font-black uppercase tracking-widest text-blue-100">
            Ready When You Are
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Let's discuss your {service.title.toLowerCase()} project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Share your requirements and we can discuss the scope, content
            format, word count, timeline, and the best approach for your
            project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-black text-white transition hover:bg-orange-600"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
