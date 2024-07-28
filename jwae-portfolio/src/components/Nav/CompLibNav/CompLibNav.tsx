import React from "react";
import { NavLink } from "react-router-dom";
import * as Components from "../../index";

import "./CompLibNav.scss";

interface CompLibNavProps {
  exclude?: string[];
}

const CompLibNav: React.FC<CompLibNavProps> = ({ exclude = [] }) => {
  const componentNames = Object.keys(Components).filter(
    (name) => !exclude.includes(name)
  );

  return (
    <aside className="CompLibNav">
      <nav className="CompLibNav-nav">
        <ul className="CompLibNav-list">
          {componentNames.map((name) => (
            <li className="CompLibNav-listRow" key={name}>
              <NavLink to={`/comp-lib/${name}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default CompLibNav;
