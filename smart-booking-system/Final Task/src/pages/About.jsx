import { FaShieldAlt, FaLightbulb, FaUserCheck, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full">

      {/* ================= HERO / MISSION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <img
            src="https://www.sermo.com/wp-content/uploads/2025/04/seo-blog-header-doctors-revealing-human-side-690x388.png"
            alt="Medical Team"
            className="rounded-xl w-full"
          />

          {/* Content */}
          <div>
            <p className="text-blue-600 font-medium mb-2">OUR MISSION</p>
            <h1 className="text-4xl font-bold leading-tight">
              Bridging the gap between expert care and digital convenience.
            </h1>
            <p className="text-gray-600 mt-4">
              Learn about our journey to revolutionizing patient care through
              human-centered technology and smart scheduling.
            </p>

            <Link
              to="/"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= OUR HISTORY ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3">
            A Decade of Dedicated Care
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Founded with a vision to reduce patient wait times and improve
            accessibility, SmartClinic has evolved from a local practice into a
            leading digital health platform.
          </p>

          <div className="space-y-6">
            <Timeline
              year="Founded in 2015"
              text="A small local clinic with 5 doctors focused on community health."
            />
            <Timeline
              year="Digital Transformation in 2018"
              text="Integrated telehealth services to reach patients in remote areas."
            />
            <Timeline
              year="Smart Booking Launch 2023"
              text="Revolutionizing patient appointments with AI-driven scheduling."
            />
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Commitment to Care</h2>
          <p className="text-gray-600 mt-2">
            We hold ourselves to the highest standards of medical excellence and
            technological security.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <CommitCard
              icon={<FaUserCheck />}
              title="Patient-First"
              text="Every decision we make is centered around the patient experience."
            />
            <CommitCard
              icon={<FaShieldAlt />}
              title="Top Security"
              text="HIPAA-compliant data protection for all medical records."
            />
            <CommitCard
              icon={<FaLightbulb />}
              title="Innovation"
              text="Leveraging AI to optimize health outcomes and wait times."
            />
            <CommitCard
              icon={<FaClock />}
              title="24/7 Access"
              text="Round-the-clock availability for emergency consultations."
            />
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Our Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Leader
              img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              name="Dr. Sarah Johnson"
              role="Chief Medical Officer"
              text="Over 20 years in healthcare, leading clinical strategy and quality assurance."
            />
            <Leader
              img="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              name="Marcus Chen"
              role="Head of Product"
              text="Designs seamless digital experiences that connect patients to care."
            />
            <Leader
              img="https://images.unsplash.com/photo-1580489944761-15a19d654956"
              name="Elena Rodriguez"
              role="Patient Experience Lead"
              text="Ensures every touchpoint is clear, supportive, and patient-focused."
            />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center px-6">
          <Stat value="50k+" label="Consultations" />
          <Stat value="98%" label="Satisfaction" />
          <Stat value="200+" label="Specialist Doctors" />
          <Stat value="15+" label="Global Awards" />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-5xl mx-auto text-center text-white px-6">
          <h2 className="text-3xl font-bold">
            Ready to experience smarter healthcare?
          </h2>
          <p className="mt-3 text-blue-100">
            Join thousands of patients who have simplified their medical journey
            with our expert team.
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Link
              to="/"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium"
            >
              Book Your First Appointment
            </Link>
            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-md"
            >
              Contact Our Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Timeline({ year, text }) {
  return (
    <div className="flex gap-4">
      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
      <div>
        <h4 className="font-semibold">{year}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function CommitCard({ icon, title, text }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="text-blue-600 text-2xl mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600 text-sm mt-2">{text}</p>
    </div>
  );
}

function Leader({ img, name, role, text }) {
  return (
    <div>
      <img src={img} alt={name} className="rounded-xl mb-4" />
      <h4 className="font-semibold">{name}</h4>
      <p className="text-blue-600 text-sm">{role}</p>
      <p className="text-gray-600 text-sm mt-2">{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-600">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
