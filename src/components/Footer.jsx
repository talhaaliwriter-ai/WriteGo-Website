import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="text-2xl font-black">WRITEGO</Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">Professional writing solutions for students, businesses and brands.</p>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <Link className="block hover:text-white" to="/services">Writing Services</Link>
            <Link className="block hover:text-white" to="/portfolio">Portfolio</Link>
            <Link className="block hover:text-white" to="/pricing">Pricing</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <Link className="block hover:text-white" to="/about">About</Link>
            <Link className="block hover:text-white" to="/blog">Blog</Link>
            <Link className="block hover:text-white" to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Legal</h3>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <Link className="block hover:text-white" to="/privacy-policy">Privacy Policy</Link>
            <Link className="block hover:text-white" to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 px-5 pt-6 text-sm text-gray-500 lg:px-8">Copyright © {new Date().getFullYear()} WriteGo. All rights reserved.</div>
    </footer>
  );
}