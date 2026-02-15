const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} RecipeApp. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
