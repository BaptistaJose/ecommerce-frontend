"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { isAuthenticated, removeToken } from "@/utils/auth";

type AuthContextType = {
    logged: boolean;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogged(isAuthenticated());
  }, []);

  const login = () => {
    setLogged(true);
  };

  const logout = () => {
    removeToken();
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider")
  }

  return context
}