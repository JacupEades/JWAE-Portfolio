import React, { ReactNode } from "react";
import classnames from "classnames";

import "./Typography.scss";

const KINDS_MAP = [
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "body1",
  "body1-bold",
  "body2",
  "body2-bold",
  "body3",
  "body3-bold",
  "label",
].reduce(
  (acc, kind) => ({ ...acc, [kind]: kind }),
  {} as Record<string, string>,
);

const FONTS_MAP = [
  "display-d",
  "h1-d",
  "h2-d",
  "h3-d",
  "h4-d",
  "h5-d",
  "body1-d",
  "body1-bold-d",
  "body2-d",
  "body2-bold-d",
  "body3-d",
  "body3-bold-d",
  "display-m",
  "h1-m",
  "h2-m",
  "h3-m",
  "h4-m",
  "h5-m",
  "body1-m",
  "body1-bold-m",
  "body2-m",
  "body2-bold-m",
  "body3-m",
  "body3-bold-m",
].reduce(
  (acc, font) => ({ ...acc, [font]: font }),
  {} as Record<string, string>,
);

interface TypographyProps {
  kind: keyof typeof KINDS_MAP;
  desktop?: keyof typeof FONTS_MAP | null;
  mobile?: keyof typeof FONTS_MAP | null;
  htmlFor?: string;
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
  dataTestId?: string;
}

const Typography: React.FC<TypographyProps> = ({
  kind,
  desktop,
  mobile,
  htmlFor,
  children,
  isDisabled,
  className,
  dataTestId,
}) => {
  const Tag = (
    ["header", "h1", "h2", "h3", "h4", "h5", "label"].includes(kind)
      ? kind
      : "p"
  ) as keyof JSX.IntrinsicElements;

  const desktopClass = `Typography-${desktop || `${kind}-d`}`;
  const mobileClass = `Typography-mobile-${mobile || `${kind}-m`}`;
  const typographyClasses = classnames(
    "Typography",
    desktopClass,
    mobileClass,
    kind === "label" && "Typography--isNoWrap",
    isDisabled && "Typography--isDisabled",
    className,
  );

  if (Tag === "label") {
    return (
      <label
        className={typographyClasses}
        htmlFor={htmlFor}
        aria-disabled={isDisabled}
        data-testid={dataTestId}
      >
        {children}
      </label>
    );
  }

  return (
    <Tag className={typographyClasses} data-testid={dataTestId}>
      {children}
    </Tag>
  );
};

export default Typography;
