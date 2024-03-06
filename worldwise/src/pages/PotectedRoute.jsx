import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FeakAuthContext";
import { useEffect } from "react";

export default function PotectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return children;
}
