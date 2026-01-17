import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import UserContext from "./components/UserContext";
import "./App.css";

function App() {
  const userData = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography",
  };
  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <WelcomeMessage />
        <UserProfile />
        <MainContent />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
