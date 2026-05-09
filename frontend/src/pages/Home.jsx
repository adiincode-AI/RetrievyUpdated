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
    <div className="min-h-screen bg-[#F4F5EF]">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="flex items-center gap-4 mb-8">

              <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 object-contain"
              />

              <div>
                <h1 className="text-4xl font-bold text-[#121011]">
                  Retrievy
                </h1>

                <p className="text-[#637C80]">
                  Smart Lost & Found Platform
                </p>
              </div>

            </div>

            <h2 className="text-6xl font-black leading-tight mb-6 text-[#121011]">
              Lost Something?
              <br />
              <span className="text-[#E56A3B]">Find It Faster.</span>
            </h2>

            <p className="text-[#637C80] text-lg leading-relaxed mb-10 max-w-xl">
              Report lost items, browse found belongings,
              and reconnect people with what matters most.
            </p>

            <div className="flex gap-4">

              <Link
                to="/report"
                className="bg-[#203972] hover:bg-[#E56A3B] text-white transition px-8 py-4 rounded-2xl font-semibold shadow-lg"
              >
                Report Item
              </Link>

              <Link
                to="/browse"
                className="border border-[#637C80] hover:bg-white text-[#121011] transition px-8 py-4 rounded-2xl font-semibold"
              >
                Browse Items
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE - RECENT ITEMS */}
          <div className="bg-white border border-[#637C80] rounded-3xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold text-[#121011] mb-6">
              Recent Posts
            </h3>

            <div className="space-y-6">

              {items.length === 0 ? (
                <p className="text-[#637C80]">
                  No recent items yet.
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F4F5EF] rounded-2xl p-5 border border-[#637C80]"
                  >

                    <div className="flex justify-between mb-3">

                      <h3 className="font-bold text-lg text-[#121011]">
                        {item.title}
                      </h3>

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                          item.status === "Lost"
                            ? "bg-[#92483A]"
                            : "bg-[#203972]"
                        }`}
                      >
                        {item.status}
                      </span>

                    </div>

                    <p className="text-[#637C80] text-sm mb-2">
                      📍 {item.location}
                    </p>

                    <p className="text-[#121011] text-sm">
                      {item.description}
                    </p>

                  </div>
                ))
              )}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;