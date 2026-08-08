import PageShell from "../components/PageShell";

export default function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-5 py-16 text-center">
        <p className="font-bold text-blue-600">ABOUT WRITEGO</p>
        <h1 className="mt-3 text-5xl font-black dark:text-white">Writing that works for people and brands.</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">WriteGo is a professional writing studio focused on clear, useful and engaging content for modern businesses, brands and individuals.</p>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
          {["Quality First","Research Driven","Client Focused"].map((x) => <div key={x} className="rounded-3xl bg-gray-50 p-7 dark:bg-gray-900"><h2 className="font-black dark:text-white">{x}</h2><p className="mt-2 text-sm leading-6 text-gray-500">A practical approach designed around quality, clarity and your project goals.</p></div>)}
        </div>
      </section>
    </PageShell>
  );
}