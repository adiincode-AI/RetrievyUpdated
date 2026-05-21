import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchRecentItems();
  }, []);

  const fetchRecentItems = async () => {
    try {
      const res = await api.get("/items");

      const latestItems = res.data.slice(-2).reverse();

      setItems(latestItems);
    } catch (err) {
      console.log("Error fetching items:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
    
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="Logo" className="w-20 h-16 object-contain" />

              <div>
                <h1 className="text-4xl font-bold text-[#0F172A]">Retrievy</h1>

                <p className="text-[#475569]">Smart Lost & Found Platform</p>
              </div>
            </div>

            <h2 className="text-6xl font-black leading-tight mb-6 text-[#0F172A]">
              Lost Something?
              <br />
              <span className="text-[#2563EB]">Find It Faster.</span>
            </h2>

            <p className="text-[#475569] text-lg leading-relaxed mb-10 max-w-xl">
              Report lost items, browse found belongings, and reconnect people
              with what matters most.
            </p>

            <div className="flex gap-4">
              <Link to="/report" className="btn-primary px-8 py-4">
                Report Item
              </Link>

              <Link to="/browse" className="btn-secondary px-8 py-4">
                Browse Items
              </Link>
            </div>
          </div>

       
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
              Recent Posts
            </h3>

            <div className="space-y-6">
              {items.length === 0 ? (
                <p className="text-[#475569]">No recent items yet.</p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5"
                  >
                    <div className="flex justify-between mb-3">
                      <h3 className="font-bold text-lg text-[#0F172A]">
                        {item.title}
                      </h3>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.status === "Lost" ? "badge-lost" : "badge-found"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="text-[#475569] text-sm mb-2">
                      📍 {item.location}
                    </p>

                    <p className="text-[#0F172A] text-sm">{item.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

    
      <footer className="relative overflow-hidden border-t border-[#E2E8F0] mt-24 bg-white">
       
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-12">
            {/* BRAND */}
            <div>
              <h2 className="text-3xl font-black text-[#0F172A] mb-4">
                Retrievy
              </h2>

              <p className="text-[#475569] leading-relaxed max-w-sm">
                A modern lost and found platform helping people reconnect with
                important belongings quickly, securely, and efficiently.
              </p>
            </div>

          
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-5">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3">
                <Link
                  to="/browse"
                  className="text-[#475569] hover:text-[#2563EB] transition"
                >
                  Browse Items
                </Link>

                <Link
                  to="/report"
                  className="text-[#475569] hover:text-[#2563EB] transition"
                >
                  Report Item
                </Link>

                <Link
                  to="/about"
                  className="text-[#475569] hover:text-[#2563EB] transition"
                >
                  About
                </Link>
              </div>
            </div>

           
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-5">
                Connect
              </h3>

              <div className="flex items-center gap-4">
             
                <a
                  href="https://github.com/adiincode-AI/RetrievyUpdated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#0F172A]"
                  >
                    <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.39-3.88-1.39-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.2 1.76 1.2 1.03 1.78 2.7 1.27 3.36.97.1-.76.4-1.27.72-1.56-2.55-.29-5.23-1.29-5.23-5.74 0-1.27.45-2.3 1.19-3.11-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.19 1.19a11.1 11.1 0 0 1 5.8 0c2.21-1.5 3.18-1.19 3.18-1.19.64 1.62.24 2.82.12 3.12.74.81 1.18 1.84 1.18 3.11 0 4.46-2.69 5.45-5.25 5.73.41.36.77 1.08.77 2.18v3.23c0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
                  </svg>
                </a>

             
                <a
                  href="https://www.linkedin.com/in/adityar-backend/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#0F172A]"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.53-1 1.84-2.2 3.8-2.2 4.07 0 4.8 2.68 4.8 6.17V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.38 0-2.75 1.85-2.75 3.76V24h-4V8z" />
                  </svg>
                </a>

                
                <a
                  href="https://x.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#0F172A]"
                  >
                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.5 22H3.4l7.3-8.4L1 2h6.3l4.3 5.7L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E2E8F0] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#64748B]">
              © 2026 Retrievy. All rights reserved.
            </p>

            <p className="text-sm text-[#64748B]">
              Designed with a modern SaaS UI system.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
