import FitnessChallenges from "./components/FitnessChallenges";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Challenges from "./Pages/Challenges";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <FitnessChallenges />
      <Challenges />
    </div>
  );
}

export default App;
