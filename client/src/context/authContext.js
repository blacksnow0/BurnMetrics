import { createContext, useEffect, useReducer, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const authContextReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authContextReducer, {
    user: null,
  });

  const [isAuthReady, setIsAuthReady] = useState(false);

  // Check if token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // current time in seconds
    return decodedToken.exp < currentTime; // Check if token has expired
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && !isTokenExpired(user.token)) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    }
    setIsAuthReady(true);
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, isAuthReady }}>
      {children}
    </AuthContext.Provider>
  );
};
