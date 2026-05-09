import { useEffect, useState } from "react";
import api from "../api";

function BrowseItems() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);

  useEffect(() => {
    fetchItems(filter);
  }, [filter]);

  const fetchItems = async (type = "All") => {

    try {

      setLoading(true);

      let url = "/items";

      if (type !== "All") {
        url = `/items/${type}`;
      }

      const response = await api.get(url);

      setItems(response.data);

    } catch (err) {

      console.log(err);

      setError("Failed to fetch items");

    } finally {

      setLoading(false);

    }

  };

 const handleMatchSearch = async () => {
  try {
    const response = await api.get(
      `/retrievy-match?query=${search}`
    );

    setMatches(response.data);
    setShowMatches(true); 

  } catch (error) {
    console.log(error);
  }
};

  if (loading) {

    return (
      <div className="text-center mt-20 text-2xl font-bold text-[#121011]">
        Loading...
      </div>
    );

  }

  if (error) {

    return (
      <div className="text-center mt-20 text-red-500 text-2xl font-bold">
        {error}
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-[#F4F5EF] p-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">

          <h1 className="text-5xl font-black text-[#121011] mb-3">
            Browse Items
          </h1>

          <p className="text-[#637C80] text-lg">
            Explore recently reported lost and found items.
          </p>

        </div>

        {/* SEARCH BAR */}
        <div className="flex gap-4 mb-8">

          <input
            type="text"
            placeholder="Search lost or found items..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowMatches(false);
            }}
            className="flex-1 p-4 rounded-2xl border border-[#637C80] outline-none"
          />

          <button
            onClick={handleMatchSearch}
            className="bg-[#203972] hover:bg-[#E56A3B] text-white px-6 rounded-2xl transition"
          >
            Retrievy Match
          </button>

        </div>

        {/* MATCH RESULTS */}
        {showMatches && matches.length > 0 && (

          <div className="mb-12">

            <h2 className="text-3xl font-bold mb-6 text-[#121011]">
              Matching Results
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {matches.map((item) => (

                <div
                  key={item.id}
                  className="bg-white border border-[#637C80] rounded-3xl p-6"
                >

                  <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold text-[#121011]">
                      {item.title}
                    </h2>

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${
                        item.status === "Lost"
                          ? "bg-[#92483A]"
                          : "bg-[#203972]"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <p className="text-[#637C80] mb-4">
                    📍 {item.location}
                  </p>

                  <p className="text-[#121011] text-sm">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* FILTER BUTTONS */}
        <div className="flex gap-4 mb-8">

          <button
            onClick={() => setFilter("All")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === "All"
                ? "bg-[#203972] text-white"
                : "bg-white text-[#121011] border border-[#637C80]"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Lost")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === "Lost"
                ? "bg-[#203972] text-white"
                : "bg-white text-[#121011] border border-[#637C80]"
            }`}
          >
            Lost
          </button>

          <button
            onClick={() => setFilter("Found")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === "Found"
                ? "bg-[#203972] text-white"
                : "bg-white text-[#121011] border border-[#637C80]"
            }`}
          >
            Found
          </button>

        </div>

        {/* ITEMS GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {items.map((item) => (

            <div
              key={item.id}
              className="bg-white border border-[#637C80] rounded-3xl p-6 shadow-sm transition hover:scale-[1.02]"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold text-[#121011]">
                  {item.title}
                </h2>

                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${
                    item.status === "Lost"
                      ? "bg-[#92483A]"
                      : "bg-[#203972]"
                  }`}
                >
                  {item.status}
                </span>

              </div>

              <p className="text-[#637C80] mb-4">
                📍 {item.location}
              </p>

              <p className="text-[#121011] text-sm">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default BrowseItems;