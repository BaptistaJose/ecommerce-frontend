"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { isAuthenticated, removeToken } from "@/utils/auth";
import { removeAuthCookie } from "@/utils/cookies";

type AuthContextType = {
  logged: boolean
  user: any
  login: () => void
  logout: () => void
  setUser: (userData: any) => void
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setLogged(isAuthenticated());
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = () => {
    setLogged(true);
  };

  const logout = () => {
    removeToken();
    removeAuthCookie();
    setUser(null);
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, user, login, logout, setUser }}>
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