import PageShell from "../components/PageShell";
import PortfolioSection from "../components/PortfolioSection";

export default function Portfolio() {
  return (
    <PageShell>
      <section className="px-5 py-12 text-center">
        <p className="font-bold text-purple-600">OUR WORK</p>
        <h1 className="mt-3 text-5xl font-black dark:text-white">Portfolio</h1>
        <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-300">A selection of content categories. Replace these placeholders with verified client work as your portfolio grows.</p>
      </section>
      <PortfolioSection />
    </PageShell>
  );
}