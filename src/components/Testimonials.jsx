const reviews = [
  ["★★★★★","Professional Quality"],
  ["★★★★★","Excellent Communication"],
  ["★★★★★","Highly Recommended"],
];

export default function Testimonials() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-bold text-blue-600">CLIENT FEEDBACK</p>
          <h2 className="mt-2 text-4xl font-black dark:text-white">Testimonials</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map(([stars, text]) => (
            <div key={text} className="rounded-3xl border border-gray-200 p-8 text-center dark:border-gray-800">
              <div className="text-xl text-yellow-500">{stars}</div>
              <p className="mt-5 font-bold dark:text-white">{text}</p>
              <p className="mt-2 text-sm text-gray-500">Client testimonial placeholder — replace with a verified client review.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}