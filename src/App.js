import FitnessChallenges from "./components/FitnessChallenges";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Challenges from "./Pages/Challenges";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/fitness-challenges" element={<FitnessChallenges />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
