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
} from "@floating-ui/react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { FLOATING_PLACEMENTS, SYSTEM_DATA_THEMES } from "../../misc/constants";
import Box from "../Box/Box";
import Typography from "../../Typography/Typography";

import "./TooltipComponent.css";

function TooltipComponent({
  dataTheme,
  trigger,
  text,
  placement,
  openDelay,
  closeDelay,
  maxWidth,
  offset,
  arrowStaticOffset,
  isWordBreak,
  className,
  dataTestId,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const tooltipClasses = classnames(
    "TooltipComponent",
    isWordBreak && "TooltipComponent--isWordBreak",
    text?.length < 1 || (!text && "TooltipComponent--isTextEmpty"),
    className
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      floatingOffset({
        mainAxis: offset.y || offset,
        crossAxis: offset.x || 0,
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
  const focusInteraction = useFocus(context, {
    delay: { open: openDelay, close: closeDelay },
  });
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
    <Box tag="div" dataTheme={dataTheme}>
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
          <Typography kind="body3" className="TooltipComponent-text">
            {text || ""}
          </Typography>
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={14}
            height={9}
            tipRadius={2}
            fill="var(--color-background-neutral-subtlest, #0C0D10)"
            staticOffset={arrowStaticOffset}
          />
        </div>
      )}
    </Box>
  );
}

TooltipComponent.propTypes = {
  dataTheme: PropTypes.oneOf(Object.values(SYSTEM_DATA_THEMES)),
  trigger: PropTypes.element.isRequired,
  text: PropTypes.string,
  placement: PropTypes.oneOf(Object.values(FLOATING_PLACEMENTS)),
  maxWidth: PropTypes.string,
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      y: PropTypes.number,
      x: PropTypes.number,
    }),
  ]),
  arrowStaticOffset: PropTypes.string,
  openDelay: PropTypes.number,
  closeDelay: PropTypes.number,
  isWordBreak: PropTypes.bool,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

TooltipComponent.defaultProps = {
  dataTheme: null,
  text: null,
  placement: FLOATING_PLACEMENTS.BOTTOM,
  maxWidth: "11rem",
  offset: 8,
  arrowStaticOffset: null,
  openDelay: 100,
  closeDelay: 10,
  isWordBreak: true,
  className: null,
  dataTestId: null,
};

export default TooltipComponent;

TooltipComponent.displayName = "Tooltip";
