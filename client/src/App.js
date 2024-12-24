import FitnessChallenges from "./components/FitnessChallenges";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Challenges from "./Pages/Challenges";
import Workouts from "./Pages/Workouts";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./Pages/Profile";
import Footer from "./components/Footer";
import RunningChallenge from "./components/challenges/RunningChallenge";
import CreateWorkout from "./components/workout/CreateWorkout";
import SeventyFiveChallenge from "./components/challenges/SeventyFiveChallenge";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, isAuthReady } = useAuthContext();
  if (!isAuthReady) {
    return <div>Loading...</div>;
  }
  console.log(user);
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
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/running" element={<RunningChallenge />} />
        <Route path="/workouts/create" element={<CreateWorkout />} />
        <Route path="/seventyfive" element={<SeventyFiveChallenge />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
