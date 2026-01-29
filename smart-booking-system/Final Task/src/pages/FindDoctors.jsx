import { useState } from "react";
import { doctors } from "../data/doctors";
import { FaSearch, FaStar, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



export default function FindDoctors() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState([]);
  const [gender, setGender] = useState("Any");
  const [rating, setRating] = useState(4);

  const toggleSpecialty = (value) => {
    setSpecialty((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  const filteredDoctors = doctors.filter((doc) => {
    const matchSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase());

    const matchSpecialty =
      specialty.length === 0 || specialty.includes(doc.specialty);

    const matchGender = gender === "Any" || doc.gender === gender;

    const matchRating = doc.rating >= rating;

    return matchSearch && matchSpecialty && matchGender && matchRating;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* ================= FILTERS ================= */}
        <aside className="bg-white rounded-xl p-6 space-y-6">
          <h3 className="font-semibold text-lg">Filters</h3>

          {/* Specialty */}
          <div>
            <p className="font-medium mb-2">Specialty</p>
            {["Cardiology", "Pediatrics", "Dermatology", "Neurology"].map(
              (item) => (
                <label key={item} className="flex gap-2 text-sm mb-1">
                  <input
                    type="checkbox"
                    onChange={() => toggleSpecialty(item)}
                  />
                  {item}
                </label>
              )
            )}
          </div>

          {/* Gender */}
          <div>
            <p className="font-medium mb-2">Gender</p>
            <div className="flex gap-2">
              {["Male", "Female", "Any"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-3 py-1 rounded border ${
                    gender === g ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <p className="font-medium mb-2">Rating {rating}+</p>
            <input
              type="range"
              min="4"
              max="5"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full"
            />
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="md:col-span-3 space-y-6">

          {/* Search */}
          <div className="bg-white p-4 rounded-xl flex items-center gap-3">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              className="flex-1 outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Doctors */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} />
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function DoctorCard({ doc }) {
  const navigate = useNavigate(); // ✅ CORRECT PLACE

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm relative">
      <span className="absolute top-4 right-4 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
        {doc.availability}
      </span>

      <img
        src={doc.image}
        alt={doc.name}
        className="w-20 h-20 rounded-full object-cover mb-3"
      />

      <h4 className="font-semibold">{doc.name}</h4>
      <p className="text-blue-600 text-sm">{doc.role}</p>

      <div className="text-sm text-gray-600 mt-2 space-y-1">
        <p className="flex items-center gap-2">
          <FaBriefcase /> {doc.experience}+ Years Experience
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> {doc.location}
        </p>
        <p className="flex items-center gap-2 text-yellow-500">
          <FaStar /> {doc.rating} ({doc.reviews} Reviews)
        </p>
      </div>

       <button
        onClick={() => navigate(`/book/${doc.id}`)}  // ✅ PASS ID
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        View Schedule →
      </button>
    </div>
  );
}

