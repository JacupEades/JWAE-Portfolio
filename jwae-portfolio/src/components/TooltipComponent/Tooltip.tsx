/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from "react";
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  offset as floatingOffset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
  Placement,
} from "@floating-ui/react";
import classnames from "classnames";

import { SYSTEM_DATA_THEMES } from "../../misc/constants";
import { Typography } from "../index";

import "./Tooltip.scss";

interface Offset {
  x?: number;
  y?: number;
}

interface TooltipProps {
  dataTheme?: keyof typeof SYSTEM_DATA_THEMES;
  trigger: React.ReactElement;
  text?: string;
  placement?: Placement;
  openDelay?: number;
  closeDelay?: number;
  maxWidth?: string;
  offset?: number | Offset;
  arrowStaticOffset?: string;
  isWordBreak?: boolean;
  className?: string;
  dataTestId?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  dataTheme,
  trigger,
  text,
  placement = "bottom",
  openDelay = 100,
  closeDelay = 10,
  maxWidth = "11rem",
  offset = 8,
  arrowStaticOffset,
  isWordBreak = true,
  className,
  dataTestId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);

  const tooltipClasses = classnames(
    "Tooltip",
    isWordBreak && "Tooltip--isWordBreak",
    (!text || text.length < 1) && "Tooltip--isTextEmpty",
    className
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      floatingOffset({
        mainAxis: typeof offset === "number" ? offset : offset.y || 0,
        crossAxis: typeof offset === "number" ? 0 : offset.x || 0,
      }),
      flip(),
      shift(),
      arrow({ element: arrowRef.current, padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hoverInteraction = useHover(context, {
    move: false,
    delay: { open: openDelay, close: closeDelay },
  });
  const focusInteraction = useFocus(context);
  const dismissInteraction = useDismiss(context);
  const roleInteraction = useRole(context, { role: "tooltip" });

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: {
      open: 150,
      close: 150,
    },
    open: {
      opacity: 1,
      transition: "opacity 150ms ease-in",
    },
    // TODO: Close transition currently not functioning
    close: {
      opacity: 0,
      transition: "opacity 150ms ease-out",
    },
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hoverInteraction,
    focusInteraction,
    dismissInteraction,
    roleInteraction,
  ]);

  const tooltipStyle = {
    ...floatingStyles,
    ...transitionStyles,
    maxWidth,
  };

  const showTooltip = () => {
    if (dataTestId) setIsOpen(true);
  };

  return (
    <div data-theme={dataTheme}>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        onFocus={showTooltip}
        onMouseOver={showTooltip}
      >
        {trigger}
      </div>
      {isMounted && isOpen && (
        <div
          data-testid={dataTestId}
          data-theme={dataTheme || SYSTEM_DATA_THEMES.DARK}
          ref={refs.setFloating}
          style={tooltipStyle}
          className={tooltipClasses}
          role="tooltip"
          {...getFloatingProps()}
        >
          <Typography kind="body3" className="Tooltip-text">
            {text || ""}
          </Typography>
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={14}
            height={9}
            tipRadius={2}
            fill="#0C0D10"
            staticOffset={arrowStaticOffset}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;

Tooltip.displayName = "Tooltip";
