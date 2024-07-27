import React from "react";
import classnames from "classnames";

import { ButtonCore, Typography } from "../index.ts";

import "./Chip.scss";

const SIZES = {
  xxSmall: "xxSmall",
  xSmall: "xSmall",
  small: "small",
  medium: "medium",
  large: "large",
} as const;

const KINDS = {
  outlined: "outlined",
  boldFilled: "boldFilled",
  subtleFilled: "subtleFilled",
} as const;

const COLORS = {
  neutral: "neutral",
  brandPrimary: "brandPrimary",
  brandSecondary: "brandSecondary",
  critical: "critical",
  success: "success",
  warning: "warning",
  info: "info",
} as const;

interface ChipProps {
  size?: keyof typeof SIZES;
  kind?: keyof typeof KINDS;
  color?: keyof typeof COLORS;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label?: string | React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  dataTestId?: string;
}

const Chip: React.FC<ChipProps> = ({
  size = SIZES.medium,
  kind = KINDS.outlined,
  color = COLORS.neutral,
  isDisabled = false,
  isSelected = false,
  onClick = () => {},
  label = null,
  leftIcon = null,
  rightIcon = null,
  className = null,
  dataTestId = null,
}) => {
  const chipClass = classnames(
    "Chip",
    `Chip-${kind}`,
    `Chip--${size}`,
    `Chip--${color}`,
    isSelected && `Chip-${kind}--isSelected Chip--isSelected`,
    isDisabled && `Chip--isDisabled Chip-${kind}--isDisabled`,
    className,
  );

  const chipContentClass = classnames(
    "Chip-content-container",
    `Chip-content-container--${size}`,
  );

  const leftIconClass = classnames("Chip-left-icon", `Chip-icons--${size}`);

  const labelClass = classnames(`Chip-label`, `Chip-label--${size}`);

  const rightIconClass = classnames("Chip-right-icon", `Chip-icons--${size}`);

  const buttonIconOverlayClass = classnames(
    "Chip-overlay",
    `Chip-overlay-${kind}`,
    isSelected && `Chip-overlay-${kind}--isSelected`,
    `Chip-overlay--${color}`,
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
};

export default Chip;
