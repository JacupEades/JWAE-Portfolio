import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CompLib, Games, Home, ReactDemos } from "./pages/index.ts";
import { PageNav } from "./components";

import "./styles/globals.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <PageNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comp-lib" element={<CompLib />} />
          <Route path="/comp-lib/:componentName" element={<CompLib />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:gameName" element={<Games />} />
          <Route path="/react-demos" element={<ReactDemos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
