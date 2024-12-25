import React, { useEffect, useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import berserk from "../Assets/berserk wallpaper.jpeg";
import WorkoutDisplay from "../components/workout/WorkoutDisplay";

const Profile = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    fitnessGoal: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.token) {
        try {
          const response = await axios.get(
            "https://burnmetrics.onrender.com/api/users/",
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          setUserData(response.data.user);
          setFormData({
            age: response.data.user.profile.age || "",
            height: response.data.user.profile.height || "",
            weight: response.data.user.profile.weight || "",
            fitnessGoal: response.data.user.profile.fitnessGoal || "",
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    if (user && user.token) {
      try {
        const response = await axios.put(
          "https://burnmetrics.onrender.com/api/users/updateProfile",
          formData,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserData(response.data);
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-10">
        <div className="lg:bg-white lg:shadow-lg lg:rounded-lg p-6 md:p-10 w-full max-w-4xl">
          {/* Header Section */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={berserk}
              alt="Profile"
              className="w-32 h-32 object-cover "
            />
            {user ? (
              <h1 className="mt-4 text-2xl font-bold text-gray-800 tracking-widest">
                <span className="text-orange-600">@</span>
                {userData.username.toUpperCase()}
              </h1>
            ) : (
              <h1 className="mt-4 text-2xl font-bold text-gray-800">
                Loading...
              </h1>
            )}
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!isEditing ? (
              <>
                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <h2 className="text-lg font-bold text-gray-500">Age</h2>
                  <p className="mt-1 text-gray-700 font-semibold">
                    {userData.profile.age || "N/A"} years
                  </p>
                </div>

                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <h2 className="text-lg font-bold text-gray-500">Height</h2>
                  <p className="mt-1 text-gray-700 font-semibold">
                    {userData.profile.height || "N/A"} cm
                  </p>
                </div>

                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <h2 className="text-lg font-bold text-gray-500">Weight</h2>
                  <p className="mt-1 text-gray-700 font-semibold">
                    {userData.profile.weight || "N/A"} kg
                  </p>
                </div>

                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <h2 className="text-lg font-bold text-gray-500">
                    Fitness Goal
                  </h2>
                  <p className="mt-1 text-gray-700 font-semibold">
                    {userData.profile.fitnessGoal || "N/A"}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <label className="text-lg font-bold text-gray-500">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-100  px-3"
                  />
                </div>

                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <label className="text-lg font-bold text-gray-500">
                    Height
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-100  px-3"
                  />
                </div>

                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <label className="text-lg font-bold text-gray-500">
                    Weight
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-100  px-3"
                  />
                </div>

                <div className="bg-orange-200 p-4 rounded-lg shadow-sm">
                  <label className="text-lg font-bold text-gray-500">
                    Fitness Goal
                  </label>
                  <input
                    type="text"
                    name="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-gray-100  px-3"
                  />
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Edit Profile
              </button>
            )}
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <WorkoutDisplay />
    </div>
  );
};

export default Profile;
