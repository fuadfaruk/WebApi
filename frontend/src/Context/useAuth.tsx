import { createContext, useEffect, useState, useCallback } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email:string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean
}

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Logout function wrapped in useCallback to prevent unnecessary recreations
  const performLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tokenExpiry");
    setUser(null);
    setToken(null);
    delete axios.defaults.headers.common["Authorization"];
    navigate("/login");
    toast.warning("Your session has expired. Please log in again.");
  }, [navigate]);

  // Setup axios interceptor for 401 responses
  useEffect(() => {
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          performLogout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [performLogout]);

  // Initialize auth from localStorage and set up token validation
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    
    if(user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string, 
    username: string, 
    password: string
  ) => {
    try {
      const res = await registerAPI(email, username, password);
      if(res) {
        localStorage.setItem("token", res?.data.token);
        const userObj = {
          userName: res?.data.userName,
          email:res?.data.email
        }
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res?.data.token!);
        setUser(userObj);
        axios.defaults.headers.common["Authorization"] = "Bearer " + res?.data.token;
        toast.success("Account created successfully!");
        navigate("/search");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
    }
  };

  const loginUser = async (
    username: string, 
    password: string
  ) => {
    try {
      const res = await loginAPI(username, password);
      if(res) {
        localStorage.setItem("token", res?.data.token);
        const userObj = {
          userName: res?.data.userName,
          email:res?.data.email
        }
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(res?.data.token!);
        setUser(userObj);
        axios.defaults.headers.common["Authorization"] = "Bearer " + res?.data.token;
        toast.success("Logged in successfully!");
        navigate("/search");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Invalid username or password";
      toast.error(errorMessage);
    }
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    performLogout();
    toast.success("Logged out successfully!");
  };

  return (
    <UserContext.Provider value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);