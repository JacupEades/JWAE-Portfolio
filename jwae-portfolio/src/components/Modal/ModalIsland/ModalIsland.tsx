/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-curly-spacing */
import React, { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import PropTypes from "prop-types";

import useScrollbarWidth from "../../../hooks/useScrollbarWidth";
import Button from "../../Button/Button";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import Box from "../../componentsNew/Box/Box";
import Icon from "../../Icon/Icon";
import Loader from "../../Loader/Loader";
import Typography from "../../Typography/Typography";

import "./ModalIsland.css";

const KINDS = {
  DEFAULT: "default",
  QUESTION: "question",
  SUCCESS: "success",
  WARNING: "warning",
  CRITICAL: "critical",
  CUSTOM_ALERT: "customAlert",
  SAVIYNT: "saviynt",
};

function ModalIsland({
  kind,
  customAlertIcon,
  isLoading,
  isOpen,
  onClose,
  headerIcon,
  title,
  subtitle,
  alertTitle,
  alertSubtitle,
  contentBody,
  sectionRef,
  primaryButton,
  secondaryButton,
  HeaderComp,
  FooterActionBarComp,
  isOverflowVisible,
  className,
  alertBackgroundClassName,
}) {
  const modalRef = useRef(null);

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );

  /** focusOnlyModalIslandElements makes the tab order locked to only the focusable components inside the modalIsland */

  const focusOnlyModalIslandElements = (e) => {
    if (!modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  // Get the browser scrollBar width
  useScrollbarWidth();

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("ModalIsland--isOpen--bodyScrollLock");
      document.addEventListener("keydown", focusOnlyModalIslandElements);
      const closeButton = document.getElementById("modalCloseButton-true");

      closeButton?.focus();
    } else {
      document.body.classList.remove("ModalIsland--isOpen--bodyScrollLock");
    }

    return () => {
      document.body.classList.remove("ModalIsland--isOpen--bodyScrollLock");
      document.removeEventListener("keydown", focusOnlyModalIslandElements);
    };
  }, [isOpen]);

  const overlayBgClasses = classnames(
    "ModalIsland-background",
    isOpen && `ModalIsland-background--isOpen`
  );

  const modalIslandClasses = classnames(
    "ModalIsland",
    `ModalIsland-${kind}`,
    isOpen && "ModalIsland--isOpen",
    isOverflowVisible && "ModalIsland--isOverflowVisible",
    className
  );

  const modalIslandSectionClasses = classnames(
    "ModalIsland-section",
    isLoading && "ModalIsland-section--isLoading"
  );

  const headerClasses = classnames(
    "ModalIsland-header",
    subtitle && `ModalIsland-header--hasSubtitle`
  );

  const alertModalIslandClasses = classnames(
    "ModalIsland-alert",
    `ModalIsland-alert-${kind}`
  );
  const alertBgClasses = classnames(
    "ModalIsland-alertBg",
    `ModalIsland-alertBg-${kind}`,
    alertBackgroundClassName
  );

  const getAlertIslandIcon = () => {
    switch (kind) {
      case KINDS.QUESTION:
        return (
          <Icon
            kind="HelpFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case KINDS.SUCCESS:
        return (
          <Icon
            kind="CheckCircleFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case KINDS.WARNING:
        return (
          <Icon
            kind="AlertWarningFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case KINDS.CRITICAL:
        return (
          <Icon
            kind="AlertCriticalFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case KINDS.SAVIYNT:
        return (
          <Icon
            kind="SaviyntFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case KINDS.CUSTOM_ALERT:
        return customAlertIcon;
      default:
        return null;
    }
  };

  const getHeaderContent = () => {
    if (!HeaderComp)
      return (
        <Box tag="header" className={headerClasses}>
          <div className="ModalIsland-titleAndHeaderIcon">
            {headerIcon}
            <div className="ModalIsland-titleContainer">
              <Typography kind="h2" className="ModalIsland-title">
                {title}
              </Typography>
              {subtitle && (
                <Typography kind="body2" className="ModalIsland-subtitle">
                  {subtitle}
                </Typography>
              )}
            </div>
          </div>
          <ButtonIcon
            id={`modalCloseButton-${isOpen}`}
            size="medium"
            kind="ghost"
            icon={<Icon kind="close" color="neutral-100" size="smallMedium" />}
            onClick={() => onClose()}
          />
        </Box>
      );

    return HeaderComp;
  };

  const getModalContent = () => {
    if (isLoading)
      return (
        <Box tag="section" className={modalIslandSectionClasses}>
          <Loader kind="loop" format="main" color="brand" size="large" />
        </Box>
      );

    return (
      <>
        {kind === "default" ? (
          <section className="ModalIsland-section">
            {getHeaderContent()}
            <section className="ModalIsland-body" ref={sectionRef}>
              {contentBody}
            </section>
            {FooterActionBarComp}
          </section>
        ) : (
          <Box tag="section" className={alertModalIslandClasses}>
            <ButtonIcon
              id={`modalCloseButton-${isOpen}`}
              size="medium"
              kind="ghost"
              className="ModalIsland-alertCloseButton"
              icon={
                <Icon kind="close" color="neutral-100" size="smallMedium" />
              }
              onClick={() => {
                onClose();
              }}
            />
            {/* SVG background using Icon comp */}
            <Icon
              kind="AlertModalBackground"
              color="neutral-100"
              className={alertBgClasses}
            />
            <div className="ModalIsland-alertContent">
              {getAlertIslandIcon()}
              <div className="ModalIsland-alertContent-body">
                {HeaderComp || (
                  <>
                    <Typography
                      kind="h2"
                      className={`ModalIsland-alertTitle ModalIsland-alertTitle-${kind}`}
                    >
                      {alertTitle}
                    </Typography>
                    <Typography
                      kind="body2"
                      className="ModalIsland-alertSubtitle"
                    >
                      {alertSubtitle}
                    </Typography>
                  </>
                )}
              </div>
              <div className="ModalIsland-alertContent-controlsContainer">
                <div className="ModalIsland-alertContent-controls">
                  {primaryButton}
                  {secondaryButton}
                </div>
              </div>
            </div>
          </Box>
        )}
      </>
    );
  };

  return ReactDOM.createPortal(
    <>
      <div className={overlayBgClasses} />
      <article ref={modalRef} id="ModalIsland" className={modalIslandClasses}>
        {getModalContent()}
      </article>
    </>,
    document.body
  );
}

ModalIsland.propTypes = {
  kind: PropTypes.oneOf(Object.values(KINDS)),
  customAlertIcon: PropTypes.element,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  headerIcon: PropTypes.element,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  alertTitle: PropTypes.string,
  alertSubtitle: PropTypes.string,
  contentBody: PropTypes.element,
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  primaryButton: PropTypes.element,
  secondaryButton: PropTypes.element,
  HeaderComp: PropTypes.element,
  FooterActionBarComp: PropTypes.element,
  isOverflowVisible: PropTypes.bool,
  className: PropTypes.string,
  alertBackgroundClassName: PropTypes.string,
};

ModalIsland.defaultProps = {
  kind: KINDS.DEFAULT,
  customAlertIcon: null,
  isLoading: false,
  headerIcon: null,
  title: "",
  subtitle: null,
  alertTitle: "",
  alertSubtitle: "",
  contentBody: null,
  sectionRef: null,
  primaryButton: (
    <Button type="button" kind="outlined" size="medium">
      Primary Button
    </Button>
  ),
  secondaryButton: (
    <Button type="button" kind="ghost" size="medium">
      Cancel
    </Button>
  ),
  HeaderComp: null,
  FooterActionBarComp: null,
  isOverflowVisible: false,
  className: null,
  alertBackgroundClassName: null,
};

export default ModalIsland;
