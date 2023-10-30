// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Membaca status login dari localStorage saat komponen dimuat
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const login = () => {
    setIsLoggedIn(true);
    // Menyimpan status login ke localStorage saat login berhasil
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    // Menghapus status login dari localStorage saat logout
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

