import {
  FaPhoneAlt,
  FaEnvelope,
  FaShareAlt,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-50">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <h1 className="text-4xl font-bold">Contact Our Medical Team</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Have questions about your appointment or our services? We're here to
          help you get the care you need.
        </p>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* -------- LEFT: FORM -------- */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="e.g. john@example.com"
                className="w-full border rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Your Message</label>
              <textarea
                rows="5"
                placeholder="How can we assist you today?"
                className="w-full border rounded-lg px-4 py-3 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
            >
              Send Message
            </button>

            <p className="text-sm text-blue-600 flex items-center gap-2">
              ✔ We typically respond within 24 business hours.
            </p>
          </form>
        </div>

        {/* -------- RIGHT: CONTACT INFO -------- */}
        <div className="space-y-6">

          {/* Call */}
          <div className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500">CALL US</p>
              <p className="font-semibold text-lg">(555) 012-3456</p>
              <p className="text-gray-500 text-sm">Mon–Fri, 8am–6pm</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm text-gray-500">EMAIL US</p>
              <p className="font-semibold text-lg">
                support@smartbooking.com
              </p>
              <p className="text-gray-500 text-sm">24/7 Support</p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Seattle&output=embed"
              className="w-full h-64 border-none"
            ></iframe>

            <div className="p-4 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                📍 123 Healthcare Plaza, Suite 400
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                className="text-blue-600 text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm text-gray-500 mb-3">CONNECT WITH US</p>
            <div className="flex gap-4">
              <IconCircle><FaShareAlt /></IconCircle>
              <IconCircle><FaTwitter /></IconCircle>
              <IconCircle><FaLinkedinIn /></IconCircle>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FAQ CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 my-16">
        <div className="bg-blue-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">
              Looking for quick answers?
            </h3>
            <p className="text-gray-600 mt-1">
              Our Help Center has answers about booking, billing, and telehealth.
            </p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
            Visit FAQ Center
          </button>
        </div>
      </section>

    </div>
  );
}

/* ================= SMALL COMPONENT ================= */

function IconCircle({ children }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:text-blue-600 cursor-pointer">
      {children}
    </div>
  );
}
