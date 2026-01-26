import useRecipeStore from "../store/useRecipeStore";

const FavoritesList = () => {
  // Select raw pieces of state (stable)
  const favoritesIds = useRecipeStore((state) => state.favorites);

  const recipes = useRecipeStore((state) => state.recipes);

  // Derive favorites OUTSIDE the store selector
  const favoriteRecipes = favoritesIds
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>

      {favoriteRecipes.length === 0 && <p>No favorites yet.</p>}

      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
