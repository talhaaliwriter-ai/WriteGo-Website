import { useState } from "react";
import PageShell from "../components/PageShell";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="text-center"><p className="font-bold text-blue-600">LET'S TALK</p><h1 className="mt-3 text-5xl font-black dark:text-white">Get a Free Quote</h1><p className="mt-5 text-gray-600 dark:text-gray-300">Tell us about your project and we’ll get back to you.</p></div>
        <form onSubmit={submit} className="mt-10 grid gap-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          {sent && <div className="rounded-2xl bg-green-50 p-4 text-sm font-semibold text-green-700">Thanks! Your request has been captured on this demo form. Connect an email/form service before production use.</div>}
          <div className="grid gap-5 md:grid-cols-2">
            <input required className="rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500" placeholder="Name" />
            <input required type="email" className="rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500" placeholder="Email" />
          </div>
          <input className="rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500" placeholder="Country" />
          <select className="rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"><option>Service Required</option><option>SEO Content Writing</option><option>Blog Writing</option><option>Website Content</option><option>Copywriting</option><option>Translation</option></select>
          <input className="rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500" placeholder="Budget" />
          <textarea required rows="6" className="rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500" placeholder="Tell us about your project..." />
          <button className="w-fit rounded-full bg-orange-500 px-8 py-3.5 font-bold text-white hover:bg-orange-600">Send Request</button>
        </form>
      </section>
    </PageShell>
  );
}