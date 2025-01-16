import React from "react";
import { Routes, Route } from "react-router-dom";

import FitnessChallenges from "../components/challenges/FitnessChallenges";
import Home from "../Pages/Home";
import Challenges from "../Pages/Challenges";
import Workouts from "../Pages/Workouts";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Profile from "../Pages/Profile";
import RunningChallenge from "../components/challenges/RunningChallenge";
import CreateWorkout from "../components/workout/CreateWorkout";
import SeventyFiveChallenge from "../components/challenges/SeventyFiveChallenge";
import ProtectedRoute from "./ProtectedRoute";
import { useAuthContext } from "../hooks/useAuthContext";

const AppRoutes = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fitness-challenges" element={<FitnessChallenges />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute user={user}>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/running"
        element={
          <ProtectedRoute user={user}>
            <RunningChallenge />
          </ProtectedRoute>
        }
      />
      <Route
        path="/workouts/create"
        element={
          <ProtectedRoute user={user}>
            <CreateWorkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seventyfive"
        element={
          <ProtectedRoute user={user}>
            <SeventyFiveChallenge />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
