import React from "react";

import { Typography } from "../../components";

import "./Home.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="Home">
      <Typography className="CompLib-header" kind="h1">
        Home
      </Typography>
      <Typography className="CompLib-header" kind="h2">
        TODO list:
      </Typography>
      <Typography className="CompLib-header" kind="h2">
        Comp Lib links are text click not button click
      </Typography>
      <Typography className="CompLib-header" kind="h2">
        Home Page TODO formatted
      </Typography>
      <Typography className="CompLib-header" kind="h2">
        Toggleable side nav view
      </Typography>
      <Typography className="CompLib-header" kind="h2">
        Combine complib and games sidenavs if you want consistent style?
      </Typography>
    </section>
  );
};

export default Home;
