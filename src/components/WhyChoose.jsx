import { CheckCircle2 } from "lucide-react";

const reasons = ["Human Written Quality","SEO Optimized","Fast Delivery","Affordable Pricing","Unlimited Revisions","Professional Communication"];

export default function WhyChoose() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-bold text-blue-600">THE WRITEGO DIFFERENCE</p>
          <h2 className="mt-2 text-4xl font-black dark:text-white">Why Choose WriteGo</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-7 shadow-sm dark:bg-gray-950">
              <CheckCircle2 className="text-blue-600" size={30} />
              <h3 className="mt-5 font-black dark:text-white">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">A professional, client-focused approach from brief to final delivery.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}