import FitnessChallenges from "./components/FitnessChallenges";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Challenges from "./Pages/Challenges";
import Workouts from "./Pages/Workouts";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/fitness-challenges" element={<FitnessChallenges />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
