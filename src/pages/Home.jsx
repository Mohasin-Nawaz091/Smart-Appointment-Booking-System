import { FaSearch, FaShieldAlt, FaUserMd, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Health, <br />
              Our Priority: <br />
              Find and Book the Best Doctors
            </h1>

            <p className="text-gray-600 mt-4">
              Connecting you with top-rated medical professionals for seamless
              online and in-person consultations.
            </p>

            {/* Search Box */}
            <div className="bg-white mt-6 p-3 rounded-lg flex items-center gap-3 shadow-md">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search specialty..."
                className="flex-1 outline-none"
              />
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
              alt="Doctor"
              className="rounded-xl w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 text-center">
          <StatCard value="10k+" label="Verified Doctors" />
          <StatCard value="500k+" label="Patients Served" />
          <StatCard value="45+" label="Specialties" />
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">
            Experience healthcare designed around your needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <FeatureCard
              icon={<FaHeadset />}
              title="24/7 Support"
              text="Round-the-clock medical advice and technical support."
            />
            <FeatureCard
              icon={<FaUserMd />}
              title="Verified Doctors"
              text="Every doctor is thoroughly vetted for credentials."
            />
            <FeatureCard
              icon={<FaShieldAlt />}
              title="Secure Records"
              text="Your data is protected with industry standards."
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <Link to="/" className="text-blue-600 font-medium">
              View All Services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              img="https://www.call4health.com/wp-content/uploads/2020/07/Nurse-Triage.jpg"
              title="Triage Services"
              text="Immediate assessment to direct you to the right specialist."
            />
            <ServiceCard
              img="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              title="Specialist Consultation"
              text="Book in-person or virtual appointments with experts."
            />
            <ServiceCard
              img="https://images.apollo247.in/pd-cms/cms/2023-10/Shutterstock_1114244621.jpg"
              title="Diagnostic Lab Tests"
              text="Schedule lab tests for fast, accurate results."
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Our Patients Say</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <Testimonial
              name="Sarah Johnson"
              text="The easiest doctor's appointment I’ve ever booked."
            />
            <Testimonial
              name="Michael Chen"
              text="Everything is encrypted and accessible in one place."
            />
            <Testimonial
              name="Emma Davis"
              text="Video consultation quality was outstanding."
            />
          </div>
        </div>
      </section>

    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function StatCard({ value, label }) {
  return (
    <div className="border rounded-lg p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-blue-600">{value}</h3>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <div className="text-blue-600 text-3xl mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 mt-2">{text}</p>
    </div>
  );
}

function ServiceCard({ img, title, text }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img src={img} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600 mt-2">{text}</p>
        <button className="text-blue-600 mt-3">Learn More</button>
      </div>
    </div>
  );
}

function Testimonial({ name, text }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-gray-600 italic">“{text}”</p>
      <h4 className="mt-4 font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">Verified Patient</p>
    </div>
  );
}
