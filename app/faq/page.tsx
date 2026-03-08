export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-semibold mb-2">
              Do you deliver across India?
            </h3>
            <p>Yes, we ship pan-India.</p>
          </div>
8
          <div>
            <h3 className="font-semibold mb-2">
              Are products handcrafted?
            </h3>
            <p>Yes, each piece is artisan-made.</p>
          </div>
        </div>
      </div>
    </div>
  )
}