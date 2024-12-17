import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLougoutButton = async (e) => {
    e.preventDefault();
    logout();
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {user ? (
        <h2 className="text-2xl font-bold tracking-wider">
          WELCOME - {user.username.toUpperCase()}
        </h2>
      ) : (
        <h2 className="text-2xl font-bold tracking-wider">
          You have been logged out
        </h2>
      )}
      <div>
        {user ? (
          <button
            className="px-4 py-2 mt-3 text-white bg-orange-500 hover:bg-orange-600"
            onClick={handleLougoutButton}
          >
            LOGOUT
          </button>
        ) : (
          <button
            className="px-4 py-2 mt-3 text-white bg-orange-500 hover:bg-orange-600"
            onClick={navigateLogin}
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
