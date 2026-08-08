const steps = ["Discussion","Research","Writing","Editing","Quality Check","Delivery"];

export default function WorkingProcess() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-bold text-purple-600">HOW IT WORKS</p>
          <h2 className="mt-2 text-4xl font-black dark:text-white">Our Working Process</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl bg-white p-6 text-center shadow-sm dark:bg-gray-950">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-black text-white">{index + 1}</div>
              <p className="mt-4 font-bold dark:text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}