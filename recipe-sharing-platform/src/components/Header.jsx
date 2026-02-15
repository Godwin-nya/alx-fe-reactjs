import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-md relative text-gray-600 p-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        {/* Left Navigation */}
        <nav className="space-x-6 hidden md:block">
          <Link
            to="/"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            Recipes
          </Link>
        </nav>

        {/* Right Navigation */}
        <nav className="space-x-6 hidden md:block">
          <Link
            to="/"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Centered Logo (Independent from Nav Container) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Link
          to="/"
          className="text-2xl font-bold text-white-800 pointer-events-auto"
        >
          🍽️ RecipeApp
        </Link>
      </div>
    </header>
  );
};

export default Header;
