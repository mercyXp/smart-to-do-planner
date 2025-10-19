import React, { createContext, useState, useEffect } from 'react';
import API, { setAuthToken } from '@/lib/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setAuthToken(token);
      // Optionally decode token or call /me endpoint to fetch user
      const username = localStorage.getItem('username'); // simple
      setUser({ username });
    }
  }, []);

  const login = async (username, password) => {
    const res = await API.post('token/', { username, password });
    const { access, refresh } = res.data;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    localStorage.setItem('username', username);
    setAuthToken(access);
    setUser({ username });
    return res;
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
