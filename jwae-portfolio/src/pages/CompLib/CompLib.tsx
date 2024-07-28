import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { CompLibNav, Typography } from "../../components";
import * as Components from "../../components";

import "./CompLib.scss";

interface CompLibProps {}

const CompLib: React.FC<CompLibProps> = () => {
  const { componentName } = useParams<{ componentName: string }>();

  // Ensure that the component name is in the Components object
  const isValidComponent = (name: string): name is keyof typeof Components => {
    return name + "CL" in Components;
  };

  const componentKey = `${componentName}CL`;

  const ComponentToRender =
    componentName && isValidComponent(componentName)
      ? (Components[componentKey] as React.ElementType)
      : null;

  const excludedComponents = [
    "CompLibNav",
    "PageNav",
    "TextareaCore",
    "InputCore",
    "ButtonCore",
    "CompLibNavProps",
  ];

  const clExcludedComponents = Object.keys(Components).map(
    (name) => `${name}CL`
  );

  const combinedExcludedComponents = [
    ...excludedComponents,
    ...clExcludedComponents,
  ];

  return (
    <section className="CompLib">
      <CompLibNav exclude={combinedExcludedComponents} />
      {/* Content */}
      <section className="ConpLib-libGrid">
        <Typography className="CompLib-header" kind="h2">
          Component Library
        </Typography>
        <div className="CompLib-component">
          {ComponentToRender ? (
            <Suspense fallback={<div>Loading...</div>}>
              <ComponentToRender />
            </Suspense>
          ) : (
            <Typography kind="body1">
              Select a component from the list.
            </Typography>
          )}
        </div>
      </section>
    </section>
  );
};

export default CompLib;
