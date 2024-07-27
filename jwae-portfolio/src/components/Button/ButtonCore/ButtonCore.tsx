import React from "react";
import classNames from "classnames";

import { SYSTEM_DATA_THEMES } from "../../../misc/constants.ts";

interface ButtonCoreProps {
  id?: string | null;
  dataTheme?: keyof typeof SYSTEM_DATA_THEMES | null;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  ariaExpanded?: boolean;
  tabIndex?: number;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
  dataTestId?: string | null;
}

const ButtonCore: React.FC<ButtonCoreProps> = ({
  id,
  dataTheme,
  type = "button",
  onClick = () => {},
  isDisabled = false,
  children = null,
  onFocus,
  onBlur,
  ariaExpanded = false,
  tabIndex = 0,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ref = null,
  className,
  style,
  dataTestId,
}) => {
  const classes = classNames("ButtonCore", className);

  return (
    <button
      id={id || undefined}
      data-theme={dataTheme === SYSTEM_DATA_THEMES.LIGHT ? null : dataTheme}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onFocus={onFocus}
      onBlur={onBlur}
      aria-expanded={ariaExpanded}
      tabIndex={isDisabled ? -1 : tabIndex}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ref={ref}
      className={classes}
      data-testid={dataTestId}
      style={style}
    >
      {children}
    </button>
  );
};

export default ButtonCore;
