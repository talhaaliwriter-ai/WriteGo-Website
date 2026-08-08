import { Linkedin, Instagram } from "lucide-react";

const platforms = [
  ["LinkedIn", Linkedin],
  ["Medium", null],
  ["Instagram", Instagram],
  ["Pinterest", null],
  ["X (Twitter)", null],
];

export default function TrustedPlatforms() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Trusted Platforms</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {platforms.map(([name, Icon]) => (
            <div key={name} className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-5 font-bold text-gray-700 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
              {Icon && <Icon size={20} />} {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}