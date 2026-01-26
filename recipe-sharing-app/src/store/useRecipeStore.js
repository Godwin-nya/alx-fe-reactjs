import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

   favorites: [],

   addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  // Remove recipe ID from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

    
    recommendations: [],

  // pick some non-favorite recipes randomly
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5
    );

    set({ recommendations: recommended });
  },

   // SEARCH + FILTER STATE
  searchTerm: "",

  // Update search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // Automatically run filtering whenever the term changes
    get().filterRecipes();
  },

  filteredRecipes: [],

  // Filter recipes by title (can be extended later)
  filterRecipes: () => {
    const { recipes, searchTerm } = get();

    const filtered = recipes.filter((recipe) =>
      recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    set({ filteredRecipes: filtered });
  },


  // ADD
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // DELETE
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // UPDATE
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}));
  


export default useRecipeStore;
