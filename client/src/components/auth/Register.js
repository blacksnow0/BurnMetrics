import React, { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen"; // Import the loading component

const Register = () => {
  const navigate = useNavigate();
  const { register } = useRegister();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    height: "",
    weight: "",
    fitnessGoal: "",
    age: "",
  });

  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setError("");
    setLoading(true); // Set loading to true when form is submitting

    try {
      await register(formData);
      navigate("/profile");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        height: "",
        weight: "",
        fitnessGoal: "",
        age: "",
      });
    } catch (err) {
      setError(err.message || "Failed to register. Please try again.");
    } finally {
      setLoading(false); // Reset loading when done
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mb-5">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>

        {/* Show loading screen if registering */}
        {loading ? (
          <LoadingScreen message="Registering..." /> // Display loading while registering
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Display Error */}
            {error && (
              <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                {error}
              </div>
            )}

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Age */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Height */}
            <div>
              <label
                htmlFor="height"
                className="block text-sm font-medium text-gray-700"
              >
                Height (in cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Enter your height"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Weight */}
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700"
              >
                Weight (in kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Enter your weight"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Fitness Goal */}
            <div>
              <label
                htmlFor="fitnessGoal"
                className="block text-sm font-medium text-gray-700"
              >
                Fitness Goal
              </label>
              <select
                id="fitnessGoal"
                name="fitnessGoal"
                value={formData.fitnessGoal}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select your goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Register
            </button>
          </form>
        )}
        <p className="text-sm text-center text-gray-600 ">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-orange-600 hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
