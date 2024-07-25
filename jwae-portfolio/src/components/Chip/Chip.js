import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import ButtonCore from "../Button/ButtonCore/ButtonCore";
import Typography from "../Typography/Typography";

import "./Chip.css";

const SIZES = {
  xxSmall: "xxSmall",
  xSmall: "xSmall",
  small: "small",
  medium: "medium",
  large: "large",
};

const KINDS = {
  outlined: "outlined",
  boldFilled: "boldFilled",
  subtleFilled: "subtleFilled",
};

const COLORS = {
  neutral: "neutral",
  brandPrimary: "brandPrimary",
  brandSecondary: "brandSecondary",
  critical: "critical",
  success: "success",
  warning: "warning",
  info: "info",
};

function Chip({
  isDarkMode,
  size,
  kind,
  color,
  isDisabled,
  isSelected,
  onClick,
  label,
  leftIcon,
  rightIcon,
  className,
  dataTestId,
}) {
  const chipClass = classnames(
    "Chip",
    `Chip-${kind}`,
    `Chip--${size}`,
    `Chip--${color}`,
    isSelected && `Chip-${kind}--isSelected Chip--isSelected`,
    isDisabled && `Chip--isDisabled Chip-${kind}--isDisabled `,
    className
  );

  const chipContentClass = classnames(
    "Chip-content-container",
    `Chip-content-container--${size}`
  );

  const leftIconClass = classnames("Chip-left-icon", `Chip-icons--${size}`);

  const labelClass = classnames(`Chip-label`, `Chip-label--${size}`);

  const rightIconClass = classnames("Chip-right-icon", `Chip-icons--${size}`);

  const buttonIconOverlayClass = classnames(
    "Chip-overlay",
    `Chip-overlay-${kind}`,
    isSelected && `Chip-overlay-${kind}--isSelected`,
    `Chip-overlay--${color}`
  );

  return (
    <ButtonCore
      type="button"
      onClick={onClick}
      isDisabled={isDisabled}
      className={chipClass}
      dataTestId={dataTestId}
    >
      <div className={chipContentClass}>
        {leftIcon && <div className={leftIconClass}>{leftIcon}</div>}
        {label && (
          <Typography kind="body3" className={labelClass}>
            {label}
          </Typography>
        )}
        {rightIcon && <div className={rightIconClass}>{rightIcon}</div>}
      </div>
      <span className={buttonIconOverlayClass} />
    </ButtonCore>
  );
}

Chip.propTypes = {
  isDarkMode: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  kind: PropTypes.oneOf(Object.values(KINDS)),
  color: PropTypes.oneOf(Object.values(COLORS)),
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  leftIcon: PropTypes.element,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightIcon: PropTypes.element,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
};

Chip.defaultProps = {
  isDarkMode: false,
  size: SIZES.medium,
  kind: KINDS.outlined,
  color: COLORS.neutral,
  isSelected: false,
  isDisabled: false,
  onClick: () => {},
  leftIcon: null,
  label: null,
  rightIcon: null,
  className: null,
  dataTestId: null,
};

export default Chip;
