import { useState } from "react";
import useRecipeStore from "../store/useRecipeStore";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateRecipe(recipe.id, { title, description });

    navigate("/");
  };

  return (
    <form>
      <h3>Edit Recipe</h3>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
