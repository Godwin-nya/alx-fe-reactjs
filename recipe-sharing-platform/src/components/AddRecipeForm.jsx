import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //validation
  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = formData.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Please enter at least two ingredients separated by commas.";
      }
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = "Preparation steps are required.";
    }

    return newErrors;
  };



  // Handle submit
 const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {

    const ingredientList = formData.ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    const newRecipe = {
      id: Date.now(),
      title: formData.title,
      summary: formData.title, // required for HomePage
      image: "/images/default.jpg", // MUST exist
      ingredients: ingredientList, 
      instructions: formData.instructions
    };

    const existingRecipes =
      JSON.parse(localStorage.getItem("recipes")) || [];

    localStorage.setItem(
      "recipes",
      JSON.stringify([...existingRecipes, newRecipe])
    );

    navigate("/");
  }
};


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Add New Recipe</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium mb-2">Recipe Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-2">
              Ingredients (separate with commas)
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. Rice, Chicken, Pepper"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className="block font-medium mb-2">Preparation Steps</label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="5"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Describe the cooking steps..."
            />
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
