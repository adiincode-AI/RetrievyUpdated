import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post("/register", formData);

      alert(response.data.message);

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Registration failed");

    }

  };

  return (
    <div className="min-h-screen bg-[#F4F5EF] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white border border-[#637C80] rounded-3xl p-8 shadow-sm">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-[#121011] mb-2">
            Create Account
          </h1>

          <p className="text-[#637C80]">
            Join the Retrievy community today.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          <button className="w-full bg-[#203972] hover:bg-[#E56A3B] text-white transition rounded-2xl py-4 font-semibold shadow-lg">

            Create Account

          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-[#637C80]">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#203972] font-semibold hover:text-[#E56A3B] transition"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;