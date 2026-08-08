const stats = [
  ["500+", "Projects Delivered"],
  ["98%", "Client Satisfaction"],
  ["24 Hours", "Average Response Time"],
  ["Worldwide", "Clients"],
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 text-center md:grid-cols-4 lg:px-8">
        {stats.map(([number, label]) => (
          <div key={label}>
            <div className="text-3xl font-black sm:text-4xl">{number}</div>
            <p className="mt-2 text-sm text-blue-100">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}