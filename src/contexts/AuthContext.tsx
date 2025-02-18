import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  isAuthenticated: boolean;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Khởi tạo state với dữ liệu từ localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("access_token");
  });

  const login = (userData: any) => {
    setUser(userData.user);
    setIsAuthenticated(true);
    // Lưu vào localStorage
    localStorage.setItem("user", JSON.stringify(userData.user));
    localStorage.setItem("access_token", userData.access_token);
    localStorage.setItem("refresh_token", userData.refresh_token);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Xóa khỏi localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  // Giá trị context
  const value = {
    user,
    setUser,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook để sử dụng AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
