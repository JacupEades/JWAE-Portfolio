import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { Button } from "../index.ts";

describe("Button component", () => {
  it("Button should render default props", () => {
    const { queryByTestId } = render(
      <Button dataTestId="button1">Button</Button>,
    );

    expect(queryByTestId("button1")).toHaveTextContent("Button");
  });
});
