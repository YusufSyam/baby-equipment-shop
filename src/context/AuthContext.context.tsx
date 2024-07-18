import React, { createContext, useState, useEffect, ReactNode } from "react";
import { BASE_URL } from "../utils/const/api";
import { ILoginInput } from "../pages/login-page/Login.page";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (values: ILoginInput) => Promise<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (values: ILoginInput) => {
    const credentials = btoa(`${values.username}:${values.password}`);
    const endpoint = `${BASE_URL}/users`;
    const response = await fetch(`${endpoint}/login`, {
      method: "POST",
      headers: {
        // ...getTokenAuthorizationHeader()
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json"
      },
      mode: "cors",
      credentials: "same-origin",
      body: JSON.stringify(values)
    });
    if (response.ok) {
      const data = await response.json();
      console.log("LLLLLLLLLLLLLLLLLL", data);
      localStorage.setItem("accessToken", data?.data?.accessToken);
      setIsLoggedIn(true)
      return data.accessToken;
    } else {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
