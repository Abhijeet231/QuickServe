import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateCategoryForm from "@/components/admin/CreateCategoryForm.jsx";
import CreateServiceForm from "@/components/admin/CreateServiceForm.jsx";
import { ArrowLeft, LayoutGrid } from "lucide-react";

const CategoryManager = () => {
  const [createdCategory, setCreatedCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page header */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 transition"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Category Manager</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Create a category, then add services under it
          </p>
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center">
            1
          </span>
          <span className="text-sm font-medium text-gray-700">Create Category</span>
        </div>
        <div className={`h-px w-8 ${createdCategory ? "bg-amber-400" : "bg-gray-200"} transition-colors`} />
        <div className="flex items-center gap-2">
          <span
            className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
              createdCategory
                ? "bg-amber-500 text-white"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            2
          </span>
          <span
            className={`text-sm font-medium transition-colors ${
              createdCategory ? "text-gray-700" : "text-gray-400"
            }`}
          >
            Add Service
          </span>
        </div>
      </div>

      {/* Forms side by side */}
      <div className="flex gap-6 items-start">
        <div className="w-[40%] shrink-0">
          <CreateCategoryForm onCreated={setCreatedCategory} />

          {/* After category created, show a "created" confirmation */}
          {createdCategory && (
            <div className="mt-3 flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5">
              <LayoutGrid size={14} className="text-green-500" />
              <p className="text-xs text-green-700">
                <span className="font-semibold capitalize">{createdCategory.name}</span>{" "}
                created — now add services →
              </p>
            </div>
          )}
        </div>

        {/* Service form only appears after category is created */}
        <div className="flex-1 min-w-0">
          {createdCategory ? (
            <CreateServiceForm
              categoryId={createdCategory._id}
              categoryName={createdCategory.name}
            />
          ) : (
            // Placeholder so layout doesn't collapse before step 2
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 h-48 flex items-center justify-center">
              <p className="text-sm text-gray-300">
                Create a category first to add services
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;