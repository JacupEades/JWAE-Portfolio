import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { FLOATING_PLACEMENTS } from "../../misc/constants.ts";
import { Tooltip } from "../index.ts";

describe("Tooltip", () => {
  test("renders tooltip on hover", async () => {
    render(
      <Tooltip
        trigger={<button type="button">Hover me</button>}
        text="Tooltip text"
        placement={FLOATING_PLACEMENTS.BOTTOM}
        maxWidth="11rem"
        offset={8}
        openDelay={100}
        closeDelay={10}
        isWordBreak
        className="Tooltip-text"
        dataTestId="tooltip-component"
      />
    );

    const triggerElement = screen.getByText("Hover me");

    fireEvent.mouseOver(triggerElement);

    const tooltipElement = await screen.findByTestId(
      "tooltip-component",
      {},
      { timeout: 3000 }
    );

    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement).toHaveClass("Tooltip-text");
  });

  test("does not render tooltip when text is empty", () => {
    render(
      <Tooltip
        trigger={<button type="button">Hover me</button>}
        text=""
        placement={FLOATING_PLACEMENTS.BOTTOM}
        maxWidth="11rem"
        offset={8}
        openDelay={100}
        closeDelay={10}
        isWordBreak
        dataTestId="tooltip-component"
      />
    );

    const triggerElement = screen.getByText("Hover me");

    fireEvent.mouseOver(triggerElement);

    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });
});
