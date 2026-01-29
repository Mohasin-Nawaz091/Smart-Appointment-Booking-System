import { useEffect, useState } from "react";
import { getBookings, saveBookings } from "../utils/storage";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const updateStatus = (id, status) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status } : b
    );
    setBookings(updated);
    saveBookings(updated);
  };

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  return (
    <div className="bg-gray-50 min-h-screen flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6">
        <h2 className="text-xl font-bold mb-8">HealthAdmin</h2>
        <nav className="space-y-3">
          <p className="font-medium text-blue-600">Appointments</p>
          <p className="text-gray-500">Schedule</p>
          <p className="text-gray-500">Patients</p>
          <p className="text-gray-500">Settings</p>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Booking Management</h1>
            <p className="text-sm text-gray-500">
              Manage and monitor patient consultation schedules
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            + New Appointment
          </button>
        </div>

        {/* FILTER TABS */}
        <div className="flex gap-6 border-b mb-6">
          {["All", "Pending", "Approved", "Cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`pb-2 ${
                filter === tab
                  ? "border-b-2 border-blue-600 font-medium"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-4">Patient Name</th>
                <th className="p-4">Doctor</th>
                <th className="p-4">Date</th>
                <th className="p-4">Time</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="p-4">{b.patientName}</td>
                  <td className="p-4">{b.doctorName}</td>
                  <td className="p-4">{b.date}</td>
                  <td className="p-4">{b.time}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs
                        ${
                          b.status === "Approved"
                            ? "bg-green-100 text-green-600"
                            : b.status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="p-4 space-x-2">
                    {b.status === "Pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(b.id, "Approved")}
                          className="text-green-600 text-xs"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateStatus(b.id, "Cancelled")}
                          className="text-red-600 text-xs"
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBookings.length === 0 && (
            <p className="p-6 text-gray-500">No bookings found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
