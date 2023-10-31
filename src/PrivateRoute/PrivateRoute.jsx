import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";

function PrivateRoute({ element }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
