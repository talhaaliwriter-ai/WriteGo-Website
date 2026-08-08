import { Link } from "react-router-dom";

export default function NotFound() {
  return <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5 text-center"><div><div className="text-8xl font-black text-blue-600">404</div><h1 className="mt-4 text-3xl font-black">Page Not Found</h1><Link to="/" className="mt-7 inline-block rounded-full bg-orange-500 px-7 py-3 font-bold text-white">Back Home</Link></div></div>;
}