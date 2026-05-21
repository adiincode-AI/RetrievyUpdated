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
    <div className="min-h-screen bg-[#F8FAFC] p-6">

      <div className="max-w-3xl mx-auto card p-8">

        <div className="mb-10">
          <h1 className="text-5xl font-black text-[#0F172A] mb-3">
            Report Item
          </h1>

          <p className="text-[#475569] text-lg">
            Submit details about a lost or found item.
          </p>
        </div>

        <div className="space-y-5">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            placeholder="Item Name"
            className="input-modern"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="input-modern"
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
            className="input-modern"
          />

          <input
            name="contact_details"
            value={formData.contact_details}
            onChange={handleChange}
            type="text"
            placeholder="Phone / Email"
            className="input-modern"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Description"
            className="input-modern resize-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="btn-primary w-full py-4 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default ReportItem;
