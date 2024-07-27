import React, { useCallback, useEffect, useRef, useState } from "react";
import classnames from "classnames";

import { SYSTEM_DATA_THEMES } from "../../misc/constants.ts";
import { ButtonIcon, Icon } from "../index.ts";

import "./AlertBanner.scss";

// KINDS are low and high emphasis
const KIND = {
  low: "low",
  high: "high",
};

const COLOR_THEMES = {
  INFORMATION: "Information", // 'blue'
  CRITICAL: "Critical", // 'red'
  WARNING: "Warning", // 'yellow'
  SUCCESS: "Success", // 'green'
};

interface Position {
  type?: "absolute" | "fixed";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

interface AlertBannerProps {
  colorTheme: keyof typeof COLOR_THEMES;
  kind?: keyof typeof KIND;
  isFloating?: boolean;
  position?: Position;
  title: string;
  description: string;
  isVisible?: boolean;
  onCancel: () => void;
  hasContent?: boolean;
  content?: React.ReactNode;
  isColonVisible?: boolean;
  shouldAutoDismiss?: boolean;
  autoDismissDelay?: number;
  shouldAnimate?: boolean;
  LinkComponent?: React.ReactNode;
}

const AlertBanner: React.FC<AlertBannerProps> = ({
  colorTheme,
  kind = "high",
  isFloating = false,
  position = {
    type: undefined, // absolute or fixed
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  title,
  description,
  isVisible = true,
  onCancel,
  hasContent = false,
  content = null,
  isColonVisible = true,
  shouldAutoDismiss = false,
  autoDismissDelay = 5000,
  shouldAnimate = true,
  LinkComponent = null,
}) => {
  const bodyEl = useRef<HTMLDivElement>(null);
  const [isBody, setIsBody] = useState(false);
  const [shouldRender, setShouldRender] = useState(isVisible);
  const bannerRef = useRef<HTMLDivElement>(null);

  const handleAnimationEnd = useCallback(() => {
    if (!isVisible) {
      setShouldRender(false);
    }
  }, [isVisible]);

  useEffect(() => {
    // manages rendering and animation end event for the banner.
    const bannerRefCurrent = bannerRef.current;

    if (isVisible) {
      setShouldRender(true);
    } else if (!shouldAnimate) {
      setShouldRender(false);
    }

    if (bannerRefCurrent) {
      // listener removes banner from the DOM after the fade-out animation.
      bannerRefCurrent.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (bannerRefCurrent) {
        bannerRefCurrent.removeEventListener(
          "animationend",
          handleAnimationEnd,
        );
      }
    };
  }, [isVisible, shouldAnimate, isFloating, handleAnimationEnd]);

  useEffect(() => {
    // manages the auto-dismiss functionality of the banner.
    let dismissTimer: ReturnType<typeof setTimeout>;

    if (shouldAutoDismiss && isVisible) {
      dismissTimer = setTimeout(onCancel, autoDismissDelay);
    }

    return () => clearTimeout(dismissTimer);
  }, [shouldAutoDismiss, isVisible, autoDismissDelay, onCancel]);

  if (!shouldRender) return null;

  const floatingStylesObj = isFloating
    ? {
        position: position.type,
        top: position.top,
        right: position.right,
        bottom: position.bottom,
        left: position.left,
        transition: shouldAnimate ? "" : "none",
      }
    : {};

  const alertClass = classnames(
    "AlertBanner-container",
    isFloating && "AlertBanner--isFloating", // position: absolute/fixed;
    colorTheme === COLOR_THEMES.SUCCESS && `AlertBanner-success--${kind}`,
    colorTheme === COLOR_THEMES.CRITICAL && "AlertBanner-critical",
    colorTheme === COLOR_THEMES.WARNING && `AlertBanner-warning--${kind}`,
    colorTheme === COLOR_THEMES.INFORMATION &&
      `AlertBanner-information--${kind}`,
    isVisible && "AlertBanner-container--isVisible",
  );

  const renderAlertIcon = () => {
    switch (true) {
      case colorTheme === COLOR_THEMES.CRITICAL:
        return <Icon kind="Critical" color="neutral-000" size="large" />;
      case colorTheme === COLOR_THEMES.SUCCESS && kind === "high":
        return <Icon kind="Success" color="neutral-000" size="large" />;
      case colorTheme === COLOR_THEMES.SUCCESS && kind === "low":
        return <Icon kind="Success" color="success-700" size="large" />;
      case colorTheme === COLOR_THEMES.WARNING && kind === "high":
        return <Icon kind="Warning" color="neutral-1000" size="large" />;
      case colorTheme === COLOR_THEMES.WARNING && kind === "low":
        return <Icon kind="Warning" color="warning-500" size="large" />;
      case colorTheme === COLOR_THEMES.INFORMATION && kind === "high":
        return <Icon kind="Info" color="neutral-000" size="large" />;
      case colorTheme === COLOR_THEMES.INFORMATION && kind === "low":
        return <Icon kind="Info" color="info-700" size="large" />;
      default:
        return null;
    }
  };

  const renderCloseIconColor = () => {
    switch (true) {
      case (colorTheme === COLOR_THEMES.CRITICAL && kind === "high") ||
        (colorTheme === COLOR_THEMES.SUCCESS && kind === "high") ||
        (colorTheme === COLOR_THEMES.INFORMATION && kind === "high"):
        return "neutral-000";
      case (colorTheme === COLOR_THEMES.WARNING && kind === "high") ||
        (colorTheme === COLOR_THEMES.SUCCESS && kind === "low") ||
        (colorTheme === COLOR_THEMES.WARNING && kind === "low") ||
        (colorTheme === COLOR_THEMES.INFORMATION && kind === "low"):
        return "neutral-1000";
      default:
        return "";
    }
  };

  const closeButtonBackgroundType = () => {
    switch (true) {
      case (colorTheme === COLOR_THEMES.CRITICAL && kind === "high") ||
        (colorTheme === COLOR_THEMES.INFORMATION && kind === "high"):
        return SYSTEM_DATA_THEMES.DARK;
      case (colorTheme === COLOR_THEMES.SUCCESS && kind === "high") ||
        (colorTheme === COLOR_THEMES.WARNING && kind === "high") ||
        (colorTheme === COLOR_THEMES.SUCCESS && kind === "low") ||
        (colorTheme === COLOR_THEMES.WARNING && kind === "low") ||
        (colorTheme === COLOR_THEMES.INFORMATION && kind === "low"):
        return null;
      default:
        return null;
    }
  };

  const showMore = () => setIsBody((prev) => !prev);

  return (
    <div className={alertClass} style={floatingStylesObj} ref={bannerRef}>
      <div className="AlertBanner-main">
        <div className="AlertBanner-section">
          <div className="AlertBanner-heading">
            <div className="AlertBanner-icon">{renderAlertIcon()}</div>
            <div className="AlertBanner-title">
              <span>
                {title}
                {isColonVisible && ":"}
              </span>

              <span className="AlertBanner-title-description">
                {description}
              </span>
            </div>
            {LinkComponent && (
              <div className="AlertBanner-link">{LinkComponent}</div>
            )}
            {hasContent && (
              <div
                role="button"
                tabIndex={0}
                onClick={() => showMore()}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    showMore();
                  }
                }}
                className="AlertBanner-expand-btn"
              >
                <div className="AlertBanner-show-section">
                  {isBody ? (
                    <span className="AlertBanner-show-text">Less Details</span>
                  ) : (
                    <span className="AlertBanner-show-text">More Details</span>
                  )}
                  <Icon
                    kind="chevronUpSmall"
                    color="indigo-700"
                    rotate={isBody ? "0" : "180"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="AlertBanner-close">
            <div
              className="AlertBanner-close-icon"
              role="button"
              tabIndex={0}
              onClick={onCancel}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onCancel();
                }
              }}
            >
              <ButtonIcon
                size="medium"
                kind="ghost"
                dataTheme={closeButtonBackgroundType()}
                tabIndex={-1}
                icon={
                  <Icon
                    kind="close"
                    color={renderCloseIconColor()}
                    size="smallMedium"
                  />
                }
                onClick={() => onCancel()}
              />
            </div>
          </div>
        </div>
        {hasContent && (
          <div
            ref={bodyEl}
            className="AlertBanner-body"
            style={
              isBody
                ? { height: bodyEl.current!.scrollHeight }
                : { height: "0" }
            }
          >
            <div className="AlertBanner-content">{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;
