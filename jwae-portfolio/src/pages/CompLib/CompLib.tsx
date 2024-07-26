import React from "react";

import "./CompLib.scss";
import { Button, Icon, CompLibNavProps } from "../../components";

interface CompLibProps {}

const CompLib: React.FC<CompLibProps> = () => {
  return (
    <section className="CompLib">
      <h3>Component Library</h3>

      <Button
        type="button"
        kind="filled"
        size="large"
        leftIcon={<Icon kind="ChevronDown" />}
        rightIcon={<Icon kind="ChevronDown" />}
      >
        Filled
      </Button>
    </section>
  );
};

export default CompLib;
