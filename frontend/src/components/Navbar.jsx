import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#1E2737] text-white sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Retrievy Logo"
            className="w-12 h-12 object-contain"
          />

          <div>

            <h1 className="text-xl font-bold text-white">
              Retrievy
            </h1>

            <p className="text-xs text-[#9B9F98]">
              Lost & Found Platform
            </p>

          </div>

        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-sm md:text-base">

          <Link
            to="/"
            className="text-[#F4F5EF] hover:text-[#E56A3B] transition"
          >
            Home
          </Link>

          <Link
            to="/browse"
            className="text-[#F4F5EF] hover:text-[#E56A3B] transition"
          >
            Browse
          </Link>

          <Link
            to="/report"
            className="text-[#F4F5EF] hover:text-[#E56A3B] transition"
          >
            Report
          </Link>

          <Link
            to="/my-items"
            className="text-[#F4F5EF] hover:text-[#E56A3B] transition"
          >
            My Items
          </Link>

          <Link
            to="/login"
            className="bg-[#203972] hover:bg-[#E56A3B] text-white px-5 py-2 rounded-xl transition font-medium"
          >
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;