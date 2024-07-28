import React from "react";
import classnames from "classnames";

import { ButtonCore, Icon, Typography } from "../../../index";

import "./ButtonSelectRectangle.scss";
import "./ButtonSelectPill.scss";
import "./ButtonSelectIcon.scss";

const KINDS = {
  rectangle: "rectangle",
  pill: "pill",
  icon: "icon",
} as const;

const SIZES = {
  large: "large",
  medium: "medium",
  small: "small",
} as const;

interface WidthConfigs {
  minWidth?: string;
  width?: string;
  maxWidth?: string;
}

interface ButtonSelectProps {
  kind?: keyof typeof KINDS;
  size?: keyof typeof SIZES;
  label?: string | React.ReactNode;
  isOpen?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  prefixIcon?: React.ReactNode;
  BadgeComp?: React.ReactNode;
  widthConfigs?: WidthConfigs;
  isIconSvgFilled?: boolean;
  dataTestId?: string | null;
  className?: string;
}

const ButtonSelect: React.FC<ButtonSelectProps> = ({
  kind = KINDS.rectangle,
  size = SIZES.medium,
  label = null,
  isOpen = false,
  isDisabled = false,
  onClick = () => {},
  prefixIcon = null,
  BadgeComp = null,
  widthConfigs = null,
  isIconSvgFilled = true,
  dataTestId = null,
  className = null,
}) => {
  const buttonSelectClasses = classnames(
    "ButtonSelect",
    `ButtonSelect--${kind}`,
    `ButtonSelect--${size}`,
    isDisabled && "ButtonSelect--isDisabled",
    isOpen && `ButtonSelect--${kind}--isOpen`,
    BadgeComp && "ButtonSelect--hasBadge",
    className
  );
  const buttonSelectLabelClasses = classnames("ButtonSelect-label");
  const buttonSelectOverlayClasses = classnames(
    "ButtonSelect-overlay",
    `ButtonSelect-overlay--${kind}`
  );

  const getChevronIconSize = () => {
    switch (kind) {
      case KINDS.pill:
        return "xSmall";
      case KINDS.rectangle:
        return size === SIZES.small ? "xSmall" : "smallMedium";
      default:
        return SIZES.medium;
    }
  };

  const inlineStyle: React.CSSProperties | undefined = widthConfigs
    ? {
        minWidth: widthConfigs.minWidth,
        width: widthConfigs.width,
        maxWidth: widthConfigs.maxWidth,
      }
    : undefined;

  return (
    <ButtonCore
      className={buttonSelectClasses}
      isDisabled={isDisabled}
      onClick={onClick}
      dataTestId={dataTestId}
      style={inlineStyle}
    >
      <div className="ButtonSelect-content-container">
        {prefixIcon && (
          <div
            className={classnames(
              `ButtonSelect--${kind}-prefixIcon`,
              isIconSvgFilled && "ButtonSelect--isIconSvgFilled"
            )}
          >
            {prefixIcon}
          </div>
        )}
        {kind === KINDS.icon ? null : (
          <>
            <Typography kind="label" className={buttonSelectLabelClasses}>
              {label}
            </Typography>
            <span
              className={classnames(
                `ButtonSelect--${kind}-chevron`,
                isIconSvgFilled && "ButtonSelect--isIconSvgFilled"
              )}
            >
              <Icon
                kind="ButtonSelectChevronUp"
                size={getChevronIconSize()}
                rotate={!isOpen ? 180 : undefined}
              />
            </span>
          </>
        )}
        {BadgeComp}
      </div>
      <span className={buttonSelectOverlayClasses} />
    </ButtonCore>
  );
};

export default ButtonSelect;
