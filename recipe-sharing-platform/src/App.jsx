import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm/>}/>
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
