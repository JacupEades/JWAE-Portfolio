import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "../../../Typography/Typography";
import ButtonCore from "../../Button/ButtonCore/ButtonCore";
import Icon from "../../Icon/Icon";

import "./AccordionStepper.css";

const ACCORDION_SHIFT_OFFSET = 8;
const PIXELS_PER_REM = 16;
const OVERFLOW_VISIBLE_STYLE_DELAY = 250;

function AccordionStepper({
  isExpanded,
  isCritical,
  setIsExpanded,
  prefixIconKind,
  headerText,
  primarySupportingText,
  secondarySupportingText,
  isShowingSupportingTextOnExpanded,
  accordionValue,
  suffixLink,
  children,
  buttonClassName,
  contentPanelClassName,
  CriticalMessage,
  dataTestId,
}) {
  const contentPanelRef = useRef(null);

  const setExpandedClass = (content) =>
    `AccordionStepper-${content} ${
      isExpanded && `AccordionStepper-${content}--isExpanded`
    }`;

  const showingTextClass = !isShowingSupportingTextOnExpanded
    ? "AccordionStepper-supportingContent--isShowingSupportingTextOnExpanded"
    : null;
  const secondaryTextClass =
    secondarySupportingText && !isExpanded && accordionValue
      ? "AccordionStepper-supportingContent--hasSecondaryText"
      : null;

  const articleClasses = classnames(
    "AccordionStepper-article",
    isCritical && "AccordionStepper-article--isCritical",
    secondarySupportingText &&
      accordionValue &&
      "AccordionStepper-article--hasSecondaryText"
  );

  const buttonClasses = classnames(
    setExpandedClass("button"),
    isExpanded && !suffixLink && "AccordionStepper-button--noSuffixLink",
    secondarySupportingText &&
      accordionValue &&
      "AccordionStepper-button--hasSecondaryText",
    buttonClassName
  );

  const supportingContentClasses = classnames(
    setExpandedClass("supportingContent"),
    showingTextClass,
    secondaryTextClass
  );

  const contentPanelClasses = classnames(
    setExpandedClass("contentPanel"),
    contentPanelClassName
  );

  const contentPanelWrapperClasses = classnames(
    "AccordionStepper-contentPanelWrapper",
    isExpanded
      ? `AccordionStepper-contentPanelWrapper--isExpanded`
      : `AccordionStepper-contentPanelWrapper--isNotExpanded`
  );

  const prefixIconClasses = setExpandedClass("prefixIcon");
  const bodyContentClasses = setExpandedClass("bodyContent");
  const headerTextClasses = setExpandedClass("header");

  // TODO: Conider refactoring to reduce the preformence impact of recalculateHeight recall for screen width changes.
  useEffect(() => {
    let timeoutId;
    let lastWidth = window.innerWidth;

    const recalculateHeight = () => {
      if (contentPanelRef.current) {
        if (isExpanded) {
          const height = contentPanelRef.current.scrollHeight;
          const heightInRem = height / PIXELS_PER_REM;

          contentPanelRef.current.style.maxHeight = `${
            heightInRem + ACCORDION_SHIFT_OFFSET
          }rem`;

          if (timeoutId) clearTimeout(timeoutId);

          timeoutId = setTimeout(() => {
            contentPanelRef.current.style.overflow = "visible";
          }, OVERFLOW_VISIBLE_STYLE_DELAY);
        } else {
          contentPanelRef.current.style.maxHeight = "0";
          contentPanelRef.current.style.overflow = "hidden";
        }
      }
    };

    recalculateHeight();

    const handleResize = () => {
      const currentWidth = window.innerWidth;

      // TODO: update these values with breakpoint variables when we actually cement them
      if (
        (lastWidth > 1440 && currentWidth <= 1440) ||
        (lastWidth > 1024 && currentWidth <= 1024) ||
        (lastWidth <= 1024 && currentWidth > 1024) ||
        (lastWidth > 600 && currentWidth <= 600) ||
        (lastWidth <= 600 && currentWidth > 600) ||
        (lastWidth > 375 && currentWidth <= 375)
      ) {
        recalculateHeight();
      }

      lastWidth = currentWidth;
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(recalculateHeight);

    observer.observe(contentPanelRef.current, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isExpanded]);

  const renderedSupportingText = () => (
    <div className={supportingContentClasses}>
      {/* Primary Text or Accodrion Value */}
      {accordionValue && !isExpanded ? (
        <div className="AccordionStepper-accordionValue">{accordionValue}</div>
      ) : (
        <Typography kind="body1" className="AccordionStepper-supportingText">
          {primarySupportingText}
        </Typography>
      )}
      {/* Secondary Text */}
      {!isExpanded && secondarySupportingText && accordionValue ? (
        <Typography kind="body1" className="AccordionStepper-supportingText">
          {secondarySupportingText}
        </Typography>
      ) : null}
    </div>
  );

  return (
    <article className="AccordionStepper-inlineBox">
      <div className={articleClasses} dataTestId={dataTestId}>
        <ButtonCore
          type="button"
          ariaExpanded={isExpanded ? "true" : "false"}
          className={buttonClasses}
          onClick={() => setIsExpanded(!isExpanded)}
          dataTestId={`${dataTestId}-button`}
        >
          <div className={prefixIconClasses}>
            <Icon kind={prefixIconKind} />
          </div>
          <div className={bodyContentClasses}>
            <Typography
              kind="h4"
              desktop="body2-d"
              mobile="body2-m"
              className={headerTextClasses}
            >
              {headerText}
            </Typography>
            {renderedSupportingText()}
          </div>
          {/* Optional Link is only visible when expanded */}
          {isExpanded && suffixLink}
          {!isExpanded && (
            <div className="AccordionStepper-suffixIcon">
              <Icon kind="edit" />
            </div>
          )}
        </ButtonCore>
        {/* Accordion Content Panel */}
        <section ref={contentPanelRef} className={contentPanelWrapperClasses}>
          <div
            className={contentPanelClasses}
            data-testid={`${dataTestId}-content-panel`}
          >
            {children}
          </div>
        </section>
      </div>
      {CriticalMessage}
    </article>
  );
}

AccordionStepper.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  isCritical: PropTypes.bool,
  setIsExpanded: PropTypes.func.isRequired,
  prefixIconKind: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  primarySupportingText: PropTypes.string.isRequired,
  secondarySupportingText: PropTypes.string,
  isShowingSupportingTextOnExpanded: PropTypes.bool,
  accordionValue: PropTypes.node,
  suffixLink: PropTypes.node,
  children: PropTypes.node,
  buttonClassName: PropTypes.string,
  contentPanelClassName: PropTypes.string,
  CriticalMessage: PropTypes.node,
  dataTestId: PropTypes.string,
};

AccordionStepper.defaultProps = {
  isCritical: false,
  secondarySupportingText: null,
  isShowingSupportingTextOnExpanded: false,
  accordionValue: null,
  suffixLink: null,
  children: null,
  buttonClassName: null,
  contentPanelClassName: null,
  CriticalMessage: null,
  dataTestId: null,
};

export default AccordionStepper;
