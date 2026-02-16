export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Simple Pricing
        </h2>

        <p className="text-gray-600 mb-12">
          Free beta access for early users.
        </p>

        <div className="border rounded-xl p-10 inline-block">
          <p className="text-4xl font-bold mb-4">$19<span className="text-lg font-medium">/month</span></p>
          <p className="text-gray-600 mb-6">
            Unlimited meetings, task extraction, exports.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:opacity-90 transition">
            Join Early Access
          </button>
        </div>
      </div>
    </section>
  );
}