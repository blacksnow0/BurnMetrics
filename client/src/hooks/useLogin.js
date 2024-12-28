import axios from "axios";

import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    try {
      const res = await axios.post(
        "https://burnmetrics.onrender.com/api/users/login",
        {
          username,
          password,
        }
      );
      if (res.status === 200) {
        const { username, token } = res.data;
        console.log("res.data", res.data);
        localStorage.setItem("user", JSON.stringify({ username, token }));
        dispatch({ type: "LOGIN", payload: { username, token } });
      }
    } catch (err) {
      console.log(err);
      throw err.response?.data?.message || "Login failed. Please try again.";
    }
  };
  return { login };
};
