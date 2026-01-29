import { FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
  <img
    src="https://image.similarpng.com/file/similarpng/original-picture/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png"
    alt="HealthSync"
    className="w-12 h-12 object-contain"
  />
  <span className="font-bold text-lg">HealthSync</span>
</div>


          <p className="text-gray-600 text-sm max-w-xs mx-auto md:mx-0">
            Providing accessible, secure, and expert healthcare at your
            fingertips.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4 text-blue-600">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="mailto:support@healthsync.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link to="/doctors" className="hover:text-blue-600">Find a Doctor</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link to="/my-schedule" className="hover:text-blue-600">My Schedule</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-gray-600 text-sm mb-3">
            Get health tips and platform updates.
          </p>
          <div className="flex max-w-xs mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Email address"
              className="border px-3 py-2 rounded-l-md w-full outline-none text-sm"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md">
              →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} HealthSync Platform. All rights reserved.
      </div>
    </footer>
  );
}
