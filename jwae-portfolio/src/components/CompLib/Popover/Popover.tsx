/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
import React, { useRef } from "react";
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingFocusManager,
  offset as floatingOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";

import {
  FLOATING_PLACEMENTS,
  SYSTEM_DATA_THEMES,
} from "../../misc/constants.ts";

import "./Popover.scss";
// Important Documentation: https://floating-ui.com/

interface PopoverProps {
  dataTheme?: keyof typeof SYSTEM_DATA_THEMES;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  trigger: React.ReactNode;
  popoverContent: React.ReactNode;
  placement?: keyof typeof FLOATING_PLACEMENTS;
  offset?: number;
}

const Popover: React.FC<PopoverProps> = ({
  dataTheme,
  isOpen,
  setIsOpen,
  trigger,
  popoverContent,
  placement = "bottom",
  offset = 16,
}) => {
  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      floatingOffset(offset),
      flip({ fallbackAxisSideDirection: "end" }),
      shift(),
      arrow({ element: arrowRef.current }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const clickInteraction = useClick(context);
  const dismissInteraction = useDismiss(context);
  const roleInteraction = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    clickInteraction,
    dismissInteraction,
    roleInteraction,
  ]);

  return (
    <div
      className={isOpen ? "Popover-wrapper--isOpen" : undefined}
      data-theme={dataTheme}
    >
      <div ref={refs.setReference} {...getReferenceProps()}>
        {trigger}
      </div>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="Popover"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {popoverContent}
            {/* Arrow */}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              width={26}
              height={14}
              stroke="#cecfd9"
              strokeWidth={1}
              fill="#fff"
            />
          </div>
        </FloatingFocusManager>
      )}
    </div>
  );
};

export default Popover;
