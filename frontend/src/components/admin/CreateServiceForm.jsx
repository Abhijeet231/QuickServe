import { useState } from "react";
import { createService } from "@/services/service.service.js";
import { toast } from "react-toastify";
import { Wrench, Plus, Loader2, Tag } from "lucide-react";

const CreateServiceForm = ({ categoryId, categoryName }) => {
  const [form, setForm] = useState({ name: "", description: "", basePrice: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, basePrice } = form;

    if (!name.trim() || !description.trim() || !basePrice) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);
      // categoryId goes into the URL as req.params, rest goes as req.body
      await createService(categoryId, {
        name: name.trim(),
        description: description.trim(),
        basePrice: Number(basePrice),
      });
      toast.success("Service created successfully!");
      setForm({ name: "", description: "", basePrice: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
          <Wrench size={15} className="text-amber-500" />
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 text-sm">New Service</h2>
          {/* Shows which category this service will belong to */}
          <p className="text-xs text-gray-400">
            Under{" "}
            <span className="text-amber-500 font-medium capitalize">
              {categoryName}
            </span>
          </p>
        </div>
      </div>

      {/* Category badge — visual reminder of the categoryId in use */}
      <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mb-4">
        <Tag size={12} className="text-amber-400" />
        <span className="text-xs text-amber-700 font-medium capitalize">
          {categoryName}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1.5">
            Service Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Pipe Repair"
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1.5">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            placeholder="Describe what this service includes..."
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition resize-none"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1.5">
            Base Price (₹)
          </label>
          <input
            type="number"
            name="basePrice"
            value={form.basePrice}
            onChange={handleChange}
            placeholder="e.g. 499"
            min={0}
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white text-sm font-medium rounded-xl py-2.5 flex items-center justify-center gap-2 transition"
        >
          {loading ? (
            <Loader2 size={15} className="animate-spin" />
          ) : (
            <Plus size={15} />
          )}
          {loading ? "Creating..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default CreateServiceForm;