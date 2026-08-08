import PageShell from "../components/PageShell";
import { Link } from "react-router-dom";

const plans = [
  ["Starter","For focused, smaller content needs."],
  ["Professional","For ongoing blogs and business content."],
  ["Business","For larger, recurring content projects."],
];

export default function Pricing() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="text-center"><p className="font-bold text-orange-500">FLEXIBLE PACKAGES</p><h1 className="mt-3 text-5xl font-black dark:text-white">Pricing</h1><p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-300">Project pricing is customized according to word count, research, complexity and turnaround.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map(([name, desc], i) => <div key={name} className={`rounded-3xl border p-8 ${i === 1 ? "border-blue-500 shadow-xl" : "border-gray-200 dark:border-gray-800"}`}><h2 className="text-2xl font-black dark:text-white">{name}</h2><p className="mt-3 text-gray-500">{desc}</p><div className="mt-7 text-3xl font-black dark:text-white">Custom</div><Link to="/contact" className="mt-7 inline-block rounded-full bg-orange-500 px-6 py-3 font-bold text-white">Request Quote</Link></div>)}
        </div>
      </section>
    </PageShell>
  );
}