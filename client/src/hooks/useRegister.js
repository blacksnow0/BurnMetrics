import axios from "axios";

import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const { dispatch } = useAuthContext();
  const register = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:5001/api/users/register", {
        username,
        password,
      });
      if (res.status === 200) {
        const { username, token } = res.data;
        localStorage.setItem("user", JSON.stringify({ username, token }));
        dispatch({ type: "LOGIN", payload: { username, token } });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { register };
};
