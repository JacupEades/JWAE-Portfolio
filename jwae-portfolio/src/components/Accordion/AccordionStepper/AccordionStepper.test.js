/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-curly-spacing */
import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";

import { AccordionStepper } from "../index.ts";

describe("AccordionStepper component", () => {
  const ACCORDION_STEPPER_ARTICLE_ID = "accordion-stepper-article-id";
  const ACCORDION_STEPPER_BASE_BUTTON_ID = "accordion-stepper-article-id";

  const commonProps = {
    accordionValue: "Accordion Value",
    secondarySupportingText: "Secondary Text",
  };

  it("Renders correctly", () => {
    function TestComponent() {
      const [isExpanded, setIsExpanded] = useState(false);

      const accordionPanelContent = () => (
        <div>
          <p>Container to fill with content.</p>
        </div>
      );

      return (
        <AccordionStepper
          dataTestId={ACCORDION_STEPPER_ARTICLE_ID}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          prefixIconKind="Account"
          headerText="Which account do you need?"
          primarySupportingText="Primary Supporting Text"
          suffixLink={
            <a
              href="http://localhost:6060/#/Components/AccordionStepper"
              target="_self"
              // url="http://localhost:6060/#/Components/AccordionStepper"
              // text="Optional Link"
              // prefixIconKind="LinkChain"
              // shouldStopPropagation
            >
              Link
            </a>
          }
        >
          {accordionPanelContent()}
        </AccordionStepper>
      );
    }

    const { getByTestId } = render(<TestComponent />);
    const accordionStepper = getByTestId(ACCORDION_STEPPER_ARTICLE_ID);

    expect(accordionStepper).toBeInTheDocument();
    expect(
      getByTestId(`${ACCORDION_STEPPER_ARTICLE_ID}-button`),
    ).toBeInTheDocument();
  });

  it("toggles expansion when the button is clicked", () => {
    function TestComponent() {
      const [isExpanded, setIsExpanded] = useState(false);

      const accordionPanelContent = () => (
        <div>
          <p>Container to fill with content.</p>
        </div>
      );

      return (
        <AccordionStepper
          dataTestId={ACCORDION_STEPPER_BASE_BUTTON_ID}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          prefixIconKind="Account"
          headerText="Which account do you need?"
          primarySupportingText="Select an account or create a new one"
          suffixLink={
            <a
              href="http://localhost:6060/#/Components/AccordionStepper"
              target="_self"
              // url="http://localhost:6060/#/Components/AccordionStepper"
              // text="Optional Link"
              // prefixIconKind="LinkChain"
              // shouldStopPropagation
            >
              Link
            </a>
          }
        >
          {accordionPanelContent()}
        </AccordionStepper>
      );
    }

    // Render the test component
    const { getByTestId } = render(<TestComponent />);

    // Get the button by its test ID
    const button = getByTestId(`${ACCORDION_STEPPER_BASE_BUTTON_ID}-button`);

    // The accordion should not be expanded initially
    expect(button).toHaveAttribute("aria-expanded", "false");

    // Simulate a click on the button
    act(() => {
      fireEvent.click(button);
    });

    // Now the accordion should be expanded
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Simulate another click on the button to collapse the accordion
    act(() => {
      fireEvent.click(button);
    });

    // The accordion should be collapsed now
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("Displays accordionValue when available", () => {
    function TestComponent() {
      const [isExpanded, setIsExpanded] = useState(false);

      const accordionPanelContent = () => (
        <div>
          <p>Container to fill with content.</p>
        </div>
      );

      return (
        <AccordionStepper
          dataTestId={ACCORDION_STEPPER_ARTICLE_ID}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          prefixIconKind="Account"
          headerText="Which account do you need?"
          primarySupportingText="Select an account or create a new one"
          accordionValue={accordionPanelContent()}
          suffixLink={
            <a
              href="http://localhost:6060/#/Components/AccordionStepper"
              target="_self"
              // url="http://localhost:6060/#/Components/AccordionStepper"
              // text="Optional Link"
              // prefixIconKind="LinkChain"
              // shouldStopPropagation
            >
              Link
            </a>
          }
        >
          {accordionPanelContent()}
        </AccordionStepper>
      );
    }

    const { getByTestId } = render(<TestComponent />);
    const accordionStepper = getByTestId(ACCORDION_STEPPER_ARTICLE_ID);

    expect(accordionStepper).toBeInTheDocument();
  });

  it("renders secondary text when collapsed and both secondary text and accordion value are provided", () => {
    const { getByText } = render(
      <AccordionStepper
        headerText="Which account do you need?"
        {...commonProps}
        isExpanded={false}
        setIsExpanded={() => {}}
        primarySupportingText="Primary Supporting Text"
        prefixIconKind="Account"
      />,
    );

    expect(getByText("Secondary Text")).toBeInTheDocument();
  });

  it("does not render secondary text when expanded or when either secondary text or accordion value is missing", () => {
    const { queryByText } = render(
      <AccordionStepper
        headerText="Which account do you need?"
        isExpanded
        setIsExpanded={jest.fn()}
        primarySupportingText="Primary Supporting Text"
        prefixIconKind="Account"
      />,
    );

    expect(queryByText("Secondary Text")).not.toBeInTheDocument();

    render(
      <AccordionStepper
        headerText="Which account do you need?"
        isExpanded={false}
        setIsExpanded={jest.fn()}
        primarySupportingText="Primary Supporting Text"
        prefixIconKind="Account"
      />,
    );

    expect(queryByText("Secondary Text")).not.toBeInTheDocument();

    render(
      <AccordionStepper
        headerText="Which account do you need?"
        isExpanded={false}
        setIsExpanded={jest.fn()}
        accordionValue=""
        primarySupportingText="Primary Supporting Text"
        prefixIconKind="Account"
      />,
    );

    expect(queryByText("Secondary Text")).not.toBeInTheDocument();
  });
});
