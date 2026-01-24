import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import useRecipeStore from "./store/useRecipeStore";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Zustand Recipe App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}
export default App;
