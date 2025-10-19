import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import Dashboard from "@/pages/Dashboard";

function AppRoutes() {
  // Check if user is logged in by seeing if token exists
  const isLoggedIn = !!localStorage.getItem("access_token");

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Protected Dashboard route */}
      <Route 
        path="/dashboard" 
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
      />
      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
