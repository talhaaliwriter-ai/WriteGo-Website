import PageShell from "../components/PageShell";

const posts = [
  ["How to Build a Strong Content Strategy","Practical foundations for planning useful content that serves both readers and business goals."],
  ["SEO Writing: From Keywords to Search Intent","A beginner-friendly overview of writing content around what people actually want to find."],
  ["Website Copy That Builds Trust","Simple principles for clearer, more persuasive website messaging."],
];

export default function Blog() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="text-center"><p className="font-bold text-blue-600">INSIGHTS</p><h1 className="mt-3 text-5xl font-black dark:text-white">WriteGo Blog</h1></div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map(([title, text]) => <article key={title} className="rounded-3xl border border-gray-200 p-7 dark:border-gray-800"><span className="text-xs font-bold uppercase tracking-widest text-blue-600">Coming Soon</span><h2 className="mt-4 text-xl font-black dark:text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-gray-500">{text}</p></article>)}
        </div>
      </section>
    </PageShell>
  );
}