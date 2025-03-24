import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookConsultation from "./pages/BookConsultation";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";

import AboutUs from "./pages/AboutUs";

import ContactUs from "./pages/ContactUs";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
