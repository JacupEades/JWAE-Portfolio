import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNav from "./components/Nav/PageNav/PageNav";
import Home from "./pages/Home/Home";
import CompLib from "./pages/CompLib/CompLib";
import ReactDemos from "./pages/ReactDemos/ReactDemos";
import Games from "./pages/Games/Games";

function App() {
  return (
    <Router>
      <div className="App">
        <PageNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comp-lib" element={<CompLib />} />
          <Route path="/games" element={<Games />} />
          <Route path="/react-demos" element={<ReactDemos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
