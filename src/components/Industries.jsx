const industries = ["Education","Technology","Healthcare","Finance","Travel","Real Estate","Digital Marketing","E-commerce","News","Startups"];

export default function Industries() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-bold text-purple-600">EXPERTISE ACROSS NICHES</p>
          <h2 className="mt-2 text-4xl font-black dark:text-white">Industries We Serve</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {industries.map((item) => (
            <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center font-bold text-gray-700 transition hover:-translate-y-1 hover:shadow-md dark:border-blue-900 dark:bg-blue-950/30 dark:text-gray-200">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}