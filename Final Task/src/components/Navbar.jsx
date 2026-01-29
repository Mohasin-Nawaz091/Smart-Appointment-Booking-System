import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://image.similarpng.com/file/similarpng/original-picture/2022/01/Medical-health-logo-design-on-transparent-background-PNG.png"
              alt="HealthSync"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-lg">HealthSync</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/doctors" className="hover:text-blue-600">Find Doctors</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            <Link to="/my-schedule" className="hover:text-blue-600">
              My Schedule
            </Link>
            <Link to="/admin" className="text-red-600">
              Admin
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm font-medium">Login</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59KNEQCQL-ockgQqq0V_4XqO17c8_BLnw-g&s"
              alt="HealthSync"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-lg">HealthSync</span>
          </div>
          <button onClick={() => setOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-5 p-6 text-gray-700 font-medium">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/doctors">Find Doctors</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          <Link onClick={() => setOpen(false)} to="/my-schedule">
            My Schedule
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/admin"
            className="text-red-600"
          >
            Admin
          </Link>
        </div>

        {/* Drawer Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t flex gap-3">
          <button className="w-full py-2 border rounded-md">Login</button>
          <button className="w-full py-2 bg-blue-600 text-white rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
