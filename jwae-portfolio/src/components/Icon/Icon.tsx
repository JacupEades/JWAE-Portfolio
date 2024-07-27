import React from "react";
import classnames from "classnames";

import * as Icons from "./Icons";

import "./Icon.scss";

const SIZES = {
  "xx-xxxSmall": "xx-xxxSmall",
  "x-xxxSmall": "x-xxxSmall",
  xxxSmall: "xxxSmall",
  xxSmall: "xxSmall",
  xSmall: "xSmall",
  small: "small",
  smallMedium: "smallMedium",
  medium: "medium",
  large: "large",
  xLarge: "xLarge",
  xxLarge: "xxLarge",
};

interface IconComponents {
  [key: string]: React.ComponentType<any>;
}

interface IconProps {
  kind: string;
  color?: string;
  size?: keyof typeof SIZES;
  rotate?: number;
  className?: string;
  dataTestId?: string;
}

const Icon: React.FC<IconProps> = ({
  kind = "ChevronDown",
  color = "black",
  size = "medium",
  rotate = 0,
  className = null,
  dataTestId = null,
}) => {
  if (!kind) return null;

  const iconName = kind.charAt(0).toUpperCase() + kind.slice(1);
  const IconSvg = (Icons as IconComponents)[iconName];
  const classes = classnames(
    "Icon",
    size && `Icon--${size}`,
    rotate && `Icon--rotate-${rotate}`,
    className,
  );

  return (
    <div
      style={{ color }}
      className={classes}
      data-testid={`Icon-${dataTestId || kind}`}
    >
      {IconSvg && <IconSvg />}
    </div>
  );
};

export default Icon;
