import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes/routeConfig";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { isAuthReady } = useAuthContext();

  if (!isAuthReady) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
