export default function Demo() {
  return (
    <section className="py-24 bg-gray-100 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          From Chaos → Clarity
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-sm text-left space-y-4">
          <p className="text-gray-500 italic">
            “Client wants homepage redesign, invoice by Friday, follow up next week…”
          </p>

          <hr />

          <p><strong>Summary:</strong> Homepage redesign approved.</p>
          <p><strong>Task:</strong> Send invoice by Friday.</p>
          <p><strong>Next Step:</strong> Follow-up call next Wednesday.</p>
        </div>
      </div>
    </section>
  );
}