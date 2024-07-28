import React from "react";
import classnames from "classnames";

import { SYSTEM_DATA_THEMES } from "../../misc/constants";
import { ButtonCore, Icon } from "../index.ts";

// import Loader from '../Loader/Loader';
import "./ButtonStyles/Button.scss";

const SIZES = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

const KINDS = {
  filled: "filled",
  outlined: "outlined",
  subtle: "subtle",
  ghost: "ghost",
} as const;

interface ButtonProps {
  dataTheme?: keyof typeof SYSTEM_DATA_THEMES;
  size?: keyof typeof SIZES;
  kind?: keyof typeof KINDS;
  isDisabled?: boolean;
  isEnabled?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  dataTestId?: string;
}

const Button: React.FC<ButtonProps> = ({
  dataTheme,
  size = "medium",
  kind = "filled",
  isDisabled = false,
  isEnabled = false,
  isLoading = false,
  isSuccess = false,
  onClick = () => {},
  children = null,
  leftIcon = null,
  rightIcon = null,
  type = "button",
  className = null,
  dataTestId = null,
}) => {
  const buttonClass = classnames(
    "Button",
    `Button-${kind}`,
    `Button--${size}`,
    isEnabled && `Button-${kind}--isEnabled`,
    isLoading && "Button--isLoading",
    isDisabled && "Button--isDisabled",
    isSuccess && `Button-${kind}--isSuccess`,
    !leftIcon && !children && `Button-square--${size}`,
    !rightIcon && !children && `Button-square--${size}`,
    className
  );

  const leftIconClass = classnames("Button-left-icon", `Button-icons--${size}`);

  const childrenClass = classnames(
    `Button-children`,
    !children && `Button-children-null`
  );

  const rightIconClass = classnames(
    "Button-right-icon",
    `Button-icons--${size}`
  );

  const buttonIconOverlayClass = classnames(
    "Button-overlay",
    `Button-overlay-${kind}`,
    isEnabled && `Button-overlay-${kind}--isEnabled`
  );

  return (
    <ButtonCore
      dataTheme={dataTheme}
      type={type}
      tabIndex={isLoading || isSuccess ? -1 : 0}
      onClick={onClick}
      isDisabled={isDisabled}
      className={buttonClass}
      data-testid={dataTestId}
    >
      <div className="Button-content-container">
        {/* {isLoading && <Loader kind="dots" format="inline" color="brand" />} */}
        {leftIcon && !isLoading && (
          <div className={leftIconClass}>
            {isSuccess ? <Icon kind="Check" /> : leftIcon}
          </div>
        )}
        <div className={childrenClass}>
          {!isLoading && !isSuccess && children}
          {isLoading && "Loading"}
          {isSuccess && "Success"}
        </div>
        {rightIcon && <div className={rightIconClass}>{rightIcon}</div>}
      </div>
      <span className={buttonIconOverlayClass} />
    </ButtonCore>
  );
};

export default Button;
