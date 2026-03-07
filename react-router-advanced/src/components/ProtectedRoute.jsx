import { Navigate } from "react-router-dom";
import { useState, useEffect} from "react";

function ProtectedRoute({ children }) {
 const [useAuth, setUseAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth") === "true";
    setUseAuth(auth);
  }, []);


  if (!useAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;