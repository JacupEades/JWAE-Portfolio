import React from "react";
import { NavLink } from "react-router-dom";

import "./GamesNav.scss";

interface GamesNavProps {
  gameFiles?: string[];
}

const GamesNav: React.FC<GamesNavProps> = ({ gameFiles = [] }) => {
  return (
    <aside className="GamesNav">
      <nav className="GamesNav-nav">
        <ul className="GamesNav-list">
          {gameFiles.map((name) => (
            <li className="GamesNav-listRow" key={name}>
              <NavLink to={`/games/${name}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default GamesNav;
