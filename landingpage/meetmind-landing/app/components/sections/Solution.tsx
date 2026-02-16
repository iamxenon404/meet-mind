export default function Solution() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          From Meeting → Clear Action Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="font-semibold text-lg mb-3">1. Upload Recording</h3>
            <p className="text-gray-600">
              Drop your Zoom or Meet recording. No manual typing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">2. Get Clean Summary</h3>
            <p className="text-gray-600">
              AI extracts key points, decisions, and discussion highlights.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">3. Export Tasks</h3>
            <p className="text-gray-600">
              Instantly turn discussions into actionable tasks with deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}