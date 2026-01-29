import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { doctors } from "../data/doctors";
import { getBookings, saveBookings } from "../utils/storage";

const TIME_SLOTS = {
  morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"],
  afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  evening: ["05:00 PM", "05:30 PM"],
};

export default function BookAppointment() {
  // ✅ get id first
  const { id } = useParams();

  // ✅ then find doctor
  const doctor = doctors.find((d) => d.id === Number(id));

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  // ✅ safety check
  if (!doctor) {
    return <div className="p-10">Doctor not found</div>;
  }

  const isSlotBooked = (time) => {
    return bookings.some(
      (b) =>
        b.doctorId === doctor.id &&
        b.date === date &&
        b.time === time &&
        b.status !== "Cancelled"
    );
  };

  const handleBooking = () => {
    if (!date || !slot || !name || !email) {
      alert("Please complete all fields");
      return;
    }

    const newBooking = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      date,
      time: slot,
      patientName: name,
      email,
      status: "Pending",
      fee: doctor.fee || 120,
    };

    const updated = [...bookings, newBooking];
    saveBookings(updated);
    setBookings(updated);

    alert("Appointment Booked Successfully!");
    setSlot("");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* ================= LEFT: DOCTOR CARD ================= */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-xl mx-auto mb-4 object-cover"
          />

          <h3 className="text-xl font-semibold text-center">
            {doctor.name}
          </h3>
          <p className="text-blue-600 text-center">
            {doctor.specialization}
          </p>
          <p className="text-center text-sm text-gray-500 mt-1">
            {doctor.experience}
          </p>

          <div className="mt-4 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-500" /> {doctor.rating}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> {doctor.location}
            </p>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="md:col-span-2 space-y-6">
          {/* -------- SELECT DATE -------- */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3">1. Select Date</h4>
            <input
              type="date"
              className="border px-4 py-2 rounded-lg"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* -------- SELECT SLOT -------- */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <FaClock /> 2. Select Time Slot
            </h4>

            {Object.entries(TIME_SLOTS).map(([label, slots]) => (
              <div key={label} className="mb-4">
                <p className="uppercase text-xs text-gray-500 mb-2">
                  {label} slots
                </p>

                <div className="flex flex-wrap gap-3">
                  {slots.map((time) => {
                    const booked = isSlotBooked(time);
                    return (
                      <button
                        key={time}
                        disabled={booked}
                        onClick={() => setSlot(time)}
                        className={`px-4 py-2 rounded-lg border text-sm
                          ${slot === time ? "bg-blue-600 text-white" : ""}
                          ${booked ? "opacity-40 cursor-not-allowed" : ""}
                        `}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* -------- PATIENT INFO -------- */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-4">3. Patient Information</h4>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Full Name"
                className="border px-4 py-2 rounded-lg"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Email Address"
                className="border px-4 py-2 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {slot && date && (
              <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Selected Appointment
                  </p>
                  <p className="font-semibold">
                    {date} at {slot}
                  </p>
                </div>
                <p className="font-semibold text-blue-600">
                  ${doctor.fee || 120}.00
                </p>
              </div>
            )}

            <button
              onClick={handleBooking}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
