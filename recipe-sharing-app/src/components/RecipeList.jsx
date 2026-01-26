import useRecipeStore from "../store/useRecipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length ? state.filteredRecipes : state.recipes,
  );

  const favorites = useRecipeStore((state) => state.favorites);

  const addFavorite = useRecipeStore((state) => state.addFavorite);

  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Recipes</h2>

      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>

            <p>{recipe.description}</p>

            {isFavorite ? (
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove Favorite
              </button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)}>
                Add to Favorites
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
