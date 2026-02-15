export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-lg font-semibold mb-2">MeetMind</h2>
        <p className="text-sm text-gray-600 mb-6">
          Turn client meetings into actionable tasks in seconds.
        </p>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} MeetMind
        </p>
      </div>
    </footer>
  );
}