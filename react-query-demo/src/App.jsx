import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./components/PostsComponent";

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/posts">Posts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsComponent />} />
      </Routes>
    </Router>
  );
}
 import { QueryClient, QueryClientProvider } from 'react-query';

  const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    );
  }
export default App;