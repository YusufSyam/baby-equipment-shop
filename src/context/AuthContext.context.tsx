import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ILoginInput } from "../pages/login-page/Login.page";
import { BASE_URL } from "../utils/const/api";
import { qfFetchUserCredentials } from "../utils/query/userQuery";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (values: ILoginInput) => Promise<any>;
  logout: () => void;
  userId: string | null;
  userRole: TUserType;
  username: string | null;
  userPhoneNumber: string | null;
}

export type TUserType = null | "SELLER" | "BUYER";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { refetch } = useQuery(
    `fetch-user-info`,
    qfFetchUserCredentials,
    {
      onSuccess(data) {
        console.log('TERSUKSES REFETCH')
        setUserId(data?.data?.userId);
        setUserRole(data?.data?.role);
        setUsername(data?.data?.username);
        setUserPhoneNumber(data?.data?.phoneNumber)
      }
    }
  );

  const [userId, setUserId] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<TUserType>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState<string | null>(null)

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
      refetch()
      setIsLoggedIn(true);
      return data.accessToken;
    } else {
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUserId(null);
    setUserRole(null);
    setUsername(null);
    setUserPhoneNumber(null)
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, userId, userRole, username, userPhoneNumber }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
