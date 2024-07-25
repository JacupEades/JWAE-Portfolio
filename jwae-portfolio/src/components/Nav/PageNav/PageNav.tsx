import React from "react";
import { Link } from "react-router-dom";

interface PageNavProps {}

const PageNav: React.FC<PageNavProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comp-lib">CompLib</Link>
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
