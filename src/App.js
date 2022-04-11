import "./App.css";
import Leagues from "./components/Leagues/Leagues";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Live from "./components/Live/Live";
import Loading from "./components/Loading/Loading";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Leagues />} />
          <Route path="/live/:id" element={<Live />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
