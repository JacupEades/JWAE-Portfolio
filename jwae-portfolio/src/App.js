import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
import { PageNav, CompLibNavProps } from "./components";
import Home from "./pages/Home/Home";
import CompLib from "./pages/CompLib/CompLib";
import ReactDemos from "./pages/ReactDemos/ReactDemos";
import Games from "./pages/Games/Games";

import "./styles/globals.css";

function App() {
  const location = useLocation();

  const showCompLibNav = location.pathname.includes("/comp-lib");

  return (
    <Router>
      <div className="App">
        <PageNav />
        {showCompLibNav && <CompLibNavProps />}
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
