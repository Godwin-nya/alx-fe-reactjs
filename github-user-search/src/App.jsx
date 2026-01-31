import{Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
    
  return (
    <div className="app-container">
      <header>
        <h1>GitHub User Finder</h1>
        <p>Project setup complete </p>
      </header>

      {/* Main_contents */}
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
