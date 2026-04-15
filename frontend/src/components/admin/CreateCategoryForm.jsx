import { useState } from "react";
import { createCategory } from "@/services/category.service.js";
import { toast } from "react-toastify";
import { Tag, Plus, Loader2 } from "lucide-react";

const CreateCategoryForm = ({ onCreated }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Category name is required");

    try {
      setLoading(true);
      const res = await createCategory({ name: name.trim() });
      const category = res.data?.data;
      toast.success("Category created successfully!");
      onCreated(category); // ← passes { _id, name, ... } up to CategoryManager
      setName("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
          <Tag size={15} className="text-amber-500" />
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 text-sm">New Category</h2>
          <p className="text-xs text-gray-400">Create a service category</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1.5">
            Category Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Plumbing, Electrical..."
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
          {loading ? "Creating..." : "Create Category"}
        </button>
      </form>
    </div>
  );
};

export default CreateCategoryForm;