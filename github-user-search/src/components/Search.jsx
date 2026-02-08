import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e) => {
    e.preventDefault();

    setPage(1);
    setUsers([]);
    fetchUsers(1);
  };

  const fetchUsers = async (pageNum) => {
  setLoading(true);
  setError("");

  try {
    const data = await searchUsers({
      query,
      location,
      minRepos,
      page: pageNum,
    });

    const detailedUsers = await Promise.all(
      data.items.map((user) =>
        fetchUserData(user.login)
      )
    );

    setUsers((prev) =>
      pageNum === 1 ? detailedUsers : [...prev, ...detailedUsers]
    );
  } catch {
    setError("Looks like we cant find the user");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <form
        onSubmit={handleSearch}
        className="grid gap-4 md:grid-cols-3"
      >
        <input
          className="border p-2 rounded focus:ring w-full"
          placeholder="Username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          className="border p-2 rounded focus:ring w-full"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          className="border p-2 rounded focus:ring w-full"
          placeholder="Min repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="md:col-span-3 bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4 text-center">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {users.length > 0 && !loading && (
        <button
          onClick={() => {
            const next = page + 1;
            setPage(next);
            fetchUsers(next);
          }}
          className="mt-6 w-full border py-2 rounded hover:bg-gray-100"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
