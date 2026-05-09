import { useState } from "react";
import api from "../api";

function ReportItem() {
  const [formData, setFormData] = useState({
    title: "",
    status: "Lost",
    location: "",
    contact_details: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await api.post("/items", formData);

      alert("Item submitted successfully!");

      setFormData({
        title: "",
        status: "Lost",
        location: "",
        contact_details: "",
        description: ""
      });

    } catch (err) {
      console.log(err);
      alert("Failed to submit item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F5EF] p-6">

      <div className="max-w-3xl mx-auto bg-white border border-[#637C80] rounded-3xl p-8 shadow-sm">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-black text-[#121011] mb-3">
            Report Item
          </h1>

          <p className="text-[#637C80] text-lg">
            Submit details about a lost or found item.
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-5">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            placeholder="Item Name"
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            type="text"
            placeholder="Location"
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          <input
            name="contact_details"
            value={formData.contact_details}
            onChange={handleChange}
            type="text"
            placeholder="Phone / Email"
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Description"
            className="w-full bg-[#F4F5EF] border border-[#637C80] text-[#121011] rounded-2xl p-4 resize-none outline-none focus:ring-2 focus:ring-[#203972] transition"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#203972] hover:bg-[#E56A3B] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default ReportItem;