import React, { createContext, useState, useEffect } from "react";
import api, { setAuthToken } from "@/lib/api"; // ensure api points to baseURL '/api/'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on initial mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAuthToken(token);
      fetchCurrentUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCurrentUser = async (token) => {
    try {
      // Call your /me endpoint or user details endpoint
      const res = await api.get("auth/me/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data); // set user data
    } catch (err) {
      console.error("Failed to fetch user:", err);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const res = await api.post("auth/token/", { email, password });
    const { access, refresh } = res.data;

    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    setAuthToken(access);

    await fetchCurrentUser(access); // set user from backend
    return res;
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
