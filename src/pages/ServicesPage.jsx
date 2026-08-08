import PageShell from "../components/PageShell";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="px-5 py-12 text-center">
        <p className="font-bold text-blue-600">WHAT WE OFFER</p>
        <h1 className="mt-3 text-5xl font-black dark:text-white">Professional Writing Services</h1>
        <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-300">Flexible writing support for websites, blogs, brands, products and more.</p>
      </section>
      <Services />
    </PageShell>
  );
}