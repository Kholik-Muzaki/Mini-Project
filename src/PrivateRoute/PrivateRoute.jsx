import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";

function PrivateRoute({ path, element }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return <Route path={path} element={element} />;
}

export default PrivateRoute;
