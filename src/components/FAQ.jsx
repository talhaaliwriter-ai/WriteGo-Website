import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["How many revisions do you provide?","Revision terms depend on the selected service or project scope and are agreed before work begins."],
  ["What niches do you cover?","We can work across many industries, including education, technology, travel, finance, e-commerce and more."],
  ["Do you provide SEO writing?","Yes. SEO-focused content can include search intent, headings, keyword placement, readability and on-page structure."],
  ["Can you write website content?","Yes. We can create homepage, service, about, landing-page and other website copy."],
  ["How fast is delivery?","Delivery time depends on word count, research requirements and project scope. A timeline is confirmed before starting."],
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-bold text-purple-600">NEED TO KNOW</p>
          <h2 className="mt-2 text-4xl font-black dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], index) => (
            <div key={q} className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
              <button onClick={() => setActive(active === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 p-5 text-left font-bold dark:text-white">
                {q}<ChevronDown size={19} className={`shrink-0 transition ${active === index ? "rotate-180" : ""}`} />
              </button>
              {active === index && <div className="px-5 pb-5 text-sm leading-7 text-gray-600 dark:text-gray-300">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}