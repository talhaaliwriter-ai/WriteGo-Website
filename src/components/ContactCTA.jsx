import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-purple-700 px-7 py-14 text-center text-white shadow-2xl sm:px-12">
        <h2 className="text-4xl font-black">Ready to turn ideas into great content?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">Tell us what you need and we’ll help shape the right writing solution.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white hover:bg-orange-600">Get Free Quote <ArrowRight size={18}/></Link>
      </div>
    </section>
  );
}