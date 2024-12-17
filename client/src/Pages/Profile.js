import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import image from "../Assets/bumstead.jpeg";

const Profile = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const userData = {
    email: "johndoe@example.com",
    age: 28,
    height: "5'9\"",
    weight: "75 kg",
    fitnessGoal: "Build muscle and increase strength",
    avatar: image,
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="lg:bg-white lg:shadow-lg lg:rounded-lg p-6 md:p-10 w-full max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={userData.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-orange-500"
          />
          {user ? (
            <h1 className="mt-4 text-2xl font-bold text-gray-800">
              {user.username}
            </h1>
          ) : (
            <h1 className="mt-4 text-2xl font-bold text-gray-800">
              Loading...
            </h1>
          )}
          <p className="text-gray-500">{userData.email}</p>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700">Age</h2>
            <p className="mt-1 text-gray-800">{userData.age} years</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700">Height</h2>
            <p className="mt-1 text-gray-800">{userData.height}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700">Weight</h2>
            <p className="mt-1 text-gray-800">{userData.weight}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700">
              Fitness Goal
            </h2>
            <p className="mt-1 text-gray-800">{userData.fitnessGoal}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
