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
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">

      <div className="card p-8 max-w-md w-full">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-[#0F172A] mb-2">
            Create Account
          </h1>

          <p className="text-[#475569]">
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
            className="input-modern"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-modern"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-modern"
          />

          <button className="btn-primary w-full py-4">
            Create Account
          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-[#475569]">
            Already have an account?{' '}

            <Link
              to="/login"
              className="text-[#2563EB] font-semibold hover:text-[#1D4ED8] transition"
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