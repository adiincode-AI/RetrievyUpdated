import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const response = await api.post("/login", formData);

      const token = response.data.access_token;

      if (!token) {
        alert("Invalid credentials");
        return;
      }

      localStorage.setItem("token", token);

      alert("Login successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Login failed");

    }

  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6">

      <div className="card p-8 max-w-md w-full">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-[#0F172A] mb-2">
            Welcome Back
          </h1>

          <p className="text-[#475569]">
            Login to continue using Retrievy.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

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
            Login
          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-[#475569]">
            Don’t have an account?{' '}

            <Link
              to="/register"
              className="text-[#2563EB] font-semibold hover:text-[#1D4ED8] transition"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;