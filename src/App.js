import "./App.css";
import Leagues from "./components/Leagues/Leagues";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Live from "./components/Live/Live";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Leagues />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
