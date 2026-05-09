function MyItems() {
  return (
    <div className="min-h-screen bg-[#F4F5EF] p-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">

          <h1 className="text-5xl font-black text-[#121011] mb-3">
            My Reports
          </h1>

          <p className="text-[#637C80] text-lg">
            Manage your reported lost and found items.
          </p>

        </div>

        {/* ITEMS GRID */}
        <div className="grid gap-6">

          {/* ITEM CARD */}
          <div className="bg-white border border-[#637C80] rounded-3xl p-6 shadow-sm transition hover:scale-[1.01]">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* LEFT */}
              <div>

                <div className="flex items-center gap-3 mb-3">

                  <h2 className="text-2xl font-bold text-[#121011]">
                    Black Wallet
                  </h2>

                  <span className="bg-[#203972] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Lost
                  </span>

                </div>

                <p className="text-[#637C80] mb-2">
                  📍 Railway Station
                </p>

                <p className="text-[#121011] text-sm">
                  Reported 2 days ago
                </p>

              </div>

              {/* RIGHT */}
              <div className="flex gap-3">

                <button className="bg-white border border-[#637C80] hover:bg-[#F4F5EF] transition px-5 py-2 rounded-xl text-[#121011] font-medium">

                  Edit

                </button>

                <button className="bg-[#203972] hover:bg-[#E56A3B] transition px-5 py-2 rounded-xl text-white font-medium">

                  Delete

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyItems;