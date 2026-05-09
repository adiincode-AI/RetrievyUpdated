import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#F4F5EF] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white border border-[#637C80] rounded-3xl p-8 shadow-sm">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-4xl font-black text-[#121011] mb-2">
            Welcome Back
          </h1>

          <p className="text-[#637C80]">
            Login to continue using Retrievy.
          </p>

        </div>

        {/* FORM */}
        <div className="space-y-5">

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          {/* BUTTON */}
          <button className="w-full bg-[#203972] hover:bg-[#E56A3B] text-white transition rounded-2xl py-4 font-semibold shadow-lg">

            Login

          </button>

        </div>

        {/* FOOTER */}
        <div className="mt-8 text-center">

          <p className="text-[#637C80]">

            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-[#203972] font-semibold hover:text-[#E56A3B] transition"
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