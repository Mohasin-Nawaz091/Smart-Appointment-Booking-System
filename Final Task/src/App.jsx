import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FindDoctors from "./pages/FindDoctors";
import BookAppointment from "./pages/BookAppointment";
import MySchedule from "./pages/MySchedule";
import AdminBookings from "./pages/Adminbookings";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/doctors" element={<FindDoctors />} />
  <Route path="/book" element={<BookAppointment />} />
  <Route path="/book/:id" element={<BookAppointment />} />
  <Route path="/my-schedule" element={<MySchedule />} />
  
<Route path="/admin" element={<AdminBookings />} />
  
</Routes>


      <Footer />
    </>
  );
}

export default App;
