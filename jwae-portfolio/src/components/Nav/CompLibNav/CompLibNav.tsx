import React from "react";
import { NavLink } from "react-router-dom";

import * as Components from "../../index.ts";

import "./CompLibNav.scss";

interface CompLibNavProps {}

const CompLibNav: React.FC<CompLibNavProps> = () => {
  const componentNames = Object.keys(Components);

  return (
    <section className="CompLibNav">
      <nav>
        <ul>
          {componentNames.map((name) => (
            <li key={name}>
              <NavLink to={`/comp-lib/${name}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default CompLibNav;
