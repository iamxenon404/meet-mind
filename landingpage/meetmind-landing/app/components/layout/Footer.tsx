import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">MeetMind</h2>
          <p className="text-sm text-gray-600">
            Turn client meetings into clean summaries and actionable tasks.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#features" className="hover:text-black transition">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-black transition">Pricing</Link></li>
            <li><Link href="#" className="hover:text-black transition">Roadmap</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black transition">About</Link></li>
            <li><Link href="#" className="hover:text-black transition">Contact</Link></li>
            <li><Link href="#" className="hover:text-black transition">Twitter</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black transition">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-black transition">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} MeetMind. All rights reserved.
      </div>
    </footer>
  );
}