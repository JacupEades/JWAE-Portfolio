import React from "react";
import { Link } from "react-router-dom";

import "./PageNav.scss";

interface PageNavProps {}

const PageNav: React.FC<PageNavProps> = () => {
  return (
    <nav className="PageNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comp-lib">Jacob's Comps</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/react-demos">React Demos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
