import { useEffect, useState } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          🍽️ Recipe Collection
        </h1>

        {/* Grid Layout */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden 
                         transition transform hover:scale-101 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-44 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {recipe.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
