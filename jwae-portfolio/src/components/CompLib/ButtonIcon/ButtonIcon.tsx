import React from "react";
import classnames from "classnames";

import { SYSTEM_DATA_THEMES } from "../../../misc/constants.ts";
import { ButtonCore } from "../../index.ts";

import "./ButtonIcon.scss";

const SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

const KINDS = {
  bold: "bold",
  outlinedSecondary: "outlinedSecondary",
  outlinedNeutral: "outlinedNeutral",
  ghost: "ghost",
  outlinedCritical: "outlinedCritical",
} as const;

interface ButtonIconProps {
  id?: string;
  dataTheme?: keyof typeof SYSTEM_DATA_THEMES;
  size?: keyof typeof SIZES;
  kind?: keyof typeof KINDS;
  tabIndex?: number;
  isDisabled?: boolean;
  isSelected?: boolean;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  dataTestId?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  id = null,
  dataTheme = null,
  size = SIZES.large,
  kind = KINDS.bold,
  tabIndex = 0,
  isDisabled = false,
  isSelected = false,
  icon,
  onClick = () => {},
  className = null,
  dataTestId = null,
}) => {
  const buttonIconClass = classnames(
    "ButtonIcon",
    `ButtonIcon--${dataTheme}`,
    `ButtonIcon--${size}`,
    `ButtonIcon-${kind}`,
    isDisabled && `ButtonIcon-${kind}--isDisabled`,
    isSelected && `ButtonIcon-${kind}--isSelected`,
    className
  );

  const buttonIconOverlayClass = classnames(
    "ButtonIcon-overlay",
    `ButtonIcon-overlay-${kind}`,
    isSelected && `ButtonIcon-overlay-${kind}--isSelected`
  );

  return (
    <ButtonCore
      id={id}
      dataTheme={dataTheme}
      tabIndex={tabIndex}
      onClick={(e) => onClick(e)}
      isDisabled={isDisabled}
      className={buttonIconClass}
      dataTestId={dataTestId}
    >
      {icon}
      <span className={buttonIconOverlayClass} />
    </ButtonCore>
  );
};

export default ButtonIcon;
