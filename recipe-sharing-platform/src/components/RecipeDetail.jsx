import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {

   
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json") // Make sure data.json is in public folder
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find(
          (item) => item.id === parseInt(id)
        );
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-10">
        
        {/* Back Button */}
        <Link
          to="/"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Recipes
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {recipe.title}
        </h1>

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
        />

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Instructions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
