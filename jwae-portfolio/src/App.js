import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CompLibNavProps, PageNav } from "./components/index.ts";
import CompLib from "./pages/CompLib/CompLib.tsx";
import Games from "./pages/Games/Games.tsx";
import Home from "./pages/Home/Home.tsx";
import ReactDemos from "./pages/ReactDemos/ReactDemos.tsx";

import "./styles/globals.css";

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
