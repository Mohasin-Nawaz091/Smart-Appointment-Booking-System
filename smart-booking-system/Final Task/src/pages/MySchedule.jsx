import { useEffect, useState } from "react";
import { getBookings, saveBookings } from "../utils/storage";
import { FaCalendarAlt, FaTimes, FaVideo } from "react-icons/fa";

export default function MySchedule() {
  const [bookings, setBookings] = useState([]);
  const [tab, setTab] = useState("upcoming");

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const upcoming = bookings.filter(
    (b) => b.date >= today && b.status !== "Cancelled"
  );

  const past = bookings.filter(
    (b) => b.date < today || b.status === "Cancelled"
  );

  const cancelBooking = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" } : b
    );
    setBookings(updated);
    saveBookings(updated);
  };

  const list = tab === "upcoming" ? upcoming : past;

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">My Schedule</h2>
            <p className="text-sm text-gray-500">
              You have {upcoming.length} upcoming appointments
            </p>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            + Book New Appointment
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-6 border-b mb-6">
          <button
            onClick={() => setTab("upcoming")}
            className={`pb-2 ${
              tab === "upcoming"
                ? "border-b-2 border-blue-600 font-medium"
                : ""
            }`}
          >
            Upcoming ({upcoming.length})
          </button>

          <button
            onClick={() => setTab("past")}
            className={`pb-2 ${
              tab === "past"
                ? "border-b-2 border-blue-600 font-medium"
                : ""
            }`}
          >
            Past Appointments
          </button>
        </div>

        {/* APPOINTMENT LIST */}
        <div className="space-y-6">
          {list.length === 0 && (
            <p className="text-gray-500">No appointments found.</p>
          )}

          {list.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl p-6 flex justify-between items-center"
            >
              {/* LEFT */}
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full mb-2 inline-block
                    ${
                      b.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : b.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                >
                  {b.status === "Approved" ? "CONFIRMED" : b.status.toUpperCase()}
                </span>

                <h4 className="font-semibold text-lg">{b.doctorName}</h4>
                <p className="text-sm text-gray-500">
                  {b.date} • {b.time}
                </p>

                <div className="flex gap-3 mt-3">
                  {b.status !== "Cancelled" && tab === "upcoming" && (
                    <>
                      <button className="flex items-center gap-2 px-3 py-1 border rounded-lg text-sm">
                        <FaCalendarAlt /> Reschedule
                      </button>

                      <button
                        onClick={() => cancelBooking(b.id)}
                        className="flex items-center gap-2 px-3 py-1 border border-red-500 text-red-500 rounded-lg text-sm"
                      >
                        <FaTimes /> Cancel
                      </button>
                    </>
                  )}

                  {b.doctorName.toLowerCase().includes("online") && (
                    <button className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                      <FaVideo /> Join Consultation
                    </button>
                  )}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <img
                src="https://picsum.photos/200/200?medical"
                className="w-28 h-28 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
