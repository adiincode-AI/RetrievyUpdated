import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { jwtDecode } from "jwt-decode";

function Navbar() {

  const token = localStorage.getItem("token");

  let username = "";

  if (token) {

    const decoded = jwtDecode(token);

    username = decoded.username;

  }

  return (

    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="Retrievy Logo"
            className="w-12 h-12 object-contain"
          />

          <div>

            <h1 className="text-xl font-bold text-[#0F172A]">
              Retrievy
            </h1>

            <p className="text-xs text-[#475569]">
              Lost & Found Platform
            </p>

          </div>

        </Link>

        {/* NAVIGATION */}
        <div className="flex items-center gap-6 text-sm md:text-base">

          <Link
            to="/"
            className="text-[#475569] hover:text-[#2563EB] transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/browse"
            className="text-[#475569] hover:text-[#2563EB] transition font-medium"
          >
            Browse
          </Link>

          <Link
            to="/report"
            className="text-[#475569] hover:text-[#2563EB] transition font-medium"
          >
            Report
          </Link>

          <Link
            to="/about"
            className="text-[#475569] hover:text-[#2563EB] transition font-medium"
          >
            About
          </Link>

          {token ? (

            <div className="flex items-center gap-4">

              <span className="text-[#0F172A] font-semibold">
                {username}
              </span>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                className="btn-secondary px-5 py-2"
              >
                Logout
              </button>

            </div>

          ) : (

            <Link
              to="/login"
              className="btn-primary px-5 py-2"
            >
              Login
            </Link>

          )}

        </div>

      </div>

    </nav>

  );
}

export default Navbar;