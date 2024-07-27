import React, { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import { ButtonIcon, Icon, Typography } from "../../index.ts";

import "./ModalIsland.scss";

const KINDS = {
  default: "default",
  question: "question",
  success: "success",
  warning: "warning",
  critical: "critical",
  customAlert: "customAlert",
} as const;

interface ModalIslandProps {
  kind: keyof typeof KINDS;
  customAlertIcon?: React.ReactNode;
  isLoading?: boolean;
  isOpen: boolean;
  onClose: () => void;
  headerIcon?: React.ReactNode;
  title?: string | React.RefObject<Element>;
  subtitle?: string | React.ReactNode;
  alertTitle?: string;
  alertSubtitle?: string;
  contentBody?: React.ReactNode;
  sectionRef?: React.RefObject<HTMLElement>;
  primaryButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  HeaderComp?: React.ReactNode;
  FooterActionBarComp?: React.ReactNode;
  isOverflowVisible?: boolean;
  className?: string;
  alertBackgroundClassName?: string;
}

const ModalIsland: React.FC<ModalIslandProps> = ({
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
}) => {
  const modalRef = useRef<HTMLElement>(null);

  const closeOnEscapeKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  const focusOnlyModalIslandElements = (e: KeyboardEvent) => {
    if (!modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.key === "Tab") {
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
    isOpen && `ModalIsland-background--isOpen`,
  );

  const modalIslandClasses = classnames(
    "ModalIsland",
    `ModalIsland-${kind}`,
    isOpen && "ModalIsland--isOpen",
    isOverflowVisible && "ModalIsland--isOverflowVisible",
    className,
  );

  const modalIslandSectionClasses = classnames(
    "ModalIsland-section",
    isLoading && "ModalIsland-section--isLoading",
  );

  const headerClasses = classnames(
    "ModalIsland-header",
    subtitle && `ModalIsland-header--hasSubtitle`,
  );

  const alertModalIslandClasses = classnames(
    "ModalIsland-alert",
    `ModalIsland-alert-${kind}`,
  );
  const alertBgClasses = classnames(
    "ModalIsland-alertBg",
    `ModalIsland-alertBg-${kind}`,
    alertBackgroundClassName,
  );

  const getAlertIslandIcon = () => {
    switch (kind) {
      case "question":
        return (
          <Icon
            kind="HelpFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case "success":
        return (
          <Icon
            kind="CheckCircleFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case "warning":
        return (
          <Icon
            kind="AlertWarningFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case "critical":
        return (
          <Icon
            kind="AlertCriticalFilledSeparateColors"
            className="ModalIsland-alertContent-icon"
          />
        );
      case "customAlert":
        return customAlertIcon;
      default:
        return null;
    }
  };

  const getHeaderContent = () => {
    if (!HeaderComp)
      return (
        <header className={headerClasses}>
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
            onClick={onClose}
          />
        </header>
      );

    return HeaderComp;
  };

  const getModalContent = () => {
    if (isLoading)
      return (
        <section className={modalIslandSectionClasses}>
          <Typography kind="h2">No Loader</Typography>
        </section>
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
          <section className={alertModalIslandClasses}>
            <ButtonIcon
              id={`modalCloseButton-${isOpen}`}
              size="medium"
              kind="ghost"
              className="ModalIsland-alertCloseButton"
              icon={
                <Icon kind="close" color="neutral-100" size="smallMedium" />
              }
              onClick={onClose}
            />
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
          </section>
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
    document.body,
  );
};

export default ModalIsland;
