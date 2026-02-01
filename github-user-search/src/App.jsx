import{Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./components/Search";


function App() {    
  return (
    <div className="app-container">
      <header>
        <h1  className="text-3xl font-bold underline">GitHub User Finder</h1>
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
