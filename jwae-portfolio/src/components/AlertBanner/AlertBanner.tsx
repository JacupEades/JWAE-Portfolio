/* eslint-disable indent */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useCallback, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { SYSTEM_DATA_THEMES } from "../../misc/constants";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";

import "./AlertBanner.scss";

// KINDS are low and high emphasis
const KIND = {
  low: "low",
  high: "high",
};

const COLOR_THEMES = {
  information: "Information", // 'blue'
  critical: "Critical", // 'red'
  warning: "Warning", // 'yellow'
  success: "Success", // 'green'
};

function AlertBanner({
  colorTheme,
  kind,
  isFloating,
  position,
  title,
  description,
  isVisible,
  onCancel,
  hasContent,
  content,
  isColonVisible,
  shouldAutoDismiss,
  autoDismissDelay,
  shouldAnimate,
  LinkComponent,
}) {
  const bodyEl = useRef();
  const [isBody, setIsBody] = useState(null);
  const [shouldRender, setShouldRender] = useState(isVisible);
  const bannerRef = useRef(null);

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
          handleAnimationEnd
        );
      }
    };
  }, [isVisible, shouldAnimate, isFloating, handleAnimationEnd]);

  useEffect(() => {
    // manages the auto-dismiss functionality of the banner.
    let dismissTimer;

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
    colorTheme === "Success" && `AlertBanner-success--${kind}`,
    colorTheme === "Critical" && "AlertBanner-critical",
    colorTheme === "Warning" && `AlertBanner-warning--${kind}`,
    colorTheme === "Information" && `AlertBanner-information--${kind}`,
    isVisible && "AlertBanner-container--isVisible"
  );

  const renderAlertIcon = () => {
    switch (true) {
      case colorTheme === "Critical":
        return <Icon kind="Critical" color="neutral-000" size="large" />;
      case colorTheme === "Success" && kind === "high":
        return <Icon kind="Success" color="neutral-000" size="large" />;
      case colorTheme === "Success" && kind === "low":
        return <Icon kind="Success" color="success-700" size="large" />;
      case colorTheme === "Warning" && kind === "high":
        return <Icon kind="Warning" color="neutral-1000" size="large" />;
      case colorTheme === "Warning" && kind === "low":
        return <Icon kind="Warning" color="warning-500" size="large" />;
      case colorTheme === "Information" && kind === "high":
        return <Icon kind="Info" color="neutral-000" size="large" />;
      case colorTheme === "Information" && kind === "low":
        return <Icon kind="Info" color="info-700" size="large" />;
      default:
        return null;
    }
  };

  const renderCloseIconColor = () => {
    switch (true) {
      case (colorTheme === "Critical" && kind === "high") ||
        (colorTheme === "Success" && kind === "high") ||
        (colorTheme === "Information" && kind === "high"):
        return "neutral-000";
      case (colorTheme === "Warning" && kind === "high") ||
        (colorTheme === "Success" && kind === "low") ||
        (colorTheme === "Warning" && kind === "low") ||
        (colorTheme === "Information" && kind === "low"):
        return "neutral-1000";
      default:
        return "";
    }
  };

  const closeButtonBackgroundType = () => {
    switch (true) {
      case (colorTheme === "Critical" && kind === "high") ||
        (colorTheme === "Information" && kind === "high"):
        return SYSTEM_DATA_THEMES.DARK;
      case (colorTheme === "Success" && kind === "high") ||
        (colorTheme === "Warning" && kind === "high") ||
        (colorTheme === "Success" && kind === "low") ||
        (colorTheme === "Warning" && kind === "low") ||
        (colorTheme === "Information" && kind === "low"):
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
              isBody ? { height: bodyEl.current.scrollHeight } : { height: "0" }
            }
          >
            <div className="AlertBanner-content">{content}</div>
          </div>
        )}
      </div>
    </div>
  );
}

AlertBanner.defaultProps = {
  kind: "high",
  isFloating: false,
  position: {
    type: undefined, // absolute or fixed
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  isVisible: true,
  hasContent: false,
  content: null,
  isColonVisible: true,
  shouldAutoDismiss: false,
  autoDismissDelay: 5000,
  shouldAnimate: true,
  LinkComponent: null,
};

AlertBanner.propTypes = {
  colorTheme: PropTypes.oneOf(Object.values(COLOR_THEMES)).isRequired,
  kind: PropTypes.oneOf(Object.values(KIND)),
  isFloating: PropTypes.bool,
  position: PropTypes.shape({
    type: PropTypes.oneOf(["absolute", "fixed"]),
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  hasContent: PropTypes.bool,
  content: PropTypes.node,
  isColonVisible: PropTypes.bool,
  shouldAutoDismiss: PropTypes.bool,
  autoDismissDelay: PropTypes.number,
  shouldAnimate: PropTypes.bool,
  LinkComponent: PropTypes.node,
};

export default AlertBanner;
